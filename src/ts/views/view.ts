import World from '../worlds/world';
import { GameImages } from '../types';

interface IView {
	init: (world: World) => void;
	update: (world: World) => void;
}

export default abstract class View implements IView {
	protected _canvas: HTMLCanvasElement;

	protected _ctx: CanvasRenderingContext2D;

	protected _gameImages: GameImages;

	constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, gameImages: GameImages) {
		this._canvas = canvas;
		this._ctx = ctx;
		this._gameImages = gameImages;
	}

	abstract init(world: World): void;

	abstract update(world: World): void;

	protected abstract renderScene(world: World): void;

	protected abstract clearScreen(): void;
}
