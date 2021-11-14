import Block, { Coordinates, Direction, ResizeType } from './block';
import Grid from './grid';
import ProgressBar from './progressBar';
import { GridInfo } from './game';
import { getRandomValue } from './utils';

type Score = {
	points: number;
	movesNumber: number;
};

enum Stage {
	Selecting,
	Shading,
	Deleting,
	Moving,
	Recovery,
}

const POINTS_PER_TURN = 10;

export default class World {
	// private progress: number;
	//
	// private money: number;
	//
	private score: Score;

	private target: Score;

	private grid: Grid;

	private progressBar: ProgressBar;

	private stage: Stage;

	private deskPositionTempList: [number, number][] = [];

	private deskPositionList: [number, number][] = [];

	// private grid: number[];
	constructor(gridInfo: GridInfo, x: number, y: number) {
		this.target = { points: 0, movesNumber: y };
		this.score = { points: x, movesNumber: 0 };
		this.grid = new Grid(gridInfo);
		this.progressBar = new ProgressBar(0, 0, 0);
		this.stage = Stage.Selecting;
	}

	public update(userInput: Coordinates) {
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

	private handleSelect(userInput: Coordinates) {
		const uY = userInput.y;
		const uX = userInput.x;
		if (uX !== 0 && uY !== 0) {
			const { x, y } = this.grid.getPosition();
			const { width, height } = this.grid.getSize();
			if (uY > y && uY < y + height && uX < x && uX > x - width) {
				const n = this.grid.getN();
				const m = this.grid.getM();
				const row = Math.floor((uY - y) / (height / n));
				const col = Math.floor((uX - (x - width)) / (width / m));
				let desk = this.grid.getDesk();
				desk[row][col].select();
				this.deskPositionTempList.push([row, col]);
				this.deskPositionList.push([row, col]);
				this.stage = Stage.Shading;
				console.log(desk);
				this.grid.setDesk(desk);
			}
		}
	}

	private handleShading() {

		if (this.deskPositionTempList.length === 0) {
			console.log(this.grid.getDesk());
			this.stage = Stage.Deleting;
			this.deskPositionTempList = this.deskPositionList;
			return;
		}
		let positionList: [number, number][] = [];
		this.deskPositionTempList.forEach(([row, col]) => {
			positionList = [...positionList, ...this.selectNeighbors(row, col, this.grid.getDesk())];
		});
		this.deskPositionList = [...this.deskPositionList, ...positionList];
		this.deskPositionTempList = positionList;
	}

	private selectNeighbors(row: number, col: number, desk: Block[][]): [number, number][] {
		let deskPositionTempList: [number, number][] = [];
		Object.values(Direction).forEach(direction => {
			const deskPositionItem = this.selectNeighbor(direction, row, col, desk);
			if (typeof deskPositionItem.position[0] !== 'undefined') {
				deskPositionTempList.push(deskPositionItem.position as [number, number]);
				this.grid.setDesk(deskPositionItem.desk);
			}
		});
		return deskPositionTempList;
	}

	private selectNeighbor(direction: Direction | string, row: number, col: number, desk: Block[][]): { position: [number, number]; desk: Block[][] } | { position: [undefined, undefined]; desk: Block[][] } {
		const { Up, Right, Left, Down } = Direction;
		switch (direction) {
			case Up:
				if (row !== 0 && desk[row][col].getColor() === desk[row - 1][col].getColor() && !desk[row - 1][col].isSelected()) {
					desk[row - 1][col].select();
					return { position: [row - 1, col], desk };
				}
				return { position: [undefined, undefined], desk };
			case Right:
				if (col !== this.grid.getM() - 1 && desk[row][col].getColor() === desk[row][col + 1].getColor() && !desk[row][col + 1].isSelected()) {
					desk[row][col + 1].select();
					return { position: [row, col + 1], desk };
				}
				return { position: [undefined, undefined], desk };
			case Left:
				if (col !== 0 && desk[row][col].getColor() === desk[row][col - 1].getColor() && !desk[row][col - 1].isSelected()) {
					desk[row][col - 1].select();
					return { position: [row, col - 1], desk };
				}
				return { position: [undefined, undefined], desk };
			case Down:
				if (row !== this.grid.getN() - 1 && desk[row][col].getColor() === desk[row + 1][col].getColor() && !desk[row + 1][col].isSelected()) {
					desk[row + 1][col].select();
					return { position: [row + 1, col], desk };
				}
				return { position: [undefined, undefined], desk };
			default:
				return { position: [undefined, undefined], desk };
		}
	}

	private handleDeleting() {
		if (this.deskPositionTempList.length === 0) {
			console.log(this.grid.getDesk());
			this.stage = Stage.Moving;
			this.deskPositionTempList = [];
			return;
		}
		const [row, col] = this.deskPositionTempList[0];
		const desk = this.grid.getDesk();
		if (desk[row][col].getSize().height === 0 && desk[row][col].getSize().width === 0) {
			this.deskPositionTempList = this.deskPositionTempList.slice(1);
			return;
		}
		desk[row][col].resize(ResizeType.Shrink);
		this.grid.setDesk(desk);
	}

	private handleMoving() {
		if (this.deskPositionTempList.length >= this.deskPositionList.length) {
			console.log(this.grid.getDesk());
			this.stage = Stage.Recovery;
			return;
		}
		const desk = this.grid.getDesk();
		for (let col = 0; col < this.grid.getM(); col += 1) {
			const rows = this.deskPositionList
				.filter(([r, c]) => c === col)
				.map(([row]) => {
					return row;
				})
				.sort()
			const velocity = 1;

			if (rows.length === 1 && rows[0] === 0) {
				this.deskPositionTempList.push([rows[0], col]);
				break;
			}

			for (let k = rows.length - 1; k >= 0; k -= 1) {
				if (rows[k] - 1 < 0) break;
				if (desk[rows[k] - 1][col].getPosition().y >= desk[rows[k]][col].getPosition().y) {
					this.deskPositionTempList.push([rows[k], col]);
					break;
				}
				for (let i = rows[k] - 1; i >= 0; i -= 1) {
					desk[i][col].move(Direction.Down, velocity);
				}
			}
		}
		this.grid.setDesk(desk);
	}

	private handleRecovery() {
		const desk = this.grid.getDesk();
		for (let i = 0; i < this.grid.getN(); i += 1) {
			for (let j = 0; j < this.grid.getM(); j += 1) {
				if (desk[i][j].getPosition().y !== desk[i][j].getOldPosition().y || desk[i][j].isSelected()) {
					let newRow = 0;
					if (desk[i][j].isSelected()) {
						desk[i][j].select();
						newRow = i - 1;
					} else {
						newRow = i - Math.floor((desk[i][j].getPosition().y - desk[i][j].getOldPosition().y) / desk[i][j].getOldSize().height);
					}
					console.log(i, j, newRow)
					if (newRow >= 0) {
						desk[i][j].setColor(desk[newRow][j].getOldColor());
						desk[i][j].setOldColor(desk[newRow][j].getOldColor());
					} else {
						const randomColor = desk[i][j].chooseColor(getRandomValue(this.grid.getGridInfo().blockColors));
						desk[i][j].setColor(randomColor);
						desk[i][j].setOldColor(randomColor);
					}
					desk[i][j].setSize(desk[i][j].getOldSize());
					desk[i][j].setPosition(desk[i][j].getOldPosition());

				}
			}
		}
		this.grid.setDesk(desk);
		console.log(desk);
		this.deskPositionList = [];
		this.deskPositionTempList = [];
		this.stage = Stage.Selecting;
	}

	public getGrid(): Grid {
		return this.grid;
	}
}
