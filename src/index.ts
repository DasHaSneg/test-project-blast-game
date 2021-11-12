import './styles/style.scss';
import World from './ts/world';
import Game from './ts/game';
import View from './ts/view';

const canvas = <HTMLCanvasElement>document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const n = 7;
const m = 7;
const c = 5;
const k = 2;
const s = 3;
const x = 100;
const y = 20;

const game = new Game(new View(canvas), n, m, c, k, s, x, y);

game.init().then(() => game.start());

console.log(game);
