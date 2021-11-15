import { chooseColor, getRandomValue } from './utils';
import { Coordinates, ResizeType, Direction, Size } from './types';

export default class Block {
	private _selected = false;

	private _occupied = false;

	private _x = 0;

	private _y = 0;

	private _oldY = 0;

	private _oldColor: string;

	private _height = 0;

	private _width = 0;

	private _color: string;

	private _animationVelocity = 10;

	constructor(colors: number[]) {
		const colorNumber = getRandomValue(colors);
		this._color = chooseColor(colorNumber);
		this._oldColor = this._color;
	}

	public init(position: Coordinates, size: Size) {
		this.position = position;
		this._oldY = position.y;
		this.size = size;
	}

	public getColorImageName(): string {
		// return this.selected ? `Selected${this.color}` : this.color;
		return this._color;
	}

	public resize(resizeType: ResizeType) {
		const { Zoom, Shrink } = ResizeType;
		switch (resizeType) {
			case Shrink:
				if (this._height > 0) this._height -= this._animationVelocity;
				else this._height = 0;
				if (this._width > 0) this._width -= this._animationVelocity;
				else this._width = 0;
				break;
			case Zoom:
				this._height += this._animationVelocity;
				this._width += this._animationVelocity;
				break;
			default:
				throw new Error('Unknown resize type');
		}
	}

	public move(moveType: Direction, velocity?: number) {
		const { Up, Right, Left, Down } = Direction;
		switch (moveType) {
			case Up:
				this._y -= this._animationVelocity;
				break;
			case Right:
				this._x += this._animationVelocity;
				break;
			case Left:
				this._x -= this._animationVelocity;
				break;
			case Down:
				this._y += velocity || this._animationVelocity;
				break;
			default:
				throw new Error('Unknown move type');
		}
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

	public get oldY() {
		return this._oldY;
	}

	public set oldY(y: number) {
		this._oldY = y;
	}

	public get position(): Coordinates {
		return { x: this._x, y: this._y };
	}

	public set position(position: Coordinates) {
		this._x = position.x;
		this._y = position.y;
	}

	public get size(): Size {
		return { width: this._width, height: this._height };
	}

	public set size(size: Size) {
		this._height = size.height;
		this._width = size.width;
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
}
