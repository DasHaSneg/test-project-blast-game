import { Coordinates, Direction, ResizeType, Size } from '../types';

interface IGameObject {
	init: (position: Coordinates, size: Size, itemSize?: Size) => void;
	resize: (resizeType: ResizeType) => void;
	move: (moveType: Direction, velocity?: number) => void;
}

export default abstract class GameObject implements IGameObject {
	protected _x = 0;

	protected _y = 0;

	protected _height = 0;

	protected _width = 0;

	protected _velocity = 0;

	protected _oldY = 0;

	protected _olX = 0;

	protected _itemSize: Size = { height: 0, width: 0 };

	init(position: Coordinates, size: Size, itemSize?: Size | undefined): void {
		this.position = position;
		this._oldY = position.y;
		this.size = size;
		if (itemSize) this._itemSize = itemSize;
	}

	public move(moveType: Direction, velocity?: number) {
		const anVelocity = velocity || this._velocity;
		const { Up, Right, Left, Down } = Direction;
		switch (moveType) {
			case Up:
				this._y -= anVelocity;
				break;
			case Right:
				this._x += anVelocity;
				break;
			case Left:
				this._x -= anVelocity;
				break;
			case Down:
				this._y += anVelocity;
				break;
			default:
				throw new Error('Unknown move type');
		}
	}

	public resize(resizeType: ResizeType, velocity?: number) {
		const anVelocity = velocity || this._velocity;
		const { Zoom, Shrink } = ResizeType;
		switch (resizeType) {
			case Shrink:
				if (this._height > 0) this._height -= anVelocity;
				else this._height = 0;
				if (this._width > 0) this._width -= anVelocity;
				else this._width = 0;
				break;
			case Zoom:
				this._height += anVelocity;
				this._width += anVelocity;
				break;
			default:
				throw new Error('Unknown resize type');
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
}
