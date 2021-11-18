import './styles/style.scss';
import Game from './ts/game';

const canvas = <HTMLCanvasElement>document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const n = 7;
const m = 7;
const c = 5; // colors
const k = 2;
const s = 3; // mix
const x = 110; // target points
const y = 20; // moves

const game = new Game(canvas);

game.init(n, m, c, k, s, x, y).then(() => game.start());
