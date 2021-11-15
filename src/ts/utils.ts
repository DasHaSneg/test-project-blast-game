export function getRandomInteger(min: number, max: number) {
	return Math.floor(min + Math.random() * (max + 1 - min));
}

const COLORS_NUM = 5;

export function chooseColors(amount: number) {
	if (amount === COLORS_NUM) {
		return Array.from({ length: COLORS_NUM }, (v, k) => k + 1);
	}
	return Array.from({ length: amount }, () => getRandomInteger(0, amount - 1));
	// TODO check repeats
}

export function getRandomValue(array: number[]): number {
	return array[Math.floor(Math.random() * array.length)];
}

export function chooseColor(colorNumber: number): string {
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
