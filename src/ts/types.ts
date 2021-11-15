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

export type Size = {
	width: number;
	height: number;
};

export type GridInfo = {
	blockColors: number[];
	n: number;
	m: number;
	k: number;
	minStirringAmount: number;
};

export type GameImages = { [key: string]: HTMLImageElement };
export type Assets = { [key: string]: string };

// export type Score = {
// 	points: number;
// 	movesNumber: number;
// };
