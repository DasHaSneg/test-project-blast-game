export default class Score {
	private _points = 0;

	private _moves = 0;

	private _targetPoints = 0;

	private _targetMoves = 0;

	constructor(targetPoints: number, targetMoves: number) {
		this._targetPoints = targetPoints;
		this._moves = targetMoves;
	}

	public get points() {
		return this._points;
	}

	public increasePoints() {
		this._points += 1;
	}

	public get moves() {
		return this._moves;
	}

	public decreaseMovesNum() {
		this._moves -= 1;
	}

	public get targetPoints() {
		return this._targetPoints;
	}

	public get targetMoves() {
		return this._targetMoves;
	}
}
