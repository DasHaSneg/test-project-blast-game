import View from './view';
import { IMAGE_SIZE_COEFFICIENT, TELEPORT_COST } from '../constants';
import Score from '../score';
import GameWorld from '../worlds/gameWorld';

export default class GameView extends View {
	init(world: GameWorld): void {
		this.initGrid(world);
		this.initProgressBar(world);
		this.initBonus(world);
	}

	update(world: GameWorld): void {
		this.clearScreen();
		this.renderScene(world);
	}

	renderScene(world: GameWorld) {
		this.renderHeader(world);
		this.renderGrid(world);
		this.renderScore(world);
		this.renderProgressBar(world);
		this.renderBonus(world);
	}

	private renderHeader(world: GameWorld) {
		const { width, height } = this._canvas;
		const { HeaderPanel, MoneyBlock } = this._gameImages;

		this._ctx.fillStyle = '#a1a1a1';
		this._ctx.fillRect(0, 0, width, height);
		const dx = width / 2 - HeaderPanel.width / IMAGE_SIZE_COEFFICIENT / 2;
		this._ctx.drawImage(HeaderPanel, dx, 0, HeaderPanel.width / IMAGE_SIZE_COEFFICIENT, HeaderPanel.height / IMAGE_SIZE_COEFFICIENT);
		this._ctx.drawImage(MoneyBlock, dx + 35, HeaderPanel.height / IMAGE_SIZE_COEFFICIENT / 10, MoneyBlock.width / IMAGE_SIZE_COEFFICIENT, MoneyBlock.height / IMAGE_SIZE_COEFFICIENT);

		this._ctx.fillStyle = '#fff';
		this._ctx.font = '20px Marvin';
		this._ctx.fillText('прогресс', width / 2 - 70, 23);
		this._ctx.fillText(`${world.money}`, dx + MoneyBlock.width / IMAGE_SIZE_COEFFICIENT / 1.3, HeaderPanel.height / IMAGE_SIZE_COEFFICIENT / 2);
	}

	renderScore(world: GameWorld) {
		const scorePanelImage = this._gameImages.ScorePanel;
		const dx = this._canvas.width / 2 + 125;
		const dy = this._gameImages.HeaderPanel.height / IMAGE_SIZE_COEFFICIENT + 54;
		const textDx = dx + scorePanelImage.width / IMAGE_SIZE_COEFFICIENT / 2;
		this._ctx.drawImage(scorePanelImage, dx, dy, scorePanelImage.width / IMAGE_SIZE_COEFFICIENT, scorePanelImage.height / IMAGE_SIZE_COEFFICIENT);
		this.renderScoreText(world.score, textDx, dy, scorePanelImage);
	}

	private getTextScoreDy = (panelDy: number, image: HTMLImageElement, k: number) => panelDy + image.height / IMAGE_SIZE_COEFFICIENT / k;

	private getTextScoreDx = (textDx: number, text: string) => textDx - this._ctx.measureText(text).width / 2;

	private renderScoreText(score: Score, textDx: number, panelDy: number, image: HTMLImageElement) {
		const { points, moves } = score;
		this._ctx.font = '20px Marvin';
		let text = 'время:';
		this._ctx.fillText(text, this.getTextScoreDx(textDx, text), panelDy);
		this._ctx.font = '34px Marvin';
		text = `${points}`;
		this._ctx.fillText(text, this.getTextScoreDx(textDx, text), this.getTextScoreDy(panelDy, image, 1.16));
		text = `${moves}`;
		this._ctx.font = '52px Marvin';
		this._ctx.fillText(text, this.getTextScoreDx(textDx, text), this.getTextScoreDy(panelDy, image, 2.5));
		text = 'очки:';
		this._ctx.font = '20px Marvin';
		this._ctx.fillText(text, this.getTextScoreDx(textDx, text), this.getTextScoreDy(panelDy, image, 1.4));
	}

	private initBonus(world: GameWorld) {
		const { ScorePanel, HeaderPanel, Bonus } = this._gameImages;
		const dx = this._canvas.width / 2 + 125;
		const dy = HeaderPanel.height / IMAGE_SIZE_COEFFICIENT + 54 + ScorePanel.height / IMAGE_SIZE_COEFFICIENT;
		const scoreTextDX = dx + ScorePanel.width / IMAGE_SIZE_COEFFICIENT / 2;
		world.bonus.init({ x: scoreTextDX - Bonus.width / 3 / 2, y: dy + 50 }, { width: Bonus.width / 3, height: Bonus.height / 3 });
	}

