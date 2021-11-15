/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles/style.scss":
/*!*******************************!*\
  !*** ./src/styles/style.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/ts/ImageRepository.ts":
/*!***********************************!*\
  !*** ./src/ts/ImageRepository.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets */ "./src/ts/assets.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

var ImageRepository = /** @class */ (function () {
    function ImageRepository(assets) {
        this.images = assets;
    }
    ImageRepository.prototype.loadImages = function () {
        return __awaiter(this, void 0, void 0, function () {
            var images, _a, _b, _i, key, _c, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        images = {};
                        _a = [];
                        for (_b in _assets__WEBPACK_IMPORTED_MODULE_0__["default"])
                            _a.push(_b);
                        _i = 0;
                        _e.label = 1;
                    case 1:
                        if (!(_i < _a.length)) return [3 /*break*/, 4];
                        key = _a[_i];
                        _c = images;
                        _d = key;
                        return [4 /*yield*/, this.loadImage(String(_assets__WEBPACK_IMPORTED_MODULE_0__["default"][key]))];
                    case 2:
                        _c[_d] = _e.sent();
                        _e.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/, images];
                }
            });
        });
    };
    ImageRepository.prototype.loadImage = function (imgPath) {
        return __awaiter(this, void 0, void 0, function () {
            var img;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        img = new Image();
                        return [4 /*yield*/, this.load(img, imgPath)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, img];
                }
            });
        });
    };
    ImageRepository.prototype.load = function (el, str) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) {
                        el.src = str;
                        el.addEventListener('load', function () { return resolve(_this); });
                    })];
            });
        });
    };
    return ImageRepository;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ImageRepository);


/***/ }),

/***/ "./src/ts/assets.ts":
/*!**************************!*\
  !*** ./src/ts/assets.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _img_progress_panel2_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/progress/panel2.png */ "./src/img/progress/panel2.png");
/* harmony import */ var _img_game_panel_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/game/panel.png */ "./src/img/game/panel.png");
/* harmony import */ var _img_score_panel2_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/score/panel2.png */ "./src/img/score/panel2.png");
/* harmony import */ var _img_progress_bar_block_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/progress/bar/block.png */ "./src/img/progress/bar/block.png");
/* harmony import */ var _img_progress_bar_scale_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/progress/bar/scale.png */ "./src/img/progress/bar/scale.png");
/* harmony import */ var _img_game_blocks_blue_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/game/blocks/blue.png */ "./src/img/game/blocks/blue.png");
/* harmony import */ var _img_game_blocks_green_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../img/game/blocks/green.png */ "./src/img/game/blocks/green.png");
/* harmony import */ var _img_game_blocks_yellow_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../img/game/blocks/yellow.png */ "./src/img/game/blocks/yellow.png");
/* harmony import */ var _img_game_blocks_purple_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../img/game/blocks/purple.png */ "./src/img/game/blocks/purple.png");
/* harmony import */ var _img_game_blocks_red_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../img/game/blocks/red.png */ "./src/img/game/blocks/red.png");
/* harmony import */ var _img_booster_bonus_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../img/booster/bonus.png */ "./src/img/booster/bonus.png");
/* harmony import */ var _img_booster_selected_bonus_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../img/booster/selected_bonus.png */ "./src/img/booster/selected_bonus.png");
/* harmony import */ var _img_booster_money_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../img/booster/money.png */ "./src/img/booster/money.png");
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// import SelectedBlueBlock from '../img/game/selected_blocks/blue.png';
// // eslint-disable-next-line @typescript-eslint/ban-ts-comment
// // @ts-ignore
// import SelectedGreenBlock from '../img/game/selected_blocks/green.png';
// // eslint-disable-next-line @typescript-eslint/ban-ts-comment
// // @ts-ignore
// import SelectedYellowBlock from '../img/game/selected_blocks/yellow.png';
// // eslint-disable-next-line @typescript-eslint/ban-ts-comment
// // @ts-ignore
// import SelectedPurpleBlock from '../img/game/selected_blocks/purple.png';
// // eslint-disable-next-line @typescript-eslint/ban-ts-comment
// // @ts-ignore
// import SelectedRedBlock from '../img/game/selected_blocks/red.png';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    HeaderPanel: _img_progress_panel2_png__WEBPACK_IMPORTED_MODULE_0__,
    GamePanel: _img_game_panel_png__WEBPACK_IMPORTED_MODULE_1__,
    ScorePanel: _img_score_panel2_png__WEBPACK_IMPORTED_MODULE_2__,
    ProgressBlock: _img_progress_bar_block_png__WEBPACK_IMPORTED_MODULE_3__,
    ProgressScale: _img_progress_bar_scale_png__WEBPACK_IMPORTED_MODULE_4__,
    BlueBlock: _img_game_blocks_blue_png__WEBPACK_IMPORTED_MODULE_5__,
    GreenBlock: _img_game_blocks_green_png__WEBPACK_IMPORTED_MODULE_6__,
    PurpleBlock: _img_game_blocks_purple_png__WEBPACK_IMPORTED_MODULE_8__,
    RedBlock: _img_game_blocks_red_png__WEBPACK_IMPORTED_MODULE_9__,
    YellowBlock: _img_game_blocks_yellow_png__WEBPACK_IMPORTED_MODULE_7__,
    Bonus: _img_booster_bonus_png__WEBPACK_IMPORTED_MODULE_10__,
    SelectedBonus: _img_booster_selected_bonus_png__WEBPACK_IMPORTED_MODULE_11__,
    MoneyBlock: _img_booster_money_png__WEBPACK_IMPORTED_MODULE_12__,
    // SelectedBlueBlock,
    // SelectedGreenBlock,
    // SelectedPurpleBlock,
    // SelectedRedBlock,
    // SelectedYellowBlock,
});


/***/ }),

/***/ "./src/ts/block.ts":
/*!*************************!*\
  !*** ./src/ts/block.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/ts/utils.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ "./src/ts/types.ts");


var Block = /** @class */ (function () {
    function Block(colors) {
        this._selected = false;
        this._occupied = false;
        this._x = 0;
        this._y = 0;
        this._oldY = 0;
        this._height = 0;
        this._width = 0;
        this._animationVelocity = 10;
        var colorNumber = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getRandomValue)(colors);
        this._color = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.chooseColor)(colorNumber);
        this._oldColor = this._color;
    }
    Block.prototype.init = function (position, size) {
        this.position = position;
        this._oldY = position.y;
        this.size = size;
    };
    Block.prototype.getColorImageName = function () {
        // return this.selected ? `Selected${this.color}` : this.color;
        return this._color;
    };
    Block.prototype.resize = function (resizeType) {
        var Zoom = _types__WEBPACK_IMPORTED_MODULE_1__.ResizeType.Zoom, Shrink = _types__WEBPACK_IMPORTED_MODULE_1__.ResizeType.Shrink;
        switch (resizeType) {
            case Shrink:
                if (this._height > 0)
                    this._height -= this._animationVelocity;
                else
                    this._height = 0;
                if (this._width > 0)
                    this._width -= this._animationVelocity;
                else
                    this._width = 0;
                break;
            case Zoom:
                this._height += this._animationVelocity;
                this._width += this._animationVelocity;
                break;
            default:
                throw new Error('Unknown resize type');
        }
    };
    Block.prototype.move = function (moveType, velocity) {
        var Up = _types__WEBPACK_IMPORTED_MODULE_1__.Direction.Up, Right = _types__WEBPACK_IMPORTED_MODULE_1__.Direction.Right, Left = _types__WEBPACK_IMPORTED_MODULE_1__.Direction.Left, Down = _types__WEBPACK_IMPORTED_MODULE_1__.Direction.Down;
        switch (moveType) {
            case Up:
                this._y -= this._animationVelocity;
                break;
            case Right:
                this._x += this._animationVelocity;
                break;
            case Left:
                this._x -= this._animationVelocity;
                break;
            case Down:
                this._y += velocity || this._animationVelocity;
                break;
            default:
                throw new Error('Unknown move type');
        }
    };
    Object.defineProperty(Block.prototype, "x", {
        get: function () {
            return this._x;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Block.prototype, "y", {
        get: function () {
            return this._y;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Block.prototype, "height", {
        get: function () {
            return this._height;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Block.prototype, "width", {
        get: function () {
            return this._width;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Block.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (color) {
            this._color = color;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Block.prototype, "oldColor", {
        get: function () {
            return this._oldColor;
        },
        set: function (color) {
            this._oldColor = color;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Block.prototype, "oldY", {
        get: function () {
            return this._oldY;
        },
        set: function (y) {
            this._oldY = y;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Block.prototype, "position", {
        get: function () {
            return { x: this._x, y: this._y };
        },
        set: function (position) {
            this._x = position.x;
            this._y = position.y;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Block.prototype, "size", {
        get: function () {
            return { width: this._width, height: this._height };
        },
        set: function (size) {
            this._height = size.height;
            this._width = size.width;
        },
        enumerable: false,
        configurable: true
    });
    Block.prototype.toggleSelect = function () {
        this._selected = !this._selected;
    };
    Block.prototype.isSelected = function () {
        return this._selected;
    };
    Object.defineProperty(Block.prototype, "occupied", {
        set: function (ocp) {
            this._occupied = ocp;
        },
        enumerable: false,
        configurable: true
    });
    Block.prototype.toggleOccupied = function () {
        this._occupied = !this._occupied;
    };
    Block.prototype.isOccupied = function () {
        return this._occupied;
    };
    return Block;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Block);


/***/ }),

/***/ "./src/ts/constants.ts":
/*!*****************************!*\
  !*** ./src/ts/constants.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "POINTS_PER_TURN": () => (/* binding */ POINTS_PER_TURN),
/* harmony export */   "IMAGE_SIZE_COEFFICIENT": () => (/* binding */ IMAGE_SIZE_COEFFICIENT),
/* harmony export */   "TELEPORT_COST": () => (/* binding */ TELEPORT_COST),
/* harmony export */   "MONEY": () => (/* binding */ MONEY)
/* harmony export */ });
var POINTS_PER_TURN = 5;
var IMAGE_SIZE_COEFFICIENT = 4;
var TELEPORT_COST = 5;
var MONEY = 20;


/***/ }),

/***/ "./src/ts/game.ts":
/*!************************!*\
  !*** ./src/ts/game.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _world__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./world */ "./src/ts/world.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/ts/utils.ts");
/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./input */ "./src/ts/input.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var Game = /** @class */ (function () {
    function Game(view, n, m, c, k, s, x, y) {
        this._view = view;
        var gridInfo = {
            blockColors: (0,_utils__WEBPACK_IMPORTED_MODULE_1__.chooseColors)(c),
            n: n,
            m: m,
            k: k,
            minStirringAmount: s,
        };
        this._world = new _world__WEBPACK_IMPORTED_MODULE_0__["default"](gridInfo, x, y);
        this._input = new _input__WEBPACK_IMPORTED_MODULE_2__["default"]();
        this.loop = this.loop.bind(this);
    }
    Game.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._view.init(this._world)];
                    case 1:
                        _a.sent();
                        this._input.init();
                        return [2 /*return*/];
                }
            });
        });
    };
    Game.prototype.start = function () {
        requestAnimationFrame(this.loop);
    };
    Game.prototype.loop = function () {
        this._world.update(this._input);
        if (this._input.x !== 0 && this._input.y !== 0)
            this._input.coordinates = { x: 0, y: 0 };
        this._view.update(this._world);
        requestAnimationFrame(this.loop);
    };
    return Game;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Game);


/***/ }),

/***/ "./src/ts/grid.ts":
/*!************************!*\
  !*** ./src/ts/grid.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block */ "./src/ts/block.ts");

