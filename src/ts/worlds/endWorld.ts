import World from './world';
import Input from '../input';
import Button from '../gameObjects/button';
import { checkClick } from '../utils';

export enum Result {
	Win = 'Выиграли',
	Lost = 'Проиграли',
	Undefined = '',
}

// enum Stages {
// 	View,
// 	ButtonClicked,
// 	Again
// }

export default class EndWorld extends World {
	private _result: Result = Result.Undefined;

	private _againButton: Button = new Button();

	private _emitEFunc: (eName: string, arg?: any) => void;

	constructor(result: Result, emitEFunc: (eName: string, arg?: any) => void) {
		super();
		this._result = result;
		this._emitEFunc = emitEFunc;
	}

	public update(userInput: Input): void {
		this.handleClick(userInput);
	}

	private handleClick(userInput: Input) {
		const { x: uX, y: uY } = userInput;
		if (uX !== 0 && uY !== 0) {
			const { x, y, width, height } = this._againButton;
			if (checkClick(uX, uY, x, y, height, width)) {
				// this._againButton.toggleSelect();
				this._emitEFunc('newGame');
			}
		}
	}

	public set result(result: Result) {
		this._result = result;
	}

	public get result() {
		return this._result;
	}

	public get againButton() {
		return this._againButton;
	}
}
