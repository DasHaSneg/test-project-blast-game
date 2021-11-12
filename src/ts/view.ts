import assets from './assets';
import Grid from './grid';

type Assets = {
	[key: string]: boolean;
};

export default class View {
	private canvas: HTMLCanvasElement;

	private ctx: CanvasRenderingContext2D;

	private gameImages: { [key: string]: HTMLImageElement } = {};

	constructor(canvas: HTMLCanvasElement) {
		this.canvas = canvas;
		this.ctx = <CanvasRenderingContext2D>canvas.getContext('2d');
	}

	private async loadImages() {
		const gameImages: { [key: string]: HTMLImageElement } = {};
		for (const key in assets) {
			const img = await this.loadImage(String((assets as Assets)[key as string]));
			gameImages[key] = img;
		}
		return gameImages;
	}

	public async init(grid: Grid) {
		this.gameImages = await this.loadImages();
		await this.renderGameScene(grid);
	}

	// public update(world: World) {}

	// private async renderProgressScale() {
	// 	if (!this.gameImages.has(GameImage.progressScale)) {
	// 		const progressScale = new Image();
	// 		await this.load(progressScale, ProgressScale);
	// 	}
	//
	// 	this.ctx.drawImage(progressScale, this.canvas.width / 2 - progressScale.width / 4 / 2 - 24, 28, progressScale.width / 4, progressScale.height / 4);
	// }
	//
	private async loadImage(imgPath: string) {
		const img = new Image();
		await this.load(img, imgPath);
		return img;
	}

	private renderGrid() {}

	private async renderGameScene(grid: Grid) {
		const { width, height } = this.canvas;
		const { HeaderPanel, ProgressBlock, ProgressScale, GamePanel, ScorePanel } = this.gameImages;

		this.ctx.fillStyle = '#a1a1a1';
		this.ctx.fillRect(0, 0, width, height);
		this.ctx.drawImage(HeaderPanel, width / 2 - HeaderPanel.width / 4 / 2, 0, HeaderPanel.width / 4, HeaderPanel.height / 4);

		this.ctx.drawImage(ProgressBlock, width / 2 - ProgressBlock.width / 4 / 2 - 24, 28, ProgressBlock.width / 4, ProgressBlock.height / 4);

		this.ctx.drawImage(ProgressScale, this.canvas.width / 2 - ProgressScale.width / 4 / 2 - 24, 28, ProgressScale.width / 4, ProgressScale.height / 4);

		this.ctx.drawImage(GamePanel, width / 2 - GamePanel.width / 4, HeaderPanel.height / 4 + 50, GamePanel.width / 4, GamePanel.height / 4);

		this.ctx.drawImage(ScorePanel, width / 2 + 125, HeaderPanel.height / 4 + 100, ScorePanel.width / 4, ScorePanel.height / 4);

		this.ctx.fillStyle = '#fff';
		this.ctx.font = '20px Marvin';
		this.ctx.fillText('прогресс', width / 2 - 70, 23);
		this.ctx.fillText('время:', width / 2 + 225, HeaderPanel.height / 4 + 50 + 20);

		const startX = width / 2 - GamePanel.width / 4 + 7;
		const startY = HeaderPanel.height / 4 + 50 + 7;
		const desk = grid.getDesk();
		const blockWidth = this.gameImages[desk[0][0].getColor()].width / 6;
		const blockHeight = this.gameImages[desk[0][0].getColor()].height / 6;
		console.log(desk);
		for (let i = 0; i < grid.getN(); i += 1) {
			for (let j = 0; j < grid.getM(); j += 1) {
				this.ctx.drawImage(this.gameImages[desk[i][j].getColor()], startX + blockWidth * j, startY + blockHeight * i, blockWidth, blockHeight);
			}
		}
	}

	private async load(el: HTMLImageElement, str: string) {
		return new Promise(resolve => {
			el.src = str;
			el.addEventListener('load', () => resolve(this));
		});
	}
}