var Grid = /** @class */ (function () {
    function Grid(gridInfo) {
        this._blockLayout = [];
        this._itemHeight = 0;
        this._itemWidth = 0;
        this._x = 0;
        this._y = 0;
        this._height = 0;
        this._width = 0;
        this._gridInfo = gridInfo;
        this.createLayout();
        var s = gridInfo.minStirringAmount;
        while (!this.checkLayout() && s > 0) {
            this.createLayout();
            s -= 1;
        }
        if (s === 0) {
            console.log('Game Over');
        }
    }
    Grid.prototype.init = function (position, size, itemSize) {
        this.position = position;
        this.size = size;
        this.itemSize = itemSize;
    };
    Grid.prototype.createLayout = function () {
        var _a = this.gridInfo, n = _a.n, m = _a.m, blockColors = _a.blockColors;
        var layout = [];
        for (var i = 0; i < n; i += 1) {
            layout[i] = [];
            for (var j = 0; j < m; j += 1) {
                layout[i][j] = new _block__WEBPACK_IMPORTED_MODULE_0__["default"](blockColors);
            }
        }
        this._blockLayout = layout;
    };
    Grid.prototype.checkLayout = function () {
        var m = this._gridInfo.m;
        var layout = this._blockLayout;
        for (var i = 0; i < m - 1; i += 1) {
            var rowList = layout[i].map(function (block) { return block.color; });
            var rowSet = new Set(rowList);
            if (rowSet.size < rowList.length)
                return true;
        }
        return false;
        // TODO add check for columns
    };
    Object.defineProperty(Grid.prototype, "n", {
        get: function () {
            return this._gridInfo.n;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Grid.prototype, "m", {
        get: function () {
            return this._gridInfo.m;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Grid.prototype, "blockLayout", {
        get: function () {
            return this._blockLayout;
        },
        set: function (layout) {
            this._blockLayout = layout;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Grid.prototype, "gridInfo", {
        get: function () {
            return this._gridInfo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Grid.prototype, "x", {
        get: function () {
            return this._x;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Grid.prototype, "y", {
        get: function () {
            return this._y;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Grid.prototype, "height", {
        get: function () {
            return this._height;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Grid.prototype, "width", {
        get: function () {
            return this._width;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Grid.prototype, "itemHeight", {
        get: function () {
            return this._itemHeight;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Grid.prototype, "itemWidth", {
        get: function () {
            return this._itemWidth;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Grid.prototype, "itemSize", {
        get: function () {
            return { width: this._itemWidth, height: this._itemHeight };
        },
        set: function (size) {
            this._itemWidth = size.width;
            this._itemHeight = size.height;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Grid.prototype, "position", {
        set: function (position) {
            this._x = position.x;
            this._y = position.y;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Grid.prototype, "size", {
        set: function (size) {
            this._width = size.width;
            this._height = size.height;
        },
        enumerable: false,
        configurable: true
    });
    return Grid;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Grid);


/***/ }),

/***/ "./src/ts/input.ts":
/*!*************************!*\
  !*** ./src/ts/input.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Input = /** @class */ (function () {
    function Input() {
        this._x = 0;
        this._y = 0;
        this.init();
    }
    Input.prototype.init = function () {
        var _this = this;
        document.addEventListener('mousedown', function (e) {
            _this._x = e.offsetX;
            _this._y = e.offsetY;
        });
    };
    Object.defineProperty(Input.prototype, "x", {
        get: function () {
            return this._x;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Input.prototype, "y", {
        get: function () {
            return this._y;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Input.prototype, "coordinates", {
        set: function (cr) {
            this._x = cr.x;
            this._y = cr.y;
        },
        enumerable: false,
        configurable: true
    });
    return Input;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Input);


/***/ }),

/***/ "./src/ts/progressBar.ts":
/*!*******************************!*\
  !*** ./src/ts/progressBar.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./src/ts/types.ts");

var ProgressBar = /** @class */ (function () {
    function ProgressBar() {
        this._x = 0;
        this._currentX = 0;
        this._endX = 0;
        this._velocity = 1;
        this._y = 0;
        this._direction = _types__WEBPACK_IMPORTED_MODULE_0__.Direction.Right;
    }
    ProgressBar.prototype.init = function (startX, width, y, targetPoints) {
        this._x = startX;
        if (this._direction === _types__WEBPACK_IMPORTED_MODULE_0__.Direction.Right) {
            this._currentX = startX;
            this._endX = startX + width;
        }
        else {
            this._currentX = startX + width;
            this._endX = startX;
        }
        this._y = y;
        this._velocity = ProgressBar.calcVelocity(width, targetPoints);
    };
    ProgressBar.calcVelocity = function (width, targetPoints) {
        return width / targetPoints;
    };
    ProgressBar.prototype.moveRight = function () {
        if (this._currentX >= this._endX)
            return;
        this._currentX += this._velocity;
    };
    ProgressBar.prototype.moveLeft = function () {
        this._currentX -= this._velocity;
    };
    ProgressBar.prototype.move = function () {
        if (this.direction === _types__WEBPACK_IMPORTED_MODULE_0__.Direction.Left)
            this.moveLeft();
        else
            this.moveRight();
    };
    Object.defineProperty(ProgressBar.prototype, "currentPosition", {
        get: function () {
            return { x: this._currentX, y: this._y };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProgressBar.prototype, "velocity", {
        set: function (v) {
            this._velocity = v;
        },
        enumerable: false,
        configurable: true
    });
    ProgressBar.prototype.setVelocityByWidth = function (width, targetPoints) {
        this._velocity = ProgressBar.calcVelocity(width, targetPoints);
    };
    Object.defineProperty(ProgressBar.prototype, "direction", {
        set: function (direction) {
            this._direction = direction;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProgressBar.prototype, "x", {
        set: function (start) {
            this._x = start;
            this._currentX = start;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProgressBar.prototype, "EndX", {
        set: function (x) {
            this._endX = x;
        },
        enumerable: false,
        configurable: true
    });
    ProgressBar.prototype.setEndXByWidth = function (width) {
        this._endX = this._x + width;
    };
    Object.defineProperty(ProgressBar.prototype, "currentX", {
        set: function (width) {
            this._currentX = this._x + width;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProgressBar.prototype, "width", {
        get: function () {
            return this._currentX - this._x;
        },
        enumerable: false,
        configurable: true
    });
    return ProgressBar;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProgressBar);


/***/ }),

/***/ "./src/ts/score.ts":
/*!*************************!*\
  !*** ./src/ts/score.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Score = /** @class */ (function () {
    function Score(targetPoints, targetMoves) {
        this._points = 0;
        this._moves = 0;
        this._targetPoints = 0;
        this._targetMoves = 0;
        this._targetPoints = targetPoints;
        this._moves = targetMoves;
    }
    Object.defineProperty(Score.prototype, "points", {
        get: function () {
            return this._points;
        },
        enumerable: false,
        configurable: true
    });
    Score.prototype.increasePoints = function () {
        this._points += 1;
    };
    Object.defineProperty(Score.prototype, "moves", {
        get: function () {
            return this._moves;
        },
        enumerable: false,
        configurable: true
    });
    Score.prototype.decreaseMovesNum = function () {
        this._moves -= 1;
    };
    Object.defineProperty(Score.prototype, "targetPoints", {
        get: function () {
            return this._targetPoints;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Score.prototype, "targetMoves", {
        get: function () {
            return this._targetMoves;
        },
        enumerable: false,
        configurable: true
    });
    return Score;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Score);


/***/ }),

/***/ "./src/ts/types.ts":
/*!*************************!*\
  !*** ./src/ts/types.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResizeType": () => (/* binding */ ResizeType),
/* harmony export */   "Direction": () => (/* binding */ Direction)
/* harmony export */ });
var ResizeType;
(function (ResizeType) {
    ResizeType[ResizeType["Zoom"] = 0] = "Zoom";
    ResizeType[ResizeType["Shrink"] = 1] = "Shrink";
})(ResizeType || (ResizeType = {}));
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Right"] = 1] = "Right";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Left"] = 3] = "Left";
})(Direction || (Direction = {}));
// export type Score = {
// 	points: number;
// 	movesNumber: number;
// };


/***/ }),

/***/ "./src/ts/utils.ts":
/*!*************************!*\
  !*** ./src/ts/utils.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getRandomInteger": () => (/* binding */ getRandomInteger),
/* harmony export */   "chooseColors": () => (/* binding */ chooseColors),
/* harmony export */   "getRandomValue": () => (/* binding */ getRandomValue),
/* harmony export */   "chooseColor": () => (/* binding */ chooseColor)
/* harmony export */ });
function getRandomInteger(min, max) {
    return Math.floor(min + Math.random() * (max + 1 - min));
}
var COLORS_NUM = 5;
function chooseColors(amount) {
    if (amount === COLORS_NUM) {
        return Array.from({ length: COLORS_NUM }, function (v, k) { return k + 1; });
    }
    return Array.from({ length: amount }, function () { return getRandomInteger(0, amount - 1); });
    // TODO check repeats
}
function getRandomValue(array) {
    return array[Math.floor(Math.random() * array.length)];
}
function chooseColor(colorNumber) {
    switch (colorNumber) {
        case 1:
            return 'BlueBlock';
        case 2:
            return 'GreenBlock';
        case 3:
            return 'PurpleBlock';
        case 4:
            return 'RedBlock';
        case 5:
            return 'YellowBlock';
        default:
            return 'BlueBlock';
    }
}


/***/ }),

/***/ "./src/ts/view.ts":
/*!************************!*\
  !*** ./src/ts/view.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets */ "./src/ts/assets.ts");
/* harmony import */ var _ImageRepository__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ImageRepository */ "./src/ts/ImageRepository.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./src/ts/constants.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var View = /** @class */ (function () {
    function View(canvas) {
        this._gameImages = {};
        this._canvas = canvas;
        this._ctx = canvas.getContext('2d');
    }
    View.prototype.init = function (world) {
        return __awaiter(this, void 0, void 0, function () {
            var imageRepository, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        imageRepository = new _ImageRepository__WEBPACK_IMPORTED_MODULE_1__["default"](_assets__WEBPACK_IMPORTED_MODULE_0__["default"]);
                        _a = this;
                        return [4 /*yield*/, imageRepository.loadImages()];
                    case 1:
                        _a._gameImages = _b.sent();
                        this.renderGameScene();
                        this.initGrid(world);
                        this.initProgressBar(world);
                        return [2 /*return*/];
                }
            });
        });
    };
    View.prototype.update = function (world) {
        this.clearScreen();
        this.renderGameScene();
        this.renderGrid(world);
        this.renderScore(world);
        this.renderProgressBar(world);
        this.renderBonus();
    };
    View.prototype.renderGameScene = function () {
        var _a = this._canvas, width = _a.width, height = _a.height;
        var _b = this._gameImages, HeaderPanel = _b.HeaderPanel, MoneyBlock = _b.MoneyBlock;
        this._ctx.fillStyle = '#a1a1a1';
        this._ctx.fillRect(0, 0, width, height);
        var dx = width / 2 - HeaderPanel.width / _constants__WEBPACK_IMPORTED_MODULE_2__.IMAGE_SIZE_COEFFICIENT / 2;
        this._ctx.drawImage(HeaderPanel, dx, 0, HeaderPanel.width / _constants__WEBPACK_IMPORTED_MODULE_2__.IMAGE_SIZE_COEFFICIENT, HeaderPanel.height / _constants__WEBPACK_IMPORTED_MODULE_2__.IMAGE_SIZE_COEFFICIENT);
        this._ctx.drawImage(MoneyBlock, dx + 35, HeaderPanel.height / _constants__WEBPACK_IMPORTED_MODULE_2__.IMAGE_SIZE_COEFFICIENT / 10, MoneyBlock.width / _constants__WEBPACK_IMPORTED_MODULE_2__.IMAGE_SIZE_COEFFICIENT, MoneyBlock.height / _constants__WEBPACK_IMPORTED_MODULE_2__.IMAGE_SIZE_COEFFICIENT);
        this._ctx.fillStyle = '#fff';
        this._ctx.font = '20px Marvin';
        this._ctx.fillText('прогресс', width / 2 - 70, 23);
        this._ctx.fillText("" + _constants__WEBPACK_IMPORTED_MODULE_2__.MONEY, dx + MoneyBlock.width / _constants__WEBPACK_IMPORTED_MODULE_2__.IMAGE_SIZE_COEFFICIENT / 1.3, HeaderPanel.height / _constants__WEBPACK_IMPORTED_MODULE_2__.IMAGE_SIZE_COEFFICIENT / 2);
    };
    View.prototype.renderScore = function (world) {
        var scorePanelImage = this._gameImages.ScorePanel;
        var dx = this._canvas.width / 2 + 125;
        var dy = this._gameImages.HeaderPanel.height / _constants__WEBPACK_IMPORTED_MODULE_2__.IMAGE_SIZE_COEFFICIENT + 54;
        var scoreTextDX = dx + scorePanelImage.width / _constants__WEBPACK_IMPORTED_MODULE_2__.IMAGE_SIZE_COEFFICIENT / 2;
        this._ctx.drawImage(scorePanelImage, dx, dy, scorePanelImage.width / _constants__WEBPACK_IMPORTED_MODULE_2__.IMAGE_SIZE_COEFFICIENT, scorePanelImage.height / _constants__WEBPACK_IMPORTED_MODULE_2__.IMAGE_SIZE_COEFFICIENT);
        this._ctx.font = '20px Marvin';
        var text = 'время:';
        this._ctx.fillText('время:', scoreTextDX - this._ctx.measureText(text).width / 2, dy);
        this._ctx.font = '34px Marvin';
        text = "" + world.score.points;
        this._ctx.fillText(text, scoreTextDX - this._ctx.measureText(text).width / 2, dy + scorePanelImage.height / _constants__WEBPACK_IMPORTED_MODULE_2__.IMAGE_SIZE_COEFFICIENT / 1.16);
        this._ctx.font = '52px Marvin';
        text = "" + world.score.moves;
        this._ctx.fillText(text, scoreTextDX - this._ctx.measureText(text).width / 2, dy + scorePanelImage.height / _constants__WEBPACK_IMPORTED_MODULE_2__.IMAGE_SIZE_COEFFICIENT / 2.5);
        this._ctx.font = '20px Marvin';
        text = 'очки:';
        this._ctx.fillText(text, scoreTextDX - this._ctx.measureText(text).width / 2, dy + scorePanelImage.height / _constants__WEBPACK_IMPORTED_MODULE_2__.IMAGE_SIZE_COEFFICIENT / 1.4);
    };
    View.prototype.renderBonus = function () {
        var _a = this._gameImages, ScorePanel = _a.ScorePanel, HeaderPanel = _a.HeaderPanel, Bonus = _a.Bonus, SelectedBonus = _a.SelectedBonus;
        var dx = this._canvas.width / 2 + 125;
        var dy = HeaderPanel.height / _constants__WEBPACK_IMPORTED_MODULE_2__.IMAGE_SIZE_COEFFICIENT + 54 + ScorePanel.height / _constants__WEBPACK_IMPORTED_MODULE_2__.IMAGE_SIZE_COEFFICIENT;
        var scoreTextDX = dx + ScorePanel.width / _constants__WEBPACK_IMPORTED_MODULE_2__.IMAGE_SIZE_COEFFICIENT / 2;
        this._ctx.font = '20px Marvin';
        var text = 'бонус';
        this._ctx.fillText(text, scoreTextDX - this._ctx.measureText(text).width / 2, dy + 50);
        this._ctx.drawImage(Bonus, scoreTextDX - Bonus.width / 3 / 2, dy + 50, Bonus.width / 3, Bonus.height / 3);
        text = "" + _constants__WEBPACK_IMPORTED_MODULE_2__.TELEPORT_COST;
        this._ctx.fillText(text, scoreTextDX - this._ctx.measureText(text).width / 2 - 5, dy + Bonus.height / 3 + 20);
    };
    View.prototype.renderGrid = function (world) {
        this._ctx.drawImage(this._gameImages.GamePanel, this._canvas.width / 2 - this._gameImages.GamePanel.width / _constants__WEBPACK_IMPORTED_MODULE_2__.IMAGE_SIZE_COEFFICIENT, this._gameImages.HeaderPanel.height / _constants__WEBPACK_IMPORTED_MODULE_2__.IMAGE_SIZE_COEFFICIENT + 30, this._gameImages.GamePanel.width / _constants__WEBPACK_IMPORTED_MODULE_2__.IMAGE_SIZE_COEFFICIENT, this._gameImages.GamePanel.height / _constants__WEBPACK_IMPORTED_MODULE_2__.IMAGE_SIZE_COEFFICIENT);
        var desk = world.grid.blockLayout;
        for (var i = 0; i < world.grid.n; i += 1) {
            for (var j = 0; j < world.grid.m; j += 1) {
                var _a = desk[i][j].position, x = _a.x, y = _a.y;
                var _b = desk[i][j].size, width = _b.width, height = _b.height;
                this._ctx.drawImage(this._gameImages[desk[i][j].getColorImageName()], x, y, width, height);
            }
        }
    };
    View.prototype.renderProgressBar = function (world) {
        var _a = this._gameImages, ProgressBlock = _a.ProgressBlock, ProgressScale = _a.ProgressScale;
        var dx = this._canvas.width / 2 - ProgressScale.width / _constants__WEBPACK_IMPORTED_MODULE_2__.IMAGE_SIZE_COEFFICIENT / 2 - 24;
        var dw = ProgressBlock.width / _constants__WEBPACK_IMPORTED_MODULE_2__.IMAGE_SIZE_COEFFICIENT;
        this._ctx.drawImage(ProgressBlock, dx, 28, dw, ProgressBlock.height / _constants__WEBPACK_IMPORTED_MODULE_2__.IMAGE_SIZE_COEFFICIENT);
        this._ctx.drawImage(ProgressScale, dx, 28, world.progressBar.width, ProgressScale.height / _constants__WEBPACK_IMPORTED_MODULE_2__.IMAGE_SIZE_COEFFICIENT + 1);
    };
    View.prototype.initGrid = function (world) {
        var gameGrid = world.grid;
        var desk = gameGrid.blockLayout;
        var startX = this._canvas.width / 2 - this._gameImages.GamePanel.width / 4 + 7;
        var startY = this._gameImages.HeaderPanel.height / 4 + 30 + 7;
        var blockWidth = this._gameImages[desk[0][0].getColorImageName()].width / 3.03;
        var blockHeight = this._gameImages[desk[0][0].getColorImageName()].height / 3.03;
        gameGrid.init({ x: startX + blockWidth * gameGrid.m + 5, y: startY }, { width: blockWidth * gameGrid.m + 5, height: blockHeight * gameGrid.n }, { width: blockWidth, height: blockHeight });
        for (var i = 0; i < gameGrid.n; i += 1) {
            for (var j = 0; j < gameGrid.m; j += 1) {
                this._ctx.drawImage(this._gameImages[desk[i][j].getColorImageName()], startX + blockWidth * j, startY + blockHeight * i, blockWidth, blockHeight);
                desk[i][j].init({ x: startX + blockWidth * j, y: startY + blockHeight * i }, { width: blockWidth, height: blockHeight });
            }
        }
        gameGrid.blockLayout = desk;
        world.grid = gameGrid;
    };
    View.prototype.initProgressBar = function (world) {
        var progressBlock = this._gameImages.ProgressBlock;
        world.progressBar.init(this._canvas.width / 2 - progressBlock.width / _constants__WEBPACK_IMPORTED_MODULE_2__.IMAGE_SIZE_COEFFICIENT / 2 - 24, progressBlock.width / _constants__WEBPACK_IMPORTED_MODULE_2__.IMAGE_SIZE_COEFFICIENT, 28, world.score.targetPoints);
    };
    View.prototype.clearScreen = function () {
        this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
    };
    return View;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (View);


/***/ }),

/***/ "./src/ts/world.ts":
/*!*************************!*\
  !*** ./src/ts/world.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./grid */ "./src/ts/grid.ts");
/* harmony import */ var _progressBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./progressBar */ "./src/ts/progressBar.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./src/ts/utils.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./types */ "./src/ts/types.ts");
/* harmony import */ var _score__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./score */ "./src/ts/score.ts");
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};





var Stage;
(function (Stage) {
    Stage[Stage["Selecting"] = 0] = "Selecting";
    Stage[Stage["Shading"] = 1] = "Shading";
    Stage[Stage["Deleting"] = 2] = "Deleting";
    Stage[Stage["Moving"] = 3] = "Moving";
    Stage[Stage["Recovery"] = 4] = "Recovery";
})(Stage || (Stage = {}));
var World = /** @class */ (function () {
    function World(gridInfo, x, y) {
        this.deskPositionTempList = [];
        this.deskPositionList = [];
        this._grid = new _grid__WEBPACK_IMPORTED_MODULE_0__["default"](gridInfo);
        this._progressBar = new _progressBar__WEBPACK_IMPORTED_MODULE_1__["default"]();
        this._score = new _score__WEBPACK_IMPORTED_MODULE_4__["default"](x, y);
        this.stage = Stage.Selecting;
    }
    World.prototype.update = function (userInput) {
        switch (this.stage) {
            case Stage.Selecting:
                this.handleSelect(userInput);
                break;
            case Stage.Shading:
                this.handleShading();
                break;
            case Stage.Deleting:
                this.handleDeleting();
                break;
            case Stage.Moving:
                this.handleMoving();
                break;
            case Stage.Recovery:
                this.handleRecovery();
                break;
            default:
                throw new Error('Unknown stage');
        }
    };
    World.prototype.handleSelect = function (userInput) {
        var uX = userInput.x;
        var uY = userInput.y;
        if (uX !== 0 && uY !== 0) {
            var _a = this._grid, x = _a.x, y = _a.y, n = _a.n, m = _a.m, width = _a.width, height = _a.height;
            if (uY > y && uY < y + height && uX < x && uX > x - width) {
                var row = Math.floor((uY - y) / (height / n));
                var col = Math.floor((uX - (x - width)) / (width / m));
                var layout = this._grid.blockLayout;
                layout[row][col].toggleSelect();
                this.deskPositionTempList.push([row, col]);
                this.deskPositionList.push([row, col]);
                this.stage = Stage.Shading;
                this._grid.blockLayout = layout;
            }
        }
    };
    World.prototype.handleShading = function () {
        var _this = this;
        if (this.deskPositionTempList.length === 0) {
            if (this.deskPositionList.length === 1) {
                var layout = this.grid.blockLayout;
                layout[this.deskPositionList[0][0]][this.deskPositionList[0][1]].toggleSelect();
                this.grid.blockLayout = layout;
                this.stage = Stage.Selecting;
                this.deskPositionList = [];
                this.deskPositionTempList = [];
            }
            else {
                this.score.decreaseMovesNum();
                this.deskPositionTempList = this.deskPositionList;
                this.stage = Stage.Deleting;
            }
            return;
        }
        var positionList = [];
        this.deskPositionTempList.forEach(function (_a) {
            var row = _a[0], col = _a[1];
            positionList = __spreadArray(__spreadArray([], positionList, true), _this.selectNeighbors(row, col, _this._grid.blockLayout), true);
        });
        this.deskPositionList = __spreadArray(__spreadArray([], this.deskPositionList, true), positionList, true);
        this.deskPositionTempList = positionList;
    };
    World.prototype.selectNeighbors = function (row, col, desk) {
        var _this = this;
        var deskPositionTempList = [];
        Object.values(_types__WEBPACK_IMPORTED_MODULE_3__.Direction).forEach(function (direction) {
            var deskPositionItem = _this.findNeighbor(direction, row, col, desk, true);
            if (typeof deskPositionItem.position[0] !== 'undefined') {
                deskPositionTempList.push(deskPositionItem.position);
            }
        });
        return deskPositionTempList;
    };
    // private checkNeighbors(row: number, col: number, desk: Block[][]): boolean {
    // 	for (let i = 0; i < Object.values(Direction).length; i += 1) {
    // 		const deskPositionItem = this.findNeighbor(Object.values(Direction)[i], row, col, desk, true);
    // 		if (typeof deskPositionItem.position[0] !== 'undefined') {
    // 			return true;
    // 		}
    // 	}
    // 	return false;
    // }
    World.prototype.findNeighbor = function (direction, row, col, desk, select) {
        if (select === void 0) { select = false; }
        var Up = _types__WEBPACK_IMPORTED_MODULE_3__.Direction.Up, Right = _types__WEBPACK_IMPORTED_MODULE_3__.Direction.Right, Left = _types__WEBPACK_IMPORTED_MODULE_3__.Direction.Left, Down = _types__WEBPACK_IMPORTED_MODULE_3__.Direction.Down;
        switch (direction) {
            case Up:
                if (row !== 0 && desk[row][col].color === desk[row - 1][col].color && !desk[row - 1][col].isSelected()) {
                    if (select)
                        desk[row - 1][col].toggleSelect();
                    return { position: [row - 1, col], desk: desk };
                }
                return { position: [undefined, undefined], desk: desk };
            case Right:
                if (col !== this._grid.m - 1 && desk[row][col].color === desk[row][col + 1].color && !desk[row][col + 1].isSelected()) {
                    if (select)
                        desk[row][col + 1].toggleSelect();
                    return { position: [row, col + 1], desk: desk };
                }
                return { position: [undefined, undefined], desk: desk };
            case Left:
                if (col !== 0 && desk[row][col].color === desk[row][col - 1].color && !desk[row][col - 1].isSelected()) {
                    if (select)
                        desk[row][col - 1].toggleSelect();
                    return { position: [row, col - 1], desk: desk };
                }
                return { position: [undefined, undefined], desk: desk };
            case Down:
                if (row !== this._grid.n - 1 && desk[row][col].color === desk[row + 1][col].color && !desk[row + 1][col].isSelected()) {
                    if (select)
                        desk[row + 1][col].toggleSelect();
                    return { position: [row + 1, col], desk: desk };
                }
                return { position: [undefined, undefined], desk: desk };
            default:
                return { position: [undefined, undefined], desk: desk };
        }
    };
    World.prototype.handleDeleting = function () {
        if (this.deskPositionTempList.length === 0) {
            this.stage = Stage.Moving;
            this.deskPositionTempList = [];
            return;
        }
        var _a = this.deskPositionTempList[0], row = _a[0], col = _a[1];
        var desk = this._grid.blockLayout;
        if (desk[row][col].height === 0 && desk[row][col].width === 0) {
            this._score.increasePoints();
            this._progressBar.move();
            this.deskPositionTempList = this.deskPositionTempList.slice(1);
            return;
        }
        desk[row][col].resize(_types__WEBPACK_IMPORTED_MODULE_3__.ResizeType.Shrink);
        this._grid.blockLayout = desk;
    };
    World.prototype.handleMoving = function () {
        if (this.deskPositionTempList.length >= this.deskPositionList.length) {
            this.stage = Stage.Recovery;
            return;
        }
        var desk = this._grid.blockLayout;
        var _loop_1 = function (col) {
            var rows = this_1.deskPositionList
                .filter(function (_a) {
                var r = _a[0], c = _a[1];
                return c === col;
            })
                .map(function (_a) {
                var row = _a[0];
                return row;
            })
                .sort();
            var velocity = 1;
            if (rows.length === 1 && rows[0] === 0) {
                this_1.deskPositionTempList.push([rows[0], col]);
                return "break";
            }
            for (var k = rows.length - 1; k >= 0; k -= 1) {
                if (rows[k] - 1 < 0)
                    break;
                if (desk[rows[k] - 1][col].y >= desk[rows[k]][col].y) {
                    this_1.deskPositionTempList.push([rows[k], col]);
                    break;
                }
                for (var i = rows[k] - 1; i >= 0; i -= 1) {
                    desk[i][col].move(_types__WEBPACK_IMPORTED_MODULE_3__.Direction.Down, velocity);
                }
            }
        };
        var this_1 = this;
        for (var col = 0; col < this._grid.m; col += 1) {
            var state_1 = _loop_1(col);
            if (state_1 === "break")
                break;
        }
        this._grid.blockLayout = desk;
    };
    World.prototype.handleRecovery = function () {
        var desk = this._grid.blockLayout;
        for (var i = this._grid.n - 1; i >= 0; i -= 1) {
            for (var j = this._grid.m - 1; j >= 0; j -= 1) {
                if (desk[i][j].y !== desk[i][j].oldY || desk[i][j].isSelected()) {
                    var newRow = -1000;
                    if (desk[i][j].isSelected()) {
                        desk[i][j].toggleSelect();
                        for (var r = i - 1; r >= 0; r -= 1) {
                            if (desk[i][j].oldY - desk[r][j].y < desk[i][j].height && desk[r][j].width !== 0 && !desk[r][j].isSelected() && !desk[r][j].isOccupied()) {
                                desk[r][j].occupied = true;
                                newRow = r;
                            }
                        }
                    }
                    else {
                        newRow = i - Math.floor((desk[i][j].y - desk[i][j].oldY) / this.grid.itemHeight);
                    }
                    if (newRow >= 0) {
                        desk[i][j].color = desk[newRow][j].oldColor;
                        desk[i][j].oldColor = desk[newRow][j].oldColor;
                    }
                    else {
                        var randomColor = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.chooseColor)((0,_utils__WEBPACK_IMPORTED_MODULE_2__.getRandomValue)(this._grid.gridInfo.blockColors));
                        desk[i][j].color = randomColor;
                        desk[i][j].oldColor = randomColor;
                    }
                    desk[i][j].size = this.grid.itemSize;
                    desk[i][j].position = { x: desk[i][j].x, y: desk[i][j].oldY };
                    if (desk[i][j].isOccupied())
                        desk[i][j].occupied = false;
                }
            }
        }
        this._grid.blockLayout = desk;
        this.deskPositionList = [];
        this.deskPositionTempList = [];
        this.stage = Stage.Selecting;
    };
    Object.defineProperty(World.prototype, "grid", {
        get: function () {
            return this._grid;
        },
        set: function (grid) {
            this._grid = grid;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(World.prototype, "score", {
        get: function () {
            return this._score;
        },
        set: function (score) {
            this._score = score;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(World.prototype, "progressBar", {
        get: function () {
            return this._progressBar;
        },
        set: function (prBar) {
            this._progressBar = prBar;
        },
        enumerable: false,
        configurable: true
    });
    return World;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (World);


/***/ }),

/***/ "./src/img/booster/bonus.png":
/*!***********************************!*\
  !*** ./src/img/booster/bonus.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7cfcb9d35d2073fa007d.png";

/***/ }),

/***/ "./src/img/booster/money.png":
/*!***********************************!*\
  !*** ./src/img/booster/money.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "aa553df701d11b62a953.png";

/***/ }),

/***/ "./src/img/booster/selected_bonus.png":
/*!********************************************!*\
  !*** ./src/img/booster/selected_bonus.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6d2e4fd300a70e01a16b.png";

/***/ }),

/***/ "./src/img/game/blocks/blue.png":
/*!**************************************!*\
  !*** ./src/img/game/blocks/blue.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cc8e9f540f0cda050429.png";

/***/ }),

/***/ "./src/img/game/blocks/green.png":
/*!***************************************!*\
  !*** ./src/img/game/blocks/green.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dc05494d789198dd8ca7.png";

/***/ }),

/***/ "./src/img/game/blocks/purple.png":
/*!****************************************!*\
  !*** ./src/img/game/blocks/purple.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b62773b41ba778d151de.png";

/***/ }),

/***/ "./src/img/game/blocks/red.png":
/*!*************************************!*\
  !*** ./src/img/game/blocks/red.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3fa9ede8daa4b81ac014.png";

/***/ }),

/***/ "./src/img/game/blocks/yellow.png":
/*!****************************************!*\
  !*** ./src/img/game/blocks/yellow.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5ff7735f11babf7c6b19.png";

/***/ }),

