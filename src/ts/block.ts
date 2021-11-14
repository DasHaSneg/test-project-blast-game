import { getRandomValue } from './utils';
import { Size } from './grid';

export type Coordinates = {
	x: number;
	y: number;
};

export enum ResizeType {
	Zoom,
	Shrink,
}

export enum Direction {
	Up,
	Right,
	Down,
	Left,
}

export default class Block {
	private selected = false;

	private position: Coordinates = { x: 0, y: 0 };

	private oldPosition: Coordinates = { x: 0, y: 0 };

	private oldColor: string;

	private size: Size = { height: 0, width: 0 };

	private oldSize: Size = { height: 0, width: 0 };

	private color: string;

	private animationVelocity: number = 10;

	constructor(colors: number[]) {
		const colorNumber = getRandomValue(colors);
		this.color = this.chooseColor(colorNumber);
		this.oldColor = this.color;
	}

	public getColorImageName(): string {
		// return this.selected ? `Selected${this.color}` : this.color;
		return this.color;
	}

	public getColor(): string {
		return this.color;
	}

	public getOldColor(): string {
		return this.oldColor;
	}

	public setColor(color: string) {
		this.color = color;
	}

	public setOldColor(color: string) {
		this.oldColor = color;
	}

	public chooseColor(colorNumber: number) {
		switch (colorNumber) {
			case 1:
				return 'BlueBlock';
			case 2:
				return 'GreenBlock';
			case 3:
				return 'PurpleBlock';
			case 4:
				return 'RedBlock';
			case 5:
				return 'YellowBlock';
			default:
				return 'BlueBlock';
		}
	}

	public setPosition(position: Coordinates){
		this.position = position;
	}

	public setOldPosition(position: Coordinates) {
		this.oldPosition = position;
	}

	public getPosition(): Coordinates {
		return this.position;
	}

	public getOldPosition(): Coordinates {
		return this.oldPosition;
	}

	public setSize(size: Size) {
		this.size = size;
	}

	public getSize(): Size {
		return this.size;
	}

	public getOldSize(): Size {
		return this.oldSize;
	}

	public setOldSize(size: Size) {
		this.oldSize = size;
	}

	public select() {
		this.selected = !this.selected;
	}

	public isSelected() {
		return this.selected;
	}

	public resize(resizeType: ResizeType) {
		const { Zoom, Shrink } = ResizeType;
		switch (resizeType) {
			case Shrink:
				if (this.size.height > 0) this.size.height -= this.animationVelocity;
				else this.size.height = 0;
				if (this.size.width > 0) this.size.width -= this.animationVelocity;
				else this.size.width = 0;
				break;
			case Zoom:
				this.size.height += this.animationVelocity;
				this.size.width += this.animationVelocity;
				break;
			default:
				throw new Error('Unknown resize type');
		}
	}

	public move(moveType: Direction, velocity?: number) {
		const { Up, Right, Left, Down } = Direction;
		switch (moveType) {
			case Up:
				this.position.y -= this.animationVelocity;
				break;
			case Right:
				this.position.x += this.animationVelocity;
				break;
			case Left:
				this.position.x -= this.animationVelocity;
				break;
			case Down:
				this.position.y += velocity ? velocity : this.animationVelocity;
				break;
			default:
				throw new Error('Unknown move type');
		}
	}
}
