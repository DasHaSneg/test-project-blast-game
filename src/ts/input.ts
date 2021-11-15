import { Coordinates } from './types';

export default class Input {
	private _x = 0;

	private _y = 0;

	constructor() {
		this.init();
	}

	init() {
		document.addEventListener('mousedown', e => {
			this._x = e.offsetX;
			this._y = e.offsetY;
		});
	}

	public get x() {
		return this._x;
	}

	public get y() {
		return this._y;
	}

	public set coordinates(cr: Coordinates) {
		this._x = cr.x;
		this._y = cr.y;
	}
}
