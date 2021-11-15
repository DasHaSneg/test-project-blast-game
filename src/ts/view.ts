import assets from './assets';
import World from './world';
import { GameImages } from './types';
import ImageRepository from './ImageRepository';
import { IMAGE_SIZE_COEFFICIENT, MONEY, TELEPORT_COST } from './constants';

export default class View {
	private _canvas: HTMLCanvasElement;

	private _ctx: CanvasRenderingContext2D;

	private _gameImages: GameImages = {};

	constructor(canvas: HTMLCanvasElement) {
		this._canvas = canvas;
		this._ctx = <CanvasRenderingContext2D>canvas.getContext('2d');
	}

	public async init(world: World) {
		const imageRepository = new ImageRepository(assets);
		this._gameImages = await imageRepository.loadImages();
		this.renderGameScene();
		this.initGrid(world);
		this.initProgressBar(world);
	}

	public update(world: World) {
		this.clearScreen();
		this.renderGameScene();
		this.renderGrid(world);
		this.renderScore(world);
		this.renderProgressBar(world);
		this.renderBonus();
	}

	private renderGameScene() {
		const { width, height } = this._canvas;
		const { HeaderPanel, MoneyBlock } = this._gameImages;

		this._ctx.fillStyle = '#a1a1a1';
		this._ctx.fillRect(0, 0, width, height);
		const dx = width / 2 - HeaderPanel.width / IMAGE_SIZE_COEFFICIENT / 2
		this._ctx.drawImage(HeaderPanel, dx, 0, HeaderPanel.width / IMAGE_SIZE_COEFFICIENT, HeaderPanel.height / IMAGE_SIZE_COEFFICIENT);
		this._ctx.drawImage(MoneyBlock, dx + 35, HeaderPanel.height / IMAGE_SIZE_COEFFICIENT / 10, MoneyBlock.width / IMAGE_SIZE_COEFFICIENT, MoneyBlock.height / IMAGE_SIZE_COEFFICIENT);

		this._ctx.fillStyle = '#fff';
		this._ctx.font = '20px Marvin';
		this._ctx.fillText('прогресс', width / 2 - 70, 23);
		this._ctx.fillText(`${MONEY}`, dx + MoneyBlock.width / IMAGE_SIZE_COEFFICIENT / 1.3, HeaderPanel.height / IMAGE_SIZE_COEFFICIENT / 2);
	}

	renderScore(world: World) {
		const scorePanelImage = this._gameImages.ScorePanel;
		const dx = this._canvas.width / 2 + 125;
		const dy = this._gameImages.HeaderPanel.height / IMAGE_SIZE_COEFFICIENT + 54;
		const scoreTextDX = dx + scorePanelImage.width / IMAGE_SIZE_COEFFICIENT / 2;
		this._ctx.drawImage(scorePanelImage, dx, dy, scorePanelImage.width / IMAGE_SIZE_COEFFICIENT, scorePanelImage.height / IMAGE_SIZE_COEFFICIENT);
		this._ctx.font = '20px Marvin';
		let text = 'время:';
		this._ctx.fillText('время:', scoreTextDX - this._ctx.measureText(text).width / 2, dy);
		this._ctx.font = '34px Marvin';
		text = `${world.score.points}`;
		this._ctx.fillText(text, scoreTextDX - this._ctx.measureText(text).width / 2, dy + scorePanelImage.height / IMAGE_SIZE_COEFFICIENT / 1.16);
		this._ctx.font = '52px Marvin';
		text = `${world.score.moves}`;
		this._ctx.fillText(text, scoreTextDX - this._ctx.measureText(text).width / 2, dy + scorePanelImage.height / IMAGE_SIZE_COEFFICIENT / 2.5);
		this._ctx.font = '20px Marvin';
		text = 'очки:';
		this._ctx.fillText(text, scoreTextDX - this._ctx.measureText(text).width / 2, dy + scorePanelImage.height / IMAGE_SIZE_COEFFICIENT / 1.4);
	}

