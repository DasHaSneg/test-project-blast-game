import Block from './block';
import { Coordinates, Size, GridInfo } from './types';

export default class Grid {
	private _gridInfo: GridInfo;

	private _blockLayout: Block[][] = [];

	private _itemHeight = 0;

	private _itemWidth = 0;

	private _x = 0;

	private _y = 0;

	private _height = 0;

	private _width = 0;

	constructor(gridInfo: GridInfo) {
		this._gridInfo = gridInfo;
		this.createLayout();
		let s = gridInfo.minStirringAmount;
		while (!this.checkLayout() && s > 0) {
			this.createLayout();
			s -= 1;
		}
		if (s === 0) {
			console.log('Game Over');
		}
	}

	public init(position: Coordinates, size: Size, itemSize: Size) {
		this.position = position;
		this.size = size;
		this.itemSize = itemSize;
	}

	private createLayout() {
		const { n, m, blockColors } = this.gridInfo;
		let layout: Block[][] = [];
		for (let i = 0; i < n; i += 1) {
			layout[i] = [];
			for (let j = 0; j < m; j += 1) {
				layout[i][j] = new Block(blockColors);
			}
		}
		this._blockLayout = layout;
	}

	private checkLayout(): boolean {
		const { m } = this._gridInfo;
		const layout = this._blockLayout;
		for (let i = 0; i < m - 1; i += 1) {
			const rowList = layout[i].map(block => block.color);
			const rowSet = new Set(rowList);
			if (rowSet.size < rowList.length) return true;
		}
		return false;
		// TODO add check for columns
	}

	public get n() {
		return this._gridInfo.n;
	}

	public get m() {
		return this._gridInfo.m;
	}

	public get blockLayout() {
		return this._blockLayout;
	}

	public set blockLayout(layout: Block[][]) {
		this._blockLayout = layout;
	}

	public get gridInfo() {
		return this._gridInfo;
	}

	public get x() {
		return this._x;
	}

	public get y() {
		return this._y;
	}

	public get height() {
		return this._height;
	}

	public get width() {
		return this._width;
	}

	public get itemHeight() {
		return this._itemHeight;
	}

	public get itemWidth() {
		return this._itemWidth;
	}

	public get itemSize() {
		return { width: this._itemWidth, height: this._itemHeight };
	}

	public set itemSize(size: Size) {
		this._itemWidth = size.width;
		this._itemHeight = size.height;
	}

	public set position(position: Coordinates) {
		this._x = position.x;
		this._y = position.y;
	}

	public set size(size: Size) {
		this._width = size.width;
		this._height = size.height;
	}
}
