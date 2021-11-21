import { Coordinates, Direction } from './types';
import { POINTS_PER_TURN } from './constants';

export default class ProgressBar {
	private _x = 0;

	private _currentX = 0;

	private _endX = 0;

	private _velocity = 1;

	private _y = 0;

	private _direction: Direction = Direction.Right;

	init(startX: number, width: number, y: number, targetPoints: number) {
		this._x = startX;
		if (this._direction === Direction.Right) {
			this._currentX = startX;
			this._endX = startX + width;
		} else {
			this._currentX = startX + width;
			this._endX = startX;
		}
		this._y = y;
		this._velocity = ProgressBar.calcVelocity(width, targetPoints);
	}

	private static calcVelocity(width: number, targetPoints: number): number {
		return (width / targetPoints) * POINTS_PER_TURN;
	}

	private moveRight() {
		if (this._currentX >= this._endX) return;
		this._currentX += this._velocity;
	}

	private moveLeft() {
		this._currentX -= this._velocity;
	}

	public move() {
		if (this.direction === Direction.Left) this.moveLeft();
		else this.moveRight();
	}

	public get currentPosition(): Coordinates {
		return { x: this._currentX, y: this._y };
	}

	public set velocity(v: number) {
		this._velocity = v;
	}

	public setVelocityByWidth(width: number, targetPoints: number) {
		this._velocity = ProgressBar.calcVelocity(width, targetPoints);
	}

	public set direction(direction: Direction) {
		this._direction = direction;
	}

	public set x(start: number) {
		this._x = start;
		this._currentX = start;
	}

	public set EndX(x: number) {
		this._endX = x;
	}

	public setEndXByWidth(width: number) {
		this._endX = this._x + width;
	}

	public set currentX(width: number) {
		this._currentX = this._x + width;
	}

	public get width() {
		return this._currentX - this._x;
	}
}
