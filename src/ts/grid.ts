import Block, { Coordinates } from './block';
import { GridInfo } from './game';

export type Size = {
	width: number;
	height: number;
};

export default class Grid {
	private gridInfo: GridInfo;

	private desk: Block[][] = [];

	private position: Coordinates = { x: 0, y: 0 };

	private size: Size = { height: 0, width: 0 };

	constructor(gridInfo: GridInfo) {
		this.gridInfo = gridInfo;
		this.createDesk();
		while (!this.checkDesk()) {
			this.createDesk();
		}
	}

	private createDesk() {
		const { n, m, blockColors } = this.gridInfo;
		this.desk = [];
		for (let i = 0; i < n; i += 1) {
			this.desk[i] = [];
			for (let j = 0; j < m; j += 1) {
				this.desk[i][j] = new Block(blockColors);
			}
		}
	}

	private checkDesk(): boolean {
		const { m } = this.gridInfo;
		const { desk } = this;
		for (let i = 0; i < m - 1; i += 1) {
			const rowList = desk[i].map(block => block.getColor());
			const rowSet = new Set(rowList);
			if (rowSet.size < rowList.length) return true;
		}
		return false;
		// TODO add check for columns
	}

	public getN(): number {
		return this.gridInfo.n;
	}

	public getM(): number {
		return this.gridInfo.m;
	}

	public getDesk() {
		return this.desk;
	}

	public getGridInfo() {
		return this.gridInfo;
	}

	public setDesk(desk: Block[][]) {
		this.desk = desk;
	}

	public getPosition(): Coordinates {
		return this.position;
	}

	public setPosition(position: Coordinates) {
		this.position = position;
	}

	public getSize(): Size {
		return this.size;
	}

	public setSize(size: Size) {
		this.size = size;
	}


}
