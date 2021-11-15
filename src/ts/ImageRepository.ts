import assets from './assets';
import { Assets, GameImages } from './types';

export default class ImageRepository {
	private images: Assets;

	constructor(assets: Assets) {
		this.images = assets;
	}

	public async loadImages() {
		const images: GameImages = {};
		for (const key in assets) {
			images[key] = await this.loadImage(String((assets as unknown as Assets)[key as string]));
		}
		return images;
	}

	private async loadImage(imgPath: string) {
		const img = new Image();
		await this.load(img, imgPath);
		return img;
	}

	private async load(el: HTMLImageElement, str: string) {
		return new Promise(resolve => {
			el.src = str;
			el.addEventListener('load', () => resolve(this));
		});
	}
}
