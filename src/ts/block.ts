import { getRandomValue } from './utils';

export type Coordinates = {
	x: number;
	y: number;
};

export default class Block {
	private isSelected = false;

	private isDeleted = false;

	private y = 0;

	//
	// private position: Coordinates;
	//
	// private width: number;
	//
	// private height: number;
	//
	private color: string;

	constructor(colors: number[]) {
		const colorNumber = getRandomValue(colors);
		this.color = Block.chooseColor(colorNumber);
	}

	public getColor(): string {
		return this.color;
	}

	private static chooseColor(colorNumber: number) {
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
}