	private renderBonus() {
		const { ScorePanel, HeaderPanel, Bonus, SelectedBonus } = this._gameImages;
		const dx = this._canvas.width / 2 + 125;
		const dy = HeaderPanel.height / IMAGE_SIZE_COEFFICIENT + 54 + ScorePanel.height / IMAGE_SIZE_COEFFICIENT;
		const scoreTextDX = dx + ScorePanel.width / IMAGE_SIZE_COEFFICIENT / 2;
		this._ctx.font = '20px Marvin';
		let text = 'бонус';
		this._ctx.fillText(text, scoreTextDX - this._ctx.measureText(text).width / 2, dy + 50);
		this._ctx.drawImage(Bonus, scoreTextDX - Bonus.width / 3 / 2, dy + 50, Bonus.width / 3, Bonus.height / 3);
		text = `${TELEPORT_COST}`;
		this._ctx.fillText(text, scoreTextDX - this._ctx.measureText(text).width / 2 - 5, dy + Bonus.height / 3 + 20);

	}

	private renderGrid(world: World) {
		this._ctx.drawImage(
			this._gameImages.GamePanel,
			this._canvas.width / 2 - this._gameImages.GamePanel.width / IMAGE_SIZE_COEFFICIENT,
			this._gameImages.HeaderPanel.height / IMAGE_SIZE_COEFFICIENT + 30,
			this._gameImages.GamePanel.width / IMAGE_SIZE_COEFFICIENT,
			this._gameImages.GamePanel.height / IMAGE_SIZE_COEFFICIENT
		);
		const desk = world.grid.blockLayout;
		for (let i = 0; i < world.grid.n; i += 1) {
			for (let j = 0; j < world.grid.m; j += 1) {
				const { x, y } = desk[i][j].position;
				const { width, height } = desk[i][j].size;
				this._ctx.drawImage(this._gameImages[desk[i][j].getColorImageName()], x, y, width, height);
			}
		}
	}

	private renderProgressBar(world: World) {
		const { ProgressBlock, ProgressScale } = this._gameImages;
		const dx = this._canvas.width / 2 - ProgressScale.width / IMAGE_SIZE_COEFFICIENT / 2 - 24;
		const dw = ProgressBlock.width / IMAGE_SIZE_COEFFICIENT;
		this._ctx.drawImage(ProgressBlock, dx, 28, dw, ProgressBlock.height / IMAGE_SIZE_COEFFICIENT);
		this._ctx.drawImage(ProgressScale, dx, 28, world.progressBar.width, ProgressScale.height / IMAGE_SIZE_COEFFICIENT + 1);
	}

	private initGrid(world: World) {
		let gameGrid = world.grid;
		let desk = gameGrid.blockLayout;
		const startX = this._canvas.width / 2 - this._gameImages.GamePanel.width / 4 + 7;
		const startY = this._gameImages.HeaderPanel.height / 4 + 30 + 7;
		const blockWidth = this._gameImages[desk[0][0].getColorImageName()].width / 3.03;
		const blockHeight = this._gameImages[desk[0][0].getColorImageName()].height / 3.03;
		gameGrid.init({ x: startX + blockWidth * gameGrid.m + 5, y: startY }, { width: blockWidth * gameGrid.m + 5, height: blockHeight * gameGrid.n }, { width: blockWidth, height: blockHeight });
		for (let i = 0; i < gameGrid.n; i += 1) {
			for (let j = 0; j < gameGrid.m; j += 1) {
				this._ctx.drawImage(this._gameImages[desk[i][j].getColorImageName()], startX + blockWidth * j, startY + blockHeight * i, blockWidth, blockHeight);
				desk[i][j].init({ x: startX + blockWidth * j, y: startY + blockHeight * i }, { width: blockWidth, height: blockHeight });
			}
		}
		gameGrid.blockLayout = desk;
		world.grid = gameGrid;
	}

	private initProgressBar(world: World) {
		const progressBlock = this._gameImages.ProgressBlock;
		world.progressBar.init(this._canvas.width / 2 - progressBlock.width / IMAGE_SIZE_COEFFICIENT / 2 - 24, progressBlock.width / IMAGE_SIZE_COEFFICIENT, 28, world.score.targetPoints);
	}

	private clearScreen() {
		this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
	}
}
