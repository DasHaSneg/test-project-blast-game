import World from './world';
import Input from '../input';
import Score from '../score';
import Grid from '../gameObjects/grid';
import ProgressBar from '../progressBar';
import { Direction, GridInfo, PositionList, ResizeType } from '../types';
import Block from '../gameObjects/block';
import { checkClick, chooseColor, contains, getRandomValue } from '../utils';
import { Result } from './endWorld';
import Bonus from '../gameObjects/Bonus';
import { TELEPORT_COST } from '../constants';

enum Stage {
	Selecting,
	Shading,
	Deleting,
	Moving,
	Recovery,
}

export default class GameWorld extends World {
	private isLastMove = false;

	private _score: Score;

	private _grid: Grid;

	private _progressBar: ProgressBar;

	private _bonus: Bonus;

	private _stage: Stage;

	private _tempList: PositionList = [];

	private _list: PositionList = [];

	private _emitEFunc: (eName: string, arg: any) => void;

	private _money = 0;

	constructor(gridInfo: GridInfo, x: number, y: number, money: number, emitEFunc: (eName: string, arg: any) => void) {
		super();
		this._grid = new Grid(gridInfo, emitEFunc);
		this._progressBar = new ProgressBar();
		this._bonus = new Bonus();
		this._score = new Score(x, y);
		this._stage = Stage.Selecting;
		this._money = money;
		this._emitEFunc = emitEFunc;
	}

