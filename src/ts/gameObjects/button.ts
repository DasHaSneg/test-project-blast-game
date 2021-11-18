import GameObject from './gameObject';

export default class Button extends GameObject {
	private _selected = false;

	private _color = '';

	public get color(): string {
		return this._color;
	}

	public set color(color: string) {
		this._color = color;
	}

	public toggleSelect() {
		this._selected = !this._selected;
	}

	public isSelected() {
		return this._selected;
	}
}
