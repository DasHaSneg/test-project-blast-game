import Block, { Coordinates } from './block';
import Grid from './grid';
import ProgressBar from './progressBar';
import { GridInfo } from './game';

type Score = {
	points: number;
	movesNumber: number;
};

const POINTS_PER_TURN = 10;

export default class World {
	// private progress: number;
	//
	// private money: number;
	//
	private score: Score;

	private target: Score;

	private grid: Grid;

	private progressBar: ProgressBar;
	//
	// private grid: number[];
	// public update(userInput: Coordinates) {
	//
	// };

	constructor(gridInfo: GridInfo, x: number, y: number) {
		this.target = { points: 0, movesNumber: y };
		this.score = { points: x, movesNumber: 0 };
		this.grid = new Grid(gridInfo);
		this.progressBar = new ProgressBar(0, 0, 0);
	}

	public init() {

	}

	public getGrid(): Grid {
		return this.grid;
	}
}
