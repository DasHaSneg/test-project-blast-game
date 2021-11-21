import GameObject from './gameObject';
import { chooseColor, getRandomValue } from '../utils';

export default class Block extends GameObject {
	private _selected = false;

	private _occupied = false;

	private _oldColor: string;

	private _color: string;

	protected _velocity = 10;

	constructor(colors: number[]) {
		super();
		const colorNumber = getRandomValue(colors);
		this._color = chooseColor(colorNumber);
		this._oldColor = this._color;
	}

	public getColorImageName(): string {
		return this._selected ? `Selected${this.color}` : this.color;
	}

	public get color(): string {
		return this._color;
	}

	public set color(color: string) {
		this._color = color;
	}

	public get oldColor(): string {
		return this._oldColor;
	}

	public set oldColor(color: string) {
		this._oldColor = color;
	}

	public toggleSelect() {
		this._selected = !this._selected;
	}

	public isSelected() {
		return this._selected;
	}

	public set occupied(ocp: boolean) {
		this._occupied = ocp;
	}

	public toggleOccupied() {
		this._occupied = !this._occupied;
	}

	public isOccupied() {
		return this._occupied;
	}

	public get oldY() {
		return this._oldY;
	}

	public set oldY(y: number) {
		this._oldY = y;
	}
}
