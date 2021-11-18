import GameObject from './gameObject';

export default class Bonus extends GameObject {
	private _selected = false;

	public get selected() {
		return this._selected;
	}

	public set selected(selected: boolean) {
		this._selected = selected;
	}

	public toggleSelect() {
		this._selected = !this._selected;
	}
}
