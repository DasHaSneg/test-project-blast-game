import Block from './block';
import Grid from './grid';
import ProgressBar from './progressBar';
import { chooseColor, getRandomValue } from './utils';
import { Direction, ResizeType, GridInfo } from './types';
import Input from './input';
import Score from './score';

enum Stage {
	Selecting,
	Shading,
	Deleting,
	Moving,
	Recovery,
}

export default class World {
	private _score: Score;

	private _grid: Grid;

	private _progressBar: ProgressBar;

	private stage: Stage;

	private deskPositionTempList: [number, number][] = [];

	private deskPositionList: [number, number][] = [];

	constructor(gridInfo: GridInfo, x: number, y: number) {
		this._grid = new Grid(gridInfo);
		this._progressBar = new ProgressBar();
		this._score = new Score(x, y);
		this.stage = Stage.Selecting;
	}

	public update(userInput: Input) {
		switch (this.stage) {
			case Stage.Selecting:
				this.handleSelect(userInput);
				break;
			case Stage.Shading:
				this.handleShading();
				break;
			case Stage.Deleting:
				this.handleDeleting();
				break;
			case Stage.Moving:
				this.handleMoving();
				break;
			case Stage.Recovery:
				this.handleRecovery();
				break;
			default:
				throw new Error('Unknown stage');
		}
	}

	private handleSelect(userInput: Input) {
		const uX = userInput.x;
		const uY = userInput.y;
		if (uX !== 0 && uY !== 0) {
			const { x, y, n, m, width, height } = this._grid;
			if (uY > y && uY < y + height && uX < x && uX > x - width) {
				const row = Math.floor((uY - y) / (height / n));
				const col = Math.floor((uX - (x - width)) / (width / m));
				const layout = this._grid.blockLayout;
				layout[row][col].toggleSelect();
				this.deskPositionTempList.push([row, col]);
				this.deskPositionList.push([row, col]);
				this.stage = Stage.Shading;
				this._grid.blockLayout = layout;
			}
		}
	}

	private handleShading() {
		if (this.deskPositionTempList.length === 0) {
			if (this.deskPositionList.length === 1) {
				const layout = this.grid.blockLayout;
				layout[this.deskPositionList[0][0]][this.deskPositionList[0][1]].toggleSelect();
				this.grid.blockLayout = layout;
				this.stage = Stage.Selecting;
				this.deskPositionList = [];
				this.deskPositionTempList = [];
			} else {
				this.score.decreaseMovesNum();
				this.deskPositionTempList = this.deskPositionList;
				this.stage = Stage.Deleting;
			}
			return;
		}
		let positionList: [number, number][] = [];
		this.deskPositionTempList.forEach(([row, col]) => {
			positionList = [...positionList, ...this.selectNeighbors(row, col, this._grid.blockLayout)];
		});
		this.deskPositionList = [...this.deskPositionList, ...positionList];
		this.deskPositionTempList = positionList;
	}

	private selectNeighbors(row: number, col: number, desk: Block[][]): [number, number][] {
		const deskPositionTempList: [number, number][] = [];
		Object.values(Direction).forEach(direction => {
			const deskPositionItem = this.findNeighbor(direction, row, col, desk, true);
			if (typeof deskPositionItem.position[0] !== 'undefined') {
				deskPositionTempList.push(deskPositionItem.position as [number, number]);
			}
		});
		return deskPositionTempList;
	}

	// private checkNeighbors(row: number, col: number, desk: Block[][]): boolean {
	// 	for (let i = 0; i < Object.values(Direction).length; i += 1) {
	// 		const deskPositionItem = this.findNeighbor(Object.values(Direction)[i], row, col, desk, true);
	// 		if (typeof deskPositionItem.position[0] !== 'undefined') {
	// 			return true;
	// 		}
	// 	}
	// 	return false;
	// }

