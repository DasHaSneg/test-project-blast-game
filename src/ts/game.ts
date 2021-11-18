import { chooseColors } from './utils';
import Input from './input';
import SceneManager, { Scenes, TScene } from './scene';
import EventManager from './event';
import GameWorld from './worlds/gameWorld';
import ImageRepository from './ImageRepository';
import assets from './assets';
import GameView from './views/gameView';
import { GameImages } from './types';
import EndWorld, { Result } from './worlds/endWorld';
import EndView from './views/endView';
import { MONEY } from './constants';

export default class Game extends EventManager {
	private _input: Input;

	private _scenes: SceneManager;

	private _currentScene: Scenes = Scenes.Game;

	private _canvas: HTMLCanvasElement;

	private _ctx: CanvasRenderingContext2D;

	private _imageRepository: ImageRepository;

	constructor(canvas: HTMLCanvasElement) {
		super();
		this._canvas = canvas;
		this._ctx = <CanvasRenderingContext2D>canvas.getContext('2d');
		this._imageRepository = new ImageRepository(assets);
		this._scenes = new SceneManager();
		this._input = new Input();
		this.loop = this.loop.bind(this);
		this.callEmit = this.callEmit.bind(this);
	}

	public async init(n: number, m: number, c: number, k: number, s: number, x: number, y: number) {
		this._input.init();
		const gameImages = await this._imageRepository.loadImages();
		const { _canvas: canvas, _ctx: ctx } = this;
		this._scenes.add(Scenes.Game, Game.createGameScene(n, m, c, k, s, x, y, gameImages, canvas, ctx, this.callEmit));
		this.on('endGame', (result: Result) => {
			this._currentScene = Scenes.End;
			this._scenes.add(Scenes.End, Game.createEndScene(gameImages, canvas, ctx, result, this.callEmit));
		});
		this.on('newGame', () => {
			this._currentScene = Scenes.Game;
			this._scenes.add(Scenes.Game, Game.createGameScene(n, m, c, k, s, x, y, gameImages, canvas, ctx, this.callEmit));
		});
	}

	private static createGameScene(n: number, m: number, c: number, k: number, s: number, x: number, y: number, gameImages: GameImages, canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, emitEFunc: (eName: string, arg: any) => void) {
		const gridInfo = {
			blockColors: chooseColors(c),
			n,
			m,
			k,
			minStirringAmount: s,
		};
		const world = new GameWorld(gridInfo, x, y, MONEY, emitEFunc);
		const view = new GameView(canvas, ctx, gameImages);
		view.init(world);
		return { view, world };
	}

	private callEmit = (eName: string, arg?: any) => this.emit(eName, arg);

	private static createEndScene(gameImages: GameImages, canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, result: Result, emitEFunc: (eName: string, arg: any) => void) {
		const world = new EndWorld(result, emitEFunc);
		const view = new EndView(canvas, ctx, gameImages);
		view.init(world);
		return { view, world };
	}

	public start() {
		requestAnimationFrame(this.loop);
	}

	private loop() {
		const { world, view } = this._scenes.get(this._currentScene) as TScene;
		world.update(this._input);
		if (this._input.x !== 0 && this._input.y !== 0) this._input.coordinates = { x: 0, y: 0 };
		view.update(world);
		requestAnimationFrame(this.loop);
	}
}