	update(userInput: Input): void {
		switch (this._stage) {
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
		const { x: uX, y: uY } = userInput;
		if (uX !== 0 && uY !== 0) {
			this.handleSelectGrid(userInput);
			this.handleSelectBonus(userInput);
		}
	}

	private handleSelectGrid(userInput: Input) {
		const { x: uX, y: uY } = userInput;
		const { x, y, n, m, width, height } = this._grid;
		if (uY > y && uY < y + height && uX < x && uX > x - width) {
			const row = Math.floor((uY - y) / (height / n));
			const col = Math.floor((uX - (x - width)) / (width / m));
			const layout = this._grid.blockLayout;
			layout[row][col].toggleSelect();
			this._tempList.push([row, col]);
			this._list.push([row, col]);
			if (this._bonus.selected) {
				if (this._list.length === 2) {
					if (this._list[0][0] === this._list[1][0] && this._list[0][1] === this._list[1][1]) {
						if (layout[this._list[0][0]][this._list[0][1]].isSelected()) layout[this._list[0][0]][this._list[0][1]].toggleSelect();
						this._list = [];
					} else {
						this._stage += 2;
					}
				}
			} else this._stage += 1;
		}
	}

	private handleSelectBonus(userInput: Input) {
		const { x: uX, y: uY } = userInput;
		const { x, y, width, height } = this._bonus;
		if (checkClick(uX, uY, x, y, height, width)) {
			if (this._money >= TELEPORT_COST && !this.bonus.selected) {
				this.bonus.toggleSelect();
			}
		}
	}

	private handleShading() {
		if (this._tempList.length === 0) {
			if (this._list.length === 1) {
				this._grid.blockLayout[this._list[0][0]][this._list[0][1]].toggleSelect();
				this._stage -= 1;
				this._list = [];
				this._tempList = [];
			} else {
				this._score.decreaseMovesNum();
				const { points, targetPoints, moves, targetMoves } = this._score;
				if (moves <= targetMoves && points < targetPoints) this.isLastMove = true;
				this._tempList = this._list;
				this._stage += 1;
			}
			return;
		}
		let positionList: PositionList = [];
		const { n, m } = this.grid;
		this._tempList.forEach(([row, col]) => {
			positionList = [...positionList, ...GameWorld.selectNeighbors(row, col, this._grid.blockLayout, n, m)];
		});
		this._list = [...this._list, ...positionList];
		this._tempList = positionList;
	}

	private static selectNeighbors(row: number, col: number, desk: Block[][], gridN: number, gridM: number): PositionList {
		const tempList: PositionList = [];
		Object.values(Direction).forEach(direction => {
			const deskPositionItem = GameWorld.findNeighbor(direction, row, col, desk, gridN, gridM, true);
			if (typeof deskPositionItem[0] !== 'undefined') {
				tempList.push(deskPositionItem as [number, number]);
			}
		});
		return tempList;
	}

	private static findNeighbor(direction: Direction | string, row: number, col: number, layout: Block[][], gridN: number, gridM: number, select = false): [number, number] | [undefined, undefined] {
		const { Up, Right, Left, Down } = Direction;
		switch (direction) {
			case Up:
				return GameWorld.checkUp(layout, row, col, select);
			case Right:
				return GameWorld.checkRight(layout, row, col, select, gridM);
			case Left:
				return GameWorld.checkLeft(layout, row, col, select);
			case Down:
				return GameWorld.checkDown(layout, row, col, select, gridN);
			default:
				return [undefined, undefined];
		}
	}

	private static checkUp(layout: Block[][], row: number, col: number, select: boolean): [number, number] | [undefined, undefined] {
		if (row !== 0 && layout[row][col].color === layout[row - 1][col].color && !layout[row - 1][col].isSelected()) {
			if (select) layout[row - 1][col].toggleSelect();
			return [row - 1, col];
		}
		return [undefined, undefined];
	}

	private static checkRight(layout: Block[][], row: number, col: number, select: boolean, m: number): [number, number] | [undefined, undefined] {
		if (col !== m - 1 && layout[row][col].color === layout[row][col + 1].color && !layout[row][col + 1].isSelected()) {
			if (select) layout[row][col + 1].toggleSelect();
			return [row, col + 1];
		}
		return [undefined, undefined];
	}

	private static checkLeft(layout: Block[][], row: number, col: number, select: boolean): [number, number] | [undefined, undefined] {
		if (col !== 0 && layout[row][col].color === layout[row][col - 1].color && !layout[row][col - 1].isSelected()) {
			if (select) layout[row][col - 1].toggleSelect();
			return [row, col - 1];
		}
		return [undefined, undefined];
	}

	private static checkDown(layout: Block[][], row: number, col: number, select: boolean, n: number): [number, number] | [undefined, undefined] {
		if (row !== n - 1 && layout[row][col].color === layout[row + 1][col].color && !layout[row + 1][col].isSelected()) {
			if (select) layout[row + 1][col].toggleSelect();
			return [row + 1, col];
		}
		return [undefined, undefined];
	}

	private handleDeleting() {
		if (this._tempList.length === 0) {
			if (this.bonus.selected) this._stage += 2;
			else this._stage += 1;
			this._list.sort(([n1], [n2]) => (n1 > n2 ? 1 : -1));
			return;
		}
		const [row, col] = this._tempList[0];
		const desk = this._grid.blockLayout;
		if (desk[row][col].height === 0 && desk[row][col].width === 0) {
			if (!this.bonus.selected) {
				this._score.increasePoints();
				this._progressBar.move();
			}
			const { points, targetPoints } = this._score;
			if (points >= targetPoints) this._emitEFunc('endGame', Result.Win);
			if (this.isLastMove) this._emitEFunc('endGame', Result.Lost);
			this._tempList = this._tempList.slice(1);
			return;
		}
		desk[row][col].resize(ResizeType.Shrink);
	}

	private handleMoving() {
		if (this._tempList.length >= this._list.length) {
			this._stage += 1;
			return;
		}
		const layout = this._grid.blockLayout;
		let rows = [];
		const velocity = 1;
		for (let col = 0; col < this._grid.m; col += 1) {
			rows = this._list.filter(([r, c]) => c === col).map(([r]) => r);
			for (let rowNum = rows.length - 1; rowNum >= 0; rowNum -= 1) {
				if (rows[rowNum] - 1 < 0) {
					if (!contains(this._tempList, [rows[rowNum], col])) this._tempList.push([rows[rowNum], col]);
					if (this._tempList.length >= this._list.length) break;
				} else {
					for (let row = rows[rowNum] - 1; row >= 0; row -= 1) {
						layout[row][col].move(Direction.Down, velocity);
					}
					if (layout[rows[rowNum] - 1][col].y >= layout[rows[rowNum]][col].y) {
						if (!contains(this._tempList, [rows[rowNum], col])) this._tempList.push([rows[rowNum], col]);
						if (this._tempList.length >= this._list.length) break;
					}
				}
			}
			if (this._tempList.length >= this._list.length) break;
		}
	}

	private handleRecovery() {
		if (this.bonus.selected) {
			let temp = '';
			const [[n1, m1], [n2, m2]] = this._list;
			const block1 = this._grid.blockLayout[n1][m1];
			const block2 = this._grid.blockLayout[n2][m2];
			// [block1.color, block2.color] = [block2.color, block1.color];
			temp = block1.color;
			block1.color = block2.color;
			block1.oldColor = block2.color;
			block2.color = temp;
			block2.oldColor = temp;
			block1.toggleSelect();
			block2.toggleSelect();
			block1.size = this.grid.itemSize;
			block2.size = this.grid.itemSize;
			this.bonus.toggleSelect();
			this._money -= TELEPORT_COST;
			this._list = [];
			this._tempList = [];
			this._stage = Stage.Selecting;
			return;
		}
		const { blockLayout: layout, n, m } = this._grid;
		for (let i = n - 1; i >= 0; i -= 1) {
			for (let j = m - 1; j >= 0; j -= 1) {
				if (layout[i][j].y !== layout[i][j].oldY || layout[i][j].isSelected()) {
					let newRow = -1000;
					if (layout[i][j].isSelected()) {
						layout[i][j].toggleSelect();
						for (let r = i - 1; r >= 0; r -= 1) {
							if (layout[i][j].oldY - layout[r][j].y < layout[i][j].height && layout[r][j].width !== 0 && !layout[r][j].isSelected() && !layout[r][j].isOccupied()) {
								layout[r][j].occupied = true;
								newRow = r;
							}
						}
					} else {
						newRow = i - Math.floor((layout[i][j].y - layout[i][j].oldY) / this.grid.itemHeight);
					}
					if (newRow >= 0) {
						layout[i][j].color = layout[newRow][j].oldColor;
						layout[i][j].oldColor = layout[newRow][j].oldColor;
					} else {
						const randomColor = chooseColor(getRandomValue(this._grid.gridInfo.blockColors));
						layout[i][j].color = randomColor;
						layout[i][j].oldColor = randomColor;
					}
					layout[i][j].size = this.grid.itemSize;
					layout[i][j].position = { x: layout[i][j].x, y: layout[i][j].oldY };
					if (layout[i][j].isOccupied()) layout[i][j].occupied = false;
				}
			}
		}
		this._list = [];
		this._tempList = [];
		this._stage = Stage.Selecting;
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

	public get bonus(): Bonus {
		return this._bonus;
	}

	public get money(): number {
		return this._money;
	}
}
