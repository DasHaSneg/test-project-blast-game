import Block from './block';
import { Coordinates, Size, GridInfo } from '../types';
import { Result } from '../worlds/endWorld';
import GameObject from './gameObject';

export default class Grid extends GameObject {
	private _gridInfo: GridInfo;

	private _blockLayout: Block[][] = [];

	private _itemHeight = 0;

	private _itemWidth = 0;

	constructor(gridInfo: GridInfo, emitEFunc: (eName: string, arg: any) => void) {
		super();
		this._gridInfo = gridInfo;
		this.createLayout();
		let s = gridInfo.minStirringAmount;
		while (!this.checkLayout() && s > 0) {
			this.createLayout();
			s -= 1;
		}
		if (s === 0) {
			emitEFunc('endGame', Result.Lost);
		}
	}

	public init(position: Coordinates, size: Size, itemSize: Size) {
		this.position = position;
		this.size = size;
		this.itemSize = itemSize;
	}

	private createLayout() {
		const { n, m, blockColors } = this.gridInfo;
		const layout: Block[][] = [];
		for (let i = 0; i < n; i += 1) {
			layout[i] = [];
			for (let j = 0; j < m; j += 1) {
				layout[i][j] = new Block(blockColors);
			}
		}
		this._blockLayout = layout;
	}

	private checkLayout(): boolean {
		let result = false;
		const { m, n } = this._gridInfo;
		const layout = this._blockLayout;
		let i = 0;
		for (i = 0; i < m - 1; i += 1) {
			const rowList = layout[i].map(block => block.color);
			const rowSet = new Set(rowList);
			if (rowSet.size < rowList.length) {
				result = true;
				break;
			}
		}
		for (i = 0; i < m; i += 1) {
			for (let j = 1; j < n; j += 1) {
				if (layout[j - 1][i] === layout[j][i]) {
					result = true;
					break;
				}
			}
			if (result) break;
		}
		return result;
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
}