	private findNeighbor(direction: Direction | string, row: number, col: number, desk: Block[][], select = false): { position: [number, number]; desk: Block[][] } | { position: [undefined, undefined]; desk: Block[][] } {
		const { Up, Right, Left, Down } = Direction;
		switch (direction) {
			case Up:
				if (row !== 0 && desk[row][col].color === desk[row - 1][col].color && !desk[row - 1][col].isSelected()) {
					if (select) desk[row - 1][col].toggleSelect();
					return { position: [row - 1, col], desk };
				}
				return { position: [undefined, undefined], desk };
			case Right:
				if (col !== this._grid.m - 1 && desk[row][col].color === desk[row][col + 1].color && !desk[row][col + 1].isSelected()) {
					if (select) desk[row][col + 1].toggleSelect();
					return { position: [row, col + 1], desk };
				}
				return { position: [undefined, undefined], desk };
			case Left:
				if (col !== 0 && desk[row][col].color === desk[row][col - 1].color && !desk[row][col - 1].isSelected()) {
					if (select) desk[row][col - 1].toggleSelect();
					return { position: [row, col - 1], desk };
				}
				return { position: [undefined, undefined], desk };
			case Down:
				if (row !== this._grid.n - 1 && desk[row][col].color === desk[row + 1][col].color && !desk[row + 1][col].isSelected()) {
					if (select) desk[row + 1][col].toggleSelect();
					return { position: [row + 1, col], desk };
				}
				return { position: [undefined, undefined], desk };
			default:
				return { position: [undefined, undefined], desk };
		}
	}

	private handleDeleting() {
		if (this.deskPositionTempList.length === 0) {
			this.stage = Stage.Moving;
			this.deskPositionTempList = [];
			return;
		}
		const [row, col] = this.deskPositionTempList[0];
		const desk = this._grid.blockLayout;
		if (desk[row][col].height === 0 && desk[row][col].width === 0) {
			this._score.increasePoints();
			this._progressBar.move();
			this.deskPositionTempList = this.deskPositionTempList.slice(1);
			return;
		}
		desk[row][col].resize(ResizeType.Shrink);
		this._grid.blockLayout = desk;
	}

	private handleMoving() {
		if (this.deskPositionTempList.length >= this.deskPositionList.length) {
			this.stage = Stage.Recovery;
			return;
		}
		const desk = this._grid.blockLayout;
		for (let col = 0; col < this._grid.m; col += 1) {
			const rows = this.deskPositionList
				.filter(([r, c]) => c === col)
				.map(([row]) => {
					return row;
				})
				.sort();
			const velocity = 1;

			if (rows.length === 1 && rows[0] === 0) {
				this.deskPositionTempList.push([rows[0], col]);
				break;
			}

			for (let k = rows.length - 1; k >= 0; k -= 1) {
				if (rows[k] - 1 < 0) break;
				if (desk[rows[k] - 1][col].y >= desk[rows[k]][col].y) {
					this.deskPositionTempList.push([rows[k], col]);
					break;
				}
				for (let i = rows[k] - 1; i >= 0; i -= 1) {
					desk[i][col].move(Direction.Down, velocity);
				}
			}
		}
		this._grid.blockLayout = desk;
	}

	private handleRecovery() {
		const desk = this._grid.blockLayout;
		for (let i = this._grid.n - 1; i >= 0; i -= 1) {
			for (let j = this._grid.m -1; j >= 0; j -= 1) {
				if (desk[i][j].y !== desk[i][j].oldY || desk[i][j].isSelected()) {
					let newRow = -1000;
					if (desk[i][j].isSelected()) {
						desk[i][j].toggleSelect();
						for (let r = i - 1; r >= 0; r -= 1) {
							if (desk[i][j].oldY - desk[r][j].y < desk[i][j].height && desk[r][j].width !== 0 && !desk[r][j].isSelected() && !desk[r][j].isOccupied()) {
								desk[r][j].occupied = true;
								newRow = r;
							}
						}
					} else {
						newRow = i - Math.floor((desk[i][j].y - desk[i][j].oldY) / this.grid.itemHeight);
					}
					if (newRow >= 0) {
						desk[i][j].color = desk[newRow][j].oldColor;
						desk[i][j].oldColor = desk[newRow][j].oldColor;
					} else {
						const randomColor = chooseColor(getRandomValue(this._grid.gridInfo.blockColors));
						desk[i][j].color = randomColor;
						desk[i][j].oldColor = randomColor;
					}
					desk[i][j].size = this.grid.itemSize;
					desk[i][j].position = { x: desk[i][j].x, y: desk[i][j].oldY };
					if (desk[i][j].isOccupied()) desk[i][j].occupied = false;
				}
			}
		}
		this._grid.blockLayout = desk;
		this.deskPositionList = [];
		this.deskPositionTempList = [];
		this.stage = Stage.Selecting;
	}

	public get grid(): Grid {
		return this._grid;
	}

	public set grid(grid: Grid) {
		this._grid = grid;
	}

	public get score(): Score {
		return this._score;
	}

	public set score(score: Score) {
		this._score = score;
	}

	public get progressBar(): ProgressBar {
		return this._progressBar;
	}

	public set progressBar(prBar: ProgressBar) {
		this._progressBar = prBar;
	}
}