/***/ "./src/img/game/panel.png":
/*!********************************!*\
  !*** ./src/img/game/panel.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "19b3500d5889ddd3168c.png";

/***/ }),

/***/ "./src/img/progress/bar/block.png":
/*!****************************************!*\
  !*** ./src/img/progress/bar/block.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2e65fcc0ad8db4e784e2.png";

/***/ }),

/***/ "./src/img/progress/bar/scale.png":
/*!****************************************!*\
  !*** ./src/img/progress/bar/scale.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "43271c8ea7dba4db048d.png";

/***/ }),

/***/ "./src/img/progress/panel2.png":
/*!*************************************!*\
  !*** ./src/img/progress/panel2.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "15a55da38c61dfdc918f.png";

/***/ }),

/***/ "./src/img/score/panel2.png":
/*!**********************************!*\
  !*** ./src/img/score/panel2.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1635080f3a689f296384.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.scss */ "./src/styles/style.scss");
/* harmony import */ var _ts_game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ts/game */ "./src/ts/game.ts");
/* harmony import */ var _ts_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ts/view */ "./src/ts/view.ts");



var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var n = 7;
var m = 7;
var c = 5;
var k = 2;
var s = 3;
var x = 100;
var y = 20;
var game = new _ts_game__WEBPACK_IMPORTED_MODULE_1__["default"](new _ts_view__WEBPACK_IMPORTED_MODULE_2__["default"](canvas), n, m, c, k, s, x, y);
game.init().then(function () { return game.start(); });
console.log(game);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDbkYsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxNQUFNLEdBQUcsVUFBVSxHQUFHLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxVQUFVLEdBQUcsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsTUFBTSxFQUFFLFdBQVcsR0FBRyxRQUFRLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsQ0FBQyxDQUFDO1FBQzVMLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDdkMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDdkMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxFQUFFLE1BQU0sR0FBRyxVQUFVLEdBQUcsQ0FBQyxFQUFFLE1BQU0sR0FBRyxXQUFXLEdBQUcsQ0FBQyxFQUFFLFVBQVUsRUFBRSxXQUFXLENBQUMsQ0FBQztnQkFDbEosSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxNQUFNLEdBQUcsVUFBVSxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsTUFBTSxHQUFHLFdBQVcsR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxVQUFV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QUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7OztBQ2Y2QjtBQUNBO0FBQ0E7QUFFN0IsSUFBTSxNQUFNLEdBQXNCLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDbkUsTUFBTSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDO0FBQ2pDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQztBQUVuQyxJQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDWixJQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDWixJQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDWixJQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDWixJQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDWixJQUFNLENBQUMsR0FBRyxHQUFHLENBQUM7QUFDZCxJQUFNLENBQUMsR0FBRyxFQUFFLENBQUM7QUFFYixJQUFNLElBQUksR0FBRyxJQUFJLGdEQUFJLENBQUMsSUFBSSxnREFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBRTdELElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBTSxXQUFJLENBQUMsS0FBSyxFQUFFLEVBQVosQ0FBWSxDQUFDLENBQUM7QUFFckMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Rlc3QtcHJvamVjdC1ibGFzdC1nYW1lLy4vc3JjL3N0eWxlcy9zdHlsZS5zY3NzP2E1YjQiLCJ3ZWJwYWNrOi8vdGVzdC1wcm9qZWN0LWJsYXN0LWdhbWUvLi9zcmMvdHMvSW1hZ2VSZXBvc2l0b3J5LnRzIiwid2VicGFjazovL3Rlc3QtcHJvamVjdC1ibGFzdC1nYW1lLy4vc3JjL3RzL2Fzc2V0cy50cyIsIndlYnBhY2s6Ly90ZXN0LXByb2plY3QtYmxhc3QtZ2FtZS8uL3NyYy90cy9ibG9jay50cyIsIndlYnBhY2s6Ly90ZXN0LXByb2plY3QtYmxhc3QtZ2FtZS8uL3NyYy90cy9jb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vdGVzdC1wcm9qZWN0LWJsYXN0LWdhbWUvLi9zcmMvdHMvZ2FtZS50cyIsIndlYnBhY2s6Ly90ZXN0LXByb2plY3QtYmxhc3QtZ2FtZS8uL3NyYy90cy9ncmlkLnRzIiwid2VicGFjazovL3Rlc3QtcHJvamVjdC1ibGFzdC1nYW1lLy4vc3JjL3RzL2lucHV0LnRzIiwid2VicGFjazovL3Rlc3QtcHJvamVjdC1ibGFzdC1nYW1lLy4vc3JjL3RzL3Byb2dyZXNzQmFyLnRzIiwid2VicGFjazovL3Rlc3QtcHJvamVjdC1ibGFzdC1nYW1lLy4vc3JjL3RzL3Njb3JlLnRzIiwid2VicGFjazovL3Rlc3QtcHJvamVjdC1ibGFzdC1nYW1lLy4vc3JjL3RzL3R5cGVzLnRzIiwid2VicGFjazovL3Rlc3QtcHJvamVjdC1ibGFzdC1nYW1lLy4vc3JjL3RzL3V0aWxzLnRzIiwid2VicGFjazovL3Rlc3QtcHJvamVjdC1ibGFzdC1nYW1lLy4vc3JjL3RzL3ZpZXcudHMiLCJ3ZWJwYWNrOi8vdGVzdC1wcm9qZWN0LWJsYXN0LWdhbWUvLi9zcmMvdHMvd29ybGQudHMiLCJ3ZWJwYWNrOi8vdGVzdC1wcm9qZWN0LWJsYXN0LWdhbWUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdGVzdC1wcm9qZWN0LWJsYXN0LWdhbWUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Rlc3QtcHJvamVjdC1ibGFzdC1nYW1lL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdGVzdC1wcm9qZWN0LWJsYXN0LWdhbWUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90ZXN0LXByb2plY3QtYmxhc3QtZ2FtZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Rlc3QtcHJvamVjdC1ibGFzdC1nYW1lL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Rlc3QtcHJvamVjdC1ibGFzdC1nYW1lLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCBhc3NldHMgZnJvbSAnLi9hc3NldHMnO1xyXG5pbXBvcnQgeyBBc3NldHMsIEdhbWVJbWFnZXMgfSBmcm9tICcuL3R5cGVzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEltYWdlUmVwb3NpdG9yeSB7XHJcblx0cHJpdmF0ZSBpbWFnZXM6IEFzc2V0cztcclxuXHJcblx0Y29uc3RydWN0b3IoYXNzZXRzOiBBc3NldHMpIHtcclxuXHRcdHRoaXMuaW1hZ2VzID0gYXNzZXRzO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGFzeW5jIGxvYWRJbWFnZXMoKSB7XHJcblx0XHRjb25zdCBpbWFnZXM6IEdhbWVJbWFnZXMgPSB7fTtcclxuXHRcdGZvciAoY29uc3Qga2V5IGluIGFzc2V0cykge1xyXG5cdFx0XHRpbWFnZXNba2V5XSA9IGF3YWl0IHRoaXMubG9hZEltYWdlKFN0cmluZygoYXNzZXRzIGFzIHVua25vd24gYXMgQXNzZXRzKVtrZXkgYXMgc3RyaW5nXSkpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGltYWdlcztcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgYXN5bmMgbG9hZEltYWdlKGltZ1BhdGg6IHN0cmluZykge1xyXG5cdFx0Y29uc3QgaW1nID0gbmV3IEltYWdlKCk7XHJcblx0XHRhd2FpdCB0aGlzLmxvYWQoaW1nLCBpbWdQYXRoKTtcclxuXHRcdHJldHVybiBpbWc7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGFzeW5jIGxvYWQoZWw6IEhUTUxJbWFnZUVsZW1lbnQsIHN0cjogc3RyaW5nKSB7XHJcblx0XHRyZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XHJcblx0XHRcdGVsLnNyYyA9IHN0cjtcclxuXHRcdFx0ZWwuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHJlc29sdmUodGhpcykpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG59XHJcbiIsIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnRcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgSGVhZGVyUGFuZWwgZnJvbSAnLi4vaW1nL3Byb2dyZXNzL3BhbmVsMi5wbmcnO1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IEdhbWVQYW5lbCBmcm9tICcuLi9pbWcvZ2FtZS9wYW5lbC5wbmcnO1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IFNjb3JlUGFuZWwgZnJvbSAnLi4vaW1nL3Njb3JlL3BhbmVsMi5wbmcnO1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IFByb2dyZXNzQmxvY2sgZnJvbSAnLi4vaW1nL3Byb2dyZXNzL2Jhci9ibG9jay5wbmcnO1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IFByb2dyZXNzU2NhbGUgZnJvbSAnLi4vaW1nL3Byb2dyZXNzL2Jhci9zY2FsZS5wbmcnO1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IEJsdWVCbG9jayBmcm9tICcuLi9pbWcvZ2FtZS9ibG9ja3MvYmx1ZS5wbmcnO1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IEdyZWVuQmxvY2sgZnJvbSAnLi4vaW1nL2dhbWUvYmxvY2tzL2dyZWVuLnBuZyc7XHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnRcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgWWVsbG93QmxvY2sgZnJvbSAnLi4vaW1nL2dhbWUvYmxvY2tzL3llbGxvdy5wbmcnO1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IFB1cnBsZUJsb2NrIGZyb20gJy4uL2ltZy9nYW1lL2Jsb2Nrcy9wdXJwbGUucG5nJztcclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCBSZWRCbG9jayBmcm9tICcuLi9pbWcvZ2FtZS9ibG9ja3MvcmVkLnBuZyc7XHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnRcclxuLy8gQHRzLWlnbm9yZVxyXG4vLyBpbXBvcnQgU2VsZWN0ZWRCbHVlQmxvY2sgZnJvbSAnLi4vaW1nL2dhbWUvc2VsZWN0ZWRfYmxvY2tzL2JsdWUucG5nJztcclxuLy8gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxyXG4vLyAvLyBAdHMtaWdub3JlXHJcbi8vIGltcG9ydCBTZWxlY3RlZEdyZWVuQmxvY2sgZnJvbSAnLi4vaW1nL2dhbWUvc2VsZWN0ZWRfYmxvY2tzL2dyZWVuLnBuZyc7XHJcbi8vIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnRcclxuLy8gLy8gQHRzLWlnbm9yZVxyXG4vLyBpbXBvcnQgU2VsZWN0ZWRZZWxsb3dCbG9jayBmcm9tICcuLi9pbWcvZ2FtZS9zZWxlY3RlZF9ibG9ja3MveWVsbG93LnBuZyc7XHJcbi8vIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnRcclxuLy8gLy8gQHRzLWlnbm9yZVxyXG4vLyBpbXBvcnQgU2VsZWN0ZWRQdXJwbGVCbG9jayBmcm9tICcuLi9pbWcvZ2FtZS9zZWxlY3RlZF9ibG9ja3MvcHVycGxlLnBuZyc7XHJcbi8vIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnRcclxuLy8gLy8gQHRzLWlnbm9yZVxyXG4vLyBpbXBvcnQgU2VsZWN0ZWRSZWRCbG9jayBmcm9tICcuLi9pbWcvZ2FtZS9zZWxlY3RlZF9ibG9ja3MvcmVkLnBuZyc7XHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnRcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgQm9udXMgZnJvbSAnLi4vaW1nL2Jvb3N0ZXIvYm9udXMucG5nJztcclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCBTZWxlY3RlZEJvbnVzIGZyb20gJy4uL2ltZy9ib29zdGVyL3NlbGVjdGVkX2JvbnVzLnBuZyc7XHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnRcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgTW9uZXlCbG9jayBmcm9tICcuLi9pbWcvYm9vc3Rlci9tb25leS5wbmcnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG5cdEhlYWRlclBhbmVsLFxyXG5cdEdhbWVQYW5lbCxcclxuXHRTY29yZVBhbmVsLFxyXG5cdFByb2dyZXNzQmxvY2ssXHJcblx0UHJvZ3Jlc3NTY2FsZSxcclxuXHRCbHVlQmxvY2ssXHJcblx0R3JlZW5CbG9jayxcclxuXHRQdXJwbGVCbG9jayxcclxuXHRSZWRCbG9jayxcclxuXHRZZWxsb3dCbG9jayxcclxuXHRCb251cyxcclxuXHRTZWxlY3RlZEJvbnVzLFxyXG5cdE1vbmV5QmxvY2ssXHJcblx0Ly8gU2VsZWN0ZWRCbHVlQmxvY2ssXHJcblx0Ly8gU2VsZWN0ZWRHcmVlbkJsb2NrLFxyXG5cdC8vIFNlbGVjdGVkUHVycGxlQmxvY2ssXHJcblx0Ly8gU2VsZWN0ZWRSZWRCbG9jayxcclxuXHQvLyBTZWxlY3RlZFllbGxvd0Jsb2NrLFxyXG59O1xyXG4iLCJpbXBvcnQgeyBjaG9vc2VDb2xvciwgZ2V0UmFuZG9tVmFsdWUgfSBmcm9tICcuL3V0aWxzJztcclxuaW1wb3J0IHsgQ29vcmRpbmF0ZXMsIFJlc2l6ZVR5cGUsIERpcmVjdGlvbiwgU2l6ZSB9IGZyb20gJy4vdHlwZXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmxvY2sge1xyXG5cdHByaXZhdGUgX3NlbGVjdGVkID0gZmFsc2U7XHJcblxyXG5cdHByaXZhdGUgX29jY3VwaWVkID0gZmFsc2U7XHJcblxyXG5cdHByaXZhdGUgX3ggPSAwO1xyXG5cclxuXHRwcml2YXRlIF95ID0gMDtcclxuXHJcblx0cHJpdmF0ZSBfb2xkWSA9IDA7XHJcblxyXG5cdHByaXZhdGUgX29sZENvbG9yOiBzdHJpbmc7XHJcblxyXG5cdHByaXZhdGUgX2hlaWdodCA9IDA7XHJcblxyXG5cdHByaXZhdGUgX3dpZHRoID0gMDtcclxuXHJcblx0cHJpdmF0ZSBfY29sb3I6IHN0cmluZztcclxuXHJcblx0cHJpdmF0ZSBfYW5pbWF0aW9uVmVsb2NpdHkgPSAxMDtcclxuXHJcblx0Y29uc3RydWN0b3IoY29sb3JzOiBudW1iZXJbXSkge1xyXG5cdFx0Y29uc3QgY29sb3JOdW1iZXIgPSBnZXRSYW5kb21WYWx1ZShjb2xvcnMpO1xyXG5cdFx0dGhpcy5fY29sb3IgPSBjaG9vc2VDb2xvcihjb2xvck51bWJlcik7XHJcblx0XHR0aGlzLl9vbGRDb2xvciA9IHRoaXMuX2NvbG9yO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGluaXQocG9zaXRpb246IENvb3JkaW5hdGVzLCBzaXplOiBTaXplKSB7XHJcblx0XHR0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XHJcblx0XHR0aGlzLl9vbGRZID0gcG9zaXRpb24ueTtcclxuXHRcdHRoaXMuc2l6ZSA9IHNpemU7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZ2V0Q29sb3JJbWFnZU5hbWUoKTogc3RyaW5nIHtcclxuXHRcdC8vIHJldHVybiB0aGlzLnNlbGVjdGVkID8gYFNlbGVjdGVkJHt0aGlzLmNvbG9yfWAgOiB0aGlzLmNvbG9yO1xyXG5cdFx0cmV0dXJuIHRoaXMuX2NvbG9yO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHJlc2l6ZShyZXNpemVUeXBlOiBSZXNpemVUeXBlKSB7XHJcblx0XHRjb25zdCB7IFpvb20sIFNocmluayB9ID0gUmVzaXplVHlwZTtcclxuXHRcdHN3aXRjaCAocmVzaXplVHlwZSkge1xyXG5cdFx0XHRjYXNlIFNocmluazpcclxuXHRcdFx0XHRpZiAodGhpcy5faGVpZ2h0ID4gMCkgdGhpcy5faGVpZ2h0IC09IHRoaXMuX2FuaW1hdGlvblZlbG9jaXR5O1xyXG5cdFx0XHRcdGVsc2UgdGhpcy5faGVpZ2h0ID0gMDtcclxuXHRcdFx0XHRpZiAodGhpcy5fd2lkdGggPiAwKSB0aGlzLl93aWR0aCAtPSB0aGlzLl9hbmltYXRpb25WZWxvY2l0eTtcclxuXHRcdFx0XHRlbHNlIHRoaXMuX3dpZHRoID0gMDtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSBab29tOlxyXG5cdFx0XHRcdHRoaXMuX2hlaWdodCArPSB0aGlzLl9hbmltYXRpb25WZWxvY2l0eTtcclxuXHRcdFx0XHR0aGlzLl93aWR0aCArPSB0aGlzLl9hbmltYXRpb25WZWxvY2l0eTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ1Vua25vd24gcmVzaXplIHR5cGUnKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHB1YmxpYyBtb3ZlKG1vdmVUeXBlOiBEaXJlY3Rpb24sIHZlbG9jaXR5PzogbnVtYmVyKSB7XHJcblx0XHRjb25zdCB7IFVwLCBSaWdodCwgTGVmdCwgRG93biB9ID0gRGlyZWN0aW9uO1xyXG5cdFx0c3dpdGNoIChtb3ZlVHlwZSkge1xyXG5cdFx0XHRjYXNlIFVwOlxyXG5cdFx0XHRcdHRoaXMuX3kgLT0gdGhpcy5fYW5pbWF0aW9uVmVsb2NpdHk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgUmlnaHQ6XHJcblx0XHRcdFx0dGhpcy5feCArPSB0aGlzLl9hbmltYXRpb25WZWxvY2l0eTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSBMZWZ0OlxyXG5cdFx0XHRcdHRoaXMuX3ggLT0gdGhpcy5fYW5pbWF0aW9uVmVsb2NpdHk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgRG93bjpcclxuXHRcdFx0XHR0aGlzLl95ICs9IHZlbG9jaXR5IHx8IHRoaXMuX2FuaW1hdGlvblZlbG9jaXR5O1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcignVW5rbm93biBtb3ZlIHR5cGUnKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHB1YmxpYyBnZXQgeCgpIHtcclxuXHRcdHJldHVybiB0aGlzLl94O1xyXG5cdH1cclxuXHJcblx0cHVibGljIGdldCB5KCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX3k7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZ2V0IGhlaWdodCgpIHtcclxuXHRcdHJldHVybiB0aGlzLl9oZWlnaHQ7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZ2V0IHdpZHRoKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX3dpZHRoO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGdldCBjb2xvcigpOiBzdHJpbmcge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2NvbG9yO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHNldCBjb2xvcihjb2xvcjogc3RyaW5nKSB7XHJcblx0XHR0aGlzLl9jb2xvciA9IGNvbG9yO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGdldCBvbGRDb2xvcigpOiBzdHJpbmcge1xyXG5cdFx0cmV0dXJuIHRoaXMuX29sZENvbG9yO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHNldCBvbGRDb2xvcihjb2xvcjogc3RyaW5nKSB7XHJcblx0XHR0aGlzLl9vbGRDb2xvciA9IGNvbG9yO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGdldCBvbGRZKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX29sZFk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc2V0IG9sZFkoeTogbnVtYmVyKSB7XHJcblx0XHR0aGlzLl9vbGRZID0geTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBnZXQgcG9zaXRpb24oKTogQ29vcmRpbmF0ZXMge1xyXG5cdFx0cmV0dXJuIHsgeDogdGhpcy5feCwgeTogdGhpcy5feSB9O1xyXG5cdH1cclxuXHJcblx0cHVibGljIHNldCBwb3NpdGlvbihwb3NpdGlvbjogQ29vcmRpbmF0ZXMpIHtcclxuXHRcdHRoaXMuX3ggPSBwb3NpdGlvbi54O1xyXG5cdFx0dGhpcy5feSA9IHBvc2l0aW9uLnk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZ2V0IHNpemUoKTogU2l6ZSB7XHJcblx0XHRyZXR1cm4geyB3aWR0aDogdGhpcy5fd2lkdGgsIGhlaWdodDogdGhpcy5faGVpZ2h0IH07XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc2V0IHNpemUoc2l6ZTogU2l6ZSkge1xyXG5cdFx0dGhpcy5faGVpZ2h0ID0gc2l6ZS5oZWlnaHQ7XHJcblx0XHR0aGlzLl93aWR0aCA9IHNpemUud2lkdGg7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgdG9nZ2xlU2VsZWN0KCkge1xyXG5cdFx0dGhpcy5fc2VsZWN0ZWQgPSAhdGhpcy5fc2VsZWN0ZWQ7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgaXNTZWxlY3RlZCgpIHtcclxuXHRcdHJldHVybiB0aGlzLl9zZWxlY3RlZDtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzZXQgb2NjdXBpZWQob2NwOiBib29sZWFuKSB7XHJcblx0XHR0aGlzLl9vY2N1cGllZCA9IG9jcDtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyB0b2dnbGVPY2N1cGllZCgpIHtcclxuXHRcdHRoaXMuX29jY3VwaWVkID0gIXRoaXMuX29jY3VwaWVkO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGlzT2NjdXBpZWQoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fb2NjdXBpZWQ7XHJcblx0fVxyXG59XHJcbiIsImV4cG9ydCBjb25zdCBQT0lOVFNfUEVSX1RVUk4gPSA1O1xyXG5leHBvcnQgY29uc3QgSU1BR0VfU0laRV9DT0VGRklDSUVOVCA9IDQ7XHJcbmV4cG9ydCBjb25zdCBURUxFUE9SVF9DT1NUID0gNTtcclxuZXhwb3J0IGNvbnN0IE1PTkVZID0gMjA7XHJcbiIsImltcG9ydCBWaWV3IGZyb20gJy4vdmlldyc7XHJcbmltcG9ydCBXb3JsZCBmcm9tICcuL3dvcmxkJztcclxuaW1wb3J0IHsgY2hvb3NlQ29sb3JzIH0gZnJvbSAnLi91dGlscyc7XHJcbmltcG9ydCBJbnB1dCBmcm9tICcuL2lucHV0JztcclxuaW1wb3J0IFByb2dyZXNzQmFyIGZyb20gJy4vcHJvZ3Jlc3NCYXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSB7XHJcblx0cHJpdmF0ZSBfdmlldzogVmlldztcclxuXHJcblx0cHJpdmF0ZSBfd29ybGQ6IFdvcmxkO1xyXG5cclxuXHRwcml2YXRlIF9pbnB1dDogSW5wdXQ7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHZpZXc6IFZpZXcsIG46IG51bWJlciwgbTogbnVtYmVyLCBjOiBudW1iZXIsIGs6IG51bWJlciwgczogbnVtYmVyLCB4OiBudW1iZXIsIHk6IG51bWJlcikge1xyXG5cdFx0dGhpcy5fdmlldyA9IHZpZXc7XHJcblx0XHRjb25zdCBncmlkSW5mbyA9IHtcclxuXHRcdFx0YmxvY2tDb2xvcnM6IGNob29zZUNvbG9ycyhjKSxcclxuXHRcdFx0bixcclxuXHRcdFx0bSxcclxuXHRcdFx0ayxcclxuXHRcdFx0bWluU3RpcnJpbmdBbW91bnQ6IHMsXHJcblx0XHR9O1xyXG5cdFx0dGhpcy5fd29ybGQgPSBuZXcgV29ybGQoZ3JpZEluZm8sIHgsIHkpO1xyXG5cdFx0dGhpcy5faW5wdXQgPSBuZXcgSW5wdXQoKTtcclxuXHRcdHRoaXMubG9vcCA9IHRoaXMubG9vcC5iaW5kKHRoaXMpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGFzeW5jIGluaXQoKSB7XHJcblx0XHRhd2FpdCB0aGlzLl92aWV3LmluaXQodGhpcy5fd29ybGQpO1xyXG5cdFx0dGhpcy5faW5wdXQuaW5pdCgpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHN0YXJ0KCkge1xyXG5cdFx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMubG9vcCk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGxvb3AoKSB7XHJcblx0XHR0aGlzLl93b3JsZC51cGRhdGUodGhpcy5faW5wdXQpO1xyXG5cdFx0aWYgKHRoaXMuX2lucHV0LnggIT09IDAgJiYgdGhpcy5faW5wdXQueSAhPT0gMCkgdGhpcy5faW5wdXQuY29vcmRpbmF0ZXMgPSB7IHg6IDAsIHk6IDAgfTtcclxuXHRcdHRoaXMuX3ZpZXcudXBkYXRlKHRoaXMuX3dvcmxkKTtcclxuXHRcdHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmxvb3ApO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgQmxvY2sgZnJvbSAnLi9ibG9jayc7XHJcbmltcG9ydCB7IENvb3JkaW5hdGVzLCBTaXplLCBHcmlkSW5mbyB9IGZyb20gJy4vdHlwZXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JpZCB7XHJcblx0cHJpdmF0ZSBfZ3JpZEluZm86IEdyaWRJbmZvO1xyXG5cclxuXHRwcml2YXRlIF9ibG9ja0xheW91dDogQmxvY2tbXVtdID0gW107XHJcblxyXG5cdHByaXZhdGUgX2l0ZW1IZWlnaHQgPSAwO1xyXG5cclxuXHRwcml2YXRlIF9pdGVtV2lkdGggPSAwO1xyXG5cclxuXHRwcml2YXRlIF94ID0gMDtcclxuXHJcblx0cHJpdmF0ZSBfeSA9IDA7XHJcblxyXG5cdHByaXZhdGUgX2hlaWdodCA9IDA7XHJcblxyXG5cdHByaXZhdGUgX3dpZHRoID0gMDtcclxuXHJcblx0Y29uc3RydWN0b3IoZ3JpZEluZm86IEdyaWRJbmZvKSB7XHJcblx0XHR0aGlzLl9ncmlkSW5mbyA9IGdyaWRJbmZvO1xyXG5cdFx0dGhpcy5jcmVhdGVMYXlvdXQoKTtcclxuXHRcdGxldCBzID0gZ3JpZEluZm8ubWluU3RpcnJpbmdBbW91bnQ7XHJcblx0XHR3aGlsZSAoIXRoaXMuY2hlY2tMYXlvdXQoKSAmJiBzID4gMCkge1xyXG5cdFx0XHR0aGlzLmNyZWF0ZUxheW91dCgpO1xyXG5cdFx0XHRzIC09IDE7XHJcblx0XHR9XHJcblx0XHRpZiAocyA9PT0gMCkge1xyXG5cdFx0XHRjb25zb2xlLmxvZygnR2FtZSBPdmVyJyk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgaW5pdChwb3NpdGlvbjogQ29vcmRpbmF0ZXMsIHNpemU6IFNpemUsIGl0ZW1TaXplOiBTaXplKSB7XHJcblx0XHR0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XHJcblx0XHR0aGlzLnNpemUgPSBzaXplO1xyXG5cdFx0dGhpcy5pdGVtU2l6ZSA9IGl0ZW1TaXplO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBjcmVhdGVMYXlvdXQoKSB7XHJcblx0XHRjb25zdCB7IG4sIG0sIGJsb2NrQ29sb3JzIH0gPSB0aGlzLmdyaWRJbmZvO1xyXG5cdFx0bGV0IGxheW91dDogQmxvY2tbXVtdID0gW107XHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IG47IGkgKz0gMSkge1xyXG5cdFx0XHRsYXlvdXRbaV0gPSBbXTtcclxuXHRcdFx0Zm9yIChsZXQgaiA9IDA7IGogPCBtOyBqICs9IDEpIHtcclxuXHRcdFx0XHRsYXlvdXRbaV1bal0gPSBuZXcgQmxvY2soYmxvY2tDb2xvcnMpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHR0aGlzLl9ibG9ja0xheW91dCA9IGxheW91dDtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgY2hlY2tMYXlvdXQoKTogYm9vbGVhbiB7XHJcblx0XHRjb25zdCB7IG0gfSA9IHRoaXMuX2dyaWRJbmZvO1xyXG5cdFx0Y29uc3QgbGF5b3V0ID0gdGhpcy5fYmxvY2tMYXlvdXQ7XHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IG0gLSAxOyBpICs9IDEpIHtcclxuXHRcdFx0Y29uc3Qgcm93TGlzdCA9IGxheW91dFtpXS5tYXAoYmxvY2sgPT4gYmxvY2suY29sb3IpO1xyXG5cdFx0XHRjb25zdCByb3dTZXQgPSBuZXcgU2V0KHJvd0xpc3QpO1xyXG5cdFx0XHRpZiAocm93U2V0LnNpemUgPCByb3dMaXN0Lmxlbmd0aCkgcmV0dXJuIHRydWU7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHQvLyBUT0RPIGFkZCBjaGVjayBmb3IgY29sdW1uc1xyXG5cdH1cclxuXHJcblx0cHVibGljIGdldCBuKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2dyaWRJbmZvLm47XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZ2V0IG0oKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fZ3JpZEluZm8ubTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBnZXQgYmxvY2tMYXlvdXQoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fYmxvY2tMYXlvdXQ7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc2V0IGJsb2NrTGF5b3V0KGxheW91dDogQmxvY2tbXVtdKSB7XHJcblx0XHR0aGlzLl9ibG9ja0xheW91dCA9IGxheW91dDtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBnZXQgZ3JpZEluZm8oKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fZ3JpZEluZm87XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZ2V0IHgoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5feDtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBnZXQgeSgpIHtcclxuXHRcdHJldHVybiB0aGlzLl95O1xyXG5cdH1cclxuXHJcblx0cHVibGljIGdldCBoZWlnaHQoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5faGVpZ2h0O1xyXG5cdH1cclxuXHJcblx0cHVibGljIGdldCB3aWR0aCgpIHtcclxuXHRcdHJldHVybiB0aGlzLl93aWR0aDtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBnZXQgaXRlbUhlaWdodCgpIHtcclxuXHRcdHJldHVybiB0aGlzLl9pdGVtSGVpZ2h0O1xyXG5cdH1cclxuXHJcblx0cHVibGljIGdldCBpdGVtV2lkdGgoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5faXRlbVdpZHRoO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGdldCBpdGVtU2l6ZSgpIHtcclxuXHRcdHJldHVybiB7IHdpZHRoOiB0aGlzLl9pdGVtV2lkdGgsIGhlaWdodDogdGhpcy5faXRlbUhlaWdodCB9O1xyXG5cdH1cclxuXHJcblx0cHVibGljIHNldCBpdGVtU2l6ZShzaXplOiBTaXplKSB7XHJcblx0XHR0aGlzLl9pdGVtV2lkdGggPSBzaXplLndpZHRoO1xyXG5cdFx0dGhpcy5faXRlbUhlaWdodCA9IHNpemUuaGVpZ2h0O1xyXG5cdH1cclxuXHJcblx0cHVibGljIHNldCBwb3NpdGlvbihwb3NpdGlvbjogQ29vcmRpbmF0ZXMpIHtcclxuXHRcdHRoaXMuX3ggPSBwb3NpdGlvbi54O1xyXG5cdFx0dGhpcy5feSA9IHBvc2l0aW9uLnk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc2V0IHNpemUoc2l6ZTogU2l6ZSkge1xyXG5cdFx0dGhpcy5fd2lkdGggPSBzaXplLndpZHRoO1xyXG5cdFx0dGhpcy5faGVpZ2h0ID0gc2l6ZS5oZWlnaHQ7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IENvb3JkaW5hdGVzIH0gZnJvbSAnLi90eXBlcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnB1dCB7XHJcblx0cHJpdmF0ZSBfeCA9IDA7XHJcblxyXG5cdHByaXZhdGUgX3kgPSAwO1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHRoaXMuaW5pdCgpO1xyXG5cdH1cclxuXHJcblx0aW5pdCgpIHtcclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGUgPT4ge1xyXG5cdFx0XHR0aGlzLl94ID0gZS5vZmZzZXRYO1xyXG5cdFx0XHR0aGlzLl95ID0gZS5vZmZzZXRZO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZ2V0IHgoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5feDtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBnZXQgeSgpIHtcclxuXHRcdHJldHVybiB0aGlzLl95O1xyXG5cdH1cclxuXHJcblx0cHVibGljIHNldCBjb29yZGluYXRlcyhjcjogQ29vcmRpbmF0ZXMpIHtcclxuXHRcdHRoaXMuX3ggPSBjci54O1xyXG5cdFx0dGhpcy5feSA9IGNyLnk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IENvb3JkaW5hdGVzLCBEaXJlY3Rpb24gfSBmcm9tICcuL3R5cGVzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2dyZXNzQmFyIHtcclxuXHRwcml2YXRlIF94ID0gMDtcclxuXHJcblx0cHJpdmF0ZSBfY3VycmVudFggPSAwO1xyXG5cclxuXHRwcml2YXRlIF9lbmRYID0gMDtcclxuXHJcblx0cHJpdmF0ZSBfdmVsb2NpdHkgPSAxO1xyXG5cclxuXHRwcml2YXRlIF95ID0gMDtcclxuXHJcblx0cHJpdmF0ZSBfZGlyZWN0aW9uOiBEaXJlY3Rpb24gPSBEaXJlY3Rpb24uUmlnaHQ7XHJcblxyXG5cdGluaXQoc3RhcnRYOiBudW1iZXIsIHdpZHRoOiBudW1iZXIsIHk6IG51bWJlciwgdGFyZ2V0UG9pbnRzOiBudW1iZXIpIHtcclxuXHRcdHRoaXMuX3ggPSBzdGFydFg7XHJcblx0XHRpZiAodGhpcy5fZGlyZWN0aW9uID09PSBEaXJlY3Rpb24uUmlnaHQpIHtcclxuXHRcdFx0dGhpcy5fY3VycmVudFggPSBzdGFydFg7XHJcblx0XHRcdHRoaXMuX2VuZFggPSBzdGFydFggKyB3aWR0aDtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuX2N1cnJlbnRYID0gc3RhcnRYICsgd2lkdGg7XHJcblx0XHRcdHRoaXMuX2VuZFggPSBzdGFydFg7XHJcblx0XHR9XHJcblx0XHR0aGlzLl95ID0geTtcclxuXHRcdHRoaXMuX3ZlbG9jaXR5ID0gUHJvZ3Jlc3NCYXIuY2FsY1ZlbG9jaXR5KHdpZHRoLCB0YXJnZXRQb2ludHMpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBzdGF0aWMgY2FsY1ZlbG9jaXR5KHdpZHRoOiBudW1iZXIsIHRhcmdldFBvaW50czogbnVtYmVyKTogbnVtYmVyIHtcclxuXHRcdHJldHVybiB3aWR0aCAvIHRhcmdldFBvaW50cztcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgbW92ZVJpZ2h0KCkge1xyXG5cdFx0aWYgKHRoaXMuX2N1cnJlbnRYID49IHRoaXMuX2VuZFgpIHJldHVybjtcclxuXHRcdHRoaXMuX2N1cnJlbnRYICs9IHRoaXMuX3ZlbG9jaXR5O1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBtb3ZlTGVmdCgpIHtcclxuXHRcdHRoaXMuX2N1cnJlbnRYIC09IHRoaXMuX3ZlbG9jaXR5O1xyXG5cdH1cclxuXHJcblx0cHVibGljIG1vdmUoKSB7XHJcblx0XHRpZiAodGhpcy5kaXJlY3Rpb24gPT09IERpcmVjdGlvbi5MZWZ0KSB0aGlzLm1vdmVMZWZ0KCk7XHJcblx0XHRlbHNlIHRoaXMubW92ZVJpZ2h0KCk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZ2V0IGN1cnJlbnRQb3NpdGlvbigpOiBDb29yZGluYXRlcyB7XHJcblx0XHRyZXR1cm4geyB4OiB0aGlzLl9jdXJyZW50WCwgeTogdGhpcy5feSB9O1xyXG5cdH1cclxuXHJcblx0cHVibGljIHNldCB2ZWxvY2l0eSh2OiBudW1iZXIpIHtcclxuXHRcdHRoaXMuX3ZlbG9jaXR5ID0gdjtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzZXRWZWxvY2l0eUJ5V2lkdGgod2lkdGg6IG51bWJlciwgdGFyZ2V0UG9pbnRzOiBudW1iZXIpIHtcclxuXHRcdHRoaXMuX3ZlbG9jaXR5ID0gUHJvZ3Jlc3NCYXIuY2FsY1ZlbG9jaXR5KHdpZHRoLCB0YXJnZXRQb2ludHMpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHNldCBkaXJlY3Rpb24oZGlyZWN0aW9uOiBEaXJlY3Rpb24pIHtcclxuXHRcdHRoaXMuX2RpcmVjdGlvbiA9IGRpcmVjdGlvbjtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzZXQgeChzdGFydDogbnVtYmVyKSB7XHJcblx0XHR0aGlzLl94ID0gc3RhcnQ7XHJcblx0XHR0aGlzLl9jdXJyZW50WCA9IHN0YXJ0O1xyXG5cdH1cclxuXHJcblx0cHVibGljIHNldCBFbmRYKHg6IG51bWJlcikge1xyXG5cdFx0dGhpcy5fZW5kWCA9IHg7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc2V0RW5kWEJ5V2lkdGgod2lkdGg6IG51bWJlcikge1xyXG5cdFx0dGhpcy5fZW5kWCA9IHRoaXMuX3ggKyB3aWR0aDtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzZXQgY3VycmVudFgod2lkdGg6IG51bWJlcikge1xyXG5cdFx0dGhpcy5fY3VycmVudFggPSB0aGlzLl94ICsgd2lkdGg7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZ2V0IHdpZHRoKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2N1cnJlbnRYIC0gdGhpcy5feDtcclxuXHR9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NvcmUge1xyXG5cdHByaXZhdGUgX3BvaW50cyA9IDA7XHJcblxyXG5cdHByaXZhdGUgX21vdmVzID0gMDtcclxuXHJcblx0cHJpdmF0ZSBfdGFyZ2V0UG9pbnRzID0gMDtcclxuXHJcblx0cHJpdmF0ZSBfdGFyZ2V0TW92ZXMgPSAwO1xyXG5cclxuXHRjb25zdHJ1Y3Rvcih0YXJnZXRQb2ludHM6IG51bWJlciwgdGFyZ2V0TW92ZXM6IG51bWJlcikge1xyXG5cdFx0dGhpcy5fdGFyZ2V0UG9pbnRzID0gdGFyZ2V0UG9pbnRzO1xyXG5cdFx0dGhpcy5fbW92ZXMgPSB0YXJnZXRNb3ZlcztcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBnZXQgcG9pbnRzKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX3BvaW50cztcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBpbmNyZWFzZVBvaW50cygpIHtcclxuXHRcdHRoaXMuX3BvaW50cyArPSAxO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGdldCBtb3ZlcygpIHtcclxuXHRcdHJldHVybiB0aGlzLl9tb3ZlcztcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBkZWNyZWFzZU1vdmVzTnVtKCkge1xyXG5cdFx0dGhpcy5fbW92ZXMgLT0gMTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBnZXQgdGFyZ2V0UG9pbnRzKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX3RhcmdldFBvaW50cztcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBnZXQgdGFyZ2V0TW92ZXMoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fdGFyZ2V0TW92ZXM7XHJcblx0fVxyXG59XHJcbiIsImV4cG9ydCB0eXBlIENvb3JkaW5hdGVzID0ge1xyXG5cdHg6IG51bWJlcjtcclxuXHR5OiBudW1iZXI7XHJcbn07XHJcblxyXG5leHBvcnQgZW51bSBSZXNpemVUeXBlIHtcclxuXHRab29tLFxyXG5cdFNocmluayxcclxufVxyXG5cclxuZXhwb3J0IGVudW0gRGlyZWN0aW9uIHtcclxuXHRVcCxcclxuXHRSaWdodCxcclxuXHREb3duLFxyXG5cdExlZnQsXHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIFNpemUgPSB7XHJcblx0d2lkdGg6IG51bWJlcjtcclxuXHRoZWlnaHQ6IG51bWJlcjtcclxufTtcclxuXHJcbmV4cG9ydCB0eXBlIEdyaWRJbmZvID0ge1xyXG5cdGJsb2NrQ29sb3JzOiBudW1iZXJbXTtcclxuXHRuOiBudW1iZXI7XHJcblx0bTogbnVtYmVyO1xyXG5cdGs6IG51bWJlcjtcclxuXHRtaW5TdGlycmluZ0Ftb3VudDogbnVtYmVyO1xyXG59O1xyXG5cclxuZXhwb3J0IHR5cGUgR2FtZUltYWdlcyA9IHsgW2tleTogc3RyaW5nXTogSFRNTEltYWdlRWxlbWVudCB9O1xyXG5leHBvcnQgdHlwZSBBc3NldHMgPSB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xyXG5cclxuLy8gZXhwb3J0IHR5cGUgU2NvcmUgPSB7XHJcbi8vIFx0cG9pbnRzOiBudW1iZXI7XHJcbi8vIFx0bW92ZXNOdW1iZXI6IG51bWJlcjtcclxuLy8gfTtcclxuIiwiZXhwb3J0IGZ1bmN0aW9uIGdldFJhbmRvbUludGVnZXIobWluOiBudW1iZXIsIG1heDogbnVtYmVyKSB7XHJcblx0cmV0dXJuIE1hdGguZmxvb3IobWluICsgTWF0aC5yYW5kb20oKSAqIChtYXggKyAxIC0gbWluKSk7XHJcbn1cclxuXHJcbmNvbnN0IENPTE9SU19OVU0gPSA1O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNob29zZUNvbG9ycyhhbW91bnQ6IG51bWJlcikge1xyXG5cdGlmIChhbW91bnQgPT09IENPTE9SU19OVU0pIHtcclxuXHRcdHJldHVybiBBcnJheS5mcm9tKHsgbGVuZ3RoOiBDT0xPUlNfTlVNIH0sICh2LCBrKSA9PiBrICsgMSk7XHJcblx0fVxyXG5cdHJldHVybiBBcnJheS5mcm9tKHsgbGVuZ3RoOiBhbW91bnQgfSwgKCkgPT4gZ2V0UmFuZG9tSW50ZWdlcigwLCBhbW91bnQgLSAxKSk7XHJcblx0Ly8gVE9ETyBjaGVjayByZXBlYXRzXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRSYW5kb21WYWx1ZShhcnJheTogbnVtYmVyW10pOiBudW1iZXIge1xyXG5cdHJldHVybiBhcnJheVtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhcnJheS5sZW5ndGgpXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNob29zZUNvbG9yKGNvbG9yTnVtYmVyOiBudW1iZXIpOiBzdHJpbmcge1xyXG5cdHN3aXRjaCAoY29sb3JOdW1iZXIpIHtcclxuXHRcdGNhc2UgMTpcclxuXHRcdFx0cmV0dXJuICdCbHVlQmxvY2snO1xyXG5cdFx0Y2FzZSAyOlxyXG5cdFx0XHRyZXR1cm4gJ0dyZWVuQmxvY2snO1xyXG5cdFx0Y2FzZSAzOlxyXG5cdFx0XHRyZXR1cm4gJ1B1cnBsZUJsb2NrJztcclxuXHRcdGNhc2UgNDpcclxuXHRcdFx0cmV0dXJuICdSZWRCbG9jayc7XHJcblx0XHRjYXNlIDU6XHJcblx0XHRcdHJldHVybiAnWWVsbG93QmxvY2snO1xyXG5cdFx0ZGVmYXVsdDpcclxuXHRcdFx0cmV0dXJuICdCbHVlQmxvY2snO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgYXNzZXRzIGZyb20gJy4vYXNzZXRzJztcclxuaW1wb3J0IFdvcmxkIGZyb20gJy4vd29ybGQnO1xyXG5pbXBvcnQgeyBHYW1lSW1hZ2VzIH0gZnJvbSAnLi90eXBlcyc7XHJcbmltcG9ydCBJbWFnZVJlcG9zaXRvcnkgZnJvbSAnLi9JbWFnZVJlcG9zaXRvcnknO1xyXG5pbXBvcnQgeyBJTUFHRV9TSVpFX0NPRUZGSUNJRU5ULCBNT05FWSwgVEVMRVBPUlRfQ09TVCB9IGZyb20gJy4vY29uc3RhbnRzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpZXcge1xyXG5cdHByaXZhdGUgX2NhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XHJcblxyXG5cdHByaXZhdGUgX2N0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xyXG5cclxuXHRwcml2YXRlIF9nYW1lSW1hZ2VzOiBHYW1lSW1hZ2VzID0ge307XHJcblxyXG5cdGNvbnN0cnVjdG9yKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQpIHtcclxuXHRcdHRoaXMuX2NhbnZhcyA9IGNhbnZhcztcclxuXHRcdHRoaXMuX2N0eCA9IDxDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ+Y2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgYXN5bmMgaW5pdCh3b3JsZDogV29ybGQpIHtcclxuXHRcdGNvbnN0IGltYWdlUmVwb3NpdG9yeSA9IG5ldyBJbWFnZVJlcG9zaXRvcnkoYXNzZXRzKTtcclxuXHRcdHRoaXMuX2dhbWVJbWFnZXMgPSBhd2FpdCBpbWFnZVJlcG9zaXRvcnkubG9hZEltYWdlcygpO1xyXG5cdFx0dGhpcy5yZW5kZXJHYW1lU2NlbmUoKTtcclxuXHRcdHRoaXMuaW5pdEdyaWQod29ybGQpO1xyXG5cdFx0dGhpcy5pbml0UHJvZ3Jlc3NCYXIod29ybGQpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHVwZGF0ZSh3b3JsZDogV29ybGQpIHtcclxuXHRcdHRoaXMuY2xlYXJTY3JlZW4oKTtcclxuXHRcdHRoaXMucmVuZGVyR2FtZVNjZW5lKCk7XHJcblx0XHR0aGlzLnJlbmRlckdyaWQod29ybGQpO1xyXG5cdFx0dGhpcy5yZW5kZXJTY29yZSh3b3JsZCk7XHJcblx0XHR0aGlzLnJlbmRlclByb2dyZXNzQmFyKHdvcmxkKTtcclxuXHRcdHRoaXMucmVuZGVyQm9udXMoKTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgcmVuZGVyR2FtZVNjZW5lKCkge1xyXG5cdFx0Y29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSB0aGlzLl9jYW52YXM7XHJcblx0XHRjb25zdCB7IEhlYWRlclBhbmVsLCBNb25leUJsb2NrIH0gPSB0aGlzLl9nYW1lSW1hZ2VzO1xyXG5cclxuXHRcdHRoaXMuX2N0eC5maWxsU3R5bGUgPSAnI2ExYTFhMSc7XHJcblx0XHR0aGlzLl9jdHguZmlsbFJlY3QoMCwgMCwgd2lkdGgsIGhlaWdodCk7XHJcblx0XHRjb25zdCBkeCA9IHdpZHRoIC8gMiAtIEhlYWRlclBhbmVsLndpZHRoIC8gSU1BR0VfU0laRV9DT0VGRklDSUVOVCAvIDJcclxuXHRcdHRoaXMuX2N0eC5kcmF3SW1hZ2UoSGVhZGVyUGFuZWwsIGR4LCAwLCBIZWFkZXJQYW5lbC53aWR0aCAvIElNQUdFX1NJWkVfQ09FRkZJQ0lFTlQsIEhlYWRlclBhbmVsLmhlaWdodCAvIElNQUdFX1NJWkVfQ09FRkZJQ0lFTlQpO1xyXG5cdFx0dGhpcy5fY3R4LmRyYXdJbWFnZShNb25leUJsb2NrLCBkeCArIDM1LCBIZWFkZXJQYW5lbC5oZWlnaHQgLyBJTUFHRV9TSVpFX0NPRUZGSUNJRU5UIC8gMTAsIE1vbmV5QmxvY2sud2lkdGggLyBJTUFHRV9TSVpFX0NPRUZGSUNJRU5ULCBNb25leUJsb2NrLmhlaWdodCAvIElNQUdFX1NJWkVfQ09FRkZJQ0lFTlQpO1xyXG5cclxuXHRcdHRoaXMuX2N0eC5maWxsU3R5bGUgPSAnI2ZmZic7XHJcblx0XHR0aGlzLl9jdHguZm9udCA9ICcyMHB4IE1hcnZpbic7XHJcblx0XHR0aGlzLl9jdHguZmlsbFRleHQoJ9C/0YDQvtCz0YDQtdGB0YEnLCB3aWR0aCAvIDIgLSA3MCwgMjMpO1xyXG5cdFx0dGhpcy5fY3R4LmZpbGxUZXh0KGAke01PTkVZfWAsIGR4ICsgTW9uZXlCbG9jay53aWR0aCAvIElNQUdFX1NJWkVfQ09FRkZJQ0lFTlQgLyAxLjMsIEhlYWRlclBhbmVsLmhlaWdodCAvIElNQUdFX1NJWkVfQ09FRkZJQ0lFTlQgLyAyKTtcclxuXHR9XHJcblxyXG5cdHJlbmRlclNjb3JlKHdvcmxkOiBXb3JsZCkge1xyXG5cdFx0Y29uc3Qgc2NvcmVQYW5lbEltYWdlID0gdGhpcy5fZ2FtZUltYWdlcy5TY29yZVBhbmVsO1xyXG5cdFx0Y29uc3QgZHggPSB0aGlzLl9jYW52YXMud2lkdGggLyAyICsgMTI1O1xyXG5cdFx0Y29uc3QgZHkgPSB0aGlzLl9nYW1lSW1hZ2VzLkhlYWRlclBhbmVsLmhlaWdodCAvIElNQUdFX1NJWkVfQ09FRkZJQ0lFTlQgKyA1NDtcclxuXHRcdGNvbnN0IHNjb3JlVGV4dERYID0gZHggKyBzY29yZVBhbmVsSW1hZ2Uud2lkdGggLyBJTUFHRV9TSVpFX0NPRUZGSUNJRU5UIC8gMjtcclxuXHRcdHRoaXMuX2N0eC5kcmF3SW1hZ2Uoc2NvcmVQYW5lbEltYWdlLCBkeCwgZHksIHNjb3JlUGFuZWxJbWFnZS53aWR0aCAvIElNQUdFX1NJWkVfQ09FRkZJQ0lFTlQsIHNjb3JlUGFuZWxJbWFnZS5oZWlnaHQgLyBJTUFHRV9TSVpFX0NPRUZGSUNJRU5UKTtcclxuXHRcdHRoaXMuX2N0eC5mb250ID0gJzIwcHggTWFydmluJztcclxuXHRcdGxldCB0ZXh0ID0gJ9Cy0YDQtdC80Y86JztcclxuXHRcdHRoaXMuX2N0eC5maWxsVGV4dCgn0LLRgNC10LzRjzonLCBzY29yZVRleHREWCAtIHRoaXMuX2N0eC5tZWFzdXJlVGV4dCh0ZXh0KS53aWR0aCAvIDIsIGR5KTtcclxuXHRcdHRoaXMuX2N0eC5mb250ID0gJzM0cHggTWFydmluJztcclxuXHRcdHRleHQgPSBgJHt3b3JsZC5zY29yZS5wb2ludHN9YDtcclxuXHRcdHRoaXMuX2N0eC5maWxsVGV4dCh0ZXh0LCBzY29yZVRleHREWCAtIHRoaXMuX2N0eC5tZWFzdXJlVGV4dCh0ZXh0KS53aWR0aCAvIDIsIGR5ICsgc2NvcmVQYW5lbEltYWdlLmhlaWdodCAvIElNQUdFX1NJWkVfQ09FRkZJQ0lFTlQgLyAxLjE2KTtcclxuXHRcdHRoaXMuX2N0eC5mb250ID0gJzUycHggTWFydmluJztcclxuXHRcdHRleHQgPSBgJHt3b3JsZC5zY29yZS5tb3Zlc31gO1xyXG5cdFx0dGhpcy5fY3R4LmZpbGxUZXh0KHRleHQsIHNjb3JlVGV4dERYIC0gdGhpcy5fY3R4Lm1lYXN1cmVUZXh0KHRleHQpLndpZHRoIC8gMiwgZHkgKyBzY29yZVBhbmVsSW1hZ2UuaGVpZ2h0IC8gSU1BR0VfU0laRV9DT0VGRklDSUVOVCAvIDIuNSk7XHJcblx0XHR0aGlzLl9jdHguZm9udCA9ICcyMHB4IE1hcnZpbic7XHJcblx0XHR0ZXh0ID0gJ9C+0YfQutC4Oic7XHJcblx0XHR0aGlzLl9jdHguZmlsbFRleHQodGV4dCwgc2NvcmVUZXh0RFggLSB0aGlzLl9jdHgubWVhc3VyZVRleHQodGV4dCkud2lkdGggLyAyLCBkeSArIHNjb3JlUGFuZWxJbWFnZS5oZWlnaHQgLyBJTUFHRV9TSVpFX0NPRUZGSUNJRU5UIC8gMS40KTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgcmVuZGVyQm9udXMoKSB7XHJcblx0XHRjb25zdCB7IFNjb3JlUGFuZWwsIEhlYWRlclBhbmVsLCBCb251cywgU2VsZWN0ZWRCb251cyB9ID0gdGhpcy5fZ2FtZUltYWdlcztcclxuXHRcdGNvbnN0IGR4ID0gdGhpcy5fY2FudmFzLndpZHRoIC8gMiArIDEyNTtcclxuXHRcdGNvbnN0IGR5ID0gSGVhZGVyUGFuZWwuaGVpZ2h0IC8gSU1BR0VfU0laRV9DT0VGRklDSUVOVCArIDU0ICsgU2NvcmVQYW5lbC5oZWlnaHQgLyBJTUFHRV9TSVpFX0NPRUZGSUNJRU5UO1xyXG5cdFx0Y29uc3Qgc2NvcmVUZXh0RFggPSBkeCArIFNjb3JlUGFuZWwud2lkdGggLyBJTUFHRV9TSVpFX0NPRUZGSUNJRU5UIC8gMjtcclxuXHRcdHRoaXMuX2N0eC5mb250ID0gJzIwcHggTWFydmluJztcclxuXHRcdGxldCB0ZXh0ID0gJ9Cx0L7QvdGD0YEnO1xyXG5cdFx0dGhpcy5fY3R4LmZpbGxUZXh0KHRleHQsIHNjb3JlVGV4dERYIC0gdGhpcy5fY3R4Lm1lYXN1cmVUZXh0KHRleHQpLndpZHRoIC8gMiwgZHkgKyA1MCk7XHJcblx0XHR0aGlzLl9jdHguZHJhd0ltYWdlKEJvbnVzLCBzY29yZVRleHREWCAtIEJvbnVzLndpZHRoIC8gMyAvIDIsIGR5ICsgNTAsIEJvbnVzLndpZHRoIC8gMywgQm9udXMuaGVpZ2h0IC8gMyk7XHJcblx0XHR0ZXh0ID0gYCR7VEVMRVBPUlRfQ09TVH1gO1xyXG5cdFx0dGhpcy5fY3R4LmZpbGxUZXh0KHRleHQsIHNjb3JlVGV4dERYIC0gdGhpcy5fY3R4Lm1lYXN1cmVUZXh0KHRleHQpLndpZHRoIC8gMiAtIDUsIGR5ICsgQm9udXMuaGVpZ2h0IC8gMyArIDIwKTtcclxuXHJcblx0fVxyXG5cclxuXHRwcml2YXRlIHJlbmRlckdyaWQod29ybGQ6IFdvcmxkKSB7XHJcblx0XHR0aGlzLl9jdHguZHJhd0ltYWdlKFxyXG5cdFx0XHR0aGlzLl9nYW1lSW1hZ2VzLkdhbWVQYW5lbCxcclxuXHRcdFx0dGhpcy5fY2FudmFzLndpZHRoIC8gMiAtIHRoaXMuX2dhbWVJbWFnZXMuR2FtZVBhbmVsLndpZHRoIC8gSU1BR0VfU0laRV9DT0VGRklDSUVOVCxcclxuXHRcdFx0dGhpcy5fZ2FtZUltYWdlcy5IZWFkZXJQYW5lbC5oZWlnaHQgLyBJTUFHRV9TSVpFX0NPRUZGSUNJRU5UICsgMzAsXHJcblx0XHRcdHRoaXMuX2dhbWVJbWFnZXMuR2FtZVBhbmVsLndpZHRoIC8gSU1BR0VfU0laRV9DT0VGRklDSUVOVCxcclxuXHRcdFx0dGhpcy5fZ2FtZUltYWdlcy5HYW1lUGFuZWwuaGVpZ2h0IC8gSU1BR0VfU0laRV9DT0VGRklDSUVOVFxyXG5cdFx0KTtcclxuXHRcdGNvbnN0IGRlc2sgPSB3b3JsZC5ncmlkLmJsb2NrTGF5b3V0O1xyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB3b3JsZC5ncmlkLm47IGkgKz0gMSkge1xyXG5cdFx0XHRmb3IgKGxldCBqID0gMDsgaiA8IHdvcmxkLmdyaWQubTsgaiArPSAxKSB7XHJcblx0XHRcdFx0Y29uc3QgeyB4LCB5IH0gPSBkZXNrW2ldW2pdLnBvc2l0aW9uO1xyXG5cdFx0XHRcdGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gZGVza1tpXVtqXS5zaXplO1xyXG5cdFx0XHRcdHRoaXMuX2N0eC5kcmF3SW1hZ2UodGhpcy5fZ2FtZUltYWdlc1tkZXNrW2ldW2pdLmdldENvbG9ySW1hZ2VOYW1lKCldLCB4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSByZW5kZXJQcm9ncmVzc0Jhcih3b3JsZDogV29ybGQpIHtcclxuXHRcdGNvbnN0IHsgUHJvZ3Jlc3NCbG9jaywgUHJvZ3Jlc3NTY2FsZSB9ID0gdGhpcy5fZ2FtZUltYWdlcztcclxuXHRcdGNvbnN0IGR4ID0gdGhpcy5fY2FudmFzLndpZHRoIC8gMiAtIFByb2dyZXNzU2NhbGUud2lkdGggLyBJTUFHRV9TSVpFX0NPRUZGSUNJRU5UIC8gMiAtIDI0O1xyXG5cdFx0Y29uc3QgZHcgPSBQcm9ncmVzc0Jsb2NrLndpZHRoIC8gSU1BR0VfU0laRV9DT0VGRklDSUVOVDtcclxuXHRcdHRoaXMuX2N0eC5kcmF3SW1hZ2UoUHJvZ3Jlc3NCbG9jaywgZHgsIDI4LCBkdywgUHJvZ3Jlc3NCbG9jay5oZWlnaHQgLyBJTUFHRV9TSVpFX0NPRUZGSUNJRU5UKTtcclxuXHRcdHRoaXMuX2N0eC5kcmF3SW1hZ2UoUHJvZ3Jlc3NTY2FsZSwgZHgsIDI4LCB3b3JsZC5wcm9ncmVzc0Jhci53aWR0aCwgUHJvZ3Jlc3NTY2FsZS5oZWlnaHQgLyBJTUFHRV9TSVpFX0NPRUZGSUNJRU5UICsgMSk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGluaXRHcmlkKHdvcmxkOiBXb3JsZCkge1xyXG5cdFx0bGV0IGdhbWVHcmlkID0gd29ybGQuZ3JpZDtcclxuXHRcdGxldCBkZXNrID0gZ2FtZUdyaWQuYmxvY2tMYXlvdXQ7XHJcblx0XHRjb25zdCBzdGFydFggPSB0aGlzLl9jYW52YXMud2lkdGggLyAyIC0gdGhpcy5fZ2FtZUltYWdlcy5HYW1lUGFuZWwud2lkdGggLyA0ICsgNztcclxuXHRcdGNvbnN0IHN0YXJ0WSA9IHRoaXMuX2dhbWVJbWFnZXMuSGVhZGVyUGFuZWwuaGVpZ2h0IC8gNCArIDMwICsgNztcclxuXHRcdGNvbnN0IGJsb2NrV2lkdGggPSB0aGlzLl9nYW1lSW1hZ2VzW2Rlc2tbMF1bMF0uZ2V0Q29sb3JJbWFnZU5hbWUoKV0ud2lkdGggLyAzLjAzO1xyXG5cdFx0Y29uc3QgYmxvY2tIZWlnaHQgPSB0aGlzLl9nYW1lSW1hZ2VzW2Rlc2tbMF1bMF0uZ2V0Q29sb3JJbWFnZU5hbWUoKV0uaGVpZ2h0IC8gMy4wMztcclxuXHRcdGdhbWVHcmlkLmluaXQoeyB4OiBzdGFydFggKyBibG9ja1dpZHRoICogZ2FtZUdyaWQubSArIDUsIHk6IHN0YXJ0WSB9LCB7IHdpZHRoOiBibG9ja1dpZHRoICogZ2FtZUdyaWQubSArIDUsIGhlaWdodDogYmxvY2tIZWlnaHQgKiBnYW1lR3JpZC5uIH0sIHsgd2lkdGg6IGJsb2NrV2lkdGgsIGhlaWdodDogYmxvY2tIZWlnaHQgfSk7XHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGdhbWVHcmlkLm47IGkgKz0gMSkge1xyXG5cdFx0XHRmb3IgKGxldCBqID0gMDsgaiA8IGdhbWVHcmlkLm07IGogKz0gMSkge1xyXG5cdFx0XHRcdHRoaXMuX2N0eC5kcmF3SW1hZ2UodGhpcy5fZ2FtZUltYWdlc1tkZXNrW2ldW2pdLmdldENvbG9ySW1hZ2VOYW1lKCldLCBzdGFydFggKyBibG9ja1dpZHRoICogaiwgc3RhcnRZICsgYmxvY2tIZWlnaHQgKiBpLCBibG9ja1dpZHRoLCBibG9ja0hlaWdodCk7XHJcblx0XHRcdFx0ZGVza1tpXVtqXS5pbml0KHsgeDogc3RhcnRYICsgYmxvY2tXaWR0aCAqIGosIHk6IHN0YXJ0WSArIGJsb2NrSGVpZ2h0ICogaSB9LCB7IHdpZHRoOiBibG9ja1dpZHRoLCBoZWlnaHQ6IGJsb2NrSGVpZ2h0IH0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRnYW1lR3JpZC5ibG9ja0xheW91dCA9IGRlc2s7XHJcblx0XHR3b3JsZC5ncmlkID0gZ2FtZUdyaWQ7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGluaXRQcm9ncmVzc0Jhcih3b3JsZDogV29ybGQpIHtcclxuXHRcdGNvbnN0IHByb2dyZXNzQmxvY2sgPSB0aGlzLl9nYW1lSW1hZ2VzLlByb2dyZXNzQmxvY2s7XHJcblx0XHR3b3JsZC5wcm9ncmVzc0Jhci5pbml0KHRoaXMuX2NhbnZhcy53aWR0aCAvIDIgLSBwcm9ncmVzc0Jsb2NrLndpZHRoIC8gSU1BR0VfU0laRV9DT0VGRklDSUVOVCAvIDIgLSAyNCwgcHJvZ3Jlc3NCbG9jay53aWR0aCAvIElNQUdFX1NJWkVfQ09FRkZJQ0lFTlQsIDI4LCB3b3JsZC5zY29yZS50YXJnZXRQb2ludHMpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBjbGVhclNjcmVlbigpIHtcclxuXHRcdHRoaXMuX2N0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5fY2FudmFzLndpZHRoLCB0aGlzLl9jYW52YXMuaGVpZ2h0KTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IEJsb2NrIGZyb20gJy4vYmxvY2snO1xyXG5pbXBvcnQgR3JpZCBmcm9tICcuL2dyaWQnO1xyXG5pbXBvcnQgUHJvZ3Jlc3NCYXIgZnJvbSAnLi9wcm9ncmVzc0Jhcic7XHJcbmltcG9ydCB7IGNob29zZUNvbG9yLCBnZXRSYW5kb21WYWx1ZSB9IGZyb20gJy4vdXRpbHMnO1xyXG5pbXBvcnQgeyBEaXJlY3Rpb24sIFJlc2l6ZVR5cGUsIEdyaWRJbmZvIH0gZnJvbSAnLi90eXBlcyc7XHJcbmltcG9ydCBJbnB1dCBmcm9tICcuL2lucHV0JztcclxuaW1wb3J0IFNjb3JlIGZyb20gJy4vc2NvcmUnO1xyXG5cclxuZW51bSBTdGFnZSB7XHJcblx0U2VsZWN0aW5nLFxyXG5cdFNoYWRpbmcsXHJcblx0RGVsZXRpbmcsXHJcblx0TW92aW5nLFxyXG5cdFJlY292ZXJ5LFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXb3JsZCB7XHJcblx0cHJpdmF0ZSBfc2NvcmU6IFNjb3JlO1xyXG5cclxuXHRwcml2YXRlIF9ncmlkOiBHcmlkO1xyXG5cclxuXHRwcml2YXRlIF9wcm9ncmVzc0JhcjogUHJvZ3Jlc3NCYXI7XHJcblxyXG5cdHByaXZhdGUgc3RhZ2U6IFN0YWdlO1xyXG5cclxuXHRwcml2YXRlIGRlc2tQb3NpdGlvblRlbXBMaXN0OiBbbnVtYmVyLCBudW1iZXJdW10gPSBbXTtcclxuXHJcblx0cHJpdmF0ZSBkZXNrUG9zaXRpb25MaXN0OiBbbnVtYmVyLCBudW1iZXJdW10gPSBbXTtcclxuXHJcblx0Y29uc3RydWN0b3IoZ3JpZEluZm86IEdyaWRJbmZvLCB4OiBudW1iZXIsIHk6IG51bWJlcikge1xyXG5cdFx0dGhpcy5fZ3JpZCA9IG5ldyBHcmlkKGdyaWRJbmZvKTtcclxuXHRcdHRoaXMuX3Byb2dyZXNzQmFyID0gbmV3IFByb2dyZXNzQmFyKCk7XHJcblx0XHR0aGlzLl9zY29yZSA9IG5ldyBTY29yZSh4LCB5KTtcclxuXHRcdHRoaXMuc3RhZ2UgPSBTdGFnZS5TZWxlY3Rpbmc7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgdXBkYXRlKHVzZXJJbnB1dDogSW5wdXQpIHtcclxuXHRcdHN3aXRjaCAodGhpcy5zdGFnZSkge1xyXG5cdFx0XHRjYXNlIFN0YWdlLlNlbGVjdGluZzpcclxuXHRcdFx0XHR0aGlzLmhhbmRsZVNlbGVjdCh1c2VySW5wdXQpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIFN0YWdlLlNoYWRpbmc6XHJcblx0XHRcdFx0dGhpcy5oYW5kbGVTaGFkaW5nKCk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgU3RhZ2UuRGVsZXRpbmc6XHJcblx0XHRcdFx0dGhpcy5oYW5kbGVEZWxldGluZygpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIFN0YWdlLk1vdmluZzpcclxuXHRcdFx0XHR0aGlzLmhhbmRsZU1vdmluZygpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIFN0YWdlLlJlY292ZXJ5OlxyXG5cdFx0XHRcdHRoaXMuaGFuZGxlUmVjb3ZlcnkoKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ1Vua25vd24gc3RhZ2UnKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHByaXZhdGUgaGFuZGxlU2VsZWN0KHVzZXJJbnB1dDogSW5wdXQpIHtcclxuXHRcdGNvbnN0IHVYID0gdXNlcklucHV0Lng7XHJcblx0XHRjb25zdCB1WSA9IHVzZXJJbnB1dC55O1xyXG5cdFx0aWYgKHVYICE9PSAwICYmIHVZICE9PSAwKSB7XHJcblx0XHRcdGNvbnN0IHsgeCwgeSwgbiwgbSwgd2lkdGgsIGhlaWdodCB9ID0gdGhpcy5fZ3JpZDtcclxuXHRcdFx0aWYgKHVZID4geSAmJiB1WSA8IHkgKyBoZWlnaHQgJiYgdVggPCB4ICYmIHVYID4geCAtIHdpZHRoKSB7XHJcblx0XHRcdFx0Y29uc3Qgcm93ID0gTWF0aC5mbG9vcigodVkgLSB5KSAvIChoZWlnaHQgLyBuKSk7XHJcblx0XHRcdFx0Y29uc3QgY29sID0gTWF0aC5mbG9vcigodVggLSAoeCAtIHdpZHRoKSkgLyAod2lkdGggLyBtKSk7XHJcblx0XHRcdFx0Y29uc3QgbGF5b3V0ID0gdGhpcy5fZ3JpZC5ibG9ja0xheW91dDtcclxuXHRcdFx0XHRsYXlvdXRbcm93XVtjb2xdLnRvZ2dsZVNlbGVjdCgpO1xyXG5cdFx0XHRcdHRoaXMuZGVza1Bvc2l0aW9uVGVtcExpc3QucHVzaChbcm93LCBjb2xdKTtcclxuXHRcdFx0XHR0aGlzLmRlc2tQb3NpdGlvbkxpc3QucHVzaChbcm93LCBjb2xdKTtcclxuXHRcdFx0XHR0aGlzLnN0YWdlID0gU3RhZ2UuU2hhZGluZztcclxuXHRcdFx0XHR0aGlzLl9ncmlkLmJsb2NrTGF5b3V0ID0gbGF5b3V0O1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGhhbmRsZVNoYWRpbmcoKSB7XHJcblx0XHRpZiAodGhpcy5kZXNrUG9zaXRpb25UZW1wTGlzdC5sZW5ndGggPT09IDApIHtcclxuXHRcdFx0aWYgKHRoaXMuZGVza1Bvc2l0aW9uTGlzdC5sZW5ndGggPT09IDEpIHtcclxuXHRcdFx0XHRjb25zdCBsYXlvdXQgPSB0aGlzLmdyaWQuYmxvY2tMYXlvdXQ7XHJcblx0XHRcdFx0bGF5b3V0W3RoaXMuZGVza1Bvc2l0aW9uTGlzdFswXVswXV1bdGhpcy5kZXNrUG9zaXRpb25MaXN0WzBdWzFdXS50b2dnbGVTZWxlY3QoKTtcclxuXHRcdFx0XHR0aGlzLmdyaWQuYmxvY2tMYXlvdXQgPSBsYXlvdXQ7XHJcblx0XHRcdFx0dGhpcy5zdGFnZSA9IFN0YWdlLlNlbGVjdGluZztcclxuXHRcdFx0XHR0aGlzLmRlc2tQb3NpdGlvbkxpc3QgPSBbXTtcclxuXHRcdFx0XHR0aGlzLmRlc2tQb3NpdGlvblRlbXBMaXN0ID0gW107XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dGhpcy5zY29yZS5kZWNyZWFzZU1vdmVzTnVtKCk7XHJcblx0XHRcdFx0dGhpcy5kZXNrUG9zaXRpb25UZW1wTGlzdCA9IHRoaXMuZGVza1Bvc2l0aW9uTGlzdDtcclxuXHRcdFx0XHR0aGlzLnN0YWdlID0gU3RhZ2UuRGVsZXRpbmc7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0bGV0IHBvc2l0aW9uTGlzdDogW251bWJlciwgbnVtYmVyXVtdID0gW107XHJcblx0XHR0aGlzLmRlc2tQb3NpdGlvblRlbXBMaXN0LmZvckVhY2goKFtyb3csIGNvbF0pID0+IHtcclxuXHRcdFx0cG9zaXRpb25MaXN0ID0gWy4uLnBvc2l0aW9uTGlzdCwgLi4udGhpcy5zZWxlY3ROZWlnaGJvcnMocm93LCBjb2wsIHRoaXMuX2dyaWQuYmxvY2tMYXlvdXQpXTtcclxuXHRcdH0pO1xyXG5cdFx0dGhpcy5kZXNrUG9zaXRpb25MaXN0ID0gWy4uLnRoaXMuZGVza1Bvc2l0aW9uTGlzdCwgLi4ucG9zaXRpb25MaXN0XTtcclxuXHRcdHRoaXMuZGVza1Bvc2l0aW9uVGVtcExpc3QgPSBwb3NpdGlvbkxpc3Q7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIHNlbGVjdE5laWdoYm9ycyhyb3c6IG51bWJlciwgY29sOiBudW1iZXIsIGRlc2s6IEJsb2NrW11bXSk6IFtudW1iZXIsIG51bWJlcl1bXSB7XHJcblx0XHRjb25zdCBkZXNrUG9zaXRpb25UZW1wTGlzdDogW251bWJlciwgbnVtYmVyXVtdID0gW107XHJcblx0XHRPYmplY3QudmFsdWVzKERpcmVjdGlvbikuZm9yRWFjaChkaXJlY3Rpb24gPT4ge1xyXG5cdFx0XHRjb25zdCBkZXNrUG9zaXRpb25JdGVtID0gdGhpcy5maW5kTmVpZ2hib3IoZGlyZWN0aW9uLCByb3csIGNvbCwgZGVzaywgdHJ1ZSk7XHJcblx0XHRcdGlmICh0eXBlb2YgZGVza1Bvc2l0aW9uSXRlbS5wb3NpdGlvblswXSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuXHRcdFx0XHRkZXNrUG9zaXRpb25UZW1wTGlzdC5wdXNoKGRlc2tQb3NpdGlvbkl0ZW0ucG9zaXRpb24gYXMgW251bWJlciwgbnVtYmVyXSk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0cmV0dXJuIGRlc2tQb3NpdGlvblRlbXBMaXN0O1xyXG5cdH1cclxuXHJcblx0Ly8gcHJpdmF0ZSBjaGVja05laWdoYm9ycyhyb3c6IG51bWJlciwgY29sOiBudW1iZXIsIGRlc2s6IEJsb2NrW11bXSk6IGJvb2xlYW4ge1xyXG5cdC8vIFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBPYmplY3QudmFsdWVzKERpcmVjdGlvbikubGVuZ3RoOyBpICs9IDEpIHtcclxuXHQvLyBcdFx0Y29uc3QgZGVza1Bvc2l0aW9uSXRlbSA9IHRoaXMuZmluZE5laWdoYm9yKE9iamVjdC52YWx1ZXMoRGlyZWN0aW9uKVtpXSwgcm93LCBjb2wsIGRlc2ssIHRydWUpO1xyXG5cdC8vIFx0XHRpZiAodHlwZW9mIGRlc2tQb3NpdGlvbkl0ZW0ucG9zaXRpb25bMF0gIT09ICd1bmRlZmluZWQnKSB7XHJcblx0Ly8gXHRcdFx0cmV0dXJuIHRydWU7XHJcblx0Ly8gXHRcdH1cclxuXHQvLyBcdH1cclxuXHQvLyBcdHJldHVybiBmYWxzZTtcclxuXHQvLyB9XHJcblxyXG5cdHByaXZhdGUgZmluZE5laWdoYm9yKGRpcmVjdGlvbjogRGlyZWN0aW9uIHwgc3RyaW5nLCByb3c6IG51bWJlciwgY29sOiBudW1iZXIsIGRlc2s6IEJsb2NrW11bXSwgc2VsZWN0ID0gZmFsc2UpOiB7IHBvc2l0aW9uOiBbbnVtYmVyLCBudW1iZXJdOyBkZXNrOiBCbG9ja1tdW10gfSB8IHsgcG9zaXRpb246IFt1bmRlZmluZWQsIHVuZGVmaW5lZF07IGRlc2s6IEJsb2NrW11bXSB9IHtcclxuXHRcdGNvbnN0IHsgVXAsIFJpZ2h0LCBMZWZ0LCBEb3duIH0gPSBEaXJlY3Rpb247XHJcblx0XHRzd2l0Y2ggKGRpcmVjdGlvbikge1xyXG5cdFx0XHRjYXNlIFVwOlxyXG5cdFx0XHRcdGlmIChyb3cgIT09IDAgJiYgZGVza1tyb3ddW2NvbF0uY29sb3IgPT09IGRlc2tbcm93IC0gMV1bY29sXS5jb2xvciAmJiAhZGVza1tyb3cgLSAxXVtjb2xdLmlzU2VsZWN0ZWQoKSkge1xyXG5cdFx0XHRcdFx0aWYgKHNlbGVjdCkgZGVza1tyb3cgLSAxXVtjb2xdLnRvZ2dsZVNlbGVjdCgpO1xyXG5cdFx0XHRcdFx0cmV0dXJuIHsgcG9zaXRpb246IFtyb3cgLSAxLCBjb2xdLCBkZXNrIH07XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHJldHVybiB7IHBvc2l0aW9uOiBbdW5kZWZpbmVkLCB1bmRlZmluZWRdLCBkZXNrIH07XHJcblx0XHRcdGNhc2UgUmlnaHQ6XHJcblx0XHRcdFx0aWYgKGNvbCAhPT0gdGhpcy5fZ3JpZC5tIC0gMSAmJiBkZXNrW3Jvd11bY29sXS5jb2xvciA9PT0gZGVza1tyb3ddW2NvbCArIDFdLmNvbG9yICYmICFkZXNrW3Jvd11bY29sICsgMV0uaXNTZWxlY3RlZCgpKSB7XHJcblx0XHRcdFx0XHRpZiAoc2VsZWN0KSBkZXNrW3Jvd11bY29sICsgMV0udG9nZ2xlU2VsZWN0KCk7XHJcblx0XHRcdFx0XHRyZXR1cm4geyBwb3NpdGlvbjogW3JvdywgY29sICsgMV0sIGRlc2sgfTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0cmV0dXJuIHsgcG9zaXRpb246IFt1bmRlZmluZWQsIHVuZGVmaW5lZF0sIGRlc2sgfTtcclxuXHRcdFx0Y2FzZSBMZWZ0OlxyXG5cdFx0XHRcdGlmIChjb2wgIT09IDAgJiYgZGVza1tyb3ddW2NvbF0uY29sb3IgPT09IGRlc2tbcm93XVtjb2wgLSAxXS5jb2xvciAmJiAhZGVza1tyb3ddW2NvbCAtIDFdLmlzU2VsZWN0ZWQoKSkge1xyXG5cdFx0XHRcdFx0aWYgKHNlbGVjdCkgZGVza1tyb3ddW2NvbCAtIDFdLnRvZ2dsZVNlbGVjdCgpO1xyXG5cdFx0XHRcdFx0cmV0dXJuIHsgcG9zaXRpb246IFtyb3csIGNvbCAtIDFdLCBkZXNrIH07XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHJldHVybiB7IHBvc2l0aW9uOiBbdW5kZWZpbmVkLCB1bmRlZmluZWRdLCBkZXNrIH07XHJcblx0XHRcdGNhc2UgRG93bjpcclxuXHRcdFx0XHRpZiAocm93ICE9PSB0aGlzLl9ncmlkLm4gLSAxICYmIGRlc2tbcm93XVtjb2xdLmNvbG9yID09PSBkZXNrW3JvdyArIDFdW2NvbF0uY29sb3IgJiYgIWRlc2tbcm93ICsgMV1bY29sXS5pc1NlbGVjdGVkKCkpIHtcclxuXHRcdFx0XHRcdGlmIChzZWxlY3QpIGRlc2tbcm93ICsgMV1bY29sXS50b2dnbGVTZWxlY3QoKTtcclxuXHRcdFx0XHRcdHJldHVybiB7IHBvc2l0aW9uOiBbcm93ICsgMSwgY29sXSwgZGVzayB9O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRyZXR1cm4geyBwb3NpdGlvbjogW3VuZGVmaW5lZCwgdW5kZWZpbmVkXSwgZGVzayB9O1xyXG5cdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdHJldHVybiB7IHBvc2l0aW9uOiBbdW5kZWZpbmVkLCB1bmRlZmluZWRdLCBkZXNrIH07XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGhhbmRsZURlbGV0aW5nKCkge1xyXG5cdFx0aWYgKHRoaXMuZGVza1Bvc2l0aW9uVGVtcExpc3QubGVuZ3RoID09PSAwKSB7XHJcblx0XHRcdHRoaXMuc3RhZ2UgPSBTdGFnZS5Nb3Zpbmc7XHJcblx0XHRcdHRoaXMuZGVza1Bvc2l0aW9uVGVtcExpc3QgPSBbXTtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0Y29uc3QgW3JvdywgY29sXSA9IHRoaXMuZGVza1Bvc2l0aW9uVGVtcExpc3RbMF07XHJcblx0XHRjb25zdCBkZXNrID0gdGhpcy5fZ3JpZC5ibG9ja0xheW91dDtcclxuXHRcdGlmIChkZXNrW3Jvd11bY29sXS5oZWlnaHQgPT09IDAgJiYgZGVza1tyb3ddW2NvbF0ud2lkdGggPT09IDApIHtcclxuXHRcdFx0dGhpcy5fc2NvcmUuaW5jcmVhc2VQb2ludHMoKTtcclxuXHRcdFx0dGhpcy5fcHJvZ3Jlc3NCYXIubW92ZSgpO1xyXG5cdFx0XHR0aGlzLmRlc2tQb3NpdGlvblRlbXBMaXN0ID0gdGhpcy5kZXNrUG9zaXRpb25UZW1wTGlzdC5zbGljZSgxKTtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0ZGVza1tyb3ddW2NvbF0ucmVzaXplKFJlc2l6ZVR5cGUuU2hyaW5rKTtcclxuXHRcdHRoaXMuX2dyaWQuYmxvY2tMYXlvdXQgPSBkZXNrO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBoYW5kbGVNb3ZpbmcoKSB7XHJcblx0XHRpZiAodGhpcy5kZXNrUG9zaXRpb25UZW1wTGlzdC5sZW5ndGggPj0gdGhpcy5kZXNrUG9zaXRpb25MaXN0Lmxlbmd0aCkge1xyXG5cdFx0XHR0aGlzLnN0YWdlID0gU3RhZ2UuUmVjb3Zlcnk7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdGNvbnN0IGRlc2sgPSB0aGlzLl9ncmlkLmJsb2NrTGF5b3V0O1xyXG5cdFx0Zm9yIChsZXQgY29sID0gMDsgY29sIDwgdGhpcy5fZ3JpZC5tOyBjb2wgKz0gMSkge1xyXG5cdFx0XHRjb25zdCByb3dzID0gdGhpcy5kZXNrUG9zaXRpb25MaXN0XHJcblx0XHRcdFx0LmZpbHRlcigoW3IsIGNdKSA9PiBjID09PSBjb2wpXHJcblx0XHRcdFx0Lm1hcCgoW3Jvd10pID0+IHtcclxuXHRcdFx0XHRcdHJldHVybiByb3c7XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHQuc29ydCgpO1xyXG5cdFx0XHRjb25zdCB2ZWxvY2l0eSA9IDE7XHJcblxyXG5cdFx0XHRpZiAocm93cy5sZW5ndGggPT09IDEgJiYgcm93c1swXSA9PT0gMCkge1xyXG5cdFx0XHRcdHRoaXMuZGVza1Bvc2l0aW9uVGVtcExpc3QucHVzaChbcm93c1swXSwgY29sXSk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGZvciAobGV0IGsgPSByb3dzLmxlbmd0aCAtIDE7IGsgPj0gMDsgayAtPSAxKSB7XHJcblx0XHRcdFx0aWYgKHJvd3Nba10gLSAxIDwgMCkgYnJlYWs7XHJcblx0XHRcdFx0aWYgKGRlc2tbcm93c1trXSAtIDFdW2NvbF0ueSA+PSBkZXNrW3Jvd3Nba11dW2NvbF0ueSkge1xyXG5cdFx0XHRcdFx0dGhpcy5kZXNrUG9zaXRpb25UZW1wTGlzdC5wdXNoKFtyb3dzW2tdLCBjb2xdKTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRmb3IgKGxldCBpID0gcm93c1trXSAtIDE7IGkgPj0gMDsgaSAtPSAxKSB7XHJcblx0XHRcdFx0XHRkZXNrW2ldW2NvbF0ubW92ZShEaXJlY3Rpb24uRG93biwgdmVsb2NpdHkpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0dGhpcy5fZ3JpZC5ibG9ja0xheW91dCA9IGRlc2s7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGhhbmRsZVJlY292ZXJ5KCkge1xyXG5cdFx0Y29uc3QgZGVzayA9IHRoaXMuX2dyaWQuYmxvY2tMYXlvdXQ7XHJcblx0XHRmb3IgKGxldCBpID0gdGhpcy5fZ3JpZC5uIC0gMTsgaSA+PSAwOyBpIC09IDEpIHtcclxuXHRcdFx0Zm9yIChsZXQgaiA9IHRoaXMuX2dyaWQubSAtMTsgaiA+PSAwOyBqIC09IDEpIHtcclxuXHRcdFx0XHRpZiAoZGVza1tpXVtqXS55ICE9PSBkZXNrW2ldW2pdLm9sZFkgfHwgZGVza1tpXVtqXS5pc1NlbGVjdGVkKCkpIHtcclxuXHRcdFx0XHRcdGxldCBuZXdSb3cgPSAtMTAwMDtcclxuXHRcdFx0XHRcdGlmIChkZXNrW2ldW2pdLmlzU2VsZWN0ZWQoKSkge1xyXG5cdFx0XHRcdFx0XHRkZXNrW2ldW2pdLnRvZ2dsZVNlbGVjdCgpO1xyXG5cdFx0XHRcdFx0XHRmb3IgKGxldCByID0gaSAtIDE7IHIgPj0gMDsgciAtPSAxKSB7XHJcblx0XHRcdFx0XHRcdFx0aWYgKGRlc2tbaV1bal0ub2xkWSAtIGRlc2tbcl1bal0ueSA8IGRlc2tbaV1bal0uaGVpZ2h0ICYmIGRlc2tbcl1bal0ud2lkdGggIT09IDAgJiYgIWRlc2tbcl1bal0uaXNTZWxlY3RlZCgpICYmICFkZXNrW3JdW2pdLmlzT2NjdXBpZWQoKSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0ZGVza1tyXVtqXS5vY2N1cGllZCA9IHRydWU7XHJcblx0XHRcdFx0XHRcdFx0XHRuZXdSb3cgPSByO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0bmV3Um93ID0gaSAtIE1hdGguZmxvb3IoKGRlc2tbaV1bal0ueSAtIGRlc2tbaV1bal0ub2xkWSkgLyB0aGlzLmdyaWQuaXRlbUhlaWdodCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRpZiAobmV3Um93ID49IDApIHtcclxuXHRcdFx0XHRcdFx0ZGVza1tpXVtqXS5jb2xvciA9IGRlc2tbbmV3Um93XVtqXS5vbGRDb2xvcjtcclxuXHRcdFx0XHRcdFx0ZGVza1tpXVtqXS5vbGRDb2xvciA9IGRlc2tbbmV3Um93XVtqXS5vbGRDb2xvcjtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdGNvbnN0IHJhbmRvbUNvbG9yID0gY2hvb3NlQ29sb3IoZ2V0UmFuZG9tVmFsdWUodGhpcy5fZ3JpZC5ncmlkSW5mby5ibG9ja0NvbG9ycykpO1xyXG5cdFx0XHRcdFx0XHRkZXNrW2ldW2pdLmNvbG9yID0gcmFuZG9tQ29sb3I7XHJcblx0XHRcdFx0XHRcdGRlc2tbaV1bal0ub2xkQ29sb3IgPSByYW5kb21Db2xvcjtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGRlc2tbaV1bal0uc2l6ZSA9IHRoaXMuZ3JpZC5pdGVtU2l6ZTtcclxuXHRcdFx0XHRcdGRlc2tbaV1bal0ucG9zaXRpb24gPSB7IHg6IGRlc2tbaV1bal0ueCwgeTogZGVza1tpXVtqXS5vbGRZIH07XHJcblx0XHRcdFx0XHRpZiAoZGVza1tpXVtqXS5pc09jY3VwaWVkKCkpIGRlc2tbaV1bal0ub2NjdXBpZWQgPSBmYWxzZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHRoaXMuX2dyaWQuYmxvY2tMYXlvdXQgPSBkZXNrO1xyXG5cdFx0dGhpcy5kZXNrUG9zaXRpb25MaXN0ID0gW107XHJcblx0XHR0aGlzLmRlc2tQb3NpdGlvblRlbXBMaXN0ID0gW107XHJcblx0XHR0aGlzLnN0YWdlID0gU3RhZ2UuU2VsZWN0aW5nO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGdldCBncmlkKCk6IEdyaWQge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2dyaWQ7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc2V0IGdyaWQoZ3JpZDogR3JpZCkge1xyXG5cdFx0dGhpcy5fZ3JpZCA9IGdyaWQ7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZ2V0IHNjb3JlKCk6IFNjb3JlIHtcclxuXHRcdHJldHVybiB0aGlzLl9zY29yZTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzZXQgc2NvcmUoc2NvcmU6IFNjb3JlKSB7XHJcblx0XHR0aGlzLl9zY29yZSA9IHNjb3JlO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGdldCBwcm9ncmVzc0JhcigpOiBQcm9ncmVzc0JhciB7XHJcblx0XHRyZXR1cm4gdGhpcy5fcHJvZ3Jlc3NCYXI7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc2V0IHByb2dyZXNzQmFyKHByQmFyOiBQcm9ncmVzc0Jhcikge1xyXG5cdFx0dGhpcy5fcHJvZ3Jlc3NCYXIgPSBwckJhcjtcclxuXHR9XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0ICcuL3N0eWxlcy9zdHlsZS5zY3NzJztcclxuaW1wb3J0IEdhbWUgZnJvbSAnLi90cy9nYW1lJztcclxuaW1wb3J0IFZpZXcgZnJvbSAnLi90cy92aWV3JztcclxuXHJcbmNvbnN0IGNhbnZhcyA9IDxIVE1MQ2FudmFzRWxlbWVudD5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdjYW52YXMnKTtcclxuY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcbmNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcblxyXG5jb25zdCBuID0gNztcclxuY29uc3QgbSA9IDc7XHJcbmNvbnN0IGMgPSA1O1xyXG5jb25zdCBrID0gMjtcclxuY29uc3QgcyA9IDM7XHJcbmNvbnN0IHggPSAxMDA7XHJcbmNvbnN0IHkgPSAyMDtcclxuXHJcbmNvbnN0IGdhbWUgPSBuZXcgR2FtZShuZXcgVmlldyhjYW52YXMpLCBuLCBtLCBjLCBrLCBzLCB4LCB5KTtcclxuXHJcbmdhbWUuaW5pdCgpLnRoZW4oKCkgPT4gZ2FtZS5zdGFydCgpKTtcclxuXHJcbmNvbnNvbGUubG9nKGdhbWUpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=