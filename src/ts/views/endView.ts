import View from './view';
import { IMAGE_SIZE_COEFFICIENT } from '../constants';
import EndWorld from '../worlds/endWorld';

export default class EndView extends View {
	public init(world: EndWorld): void {
		this.initButton(world);
	}

	public update(world: EndWorld): void {
		this.renderScene(world);
	}

	protected renderScene(world: EndWorld): void {
		const { width, height } = this._canvas;
		const { Button } = this._gameImages;
		const bWidth = (Button.width / IMAGE_SIZE_COEFFICIENT) * 2;
		const bHeight = (Button.height / IMAGE_SIZE_COEFFICIENT) * 2;
		const dx = width / 2 - bWidth / 2;
		const dy = height / 2 - bHeight / 2;
		this._ctx.fillStyle = '#a1a1a1';
		this._ctx.fillRect(0, 0, width, height);
		this._ctx.drawImage(Button, dx, dy, bWidth, bHeight);
		this._ctx.fillStyle = '#fff';
		this._ctx.font = '34px Marvin';
		let text = `Заново`;
		this._ctx.fillText(text, dx + bWidth / 2 - this._ctx.measureText(text).width / 2, dy + bHeight / 2 + 10);
		this._ctx.font = '54px Marvin';
		text = `Вы ${world.result}`;
		this._ctx.fillText(text, width / 2 - this._ctx.measureText(text).width / 2, dy + bHeight / 2 - 100);
	}

	private initButton(world: EndWorld) {
		const { width, height } = this._canvas;
		const { Button } = this._gameImages;
		const bWidth = (Button.width / IMAGE_SIZE_COEFFICIENT) * 2;
		const bHeight = (Button.height / IMAGE_SIZE_COEFFICIENT) * 2;
		const dx = width / 2 - bWidth / 2;
		const dy = height / 2 - bHeight / 2;
		world.againButton.init(
			{ x: dx, y: dy },
			{
				width: bWidth,
				height: bHeight,
			}
		);
	}

	protected clearScreen(): void {
		this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
	}
}
