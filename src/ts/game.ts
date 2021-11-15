import View from './view';
import World from './world';
import { chooseColors } from './utils';
import Input from './input';
import ProgressBar from './progressBar';

export default class Game {
	private _view: View;

	private _world: World;

	private _input: Input;

	constructor(view: View, n: number, m: number, c: number, k: number, s: number, x: number, y: number) {
		this._view = view;
		const gridInfo = {
			blockColors: chooseColors(c),
			n,
			m,
			k,
			minStirringAmount: s,
		};
		this._world = new World(gridInfo, x, y);
		this._input = new Input();
		this.loop = this.loop.bind(this);
	}

	public async init() {
		await this._view.init(this._world);
		this._input.init();
	}

	public start() {
		requestAnimationFrame(this.loop);
	}

	private loop() {
		this._world.update(this._input);
		if (this._input.x !== 0 && this._input.y !== 0) this._input.coordinates = { x: 0, y: 0 };
		this._view.update(this._world);
		requestAnimationFrame(this.loop);
	}
}