	private renderBonus(world: GameWorld) {
		const { ScorePanel, HeaderPanel, Bonus, SelectedBonus } = this._gameImages;
		const dx = this._canvas.width / 2 + 125;
		const dy = HeaderPanel.height / IMAGE_SIZE_COEFFICIENT + 54 + ScorePanel.height / IMAGE_SIZE_COEFFICIENT;
		const scoreTextDX = dx + ScorePanel.width / IMAGE_SIZE_COEFFICIENT / 2;
		this._ctx.font = '20px Marvin';
		let text = 'бонус';
		this._ctx.fillText(text, scoreTextDX - this._ctx.measureText(text).width / 2, dy + 50);
		this._ctx.drawImage(!world.bonus.selected ? Bonus : SelectedBonus, scoreTextDX - Bonus.width / 3 / 2, dy + 50, Bonus.width / 3, Bonus.height / 3);
		text = `${TELEPORT_COST}`;
		this._ctx.fillText(text, scoreTextDX - this._ctx.measureText(text).width / 2 - 5, dy + Bonus.height / 3 + 20);
	}

	private renderGrid(world: GameWorld) {
		this._ctx.drawImage(
			this._gameImages.GamePanel,
			this._canvas.width / 2 - this._gameImages.GamePanel.width / IMAGE_SIZE_COEFFICIENT,
			this._gameImages.HeaderPanel.height / IMAGE_SIZE_COEFFICIENT + 30,
			this._gameImages.GamePanel.width / IMAGE_SIZE_COEFFICIENT,
			this._gameImages.GamePanel.height / IMAGE_SIZE_COEFFICIENT
		);
		const { n, m, blockLayout: layout } = world.grid;
		for (let i = 0; i < n; i += 1) {
			for (let j = 0; j < m; j += 1) {
				const { x, y } = layout[i][j].position;
				const { width, height } = layout[i][j].size;
				this._ctx.drawImage(this._gameImages[layout[i][j].getColorImageName()], x, y, width, height);
			}
		}
	}

	private renderProgressBar(world: GameWorld) {
		const { ProgressBlock, ProgressScale } = this._gameImages;
		const dx = this._canvas.width / 2 - ProgressScale.width / IMAGE_SIZE_COEFFICIENT / 2 - 24;
		const dw = ProgressBlock.width / IMAGE_SIZE_COEFFICIENT;
		this._ctx.drawImage(ProgressBlock, dx, 28, dw, ProgressBlock.height / IMAGE_SIZE_COEFFICIENT);
		this._ctx.drawImage(ProgressScale, dx, 29, world.progressBar.width, ProgressScale.height / IMAGE_SIZE_COEFFICIENT + 1);
	}

	private initGrid(world: GameWorld) {
		const { grid: gameGrid } = world;
		const { n, m, blockLayout: layout } = gameGrid;
		const startX = this._canvas.width / 2 - this._gameImages.GamePanel.width / 4 + 7;
		const startY = this._gameImages.HeaderPanel.height / 4 + 30 + 7;
		const blockWidth = this._gameImages[layout[0][0].getColorImageName()].width / 3.03;
		const blockHeight = this._gameImages[layout[0][0].getColorImageName()].height / 3.03;
		gameGrid.init(
			{ x: startX + blockWidth * m + 5, y: startY },
			{
				width: blockWidth * m + 5,
				height: blockHeight * n,
			},
			{ width: blockWidth, height: blockHeight }
		);
		for (let i = 0; i < n; i += 1) {
			for (let j = 0; j < m; j += 1) {
				this._ctx.drawImage(this._gameImages[layout[i][j].getColorImageName()], startX + blockWidth * j, startY + blockHeight * i, blockWidth, blockHeight);
				layout[i][j].init(
					{ x: startX + blockWidth * j, y: startY + blockHeight * i },
					{
						width: blockWidth,
						height: blockHeight,
					}
				);
			}
		}
	}

	private initProgressBar(world: GameWorld) {
		const progressBlock = this._gameImages.ProgressBlock;
		world.progressBar.init(this._canvas.width / 2 - progressBlock.width / IMAGE_SIZE_COEFFICIENT / 2 - 24, progressBlock.width / IMAGE_SIZE_COEFFICIENT, 28, world.score.targetPoints);
	}

	clearScreen() {
		this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
	}
}
