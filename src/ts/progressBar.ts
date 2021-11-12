import { Coordinates } from './block';

export enum Direction {
	Right,
	Left,
}

export default class ProgressBar {
	private startX: number;

	private currentX: number;

	private endX: number;

	private velocity = 1;

	private y: number;

	private direction: Direction = Direction.Left;

	constructor(startX: number, width: number, y: number) {
		const endX = startX + width;
		this.startX = startX;
		this.currentX = endX;
		this.endX = endX;
		this.y = y;
	}

	private moveRight() {
		this.currentX += this.velocity;
	}

	private moveLeft() {
		this.currentX -= this.velocity;
	}

	public update() {
		if (this.direction === Direction.Left) this.moveLeft();
		else this.moveRight();
	}

	public getCurrentPosition(): Coordinates {
		return { x: this.currentX, y: this.y };
	}

	public setVelocity(v: number) {
		this.velocity = v;
	}

	public setDirection(direction: Direction) {
		this.direction = direction;
	}

	public setStartX(start: number) {
		this.startX = start;
	}

	public setEndX(width: number) {
		this.endX = this.startX + width;
	}

	public setCurrentX(width: number) {
		this.currentX = this.startX + width;
	}
}
