import View from './view';
import World from './world';
import { Coordinates } from './block';
import { chooseColors } from './utils';

export type GridInfo = {
	blockColors: number[];
	n: number;
	m: number;
	k: number;
	minStirringAmount: number;
};

// export type GridSize = {
// 	n: number;
// 	m: number;
// };

export default class Game {
	private view: View;

	private world: World;

	private userInput: Coordinates = { x: 0, y: 0 };

	constructor(view: View, n: number, m: number, c: number, k: number, s: number, x: number, y: number) {
		this.view = view;
		const gridInfo = {
			blockColors: chooseColors(c),
			n,
			m,
			k,
			minStirringAmount: s,
		};
		this.world = new World(gridInfo, x, y);
		this.loop = this.loop.bind(this);
	}

	public async init() {
		await this.view.init(this.world);
		document.addEventListener('mousedown', e => {
			this.userInput.x = e.offsetX;
			this.userInput.y = e.offsetY;
		});

	}

	public start() {
		requestAnimationFrame(this.loop);
	}

	private loop() {
		this.world.update(this.userInput);
		if (this.userInput.x !== 0 && this.userInput.y !== 0)
			this.userInput = { x: 0, y: 0 };
		this.view.update(this.world);
		requestAnimationFrame(this.loop);
	}
}
