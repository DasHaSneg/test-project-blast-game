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
/* harmony import */ var _img_end_button_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../img/end/button.png */ "./src/img/end/button.png");
/* harmony import */ var _img_game_selected_blocks_blue_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../img/game/selected_blocks/blue.png */ "./src/img/game/selected_blocks/blue.png");
/* harmony import */ var _img_game_selected_blocks_green_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../img/game/selected_blocks/green.png */ "./src/img/game/selected_blocks/green.png");
/* harmony import */ var _img_game_selected_blocks_yellow_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../img/game/selected_blocks/yellow.png */ "./src/img/game/selected_blocks/yellow.png");
/* harmony import */ var _img_game_selected_blocks_purple_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../img/game/selected_blocks/purple.png */ "./src/img/game/selected_blocks/purple.png");
/* harmony import */ var _img_game_selected_blocks_red_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../img/game/selected_blocks/red.png */ "./src/img/game/selected_blocks/red.png");
/* harmony import */ var _img_booster_bonus_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../img/booster/bonus.png */ "./src/img/booster/bonus.png");
/* harmony import */ var _img_booster_selected_bonus_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../img/booster/selected_bonus.png */ "./src/img/booster/selected_bonus.png");
/* harmony import */ var _img_booster_money_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../img/booster/money.png */ "./src/img/booster/money.png");



















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
    Bonus: _img_booster_bonus_png__WEBPACK_IMPORTED_MODULE_16__,
    SelectedBonus: _img_booster_selected_bonus_png__WEBPACK_IMPORTED_MODULE_17__,
    MoneyBlock: _img_booster_money_png__WEBPACK_IMPORTED_MODULE_18__,
    Button: _img_end_button_png__WEBPACK_IMPORTED_MODULE_10__,
    SelectedBlueBlock: _img_game_selected_blocks_blue_png__WEBPACK_IMPORTED_MODULE_11__,
    SelectedGreenBlock: _img_game_selected_blocks_green_png__WEBPACK_IMPORTED_MODULE_12__,
    SelectedPurpleBlock: _img_game_selected_blocks_purple_png__WEBPACK_IMPORTED_MODULE_14__,
    SelectedRedBlock: _img_game_selected_blocks_red_png__WEBPACK_IMPORTED_MODULE_15__,
    SelectedYellowBlock: _img_game_selected_blocks_yellow_png__WEBPACK_IMPORTED_MODULE_13__,
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
        return this._selected ? "Selected" + this.color : this.color;
        // return this._color;
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
var POINTS_PER_TURN = 2;
var IMAGE_SIZE_COEFFICIENT = 4;
var TELEPORT_COST = 5;
var MONEY = 20;


/***/ }),

/***/ "./src/ts/event.ts":
/*!*************************!*\
  !*** ./src/ts/event.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var EventManager = /** @class */ (function () {
    function EventManager() {
        this.events = new Map();
    }
    EventManager.prototype.on = function (event, handler) {
        if (this.events.has(event)) {
            this.events.get(event).add(handler);
        }
        else {
            this.events.set(event, new Set([handler]));
        }
    };
    EventManager.prototype.off = function (event, handler) {
        var _a;
        (_a = this.events.get(event)) === null || _a === void 0 ? void 0 : _a.delete(handler);
    };
    EventManager.prototype.emit = function (event, arg) {
        var _a;
        (_a = this.events.get(event)) === null || _a === void 0 ? void 0 : _a.forEach(function (handler) { return handler(arg); });
    };
    return EventManager;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EventManager);


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
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/ts/utils.ts");
/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./input */ "./src/ts/input.ts");
/* harmony import */ var _scene__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scene */ "./src/ts/scene.ts");
/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./event */ "./src/ts/event.ts");
/* harmony import */ var _worlds_gameWorld__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./worlds/gameWorld */ "./src/ts/worlds/gameWorld.ts");
/* harmony import */ var _ImageRepository__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ImageRepository */ "./src/ts/ImageRepository.ts");
/* harmony import */ var _assets__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets */ "./src/ts/assets.ts");
/* harmony import */ var _views_gameView__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/gameView */ "./src/ts/views/gameView.ts");
/* harmony import */ var _worlds_endWorld__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./worlds/endWorld */ "./src/ts/worlds/endWorld.ts");
/* harmony import */ var _views_endView__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/endView */ "./src/ts/views/endView.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./constants */ "./src/ts/constants.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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











var Game = /** @class */ (function (_super) {
    __extends(Game, _super);
    function Game(canvas) {
        var _this = _super.call(this) || this;
        _this._currentScene = _scene__WEBPACK_IMPORTED_MODULE_2__.Scenes.Game;
        _this.callEmit = function (eName, arg) { return _this.emit(eName, arg); };
        _this._canvas = canvas;
        _this._ctx = canvas.getContext('2d');
        _this._imageRepository = new _ImageRepository__WEBPACK_IMPORTED_MODULE_5__["default"](_assets__WEBPACK_IMPORTED_MODULE_6__["default"]);
        _this._scenes = new _scene__WEBPACK_IMPORTED_MODULE_2__["default"]();
        _this._input = new _input__WEBPACK_IMPORTED_MODULE_1__["default"]();
        _this.loop = _this.loop.bind(_this);
        _this.callEmit = _this.callEmit.bind(_this);
        return _this;
    }
    Game.prototype.init = function (n, m, c, k, s, x, y) {
        return __awaiter(this, void 0, void 0, function () {
            var gameImages, _a, canvas, ctx;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this._input.init();
                        return [4 /*yield*/, this._imageRepository.loadImages()];
                    case 1:
                        gameImages = _b.sent();
                        _a = this, canvas = _a._canvas, ctx = _a._ctx;
                        this._scenes.add(_scene__WEBPACK_IMPORTED_MODULE_2__.Scenes.Game, Game.createGameScene(n, m, c, k, s, x, y, gameImages, canvas, ctx, this.callEmit));
                        this.on('endGame', function (result) {
                            _this._currentScene = _scene__WEBPACK_IMPORTED_MODULE_2__.Scenes.End;
                            _this._scenes.add(_scene__WEBPACK_IMPORTED_MODULE_2__.Scenes.End, Game.createEndScene(gameImages, canvas, ctx, result, _this.callEmit));
                        });
                        this.on('newGame', function () {
                            _this._currentScene = _scene__WEBPACK_IMPORTED_MODULE_2__.Scenes.Game;
                            _this._scenes.add(_scene__WEBPACK_IMPORTED_MODULE_2__.Scenes.Game, Game.createGameScene(n, m, c, k, s, x, y, gameImages, canvas, ctx, _this.callEmit));
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    Game.createGameScene = function (n, m, c, k, s, x, y, gameImages, canvas, ctx, emitEFunc) {
        var gridInfo = {
            blockColors: (0,_utils__WEBPACK_IMPORTED_MODULE_0__.chooseColors)(c),
            n: n,
            m: m,
            k: k,
            minStirringAmount: s,
        };
        var world = new _worlds_gameWorld__WEBPACK_IMPORTED_MODULE_4__["default"](gridInfo, x, y, _constants__WEBPACK_IMPORTED_MODULE_10__.MONEY, emitEFunc);
        var view = new _views_gameView__WEBPACK_IMPORTED_MODULE_7__["default"](canvas, ctx, gameImages);
        view.init(world);
        return { view: view, world: world };
    };
    Game.createEndScene = function (gameImages, canvas, ctx, result, emitEFunc) {
        var world = new _worlds_endWorld__WEBPACK_IMPORTED_MODULE_8__["default"](result, emitEFunc);
        var view = new _views_endView__WEBPACK_IMPORTED_MODULE_9__["default"](canvas, ctx, gameImages);
        view.init(world);
        return { view: view, world: world };
    };
    Game.prototype.start = function () {
        requestAnimationFrame(this.loop);
    };
    Game.prototype.loop = function () {
        var _a = this._scenes.get(this._currentScene), world = _a.world, view = _a.view;
        world.update(this._input);
        if (this._input.x !== 0 && this._input.y !== 0)
            this._input.coordinates = { x: 0, y: 0 };
        view.update(world);
        requestAnimationFrame(this.loop);
    };
    return Game;
}(_event__WEBPACK_IMPORTED_MODULE_3__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Game);


/***/ }),

/***/ "./src/ts/gameObjects/Bonus.ts":
/*!*************************************!*\
  !*** ./src/ts/gameObjects/Bonus.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _gameObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameObject */ "./src/ts/gameObjects/gameObject.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Bonus = /** @class */ (function (_super) {
    __extends(Bonus, _super);
    function Bonus() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._selected = false;
        return _this;
    }
    Object.defineProperty(Bonus.prototype, "selected", {
        get: function () {
            return this._selected;
        },
        set: function (selected) {
            this._selected = selected;
        },
        enumerable: false,
        configurable: true
    });
    Bonus.prototype.toggleSelect = function () {
        this._selected = !this._selected;
    };
    return Bonus;
}(_gameObject__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Bonus);


/***/ }),

/***/ "./src/ts/gameObjects/button.ts":
/*!**************************************!*\
  !*** ./src/ts/gameObjects/button.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _gameObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameObject */ "./src/ts/gameObjects/gameObject.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._selected = false;
        _this._color = '';
        return _this;
    }
    Object.defineProperty(Button.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (color) {
            this._color = color;
        },
        enumerable: false,
        configurable: true
    });
    Button.prototype.toggleSelect = function () {
        this._selected = !this._selected;
    };
    Button.prototype.isSelected = function () {
        return this._selected;
    };
    return Button;
}(_gameObject__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);


/***/ }),

/***/ "./src/ts/gameObjects/gameObject.ts":
/*!******************************************!*\
  !*** ./src/ts/gameObjects/gameObject.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./src/ts/types.ts");

var GameObject = /** @class */ (function () {
    function GameObject() {
        this._x = 0;
        this._y = 0;
        this._height = 0;
        this._width = 0;
        this._velocity = 0;
        this._oldY = 0;
        this._olX = 0;
        this._itemSize = { height: 0, width: 0 };
    }
    GameObject.prototype.init = function (position, size, itemSize) {
        this.position = position;
        this._oldY = position.y;
        this.size = size;
        if (itemSize)
            this._itemSize = itemSize;
    };
    GameObject.prototype.move = function (moveType, velocity) {
        var anVelocity = velocity || this._velocity;
        var Up = _types__WEBPACK_IMPORTED_MODULE_0__.Direction.Up, Right = _types__WEBPACK_IMPORTED_MODULE_0__.Direction.Right, Left = _types__WEBPACK_IMPORTED_MODULE_0__.Direction.Left, Down = _types__WEBPACK_IMPORTED_MODULE_0__.Direction.Down;
        switch (moveType) {
            case Up:
                this._y -= anVelocity;
                break;
            case Right:
                this._x += anVelocity;
                break;
            case Left:
                this._x -= anVelocity;
                break;
            case Down:
                this._y += anVelocity;
                break;
            default:
                throw new Error('Unknown move type');
        }
    };
    GameObject.prototype.resize = function (resizeType, velocity) {
        var anVelocity = velocity || this._velocity;
        var Zoom = _types__WEBPACK_IMPORTED_MODULE_0__.ResizeType.Zoom, Shrink = _types__WEBPACK_IMPORTED_MODULE_0__.ResizeType.Shrink;
        switch (resizeType) {
            case Shrink:
                if (this._height > 0)
                    this._height -= anVelocity;
                else
                    this._height = 0;
                if (this._width > 0)
                    this._width -= anVelocity;
                else
                    this._width = 0;
                break;
            case Zoom:
                this._height += anVelocity;
                this._width += anVelocity;
                break;
            default:
                throw new Error('Unknown resize type');
        }
    };
    Object.defineProperty(GameObject.prototype, "x", {
        get: function () {
            return this._x;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameObject.prototype, "y", {
        get: function () {
            return this._y;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameObject.prototype, "height", {
        get: function () {
            return this._height;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameObject.prototype, "width", {
        get: function () {
            return this._width;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameObject.prototype, "position", {
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
    Object.defineProperty(GameObject.prototype, "size", {
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
    return GameObject;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameObject);


/***/ }),

/***/ "./src/ts/gameObjects/grid.ts":
/*!************************************!*\
  !*** ./src/ts/gameObjects/grid.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../block */ "./src/ts/block.ts");
/* harmony import */ var _worlds_endWorld__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../worlds/endWorld */ "./src/ts/worlds/endWorld.ts");
/* harmony import */ var _gameObject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameObject */ "./src/ts/gameObjects/gameObject.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var Grid = /** @class */ (function (_super) {
    __extends(Grid, _super);
    function Grid(gridInfo, emitEFunc) {
        var _this = _super.call(this) || this;
        _this._blockLayout = [];
        _this._itemHeight = 0;
        _this._itemWidth = 0;
        _this._gridInfo = gridInfo;
        _this.createLayout();
        var s = gridInfo.minStirringAmount;
        while (!_this.checkLayout() && s > 0) {
            _this.createLayout();
            s -= 1;
        }
        if (s === 0) {
            emitEFunc('endGame', _worlds_endWorld__WEBPACK_IMPORTED_MODULE_1__.Result.Lost);
        }
        return _this;
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
        var result = false;
        var _a = this._gridInfo, m = _a.m, n = _a.n;
        var layout = this._blockLayout;
        var i = 0;
        for (i = 0; i < m - 1; i += 1) {
            var rowList = layout[i].map(function (block) { return block.color; });
            var rowSet = new Set(rowList);
            if (rowSet.size < rowList.length) {
                result = true;
                break;
            }
        }
        for (i = 0; i < m; i += 1) {
            for (var j = 1; j < n; j += 1) {
                if (layout[j - 1][i] === layout[j][i]) {
                    result = true;
                    break;
                }
            }
            if (result)
                break;
        }
        return result;
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
    return Grid;
}(_gameObject__WEBPACK_IMPORTED_MODULE_2__["default"]));
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

/***/ "./src/ts/scene.ts":
/*!*************************!*\
  !*** ./src/ts/scene.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Scenes": () => (/* binding */ Scenes),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Scenes;
(function (Scenes) {
    Scenes["Start"] = "Start";
    Scenes["Game"] = "Game";
    Scenes["End"] = "End";
})(Scenes || (Scenes = {}));
var SceneManager = /** @class */ (function () {
    function SceneManager() {
        this._scenes = new Map();
    }
    SceneManager.prototype.add = function (sceneName, sceneObj) {
        this._scenes.set(sceneName, sceneObj);
    };
    SceneManager.prototype.has = function (sceneName) {
        this._scenes.has(sceneName);
    };
    SceneManager.prototype.get = function (sceneName) {
        return this._scenes.get(sceneName);
    };
    SceneManager.prototype.delete = function (sceneName) {
        if (this._scenes.has(sceneName)) {
            this._scenes.delete(sceneName);
        }
    };
    Object.defineProperty(SceneManager.prototype, "scenes", {
        get: function () {
            return this._scenes;
        },
        enumerable: false,
        configurable: true
    });
    return SceneManager;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SceneManager);


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
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/ts/constants.ts");

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
        this._points += _constants__WEBPACK_IMPORTED_MODULE_0__.POINTS_PER_TURN;
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
/* harmony export */   "chooseColor": () => (/* binding */ chooseColor),
/* harmony export */   "checkClick": () => (/* binding */ checkClick)
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
function checkClick(uX, uY, x, y, height, width) {
    return uY > y && uY < y + height && uX > x && uX < x + width;
}


/***/ }),

/***/ "./src/ts/views/endView.ts":
/*!*********************************!*\
  !*** ./src/ts/views/endView.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view */ "./src/ts/views/view.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/ts/constants.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var EndView = /** @class */ (function (_super) {
    __extends(EndView, _super);
    function EndView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EndView.prototype.init = function (world) {
        this.initButton(world);
    };
    EndView.prototype.update = function (world) {
        this.renderScene(world);
    };
    EndView.prototype.renderScene = function (world) {
        var _a = this._canvas, width = _a.width, height = _a.height;
        var Button = this._gameImages.Button;
        var bWidth = (Button.width / _constants__WEBPACK_IMPORTED_MODULE_1__.IMAGE_SIZE_COEFFICIENT) * 2;
        var bHeight = (Button.height / _constants__WEBPACK_IMPORTED_MODULE_1__.IMAGE_SIZE_COEFFICIENT) * 2;
        var dx = width / 2 - bWidth / 2;
        var dy = height / 2 - bHeight / 2;
        this._ctx.fillStyle = '#a1a1a1';
        this._ctx.fillRect(0, 0, width, height);
        this._ctx.drawImage(Button, dx, dy, bWidth, bHeight);
        this._ctx.fillStyle = '#fff';
        this._ctx.font = '34px Marvin';
        var text = "\u0417\u0430\u043D\u043E\u0432\u043E";
        this._ctx.fillText(text, dx + bWidth / 2 - this._ctx.measureText(text).width / 2, dy + bHeight / 2 + 10);
        this._ctx.font = '54px Marvin';
        text = "\u0412\u044B " + world.result;
        this._ctx.fillText(text, width / 2 - this._ctx.measureText(text).width / 2, dy + bHeight / 2 - 100);
    };
    EndView.prototype.initButton = function (world) {
        var _a = this._canvas, width = _a.width, height = _a.height;
        var Button = this._gameImages.Button;
        var bWidth = (Button.width / _constants__WEBPACK_IMPORTED_MODULE_1__.IMAGE_SIZE_COEFFICIENT) * 2;
        var bHeight = (Button.height / _constants__WEBPACK_IMPORTED_MODULE_1__.IMAGE_SIZE_COEFFICIENT) * 2;
        var dx = width / 2 - bWidth / 2;
        var dy = height / 2 - bHeight / 2;
        world.againButton.init({ x: dx, y: dy }, {
            width: bWidth,
            height: bHeight,
        });
    };
    EndView.prototype.clearScreen = function () {
        this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
    };
    return EndView;
}(_view__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EndView);


/***/ }),

/***/ "./src/ts/views/gameView.ts":
/*!**********************************!*\
  !*** ./src/ts/views/gameView.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view */ "./src/ts/views/view.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/ts/constants.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var GameView = /** @class */ (function (_super) {
    __extends(GameView, _super);
    function GameView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.getTextScoreDy = function (panelDy, image, k) { return panelDy + image.height / _constants__WEBPACK_IMPORTED_MODULE_1__.IMAGE_SIZE_COEFFICIENT / k; };
        _this.getTextScoreDx = function (textDx, text) { return textDx - _this._ctx.measureText(text).width / 2; };
        return _this;
    }
    GameView.prototype.init = function (world) {
        this.initGrid(world);
        this.initProgressBar(world);
        this.initBonus(world);
    };
    GameView.prototype.update = function (world) {
        this.clearScreen();
        this.renderScene(world);
    };
    GameView.prototype.renderScene = function (world) {
        this.renderHeader(world);
        this.renderGrid(world);
        this.renderScore(world);
        this.renderProgressBar(world);
        this.renderBonus(world);
    };
    GameView.prototype.renderHeader = function (world) {
        var _a = this._canvas, width = _a.width, height = _a.height;
        var _b = this._gameImages, HeaderPanel = _b.HeaderPanel, MoneyBlock = _b.MoneyBlock;
        this._ctx.fillStyle = '#a1a1a1';
        this._ctx.fillRect(0, 0, width, height);
        var dx = width / 2 - HeaderPanel.width / _constants__WEBPACK_IMPORTED_MODULE_1__.IMAGE_SIZE_COEFFICIENT / 2;
        this._ctx.drawImage(HeaderPanel, dx, 0, HeaderPanel.width / _constants__WEBPACK_IMPORTED_MODULE_1__.IMAGE_SIZE_COEFFICIENT, HeaderPanel.height / _constants__WEBPACK_IMPORTED_MODULE_1__.IMAGE_SIZE_COEFFICIENT);
        this._ctx.drawImage(MoneyBlock, dx + 35, HeaderPanel.height / _constants__WEBPACK_IMPORTED_MODULE_1__.IMAGE_SIZE_COEFFICIENT / 10, MoneyBlock.width / _constants__WEBPACK_IMPORTED_MODULE_1__.IMAGE_SIZE_COEFFICIENT, MoneyBlock.height / _constants__WEBPACK_IMPORTED_MODULE_1__.IMAGE_SIZE_COEFFICIENT);
        this._ctx.fillStyle = '#fff';
        this._ctx.font = '20px Marvin';
        this._ctx.fillText('прогресс', width / 2 - 70, 23);
        this._ctx.fillText("" + world.money, dx + MoneyBlock.width / _constants__WEBPACK_IMPORTED_MODULE_1__.IMAGE_SIZE_COEFFICIENT / 1.3, HeaderPanel.height / _constants__WEBPACK_IMPORTED_MODULE_1__.IMAGE_SIZE_COEFFICIENT / 2);
    };
    GameView.prototype.renderScore = function (world) {
        var scorePanelImage = this._gameImages.ScorePanel;
        var dx = this._canvas.width / 2 + 125;
        var dy = this._gameImages.HeaderPanel.height / _constants__WEBPACK_IMPORTED_MODULE_1__.IMAGE_SIZE_COEFFICIENT + 54;
        var textDx = dx + scorePanelImage.width / _constants__WEBPACK_IMPORTED_MODULE_1__.IMAGE_SIZE_COEFFICIENT / 2;
        this._ctx.drawImage(scorePanelImage, dx, dy, scorePanelImage.width / _constants__WEBPACK_IMPORTED_MODULE_1__.IMAGE_SIZE_COEFFICIENT, scorePanelImage.height / _constants__WEBPACK_IMPORTED_MODULE_1__.IMAGE_SIZE_COEFFICIENT);
        this.renderScoreText(world.score, textDx, dy, scorePanelImage);
    };
    GameView.prototype.renderScoreText = function (score, textDx, panelDy, image) {
        var points = score.points, moves = score.moves;
        this._ctx.font = '20px Marvin';
        var text = 'время:';
        this._ctx.fillText(text, this.getTextScoreDx(textDx, text), panelDy);
        this._ctx.font = '34px Marvin';
        text = "" + points;
        this._ctx.fillText(text, this.getTextScoreDx(textDx, text), this.getTextScoreDy(panelDy, image, 1.16));
        text = "" + moves;
        this._ctx.font = '52px Marvin';
        this._ctx.fillText(text, this.getTextScoreDx(textDx, text), this.getTextScoreDy(panelDy, image, 2.5));
        text = 'очки:';
        this._ctx.font = '20px Marvin';
        this._ctx.fillText(text, this.getTextScoreDx(textDx, text), this.getTextScoreDy(panelDy, image, 1.4));
    };
    GameView.prototype.initBonus = function (world) {
        var _a = this._gameImages, ScorePanel = _a.ScorePanel, HeaderPanel = _a.HeaderPanel, Bonus = _a.Bonus;
        var dx = this._canvas.width / 2 + 125;
        var dy = HeaderPanel.height / _constants__WEBPACK_IMPORTED_MODULE_1__.IMAGE_SIZE_COEFFICIENT + 54 + ScorePanel.height / _constants__WEBPACK_IMPORTED_MODULE_1__.IMAGE_SIZE_COEFFICIENT;
        var scoreTextDX = dx + ScorePanel.width / _constants__WEBPACK_IMPORTED_MODULE_1__.IMAGE_SIZE_COEFFICIENT / 2;
        world.bonus.init({ x: scoreTextDX - Bonus.width / 3 / 2, y: dy + 50 }, { width: Bonus.width / 3, height: Bonus.height / 3 });
    };
    GameView.prototype.renderBonus = function (world) {
        var _a = this._gameImages, ScorePanel = _a.ScorePanel, HeaderPanel = _a.HeaderPanel, Bonus = _a.Bonus, SelectedBonus = _a.SelectedBonus;
        var dx = this._canvas.width / 2 + 125;
        var dy = HeaderPanel.height / _constants__WEBPACK_IMPORTED_MODULE_1__.IMAGE_SIZE_COEFFICIENT + 54 + ScorePanel.height / _constants__WEBPACK_IMPORTED_MODULE_1__.IMAGE_SIZE_COEFFICIENT;
        var scoreTextDX = dx + ScorePanel.width / _constants__WEBPACK_IMPORTED_MODULE_1__.IMAGE_SIZE_COEFFICIENT / 2;
        this._ctx.font = '20px Marvin';
        var text = 'бонус';
        this._ctx.fillText(text, scoreTextDX - this._ctx.measureText(text).width / 2, dy + 50);
        this._ctx.drawImage(!world.bonus.selected ? Bonus : SelectedBonus, scoreTextDX - Bonus.width / 3 / 2, dy + 50, Bonus.width / 3, Bonus.height / 3);
        text = "" + _constants__WEBPACK_IMPORTED_MODULE_1__.TELEPORT_COST;
        this._ctx.fillText(text, scoreTextDX - this._ctx.measureText(text).width / 2 - 5, dy + Bonus.height / 3 + 20);
    };
    GameView.prototype.renderGrid = function (world) {
        this._ctx.drawImage(this._gameImages.GamePanel, this._canvas.width / 2 - this._gameImages.GamePanel.width / _constants__WEBPACK_IMPORTED_MODULE_1__.IMAGE_SIZE_COEFFICIENT, this._gameImages.HeaderPanel.height / _constants__WEBPACK_IMPORTED_MODULE_1__.IMAGE_SIZE_COEFFICIENT + 30, this._gameImages.GamePanel.width / _constants__WEBPACK_IMPORTED_MODULE_1__.IMAGE_SIZE_COEFFICIENT, this._gameImages.GamePanel.height / _constants__WEBPACK_IMPORTED_MODULE_1__.IMAGE_SIZE_COEFFICIENT);
        var _a = world.grid, n = _a.n, m = _a.m, layout = _a.blockLayout;
        for (var i = 0; i < n; i += 1) {
            for (var j = 0; j < m; j += 1) {
                var _b = layout[i][j].position, x = _b.x, y = _b.y;
                var _c = layout[i][j].size, width = _c.width, height = _c.height;
                this._ctx.drawImage(this._gameImages[layout[i][j].getColorImageName()], x, y, width, height);
            }
        }
    };
    GameView.prototype.renderProgressBar = function (world) {
        var _a = this._gameImages, ProgressBlock = _a.ProgressBlock, ProgressScale = _a.ProgressScale;
        var dx = this._canvas.width / 2 - ProgressScale.width / _constants__WEBPACK_IMPORTED_MODULE_1__.IMAGE_SIZE_COEFFICIENT / 2 - 24;
        var dw = ProgressBlock.width / _constants__WEBPACK_IMPORTED_MODULE_1__.IMAGE_SIZE_COEFFICIENT;
        this._ctx.drawImage(ProgressBlock, dx, 28, dw, ProgressBlock.height / _constants__WEBPACK_IMPORTED_MODULE_1__.IMAGE_SIZE_COEFFICIENT);
        this._ctx.drawImage(ProgressScale, dx, 28, world.progressBar.width, ProgressScale.height / _constants__WEBPACK_IMPORTED_MODULE_1__.IMAGE_SIZE_COEFFICIENT + 1);
    };
    GameView.prototype.initGrid = function (world) {
        var gameGrid = world.grid;
        var n = gameGrid.n, m = gameGrid.m, layout = gameGrid.blockLayout;
        var startX = this._canvas.width / 2 - this._gameImages.GamePanel.width / 4 + 7;
        var startY = this._gameImages.HeaderPanel.height / 4 + 30 + 7;
        var blockWidth = this._gameImages[layout[0][0].getColorImageName()].width / 3.03;
        var blockHeight = this._gameImages[layout[0][0].getColorImageName()].height / 3.03;
        gameGrid.init({ x: startX + blockWidth * m + 5, y: startY }, {
            width: blockWidth * m + 5,
            height: blockHeight * n,
        }, { width: blockWidth, height: blockHeight });
        for (var i = 0; i < n; i += 1) {
            for (var j = 0; j < m; j += 1) {
                this._ctx.drawImage(this._gameImages[layout[i][j].getColorImageName()], startX + blockWidth * j, startY + blockHeight * i, blockWidth, blockHeight);
                layout[i][j].init({ x: startX + blockWidth * j, y: startY + blockHeight * i }, {
                    width: blockWidth,
                    height: blockHeight,
                });
            }
        }
    };
    GameView.prototype.initProgressBar = function (world) {
        var progressBlock = this._gameImages.ProgressBlock;
        world.progressBar.init(this._canvas.width / 2 - progressBlock.width / _constants__WEBPACK_IMPORTED_MODULE_1__.IMAGE_SIZE_COEFFICIENT / 2 - 24, progressBlock.width / _constants__WEBPACK_IMPORTED_MODULE_1__.IMAGE_SIZE_COEFFICIENT, 28, world.score.targetPoints);
    };
    GameView.prototype.clearScreen = function () {
        this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
    };
    return GameView;
}(_view__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameView);


/***/ }),

/***/ "./src/ts/views/view.ts":
/*!******************************!*\
  !*** ./src/ts/views/view.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var View = /** @class */ (function () {
    function View(canvas, ctx, gameImages) {
        this._canvas = canvas;
        this._ctx = ctx;
        this._gameImages = gameImages;
    }
    return View;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (View);


/***/ }),

/***/ "./src/ts/worlds/endWorld.ts":
/*!***********************************!*\
  !*** ./src/ts/worlds/endWorld.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Result": () => (/* binding */ Result),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _world__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./world */ "./src/ts/worlds/world.ts");
/* harmony import */ var _gameObjects_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../gameObjects/button */ "./src/ts/gameObjects/button.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./src/ts/utils.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var Result;
(function (Result) {
    Result["Win"] = "\u0412\u044B\u0438\u0433\u0440\u0430\u043B\u0438";
    Result["Lost"] = "\u041F\u0440\u043E\u0438\u0433\u0440\u0430\u043B\u0438";
    Result["Undefined"] = "";
})(Result || (Result = {}));
// enum Stages {
// 	View,
// 	ButtonClicked,
// 	Again
// }
var EndWorld = /** @class */ (function (_super) {
    __extends(EndWorld, _super);
    function EndWorld(result, emitEFunc) {
        var _this = _super.call(this) || this;
        _this._result = Result.Undefined;
        _this._againButton = new _gameObjects_button__WEBPACK_IMPORTED_MODULE_1__["default"]();
        _this._result = result;
        _this._emitEFunc = emitEFunc;
        return _this;
    }
    EndWorld.prototype.update = function (userInput) {
        this.handleClick(userInput);
    };
    EndWorld.prototype.handleClick = function (userInput) {
        var uX = userInput.x, uY = userInput.y;
        if (uX !== 0 && uY !== 0) {
            var _a = this._againButton, x = _a.x, y = _a.y, width = _a.width, height = _a.height;
            if ((0,_utils__WEBPACK_IMPORTED_MODULE_2__.checkClick)(uX, uY, x, y, height, width)) {
                // this._againButton.toggleSelect();
                this._emitEFunc('newGame');
            }
        }
    };
    Object.defineProperty(EndWorld.prototype, "result", {
        get: function () {
            return this._result;
        },
        set: function (result) {
            this._result = result;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EndWorld.prototype, "againButton", {
        get: function () {
            return this._againButton;
        },
        enumerable: false,
        configurable: true
    });
    return EndWorld;
}(_world__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EndWorld);


/***/ }),

/***/ "./src/ts/worlds/gameWorld.ts":
/*!************************************!*\
  !*** ./src/ts/worlds/gameWorld.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _world__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./world */ "./src/ts/worlds/world.ts");
/* harmony import */ var _score__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../score */ "./src/ts/score.ts");
/* harmony import */ var _gameObjects_grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../gameObjects/grid */ "./src/ts/gameObjects/grid.ts");
/* harmony import */ var _progressBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../progressBar */ "./src/ts/progressBar.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../types */ "./src/ts/types.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils */ "./src/ts/utils.ts");
/* harmony import */ var _endWorld__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./endWorld */ "./src/ts/worlds/endWorld.ts");
/* harmony import */ var _gameObjects_Bonus__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../gameObjects/Bonus */ "./src/ts/gameObjects/Bonus.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../constants */ "./src/ts/constants.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var GameWorld = /** @class */ (function (_super) {
    __extends(GameWorld, _super);
    function GameWorld(gridInfo, x, y, money, emitEFunc) {
        var _this = _super.call(this) || this;
        _this.isLastMove = false;
        _this._tempList = [];
        _this._list = [];
        _this._money = 0;
        _this._grid = new _gameObjects_grid__WEBPACK_IMPORTED_MODULE_2__["default"](gridInfo, emitEFunc);
        _this._progressBar = new _progressBar__WEBPACK_IMPORTED_MODULE_3__["default"]();
        _this._bonus = new _gameObjects_Bonus__WEBPACK_IMPORTED_MODULE_7__["default"]();
        _this._score = new _score__WEBPACK_IMPORTED_MODULE_1__["default"](x, y);
        _this._stage = Stage.Selecting;
        _this._money = money;
        _this._emitEFunc = emitEFunc;
        return _this;
    }
    GameWorld.prototype.update = function (userInput) {
        switch (this._stage) {
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
    GameWorld.prototype.handleSelect = function (userInput) {
        var uX = userInput.x, uY = userInput.y;
        if (uX !== 0 && uY !== 0) {
            this.handleSelectGrid(userInput);
            this.handleSelectBonus(userInput);
        }
    };
    GameWorld.prototype.handleSelectGrid = function (userInput) {
        var uX = userInput.x, uY = userInput.y;
        var _a = this._grid, x = _a.x, y = _a.y, n = _a.n, m = _a.m, width = _a.width, height = _a.height;
        if (uY > y && uY < y + height && uX < x && uX > x - width) {
            var row = Math.floor((uY - y) / (height / n));
            var col = Math.floor((uX - (x - width)) / (width / m));
            var layout = this._grid.blockLayout;
            layout[row][col].toggleSelect();
            this._tempList.push([row, col]);
            this._list.push([row, col]);
            if (this._bonus.selected) {
                if (this._list.length === 2) {
                    if (this._list[0][0] === this._list[1][0] && this._list[0][1] === this._list[1][1]) {
                        if (layout[this._list[0][0]][this._list[0][1]].isSelected())
                            layout[this._list[0][0]][this._list[0][1]].toggleSelect();
                        this._list = [];
                    }
                    else {
                        this._stage += 2;
                    }
                }
            }
            else
                this._stage += 1;
        }
    };
    GameWorld.prototype.handleSelectBonus = function (userInput) {
        var uX = userInput.x, uY = userInput.y;
        var _a = this._bonus, x = _a.x, y = _a.y, width = _a.width, height = _a.height;
        if ((0,_utils__WEBPACK_IMPORTED_MODULE_5__.checkClick)(uX, uY, x, y, height, width)) {
            if (this._money >= _constants__WEBPACK_IMPORTED_MODULE_8__.TELEPORT_COST && !this.bonus.selected) {
                this.bonus.toggleSelect();
            }
        }
    };
    GameWorld.prototype.handleShading = function () {
        var _this = this;
        if (this._tempList.length === 0) {
            if (this._list.length === 1) {
                this._grid.blockLayout[this._list[0][0]][this._list[0][1]].toggleSelect();
                this._stage -= 1;
                this._list = [];
                this._tempList = [];
            }
            else {
                this._score.decreaseMovesNum();
                var _a = this._score, points = _a.points, targetPoints = _a.targetPoints, moves = _a.moves, targetMoves = _a.targetMoves;
                if (moves <= targetMoves && points < targetPoints)
                    this.isLastMove = true;
                this._tempList = this._list;
                this._stage += 1;
            }
            return;
        }
        var positionList = [];
        var _b = this.grid, n = _b.n, m = _b.m;
        this._tempList.forEach(function (_a) {
            var row = _a[0], col = _a[1];
            positionList = __spreadArray(__spreadArray([], positionList, true), GameWorld.selectNeighbors(row, col, _this._grid.blockLayout, n, m), true);
        });
        this._list = __spreadArray(__spreadArray([], this._list, true), positionList, true);
        this._tempList = positionList;
    };
    GameWorld.selectNeighbors = function (row, col, desk, gridN, gridM) {
        var tempList = [];
        Object.values(_types__WEBPACK_IMPORTED_MODULE_4__.Direction).forEach(function (direction) {
            var deskPositionItem = GameWorld.findNeighbor(direction, row, col, desk, gridN, gridM, true);
            if (typeof deskPositionItem[0] !== 'undefined') {
                tempList.push(deskPositionItem);
            }
        });
        return tempList;
    };
    GameWorld.findNeighbor = function (direction, row, col, layout, gridN, gridM, select) {
        if (select === void 0) { select = false; }
        var Up = _types__WEBPACK_IMPORTED_MODULE_4__.Direction.Up, Right = _types__WEBPACK_IMPORTED_MODULE_4__.Direction.Right, Left = _types__WEBPACK_IMPORTED_MODULE_4__.Direction.Left, Down = _types__WEBPACK_IMPORTED_MODULE_4__.Direction.Down;
        switch (direction) {
            case Up:
                return GameWorld.checkUp(layout, row, col, select);
            case Right:
                return GameWorld.checkRight(layout, row, col, select, gridM);
            case Left:
                return GameWorld.checkLeft(layout, row, col, select);
            case Down:
                return GameWorld.checkDown(layout, row, col, select, gridN);
            default:
                return [undefined, undefined];
        }
    };
    GameWorld.checkUp = function (layout, row, col, select) {
        if (row !== 0 && layout[row][col].color === layout[row - 1][col].color && !layout[row - 1][col].isSelected()) {
            if (select)
                layout[row - 1][col].toggleSelect();
            return [row - 1, col];
        }
        return [undefined, undefined];
    };
    GameWorld.checkRight = function (layout, row, col, select, m) {
        if (col !== m - 1 && layout[row][col].color === layout[row][col + 1].color && !layout[row][col + 1].isSelected()) {
            if (select)
                layout[row][col + 1].toggleSelect();
            return [row, col + 1];
        }
        return [undefined, undefined];
    };
    GameWorld.checkLeft = function (layout, row, col, select) {
        if (col !== 0 && layout[row][col].color === layout[row][col - 1].color && !layout[row][col - 1].isSelected()) {
            if (select)
                layout[row][col - 1].toggleSelect();
            return [row, col - 1];
        }
        return [undefined, undefined];
    };
    GameWorld.checkDown = function (layout, row, col, select, n) {
        if (row !== n - 1 && layout[row][col].color === layout[row + 1][col].color && !layout[row + 1][col].isSelected()) {
            if (select)
                layout[row + 1][col].toggleSelect();
            return [row + 1, col];
        }
        return [undefined, undefined];
    };
    GameWorld.prototype.handleDeleting = function () {
        if (this._tempList.length === 0) {
            if (this.bonus.selected)
                this._stage += 2;
            else
                this._stage += 1;
            this._tempList = [];
            return;
        }
        var _a = this._tempList[0], row = _a[0], col = _a[1];
        var desk = this._grid.blockLayout;
        if (desk[row][col].height === 0 && desk[row][col].width === 0) {
            if (!this.bonus.selected) {
                this._score.increasePoints();
                this._progressBar.move();
            }
            var _b = this._score, points = _b.points, targetPoints = _b.targetPoints;
            if (points >= targetPoints)
                this._emitEFunc('endGame', _endWorld__WEBPACK_IMPORTED_MODULE_6__.Result.Win);
            if (this.isLastMove)
                this._emitEFunc('endGame', _endWorld__WEBPACK_IMPORTED_MODULE_6__.Result.Lost);
            this._tempList = this._tempList.slice(1);
            return;
        }
        desk[row][col].resize(_types__WEBPACK_IMPORTED_MODULE_4__.ResizeType.Shrink);
    };
    GameWorld.prototype.handleMoving = function () {
        if (this._tempList.length >= this._list.length) {
            this._stage += 1;
            return;
        }
        var desk = this._grid.blockLayout;
        var _loop_1 = function (col) {
            var rows = this_1._list
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
                this_1._tempList.push([rows[0], col]);
                return "break";
            }
            for (var k = rows.length - 1; k >= 0; k -= 1) {
                if (rows[k] - 1 < 0)
                    break;
                if (desk[rows[k] - 1][col].y >= desk[rows[k]][col].y) {
                    this_1._tempList.push([rows[k], col]);
                    break;
                }
                for (var i = rows[k] - 1; i >= 0; i -= 1) {
                    desk[i][col].move(_types__WEBPACK_IMPORTED_MODULE_4__.Direction.Down, velocity);
                }
            }
        };
        var this_1 = this;
        for (var col = 0; col < this._grid.m; col += 1) {
            var state_1 = _loop_1(col);
            if (state_1 === "break")
                break;
        }
    };
    GameWorld.prototype.handleRecovery = function () {
        if (this.bonus.selected) {
            var temp = '';
            var block1 = this._grid.blockLayout[this._list[0][0]][this._list[0][1]];
            var block2 = this._grid.blockLayout[this._list[1][0]][this._list[1][1]];
            temp = block1.color;
            block1.color = block2.color;
            block2.color = temp;
            block1.toggleSelect();
            block2.toggleSelect();
            block1.size = this.grid.itemSize;
            block2.size = this.grid.itemSize;
            this.bonus.toggleSelect();
            this._money -= _constants__WEBPACK_IMPORTED_MODULE_8__.TELEPORT_COST;
            this._list = [];
            this._tempList = [];
            this._stage = Stage.Selecting;
            return;
        }
        var _a = this._grid, layout = _a.blockLayout, n = _a.n, m = _a.m;
        for (var i = n - 1; i >= 0; i -= 1) {
            for (var j = m - 1; j >= 0; j -= 1) {
                if (layout[i][j].y !== layout[i][j].oldY || layout[i][j].isSelected()) {
                    var newRow = -1000;
                    if (layout[i][j].isSelected()) {
                        layout[i][j].toggleSelect();
                        for (var r = i - 1; r >= 0; r -= 1) {
                            if (layout[i][j].oldY - layout[r][j].y < layout[i][j].height && layout[r][j].width !== 0 && !layout[r][j].isSelected() && !layout[r][j].isOccupied()) {
                                layout[r][j].occupied = true;
                                newRow = r;
                            }
                        }
                    }
                    else {
                        newRow = i - Math.floor((layout[i][j].y - layout[i][j].oldY) / this.grid.itemHeight);
                    }
                    if (newRow >= 0) {
                        layout[i][j].color = layout[newRow][j].oldColor;
                        layout[i][j].oldColor = layout[newRow][j].oldColor;
                    }
                    else {
                        var randomColor = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.chooseColor)((0,_utils__WEBPACK_IMPORTED_MODULE_5__.getRandomValue)(this._grid.gridInfo.blockColors));
                        layout[i][j].color = randomColor;
                        layout[i][j].oldColor = randomColor;
                    }
                    layout[i][j].size = this.grid.itemSize;
                    layout[i][j].position = { x: layout[i][j].x, y: layout[i][j].oldY };
                    if (layout[i][j].isOccupied())
                        layout[i][j].occupied = false;
                }
            }
        }
        this._grid.blockLayout = layout;
        this._list = [];
        this._tempList = [];
        this._stage = Stage.Selecting;
    };
    Object.defineProperty(GameWorld.prototype, "grid", {
        get: function () {
            return this._grid;
        },
        set: function (grid) {
            this._grid = grid;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameWorld.prototype, "score", {
        get: function () {
            return this._score;
        },
        set: function (score) {
            this._score = score;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameWorld.prototype, "progressBar", {
        get: function () {
            return this._progressBar;
        },
        set: function (prBar) {
            this._progressBar = prBar;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameWorld.prototype, "bonus", {
        get: function () {
            return this._bonus;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameWorld.prototype, "money", {
        get: function () {
            return this._money;
        },
        enumerable: false,
        configurable: true
    });
    return GameWorld;
}(_world__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameWorld);


/***/ }),

/***/ "./src/ts/worlds/world.ts":
/*!********************************!*\
  !*** ./src/ts/worlds/world.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var World = /** @class */ (function () {
    function World() {
    }
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

/***/ "./src/img/end/button.png":
/*!********************************!*\
  !*** ./src/img/end/button.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "484708f891dada2d8214.png";

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

/***/ "./src/img/game/selected_blocks/blue.png":
/*!***********************************************!*\
  !*** ./src/img/game/selected_blocks/blue.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7aa79954ab1097275aef.png";

/***/ }),

/***/ "./src/img/game/selected_blocks/green.png":
/*!************************************************!*\
  !*** ./src/img/game/selected_blocks/green.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3c810b278cf9b0233021.png";

/***/ }),

/***/ "./src/img/game/selected_blocks/purple.png":
/*!*************************************************!*\
  !*** ./src/img/game/selected_blocks/purple.png ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "70a3639aab075791b127.png";

/***/ }),

/***/ "./src/img/game/selected_blocks/red.png":
/*!**********************************************!*\
  !*** ./src/img/game/selected_blocks/red.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c8be512414c32b1ce6b7.png";

/***/ }),

/***/ "./src/img/game/selected_blocks/yellow.png":
/*!*************************************************!*\
  !*** ./src/img/game/selected_blocks/yellow.png ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bf37a26e566c7a4a3826.png";

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


var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var n = 7;
var m = 7;
var c = 5; // colors
var k = 2;
var s = 3; // mix
var x = 110; // target points
var y = 20; // moves
var game = new _ts_game__WEBPACK_IMPORTED_MODULE_1__["default"](canvas);
game.init(n, m, c, k, s, x, y).then(function () { return game.start(); });

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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c3JjL3N0eWxlcy9zdHlsZS5zY3NzP2E1YjQiLCJ3ZWJwYWNrOi8vdGVzdC1wcm9qZWN0LWJsYXN0LWdhbWUvLi9zcmMvdHMvSW1hZ2VSZXBvc2l0b3J5LnRzIiwid2VicGFjazovL3Rlc3QtcHJvamVjdC1ibGFzdC1nYW1lLy4vc3JjL3RzL2Fzc2V0cy50cyIsIndlYnBhY2s6Ly90ZXN0LXByb2plY3QtYmxhc3QtZ2FtZS8uL3NyYy90cy9ibG9jay50cyIsIndlYnBhY2s6Ly90ZXN0LXByb2plY3QtYmxhc3QtZ2FtZS8uL3NyYy90cy9jb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vdGVzdC1wcm9qZWN0LWJsYXN0LWdhbWUvLi9zcmMvdHMvZXZlbnQudHMiLCJ3ZWJwYWNrOi8vdGVzdC1wcm9qZWN0LWJsYXN0LWdhbWUvLi9zcmMvdHMvZ2FtZS50cyIsIndlYnBhY2s6Ly90ZXN0LXByb2plY3QtYmxhc3QtZ2FtZS8uL3NyYy90cy9nYW1lT2JqZWN0cy9Cb251cy50cyIsIndlYnBhY2s6Ly90ZXN0LXByb2plY3QtYmxhc3QtZ2FtZS8uL3NyYy90cy9nYW1lT2JqZWN0cy9idXR0b24udHMiLCJ3ZWJwYWNrOi8vdGVzdC1wcm9qZWN0LWJsYXN0LWdhbWUvLi9zcmMvdHMvZ2FtZU9iamVjdHMvZ2FtZU9iamVjdC50cyIsIndlYnBhY2s6Ly90ZXN0LXByb2plY3QtYmxhc3QtZ2FtZS8uL3NyYy90cy9nYW1lT2JqZWN0cy9ncmlkLnRzIiwid2VicGFjazovL3Rlc3QtcHJvamVjdC1ibGFzdC1nYW1lLy4vc3JjL3RzL2lucHV0LnRzIiwid2VicGFjazovL3Rlc3QtcHJvamVjdC1ibGFzdC1nYW1lLy4vc3JjL3RzL3Byb2dyZXNzQmFyLnRzIiwid2VicGFjazovL3Rlc3QtcHJvamVjdC1ibGFzdC1nYW1lLy4vc3JjL3RzL3NjZW5lLnRzIiwid2VicGFjazovL3Rlc3QtcHJvamVjdC1ibGFzdC1nYW1lLy4vc3JjL3RzL3Njb3JlLnRzIiwid2VicGFjazovL3Rlc3QtcHJvamVjdC1ibGFzdC1nYW1lLy4vc3JjL3RzL3R5cGVzLnRzIiwid2VicGFjazovL3Rlc3QtcHJvamVjdC1ibGFzdC1nYW1lLy4vc3JjL3RzL3V0aWxzLnRzIiwid2VicGFjazovL3Rlc3QtcHJvamVjdC1ibGFzdC1nYW1lLy4vc3JjL3RzL3ZpZXdzL2VuZFZpZXcudHMiLCJ3ZWJwYWNrOi8vdGVzdC1wcm9qZWN0LWJsYXN0LWdhbWUvLi9zcmMvdHMvdmlld3MvZ2FtZVZpZXcudHMiLCJ3ZWJwYWNrOi8vdGVzdC1wcm9qZWN0LWJsYXN0LWdhbWUvLi9zcmMvdHMvdmlld3Mvdmlldy50cyIsIndlYnBhY2s6Ly90ZXN0LXByb2plY3QtYmxhc3QtZ2FtZS8uL3NyYy90cy93b3JsZHMvZW5kV29ybGQudHMiLCJ3ZWJwYWNrOi8vdGVzdC1wcm9qZWN0LWJsYXN0LWdhbWUvLi9zcmMvdHMvd29ybGRzL2dhbWVXb3JsZC50cyIsIndlYnBhY2s6Ly90ZXN0LXByb2plY3QtYmxhc3QtZ2FtZS8uL3NyYy90cy93b3JsZHMvd29ybGQudHMiLCJ3ZWJwYWNrOi8vdGVzdC1wcm9qZWN0LWJsYXN0LWdhbWUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdGVzdC1wcm9qZWN0LWJsYXN0LWdhbWUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Rlc3QtcHJvamVjdC1ibGFzdC1nYW1lL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdGVzdC1wcm9qZWN0LWJsYXN0LWdhbWUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90ZXN0LXByb2plY3QtYmxhc3QtZ2FtZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Rlc3QtcHJvamVjdC1ibGFzdC1nYW1lL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Rlc3QtcHJvamVjdC1ibGFzdC1nYW1lLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCBhc3NldHMgZnJvbSAnLi9hc3NldHMnO1xyXG5pbXBvcnQgeyBBc3NldHMsIEdhbWVJbWFnZXMgfSBmcm9tICcuL3R5cGVzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEltYWdlUmVwb3NpdG9yeSB7XHJcblx0cHJpdmF0ZSBpbWFnZXM6IEFzc2V0cztcclxuXHJcblx0Y29uc3RydWN0b3IoYXNzZXRzOiBBc3NldHMpIHtcclxuXHRcdHRoaXMuaW1hZ2VzID0gYXNzZXRzO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGFzeW5jIGxvYWRJbWFnZXMoKSB7XHJcblx0XHRjb25zdCBpbWFnZXM6IEdhbWVJbWFnZXMgPSB7fTtcclxuXHRcdGZvciAoY29uc3Qga2V5IGluIGFzc2V0cykge1xyXG5cdFx0XHRpbWFnZXNba2V5XSA9IGF3YWl0IHRoaXMubG9hZEltYWdlKFN0cmluZygoYXNzZXRzIGFzIHVua25vd24gYXMgQXNzZXRzKVtrZXkgYXMgc3RyaW5nXSkpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGltYWdlcztcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgYXN5bmMgbG9hZEltYWdlKGltZ1BhdGg6IHN0cmluZykge1xyXG5cdFx0Y29uc3QgaW1nID0gbmV3IEltYWdlKCk7XHJcblx0XHRhd2FpdCB0aGlzLmxvYWQoaW1nLCBpbWdQYXRoKTtcclxuXHRcdHJldHVybiBpbWc7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGFzeW5jIGxvYWQoZWw6IEhUTUxJbWFnZUVsZW1lbnQsIHN0cjogc3RyaW5nKSB7XHJcblx0XHRyZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XHJcblx0XHRcdGVsLnNyYyA9IHN0cjtcclxuXHRcdFx0ZWwuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHJlc29sdmUodGhpcykpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCBIZWFkZXJQYW5lbCBmcm9tICcuLi9pbWcvcHJvZ3Jlc3MvcGFuZWwyLnBuZyc7XHJcbmltcG9ydCBHYW1lUGFuZWwgZnJvbSAnLi4vaW1nL2dhbWUvcGFuZWwucG5nJztcclxuaW1wb3J0IFNjb3JlUGFuZWwgZnJvbSAnLi4vaW1nL3Njb3JlL3BhbmVsMi5wbmcnO1xyXG5pbXBvcnQgUHJvZ3Jlc3NCbG9jayBmcm9tICcuLi9pbWcvcHJvZ3Jlc3MvYmFyL2Jsb2NrLnBuZyc7XHJcbmltcG9ydCBQcm9ncmVzc1NjYWxlIGZyb20gJy4uL2ltZy9wcm9ncmVzcy9iYXIvc2NhbGUucG5nJztcclxuaW1wb3J0IEJsdWVCbG9jayBmcm9tICcuLi9pbWcvZ2FtZS9ibG9ja3MvYmx1ZS5wbmcnO1xyXG5pbXBvcnQgR3JlZW5CbG9jayBmcm9tICcuLi9pbWcvZ2FtZS9ibG9ja3MvZ3JlZW4ucG5nJztcclxuaW1wb3J0IFllbGxvd0Jsb2NrIGZyb20gJy4uL2ltZy9nYW1lL2Jsb2Nrcy95ZWxsb3cucG5nJztcclxuaW1wb3J0IFB1cnBsZUJsb2NrIGZyb20gJy4uL2ltZy9nYW1lL2Jsb2Nrcy9wdXJwbGUucG5nJztcclxuaW1wb3J0IFJlZEJsb2NrIGZyb20gJy4uL2ltZy9nYW1lL2Jsb2Nrcy9yZWQucG5nJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9pbWcvZW5kL2J1dHRvbi5wbmcnO1xyXG5pbXBvcnQgU2VsZWN0ZWRCbHVlQmxvY2sgZnJvbSAnLi4vaW1nL2dhbWUvc2VsZWN0ZWRfYmxvY2tzL2JsdWUucG5nJztcclxuaW1wb3J0IFNlbGVjdGVkR3JlZW5CbG9jayBmcm9tICcuLi9pbWcvZ2FtZS9zZWxlY3RlZF9ibG9ja3MvZ3JlZW4ucG5nJztcclxuaW1wb3J0IFNlbGVjdGVkWWVsbG93QmxvY2sgZnJvbSAnLi4vaW1nL2dhbWUvc2VsZWN0ZWRfYmxvY2tzL3llbGxvdy5wbmcnO1xyXG5pbXBvcnQgU2VsZWN0ZWRQdXJwbGVCbG9jayBmcm9tICcuLi9pbWcvZ2FtZS9zZWxlY3RlZF9ibG9ja3MvcHVycGxlLnBuZyc7XHJcbmltcG9ydCBTZWxlY3RlZFJlZEJsb2NrIGZyb20gJy4uL2ltZy9nYW1lL3NlbGVjdGVkX2Jsb2Nrcy9yZWQucG5nJztcclxuaW1wb3J0IEJvbnVzIGZyb20gJy4uL2ltZy9ib29zdGVyL2JvbnVzLnBuZyc7XHJcbmltcG9ydCBTZWxlY3RlZEJvbnVzIGZyb20gJy4uL2ltZy9ib29zdGVyL3NlbGVjdGVkX2JvbnVzLnBuZyc7XHJcbmltcG9ydCBNb25leUJsb2NrIGZyb20gJy4uL2ltZy9ib29zdGVyL21vbmV5LnBuZyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcblx0SGVhZGVyUGFuZWwsXHJcblx0R2FtZVBhbmVsLFxyXG5cdFNjb3JlUGFuZWwsXHJcblx0UHJvZ3Jlc3NCbG9jayxcclxuXHRQcm9ncmVzc1NjYWxlLFxyXG5cdEJsdWVCbG9jayxcclxuXHRHcmVlbkJsb2NrLFxyXG5cdFB1cnBsZUJsb2NrLFxyXG5cdFJlZEJsb2NrLFxyXG5cdFllbGxvd0Jsb2NrLFxyXG5cdEJvbnVzLFxyXG5cdFNlbGVjdGVkQm9udXMsXHJcblx0TW9uZXlCbG9jayxcclxuXHRCdXR0b24sXHJcblx0U2VsZWN0ZWRCbHVlQmxvY2ssXHJcblx0U2VsZWN0ZWRHcmVlbkJsb2NrLFxyXG5cdFNlbGVjdGVkUHVycGxlQmxvY2ssXHJcblx0U2VsZWN0ZWRSZWRCbG9jayxcclxuXHRTZWxlY3RlZFllbGxvd0Jsb2NrLFxyXG59O1xyXG4iLCJpbXBvcnQgeyBjaG9vc2VDb2xvciwgZ2V0UmFuZG9tVmFsdWUgfSBmcm9tICcuL3V0aWxzJztcclxuaW1wb3J0IHsgQ29vcmRpbmF0ZXMsIFJlc2l6ZVR5cGUsIERpcmVjdGlvbiwgU2l6ZSB9IGZyb20gJy4vdHlwZXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmxvY2sge1xyXG5cdHByaXZhdGUgX3NlbGVjdGVkID0gZmFsc2U7XHJcblxyXG5cdHByaXZhdGUgX29jY3VwaWVkID0gZmFsc2U7XHJcblxyXG5cdHByaXZhdGUgX3ggPSAwO1xyXG5cclxuXHRwcml2YXRlIF95ID0gMDtcclxuXHJcblx0cHJpdmF0ZSBfb2xkWSA9IDA7XHJcblxyXG5cdHByaXZhdGUgX29sZENvbG9yOiBzdHJpbmc7XHJcblxyXG5cdHByaXZhdGUgX2hlaWdodCA9IDA7XHJcblxyXG5cdHByaXZhdGUgX3dpZHRoID0gMDtcclxuXHJcblx0cHJpdmF0ZSBfY29sb3I6IHN0cmluZztcclxuXHJcblx0cHJpdmF0ZSBfYW5pbWF0aW9uVmVsb2NpdHkgPSAxMDtcclxuXHJcblx0Y29uc3RydWN0b3IoY29sb3JzOiBudW1iZXJbXSkge1xyXG5cdFx0Y29uc3QgY29sb3JOdW1iZXIgPSBnZXRSYW5kb21WYWx1ZShjb2xvcnMpO1xyXG5cdFx0dGhpcy5fY29sb3IgPSBjaG9vc2VDb2xvcihjb2xvck51bWJlcik7XHJcblx0XHR0aGlzLl9vbGRDb2xvciA9IHRoaXMuX2NvbG9yO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGluaXQocG9zaXRpb246IENvb3JkaW5hdGVzLCBzaXplOiBTaXplKSB7XHJcblx0XHR0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XHJcblx0XHR0aGlzLl9vbGRZID0gcG9zaXRpb24ueTtcclxuXHRcdHRoaXMuc2l6ZSA9IHNpemU7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZ2V0Q29sb3JJbWFnZU5hbWUoKTogc3RyaW5nIHtcclxuXHRcdHJldHVybiB0aGlzLl9zZWxlY3RlZCA/IGBTZWxlY3RlZCR7dGhpcy5jb2xvcn1gIDogdGhpcy5jb2xvcjtcclxuXHRcdC8vIHJldHVybiB0aGlzLl9jb2xvcjtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyByZXNpemUocmVzaXplVHlwZTogUmVzaXplVHlwZSkge1xyXG5cdFx0Y29uc3QgeyBab29tLCBTaHJpbmsgfSA9IFJlc2l6ZVR5cGU7XHJcblx0XHRzd2l0Y2ggKHJlc2l6ZVR5cGUpIHtcclxuXHRcdFx0Y2FzZSBTaHJpbms6XHJcblx0XHRcdFx0aWYgKHRoaXMuX2hlaWdodCA+IDApIHRoaXMuX2hlaWdodCAtPSB0aGlzLl9hbmltYXRpb25WZWxvY2l0eTtcclxuXHRcdFx0XHRlbHNlIHRoaXMuX2hlaWdodCA9IDA7XHJcblx0XHRcdFx0aWYgKHRoaXMuX3dpZHRoID4gMCkgdGhpcy5fd2lkdGggLT0gdGhpcy5fYW5pbWF0aW9uVmVsb2NpdHk7XHJcblx0XHRcdFx0ZWxzZSB0aGlzLl93aWR0aCA9IDA7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgWm9vbTpcclxuXHRcdFx0XHR0aGlzLl9oZWlnaHQgKz0gdGhpcy5fYW5pbWF0aW9uVmVsb2NpdHk7XHJcblx0XHRcdFx0dGhpcy5fd2lkdGggKz0gdGhpcy5fYW5pbWF0aW9uVmVsb2NpdHk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCdVbmtub3duIHJlc2l6ZSB0eXBlJyk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgbW92ZShtb3ZlVHlwZTogRGlyZWN0aW9uLCB2ZWxvY2l0eT86IG51bWJlcikge1xyXG5cdFx0Y29uc3QgeyBVcCwgUmlnaHQsIExlZnQsIERvd24gfSA9IERpcmVjdGlvbjtcclxuXHRcdHN3aXRjaCAobW92ZVR5cGUpIHtcclxuXHRcdFx0Y2FzZSBVcDpcclxuXHRcdFx0XHR0aGlzLl95IC09IHRoaXMuX2FuaW1hdGlvblZlbG9jaXR5O1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIFJpZ2h0OlxyXG5cdFx0XHRcdHRoaXMuX3ggKz0gdGhpcy5fYW5pbWF0aW9uVmVsb2NpdHk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgTGVmdDpcclxuXHRcdFx0XHR0aGlzLl94IC09IHRoaXMuX2FuaW1hdGlvblZlbG9jaXR5O1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIERvd246XHJcblx0XHRcdFx0dGhpcy5feSArPSB2ZWxvY2l0eSB8fCB0aGlzLl9hbmltYXRpb25WZWxvY2l0eTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ1Vua25vd24gbW92ZSB0eXBlJyk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZ2V0IHgoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5feDtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBnZXQgeSgpIHtcclxuXHRcdHJldHVybiB0aGlzLl95O1xyXG5cdH1cclxuXHJcblx0cHVibGljIGdldCBoZWlnaHQoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5faGVpZ2h0O1xyXG5cdH1cclxuXHJcblx0cHVibGljIGdldCB3aWR0aCgpIHtcclxuXHRcdHJldHVybiB0aGlzLl93aWR0aDtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBnZXQgY29sb3IoKTogc3RyaW5nIHtcclxuXHRcdHJldHVybiB0aGlzLl9jb2xvcjtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzZXQgY29sb3IoY29sb3I6IHN0cmluZykge1xyXG5cdFx0dGhpcy5fY29sb3IgPSBjb2xvcjtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBnZXQgb2xkQ29sb3IoKTogc3RyaW5nIHtcclxuXHRcdHJldHVybiB0aGlzLl9vbGRDb2xvcjtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzZXQgb2xkQ29sb3IoY29sb3I6IHN0cmluZykge1xyXG5cdFx0dGhpcy5fb2xkQ29sb3IgPSBjb2xvcjtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBnZXQgb2xkWSgpIHtcclxuXHRcdHJldHVybiB0aGlzLl9vbGRZO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHNldCBvbGRZKHk6IG51bWJlcikge1xyXG5cdFx0dGhpcy5fb2xkWSA9IHk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZ2V0IHBvc2l0aW9uKCk6IENvb3JkaW5hdGVzIHtcclxuXHRcdHJldHVybiB7IHg6IHRoaXMuX3gsIHk6IHRoaXMuX3kgfTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzZXQgcG9zaXRpb24ocG9zaXRpb246IENvb3JkaW5hdGVzKSB7XHJcblx0XHR0aGlzLl94ID0gcG9zaXRpb24ueDtcclxuXHRcdHRoaXMuX3kgPSBwb3NpdGlvbi55O1xyXG5cdH1cclxuXHJcblx0cHVibGljIGdldCBzaXplKCk6IFNpemUge1xyXG5cdFx0cmV0dXJuIHsgd2lkdGg6IHRoaXMuX3dpZHRoLCBoZWlnaHQ6IHRoaXMuX2hlaWdodCB9O1xyXG5cdH1cclxuXHJcblx0cHVibGljIHNldCBzaXplKHNpemU6IFNpemUpIHtcclxuXHRcdHRoaXMuX2hlaWdodCA9IHNpemUuaGVpZ2h0O1xyXG5cdFx0dGhpcy5fd2lkdGggPSBzaXplLndpZHRoO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHRvZ2dsZVNlbGVjdCgpIHtcclxuXHRcdHRoaXMuX3NlbGVjdGVkID0gIXRoaXMuX3NlbGVjdGVkO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGlzU2VsZWN0ZWQoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fc2VsZWN0ZWQ7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc2V0IG9jY3VwaWVkKG9jcDogYm9vbGVhbikge1xyXG5cdFx0dGhpcy5fb2NjdXBpZWQgPSBvY3A7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgdG9nZ2xlT2NjdXBpZWQoKSB7XHJcblx0XHR0aGlzLl9vY2N1cGllZCA9ICF0aGlzLl9vY2N1cGllZDtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBpc09jY3VwaWVkKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX29jY3VwaWVkO1xyXG5cdH1cclxufVxyXG4iLCJleHBvcnQgY29uc3QgUE9JTlRTX1BFUl9UVVJOID0gMjtcclxuZXhwb3J0IGNvbnN0IElNQUdFX1NJWkVfQ09FRkZJQ0lFTlQgPSA0O1xyXG5leHBvcnQgY29uc3QgVEVMRVBPUlRfQ09TVCA9IDU7XHJcbmV4cG9ydCBjb25zdCBNT05FWSA9IDIwO1xyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBFdmVudE1hbmFnZXIge1xyXG5cdGV2ZW50cyA9IG5ldyBNYXAoKTtcclxuXHJcblx0b24oZXZlbnQ6IHN0cmluZywgaGFuZGxlcjogYW55KSB7XHJcblx0XHRpZiAodGhpcy5ldmVudHMuaGFzKGV2ZW50KSkge1xyXG5cdFx0XHR0aGlzLmV2ZW50cy5nZXQoZXZlbnQpLmFkZChoYW5kbGVyKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuZXZlbnRzLnNldChldmVudCwgbmV3IFNldChbaGFuZGxlcl0pKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdG9mZihldmVudDogc3RyaW5nLCBoYW5kbGVyOiBhbnkpIHtcclxuXHRcdHRoaXMuZXZlbnRzLmdldChldmVudCk/LmRlbGV0ZShoYW5kbGVyKTtcclxuXHR9XHJcblxyXG5cdGVtaXQoZXZlbnQ6IHN0cmluZywgYXJnPzogYW55KSB7XHJcblx0XHR0aGlzLmV2ZW50cy5nZXQoZXZlbnQpPy5mb3JFYWNoKChoYW5kbGVyOiAoYXJnMDogYW55KSA9PiBhbnkpID0+IGhhbmRsZXIoYXJnKSk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IGNob29zZUNvbG9ycyB9IGZyb20gJy4vdXRpbHMnO1xyXG5pbXBvcnQgSW5wdXQgZnJvbSAnLi9pbnB1dCc7XHJcbmltcG9ydCBTY2VuZU1hbmFnZXIsIHsgU2NlbmVzLCBUU2NlbmUgfSBmcm9tICcuL3NjZW5lJztcclxuaW1wb3J0IEV2ZW50TWFuYWdlciBmcm9tICcuL2V2ZW50JztcclxuaW1wb3J0IEdhbWVXb3JsZCBmcm9tICcuL3dvcmxkcy9nYW1lV29ybGQnO1xyXG5pbXBvcnQgSW1hZ2VSZXBvc2l0b3J5IGZyb20gJy4vSW1hZ2VSZXBvc2l0b3J5JztcclxuaW1wb3J0IGFzc2V0cyBmcm9tICcuL2Fzc2V0cyc7XHJcbmltcG9ydCBHYW1lVmlldyBmcm9tICcuL3ZpZXdzL2dhbWVWaWV3JztcclxuaW1wb3J0IHsgR2FtZUltYWdlcyB9IGZyb20gJy4vdHlwZXMnO1xyXG5pbXBvcnQgRW5kV29ybGQsIHsgUmVzdWx0IH0gZnJvbSAnLi93b3JsZHMvZW5kV29ybGQnO1xyXG5pbXBvcnQgRW5kVmlldyBmcm9tICcuL3ZpZXdzL2VuZFZpZXcnO1xyXG5pbXBvcnQgeyBNT05FWSB9IGZyb20gJy4vY29uc3RhbnRzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUgZXh0ZW5kcyBFdmVudE1hbmFnZXIge1xyXG5cdHByaXZhdGUgX2lucHV0OiBJbnB1dDtcclxuXHJcblx0cHJpdmF0ZSBfc2NlbmVzOiBTY2VuZU1hbmFnZXI7XHJcblxyXG5cdHByaXZhdGUgX2N1cnJlbnRTY2VuZTogU2NlbmVzID0gU2NlbmVzLkdhbWU7XHJcblxyXG5cdHByaXZhdGUgX2NhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XHJcblxyXG5cdHByaXZhdGUgX2N0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xyXG5cclxuXHRwcml2YXRlIF9pbWFnZVJlcG9zaXRvcnk6IEltYWdlUmVwb3NpdG9yeTtcclxuXHJcblx0Y29uc3RydWN0b3IoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCkge1xyXG5cdFx0c3VwZXIoKTtcclxuXHRcdHRoaXMuX2NhbnZhcyA9IGNhbnZhcztcclxuXHRcdHRoaXMuX2N0eCA9IDxDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ+Y2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcblx0XHR0aGlzLl9pbWFnZVJlcG9zaXRvcnkgPSBuZXcgSW1hZ2VSZXBvc2l0b3J5KGFzc2V0cyk7XHJcblx0XHR0aGlzLl9zY2VuZXMgPSBuZXcgU2NlbmVNYW5hZ2VyKCk7XHJcblx0XHR0aGlzLl9pbnB1dCA9IG5ldyBJbnB1dCgpO1xyXG5cdFx0dGhpcy5sb29wID0gdGhpcy5sb29wLmJpbmQodGhpcyk7XHJcblx0XHR0aGlzLmNhbGxFbWl0ID0gdGhpcy5jYWxsRW1pdC5iaW5kKHRoaXMpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGFzeW5jIGluaXQobjogbnVtYmVyLCBtOiBudW1iZXIsIGM6IG51bWJlciwgazogbnVtYmVyLCBzOiBudW1iZXIsIHg6IG51bWJlciwgeTogbnVtYmVyKSB7XHJcblx0XHR0aGlzLl9pbnB1dC5pbml0KCk7XHJcblx0XHRjb25zdCBnYW1lSW1hZ2VzID0gYXdhaXQgdGhpcy5faW1hZ2VSZXBvc2l0b3J5LmxvYWRJbWFnZXMoKTtcclxuXHRcdGNvbnN0IHsgX2NhbnZhczogY2FudmFzLCBfY3R4OiBjdHggfSA9IHRoaXM7XHJcblx0XHR0aGlzLl9zY2VuZXMuYWRkKFNjZW5lcy5HYW1lLCBHYW1lLmNyZWF0ZUdhbWVTY2VuZShuLCBtLCBjLCBrLCBzLCB4LCB5LCBnYW1lSW1hZ2VzLCBjYW52YXMsIGN0eCwgdGhpcy5jYWxsRW1pdCkpO1xyXG5cdFx0dGhpcy5vbignZW5kR2FtZScsIChyZXN1bHQ6IFJlc3VsdCkgPT4ge1xyXG5cdFx0XHR0aGlzLl9jdXJyZW50U2NlbmUgPSBTY2VuZXMuRW5kO1xyXG5cdFx0XHR0aGlzLl9zY2VuZXMuYWRkKFNjZW5lcy5FbmQsIEdhbWUuY3JlYXRlRW5kU2NlbmUoZ2FtZUltYWdlcywgY2FudmFzLCBjdHgsIHJlc3VsdCwgdGhpcy5jYWxsRW1pdCkpO1xyXG5cdFx0fSk7XHJcblx0XHR0aGlzLm9uKCduZXdHYW1lJywgKCkgPT4ge1xyXG5cdFx0XHR0aGlzLl9jdXJyZW50U2NlbmUgPSBTY2VuZXMuR2FtZTtcclxuXHRcdFx0dGhpcy5fc2NlbmVzLmFkZChTY2VuZXMuR2FtZSwgR2FtZS5jcmVhdGVHYW1lU2NlbmUobiwgbSwgYywgaywgcywgeCwgeSwgZ2FtZUltYWdlcywgY2FudmFzLCBjdHgsIHRoaXMuY2FsbEVtaXQpKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBzdGF0aWMgY3JlYXRlR2FtZVNjZW5lKG46IG51bWJlciwgbTogbnVtYmVyLCBjOiBudW1iZXIsIGs6IG51bWJlciwgczogbnVtYmVyLCB4OiBudW1iZXIsIHk6IG51bWJlciwgZ2FtZUltYWdlczogR2FtZUltYWdlcywgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCwgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIGVtaXRFRnVuYzogKGVOYW1lOiBzdHJpbmcsIGFyZzogYW55KSA9PiB2b2lkKSB7XHJcblx0XHRjb25zdCBncmlkSW5mbyA9IHtcclxuXHRcdFx0YmxvY2tDb2xvcnM6IGNob29zZUNvbG9ycyhjKSxcclxuXHRcdFx0bixcclxuXHRcdFx0bSxcclxuXHRcdFx0ayxcclxuXHRcdFx0bWluU3RpcnJpbmdBbW91bnQ6IHMsXHJcblx0XHR9O1xyXG5cdFx0Y29uc3Qgd29ybGQgPSBuZXcgR2FtZVdvcmxkKGdyaWRJbmZvLCB4LCB5LCBNT05FWSwgZW1pdEVGdW5jKTtcclxuXHRcdGNvbnN0IHZpZXcgPSBuZXcgR2FtZVZpZXcoY2FudmFzLCBjdHgsIGdhbWVJbWFnZXMpO1xyXG5cdFx0dmlldy5pbml0KHdvcmxkKTtcclxuXHRcdHJldHVybiB7IHZpZXcsIHdvcmxkIH07XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGNhbGxFbWl0ID0gKGVOYW1lOiBzdHJpbmcsIGFyZz86IGFueSkgPT4gdGhpcy5lbWl0KGVOYW1lLCBhcmcpO1xyXG5cclxuXHRwcml2YXRlIHN0YXRpYyBjcmVhdGVFbmRTY2VuZShnYW1lSW1hZ2VzOiBHYW1lSW1hZ2VzLCBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LCBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgcmVzdWx0OiBSZXN1bHQsIGVtaXRFRnVuYzogKGVOYW1lOiBzdHJpbmcsIGFyZzogYW55KSA9PiB2b2lkKSB7XHJcblx0XHRjb25zdCB3b3JsZCA9IG5ldyBFbmRXb3JsZChyZXN1bHQsIGVtaXRFRnVuYyk7XHJcblx0XHRjb25zdCB2aWV3ID0gbmV3IEVuZFZpZXcoY2FudmFzLCBjdHgsIGdhbWVJbWFnZXMpO1xyXG5cdFx0dmlldy5pbml0KHdvcmxkKTtcclxuXHRcdHJldHVybiB7IHZpZXcsIHdvcmxkIH07XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc3RhcnQoKSB7XHJcblx0XHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5sb29wKTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgbG9vcCgpIHtcclxuXHRcdGNvbnN0IHsgd29ybGQsIHZpZXcgfSA9IHRoaXMuX3NjZW5lcy5nZXQodGhpcy5fY3VycmVudFNjZW5lKSBhcyBUU2NlbmU7XHJcblx0XHR3b3JsZC51cGRhdGUodGhpcy5faW5wdXQpO1xyXG5cdFx0aWYgKHRoaXMuX2lucHV0LnggIT09IDAgJiYgdGhpcy5faW5wdXQueSAhPT0gMCkgdGhpcy5faW5wdXQuY29vcmRpbmF0ZXMgPSB7IHg6IDAsIHk6IDAgfTtcclxuXHRcdHZpZXcudXBkYXRlKHdvcmxkKTtcclxuXHRcdHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmxvb3ApO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgR2FtZU9iamVjdCBmcm9tICcuL2dhbWVPYmplY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm9udXMgZXh0ZW5kcyBHYW1lT2JqZWN0IHtcclxuXHRwcml2YXRlIF9zZWxlY3RlZCA9IGZhbHNlO1xyXG5cclxuXHRwdWJsaWMgZ2V0IHNlbGVjdGVkKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX3NlbGVjdGVkO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHNldCBzZWxlY3RlZChzZWxlY3RlZDogYm9vbGVhbikge1xyXG5cdFx0dGhpcy5fc2VsZWN0ZWQgPSBzZWxlY3RlZDtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyB0b2dnbGVTZWxlY3QoKSB7XHJcblx0XHR0aGlzLl9zZWxlY3RlZCA9ICF0aGlzLl9zZWxlY3RlZDtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IEdhbWVPYmplY3QgZnJvbSAnLi9nYW1lT2JqZWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1dHRvbiBleHRlbmRzIEdhbWVPYmplY3Qge1xyXG5cdHByaXZhdGUgX3NlbGVjdGVkID0gZmFsc2U7XHJcblxyXG5cdHByaXZhdGUgX2NvbG9yID0gJyc7XHJcblxyXG5cdHB1YmxpYyBnZXQgY29sb3IoKTogc3RyaW5nIHtcclxuXHRcdHJldHVybiB0aGlzLl9jb2xvcjtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzZXQgY29sb3IoY29sb3I6IHN0cmluZykge1xyXG5cdFx0dGhpcy5fY29sb3IgPSBjb2xvcjtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyB0b2dnbGVTZWxlY3QoKSB7XHJcblx0XHR0aGlzLl9zZWxlY3RlZCA9ICF0aGlzLl9zZWxlY3RlZDtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBpc1NlbGVjdGVkKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX3NlbGVjdGVkO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb29yZGluYXRlcywgRGlyZWN0aW9uLCBSZXNpemVUeXBlLCBTaXplIH0gZnJvbSAnLi4vdHlwZXMnO1xyXG5cclxuaW50ZXJmYWNlIElHYW1lT2JqZWN0IHtcclxuXHRpbml0OiAocG9zaXRpb246IENvb3JkaW5hdGVzLCBzaXplOiBTaXplLCBpdGVtU2l6ZT86IFNpemUpID0+IHZvaWQ7XHJcblx0cmVzaXplOiAocmVzaXplVHlwZTogUmVzaXplVHlwZSkgPT4gdm9pZDtcclxuXHRtb3ZlOiAobW92ZVR5cGU6IERpcmVjdGlvbiwgdmVsb2NpdHk/OiBudW1iZXIpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIEdhbWVPYmplY3QgaW1wbGVtZW50cyBJR2FtZU9iamVjdCB7XHJcblx0cHJvdGVjdGVkIF94ID0gMDtcclxuXHJcblx0cHJvdGVjdGVkIF95ID0gMDtcclxuXHJcblx0cHJvdGVjdGVkIF9oZWlnaHQgPSAwO1xyXG5cclxuXHRwcm90ZWN0ZWQgX3dpZHRoID0gMDtcclxuXHJcblx0cHJvdGVjdGVkIF92ZWxvY2l0eSA9IDA7XHJcblxyXG5cdHByb3RlY3RlZCBfb2xkWSA9IDA7XHJcblxyXG5cdHByb3RlY3RlZCBfb2xYID0gMDtcclxuXHJcblx0cHJvdGVjdGVkIF9pdGVtU2l6ZTogU2l6ZSA9IHsgaGVpZ2h0OiAwLCB3aWR0aDogMCB9O1xyXG5cclxuXHRpbml0KHBvc2l0aW9uOiBDb29yZGluYXRlcywgc2l6ZTogU2l6ZSwgaXRlbVNpemU/OiBTaXplIHwgdW5kZWZpbmVkKTogdm9pZCB7XHJcblx0XHR0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XHJcblx0XHR0aGlzLl9vbGRZID0gcG9zaXRpb24ueTtcclxuXHRcdHRoaXMuc2l6ZSA9IHNpemU7XHJcblx0XHRpZiAoaXRlbVNpemUpIHRoaXMuX2l0ZW1TaXplID0gaXRlbVNpemU7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgbW92ZShtb3ZlVHlwZTogRGlyZWN0aW9uLCB2ZWxvY2l0eT86IG51bWJlcikge1xyXG5cdFx0Y29uc3QgYW5WZWxvY2l0eSA9IHZlbG9jaXR5IHx8IHRoaXMuX3ZlbG9jaXR5O1xyXG5cdFx0Y29uc3QgeyBVcCwgUmlnaHQsIExlZnQsIERvd24gfSA9IERpcmVjdGlvbjtcclxuXHRcdHN3aXRjaCAobW92ZVR5cGUpIHtcclxuXHRcdFx0Y2FzZSBVcDpcclxuXHRcdFx0XHR0aGlzLl95IC09IGFuVmVsb2NpdHk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgUmlnaHQ6XHJcblx0XHRcdFx0dGhpcy5feCArPSBhblZlbG9jaXR5O1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIExlZnQ6XHJcblx0XHRcdFx0dGhpcy5feCAtPSBhblZlbG9jaXR5O1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIERvd246XHJcblx0XHRcdFx0dGhpcy5feSArPSBhblZlbG9jaXR5O1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcignVW5rbm93biBtb3ZlIHR5cGUnKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHB1YmxpYyByZXNpemUocmVzaXplVHlwZTogUmVzaXplVHlwZSwgdmVsb2NpdHk/OiBudW1iZXIpIHtcclxuXHRcdGNvbnN0IGFuVmVsb2NpdHkgPSB2ZWxvY2l0eSB8fCB0aGlzLl92ZWxvY2l0eTtcclxuXHRcdGNvbnN0IHsgWm9vbSwgU2hyaW5rIH0gPSBSZXNpemVUeXBlO1xyXG5cdFx0c3dpdGNoIChyZXNpemVUeXBlKSB7XHJcblx0XHRcdGNhc2UgU2hyaW5rOlxyXG5cdFx0XHRcdGlmICh0aGlzLl9oZWlnaHQgPiAwKSB0aGlzLl9oZWlnaHQgLT0gYW5WZWxvY2l0eTtcclxuXHRcdFx0XHRlbHNlIHRoaXMuX2hlaWdodCA9IDA7XHJcblx0XHRcdFx0aWYgKHRoaXMuX3dpZHRoID4gMCkgdGhpcy5fd2lkdGggLT0gYW5WZWxvY2l0eTtcclxuXHRcdFx0XHRlbHNlIHRoaXMuX3dpZHRoID0gMDtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSBab29tOlxyXG5cdFx0XHRcdHRoaXMuX2hlaWdodCArPSBhblZlbG9jaXR5O1xyXG5cdFx0XHRcdHRoaXMuX3dpZHRoICs9IGFuVmVsb2NpdHk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCdVbmtub3duIHJlc2l6ZSB0eXBlJyk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZ2V0IHgoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5feDtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBnZXQgeSgpIHtcclxuXHRcdHJldHVybiB0aGlzLl95O1xyXG5cdH1cclxuXHJcblx0cHVibGljIGdldCBoZWlnaHQoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5faGVpZ2h0O1xyXG5cdH1cclxuXHJcblx0cHVibGljIGdldCB3aWR0aCgpIHtcclxuXHRcdHJldHVybiB0aGlzLl93aWR0aDtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBnZXQgcG9zaXRpb24oKTogQ29vcmRpbmF0ZXMge1xyXG5cdFx0cmV0dXJuIHsgeDogdGhpcy5feCwgeTogdGhpcy5feSB9O1xyXG5cdH1cclxuXHJcblx0cHVibGljIHNldCBwb3NpdGlvbihwb3NpdGlvbjogQ29vcmRpbmF0ZXMpIHtcclxuXHRcdHRoaXMuX3ggPSBwb3NpdGlvbi54O1xyXG5cdFx0dGhpcy5feSA9IHBvc2l0aW9uLnk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZ2V0IHNpemUoKTogU2l6ZSB7XHJcblx0XHRyZXR1cm4geyB3aWR0aDogdGhpcy5fd2lkdGgsIGhlaWdodDogdGhpcy5faGVpZ2h0IH07XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc2V0IHNpemUoc2l6ZTogU2l6ZSkge1xyXG5cdFx0dGhpcy5faGVpZ2h0ID0gc2l6ZS5oZWlnaHQ7XHJcblx0XHR0aGlzLl93aWR0aCA9IHNpemUud2lkdGg7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCBCbG9jayBmcm9tICcuLi9ibG9jayc7XHJcbmltcG9ydCB7IENvb3JkaW5hdGVzLCBTaXplLCBHcmlkSW5mbyB9IGZyb20gJy4uL3R5cGVzJztcclxuaW1wb3J0IHsgUmVzdWx0IH0gZnJvbSAnLi4vd29ybGRzL2VuZFdvcmxkJztcclxuaW1wb3J0IEdhbWVPYmplY3QgZnJvbSAnLi9nYW1lT2JqZWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdyaWQgZXh0ZW5kcyBHYW1lT2JqZWN0IHtcclxuXHRwcml2YXRlIF9ncmlkSW5mbzogR3JpZEluZm87XHJcblxyXG5cdHByaXZhdGUgX2Jsb2NrTGF5b3V0OiBCbG9ja1tdW10gPSBbXTtcclxuXHJcblx0cHJpdmF0ZSBfaXRlbUhlaWdodCA9IDA7XHJcblxyXG5cdHByaXZhdGUgX2l0ZW1XaWR0aCA9IDA7XHJcblxyXG5cdGNvbnN0cnVjdG9yKGdyaWRJbmZvOiBHcmlkSW5mbywgZW1pdEVGdW5jOiAoZU5hbWU6IHN0cmluZywgYXJnOiBhbnkpID0+IHZvaWQpIHtcclxuXHRcdHN1cGVyKCk7XHJcblx0XHR0aGlzLl9ncmlkSW5mbyA9IGdyaWRJbmZvO1xyXG5cdFx0dGhpcy5jcmVhdGVMYXlvdXQoKTtcclxuXHRcdGxldCBzID0gZ3JpZEluZm8ubWluU3RpcnJpbmdBbW91bnQ7XHJcblx0XHR3aGlsZSAoIXRoaXMuY2hlY2tMYXlvdXQoKSAmJiBzID4gMCkge1xyXG5cdFx0XHR0aGlzLmNyZWF0ZUxheW91dCgpO1xyXG5cdFx0XHRzIC09IDE7XHJcblx0XHR9XHJcblx0XHRpZiAocyA9PT0gMCkge1xyXG5cdFx0XHRlbWl0RUZ1bmMoJ2VuZEdhbWUnLCBSZXN1bHQuTG9zdCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgaW5pdChwb3NpdGlvbjogQ29vcmRpbmF0ZXMsIHNpemU6IFNpemUsIGl0ZW1TaXplOiBTaXplKSB7XHJcblx0XHR0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XHJcblx0XHR0aGlzLnNpemUgPSBzaXplO1xyXG5cdFx0dGhpcy5pdGVtU2l6ZSA9IGl0ZW1TaXplO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBjcmVhdGVMYXlvdXQoKSB7XHJcblx0XHRjb25zdCB7IG4sIG0sIGJsb2NrQ29sb3JzIH0gPSB0aGlzLmdyaWRJbmZvO1xyXG5cdFx0Y29uc3QgbGF5b3V0OiBCbG9ja1tdW10gPSBbXTtcclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSArPSAxKSB7XHJcblx0XHRcdGxheW91dFtpXSA9IFtdO1xyXG5cdFx0XHRmb3IgKGxldCBqID0gMDsgaiA8IG07IGogKz0gMSkge1xyXG5cdFx0XHRcdGxheW91dFtpXVtqXSA9IG5ldyBCbG9jayhibG9ja0NvbG9ycyk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHRoaXMuX2Jsb2NrTGF5b3V0ID0gbGF5b3V0O1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBjaGVja0xheW91dCgpOiBib29sZWFuIHtcclxuXHRcdGxldCByZXN1bHQgPSBmYWxzZTtcclxuXHRcdGNvbnN0IHsgbSwgbiB9ID0gdGhpcy5fZ3JpZEluZm87XHJcblx0XHRjb25zdCBsYXlvdXQgPSB0aGlzLl9ibG9ja0xheW91dDtcclxuXHRcdGxldCBpID0gMDtcclxuXHRcdGZvciAoaSA9IDA7IGkgPCBtIC0gMTsgaSArPSAxKSB7XHJcblx0XHRcdGNvbnN0IHJvd0xpc3QgPSBsYXlvdXRbaV0ubWFwKGJsb2NrID0+IGJsb2NrLmNvbG9yKTtcclxuXHRcdFx0Y29uc3Qgcm93U2V0ID0gbmV3IFNldChyb3dMaXN0KTtcclxuXHRcdFx0aWYgKHJvd1NldC5zaXplIDwgcm93TGlzdC5sZW5ndGgpIHtcclxuXHRcdFx0XHRyZXN1bHQgPSB0cnVlO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRmb3IgKGkgPSAwOyBpIDwgbTsgaSArPSAxKSB7XHJcblx0XHRcdGZvciAobGV0IGogPSAxOyBqIDwgbjsgaiArPSAxKSB7XHJcblx0XHRcdFx0aWYgKGxheW91dFtqIC0gMV1baV0gPT09IGxheW91dFtqXVtpXSkge1xyXG5cdFx0XHRcdFx0cmVzdWx0ID0gdHJ1ZTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAocmVzdWx0KSBicmVhaztcclxuXHRcdH1cclxuXHRcdHJldHVybiByZXN1bHQ7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZ2V0IG4oKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fZ3JpZEluZm8ubjtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBnZXQgbSgpIHtcclxuXHRcdHJldHVybiB0aGlzLl9ncmlkSW5mby5tO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGdldCBibG9ja0xheW91dCgpIHtcclxuXHRcdHJldHVybiB0aGlzLl9ibG9ja0xheW91dDtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzZXQgYmxvY2tMYXlvdXQobGF5b3V0OiBCbG9ja1tdW10pIHtcclxuXHRcdHRoaXMuX2Jsb2NrTGF5b3V0ID0gbGF5b3V0O1xyXG5cdH1cclxuXHJcblx0cHVibGljIGdldCBncmlkSW5mbygpIHtcclxuXHRcdHJldHVybiB0aGlzLl9ncmlkSW5mbztcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBnZXQgaXRlbUhlaWdodCgpIHtcclxuXHRcdHJldHVybiB0aGlzLl9pdGVtSGVpZ2h0O1xyXG5cdH1cclxuXHJcblx0cHVibGljIGdldCBpdGVtV2lkdGgoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5faXRlbVdpZHRoO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGdldCBpdGVtU2l6ZSgpIHtcclxuXHRcdHJldHVybiB7IHdpZHRoOiB0aGlzLl9pdGVtV2lkdGgsIGhlaWdodDogdGhpcy5faXRlbUhlaWdodCB9O1xyXG5cdH1cclxuXHJcblx0cHVibGljIHNldCBpdGVtU2l6ZShzaXplOiBTaXplKSB7XHJcblx0XHR0aGlzLl9pdGVtV2lkdGggPSBzaXplLndpZHRoO1xyXG5cdFx0dGhpcy5faXRlbUhlaWdodCA9IHNpemUuaGVpZ2h0O1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb29yZGluYXRlcyB9IGZyb20gJy4vdHlwZXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5wdXQge1xyXG5cdHByaXZhdGUgX3ggPSAwO1xyXG5cclxuXHRwcml2YXRlIF95ID0gMDtcclxuXHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHR0aGlzLmluaXQoKTtcclxuXHR9XHJcblxyXG5cdGluaXQoKSB7XHJcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBlID0+IHtcclxuXHRcdFx0dGhpcy5feCA9IGUub2Zmc2V0WDtcclxuXHRcdFx0dGhpcy5feSA9IGUub2Zmc2V0WTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGdldCB4KCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX3g7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZ2V0IHkoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5feTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzZXQgY29vcmRpbmF0ZXMoY3I6IENvb3JkaW5hdGVzKSB7XHJcblx0XHR0aGlzLl94ID0gY3IueDtcclxuXHRcdHRoaXMuX3kgPSBjci55O1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb29yZGluYXRlcywgRGlyZWN0aW9uIH0gZnJvbSAnLi90eXBlcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9ncmVzc0JhciB7XHJcblx0cHJpdmF0ZSBfeCA9IDA7XHJcblxyXG5cdHByaXZhdGUgX2N1cnJlbnRYID0gMDtcclxuXHJcblx0cHJpdmF0ZSBfZW5kWCA9IDA7XHJcblxyXG5cdHByaXZhdGUgX3ZlbG9jaXR5ID0gMTtcclxuXHJcblx0cHJpdmF0ZSBfeSA9IDA7XHJcblxyXG5cdHByaXZhdGUgX2RpcmVjdGlvbjogRGlyZWN0aW9uID0gRGlyZWN0aW9uLlJpZ2h0O1xyXG5cclxuXHRpbml0KHN0YXJ0WDogbnVtYmVyLCB3aWR0aDogbnVtYmVyLCB5OiBudW1iZXIsIHRhcmdldFBvaW50czogbnVtYmVyKSB7XHJcblx0XHR0aGlzLl94ID0gc3RhcnRYO1xyXG5cdFx0aWYgKHRoaXMuX2RpcmVjdGlvbiA9PT0gRGlyZWN0aW9uLlJpZ2h0KSB7XHJcblx0XHRcdHRoaXMuX2N1cnJlbnRYID0gc3RhcnRYO1xyXG5cdFx0XHR0aGlzLl9lbmRYID0gc3RhcnRYICsgd2lkdGg7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLl9jdXJyZW50WCA9IHN0YXJ0WCArIHdpZHRoO1xyXG5cdFx0XHR0aGlzLl9lbmRYID0gc3RhcnRYO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5feSA9IHk7XHJcblx0XHR0aGlzLl92ZWxvY2l0eSA9IFByb2dyZXNzQmFyLmNhbGNWZWxvY2l0eSh3aWR0aCwgdGFyZ2V0UG9pbnRzKTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgc3RhdGljIGNhbGNWZWxvY2l0eSh3aWR0aDogbnVtYmVyLCB0YXJnZXRQb2ludHM6IG51bWJlcik6IG51bWJlciB7XHJcblx0XHRyZXR1cm4gd2lkdGggLyB0YXJnZXRQb2ludHM7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIG1vdmVSaWdodCgpIHtcclxuXHRcdGlmICh0aGlzLl9jdXJyZW50WCA+PSB0aGlzLl9lbmRYKSByZXR1cm47XHJcblx0XHR0aGlzLl9jdXJyZW50WCArPSB0aGlzLl92ZWxvY2l0eTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgbW92ZUxlZnQoKSB7XHJcblx0XHR0aGlzLl9jdXJyZW50WCAtPSB0aGlzLl92ZWxvY2l0eTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBtb3ZlKCkge1xyXG5cdFx0aWYgKHRoaXMuZGlyZWN0aW9uID09PSBEaXJlY3Rpb24uTGVmdCkgdGhpcy5tb3ZlTGVmdCgpO1xyXG5cdFx0ZWxzZSB0aGlzLm1vdmVSaWdodCgpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGdldCBjdXJyZW50UG9zaXRpb24oKTogQ29vcmRpbmF0ZXMge1xyXG5cdFx0cmV0dXJuIHsgeDogdGhpcy5fY3VycmVudFgsIHk6IHRoaXMuX3kgfTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzZXQgdmVsb2NpdHkodjogbnVtYmVyKSB7XHJcblx0XHR0aGlzLl92ZWxvY2l0eSA9IHY7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc2V0VmVsb2NpdHlCeVdpZHRoKHdpZHRoOiBudW1iZXIsIHRhcmdldFBvaW50czogbnVtYmVyKSB7XHJcblx0XHR0aGlzLl92ZWxvY2l0eSA9IFByb2dyZXNzQmFyLmNhbGNWZWxvY2l0eSh3aWR0aCwgdGFyZ2V0UG9pbnRzKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzZXQgZGlyZWN0aW9uKGRpcmVjdGlvbjogRGlyZWN0aW9uKSB7XHJcblx0XHR0aGlzLl9kaXJlY3Rpb24gPSBkaXJlY3Rpb247XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc2V0IHgoc3RhcnQ6IG51bWJlcikge1xyXG5cdFx0dGhpcy5feCA9IHN0YXJ0O1xyXG5cdFx0dGhpcy5fY3VycmVudFggPSBzdGFydDtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzZXQgRW5kWCh4OiBudW1iZXIpIHtcclxuXHRcdHRoaXMuX2VuZFggPSB4O1xyXG5cdH1cclxuXHJcblx0cHVibGljIHNldEVuZFhCeVdpZHRoKHdpZHRoOiBudW1iZXIpIHtcclxuXHRcdHRoaXMuX2VuZFggPSB0aGlzLl94ICsgd2lkdGg7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc2V0IGN1cnJlbnRYKHdpZHRoOiBudW1iZXIpIHtcclxuXHRcdHRoaXMuX2N1cnJlbnRYID0gdGhpcy5feCArIHdpZHRoO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGdldCB3aWR0aCgpIHtcclxuXHRcdHJldHVybiB0aGlzLl9jdXJyZW50WCAtIHRoaXMuX3g7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCBWaWV3IGZyb20gJy4vdmlld3Mvdmlldyc7XHJcbmltcG9ydCBXb3JsZCBmcm9tICcuL3dvcmxkcy93b3JsZCc7XHJcblxyXG5leHBvcnQgZW51bSBTY2VuZXMge1xyXG5cdFN0YXJ0ID0gJ1N0YXJ0JyxcclxuXHRHYW1lID0gJ0dhbWUnLFxyXG5cdEVuZCA9ICdFbmQnLFxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBUU2NlbmUgPSB7XHJcblx0dmlldzogVmlldztcclxuXHR3b3JsZDogV29ybGQ7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY2VuZU1hbmFnZXIge1xyXG5cdHByaXZhdGUgX3NjZW5lcyA9IG5ldyBNYXA8U2NlbmVzLCBUU2NlbmU+KCk7XHJcblxyXG5cdHB1YmxpYyBhZGQoc2NlbmVOYW1lOiBTY2VuZXMsIHNjZW5lT2JqOiBUU2NlbmUpIHtcclxuXHRcdHRoaXMuX3NjZW5lcy5zZXQoc2NlbmVOYW1lLCBzY2VuZU9iaik7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgaGFzKHNjZW5lTmFtZTogU2NlbmVzKSB7XHJcblx0XHR0aGlzLl9zY2VuZXMuaGFzKHNjZW5lTmFtZSk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZ2V0KHNjZW5lTmFtZTogU2NlbmVzKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fc2NlbmVzLmdldChzY2VuZU5hbWUpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGRlbGV0ZShzY2VuZU5hbWU6IFNjZW5lcykge1xyXG5cdFx0aWYgKHRoaXMuX3NjZW5lcy5oYXMoc2NlbmVOYW1lKSkge1xyXG5cdFx0XHR0aGlzLl9zY2VuZXMuZGVsZXRlKHNjZW5lTmFtZSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZ2V0IHNjZW5lcygpIHtcclxuXHRcdHJldHVybiB0aGlzLl9zY2VuZXM7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IFBPSU5UU19QRVJfVFVSTiB9IGZyb20gJy4vY29uc3RhbnRzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjb3JlIHtcclxuXHRwcml2YXRlIF9wb2ludHMgPSAwO1xyXG5cclxuXHRwcml2YXRlIF9tb3ZlcyA9IDA7XHJcblxyXG5cdHByaXZhdGUgX3RhcmdldFBvaW50cyA9IDA7XHJcblxyXG5cdHByaXZhdGUgX3RhcmdldE1vdmVzID0gMDtcclxuXHJcblx0Y29uc3RydWN0b3IodGFyZ2V0UG9pbnRzOiBudW1iZXIsIHRhcmdldE1vdmVzOiBudW1iZXIpIHtcclxuXHRcdHRoaXMuX3RhcmdldFBvaW50cyA9IHRhcmdldFBvaW50cztcclxuXHRcdHRoaXMuX21vdmVzID0gdGFyZ2V0TW92ZXM7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZ2V0IHBvaW50cygpIHtcclxuXHRcdHJldHVybiB0aGlzLl9wb2ludHM7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgaW5jcmVhc2VQb2ludHMoKSB7XHJcblx0XHR0aGlzLl9wb2ludHMgKz0gUE9JTlRTX1BFUl9UVVJOO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGdldCBtb3ZlcygpIHtcclxuXHRcdHJldHVybiB0aGlzLl9tb3ZlcztcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBkZWNyZWFzZU1vdmVzTnVtKCkge1xyXG5cdFx0dGhpcy5fbW92ZXMgLT0gMTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBnZXQgdGFyZ2V0UG9pbnRzKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX3RhcmdldFBvaW50cztcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBnZXQgdGFyZ2V0TW92ZXMoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fdGFyZ2V0TW92ZXM7XHJcblx0fVxyXG59XHJcbiIsImV4cG9ydCB0eXBlIENvb3JkaW5hdGVzID0ge1xyXG5cdHg6IG51bWJlcjtcclxuXHR5OiBudW1iZXI7XHJcbn07XHJcblxyXG5leHBvcnQgZW51bSBSZXNpemVUeXBlIHtcclxuXHRab29tLFxyXG5cdFNocmluayxcclxufVxyXG5cclxuZXhwb3J0IGVudW0gRGlyZWN0aW9uIHtcclxuXHRVcCxcclxuXHRSaWdodCxcclxuXHREb3duLFxyXG5cdExlZnQsXHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIFNpemUgPSB7XHJcblx0d2lkdGg6IG51bWJlcjtcclxuXHRoZWlnaHQ6IG51bWJlcjtcclxufTtcclxuXHJcbmV4cG9ydCB0eXBlIEdyaWRJbmZvID0ge1xyXG5cdGJsb2NrQ29sb3JzOiBudW1iZXJbXTtcclxuXHRuOiBudW1iZXI7XHJcblx0bTogbnVtYmVyO1xyXG5cdGs6IG51bWJlcjtcclxuXHRtaW5TdGlycmluZ0Ftb3VudDogbnVtYmVyO1xyXG59O1xyXG5cclxuZXhwb3J0IHR5cGUgR2FtZUltYWdlcyA9IHsgW2tleTogc3RyaW5nXTogSFRNTEltYWdlRWxlbWVudCB9O1xyXG5leHBvcnQgdHlwZSBBc3NldHMgPSB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xyXG5cclxuZXhwb3J0IHR5cGUgUG9zaXRpb25MaXN0ID0gW251bWJlciwgbnVtYmVyXVtdO1xyXG4iLCJleHBvcnQgZnVuY3Rpb24gZ2V0UmFuZG9tSW50ZWdlcihtaW46IG51bWJlciwgbWF4OiBudW1iZXIpIHtcclxuXHRyZXR1cm4gTWF0aC5mbG9vcihtaW4gKyBNYXRoLnJhbmRvbSgpICogKG1heCArIDEgLSBtaW4pKTtcclxufVxyXG5cclxuY29uc3QgQ09MT1JTX05VTSA9IDU7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hvb3NlQ29sb3JzKGFtb3VudDogbnVtYmVyKSB7XHJcblx0aWYgKGFtb3VudCA9PT0gQ09MT1JTX05VTSkge1xyXG5cdFx0cmV0dXJuIEFycmF5LmZyb20oeyBsZW5ndGg6IENPTE9SU19OVU0gfSwgKHYsIGspID0+IGsgKyAxKTtcclxuXHR9XHJcblx0cmV0dXJuIEFycmF5LmZyb20oeyBsZW5ndGg6IGFtb3VudCB9LCAoKSA9PiBnZXRSYW5kb21JbnRlZ2VyKDAsIGFtb3VudCAtIDEpKTtcclxuXHQvLyBUT0RPIGNoZWNrIHJlcGVhdHNcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFJhbmRvbVZhbHVlKGFycmF5OiBudW1iZXJbXSk6IG51bWJlciB7XHJcblx0cmV0dXJuIGFycmF5W01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGFycmF5Lmxlbmd0aCldO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hvb3NlQ29sb3IoY29sb3JOdW1iZXI6IG51bWJlcik6IHN0cmluZyB7XHJcblx0c3dpdGNoIChjb2xvck51bWJlcikge1xyXG5cdFx0Y2FzZSAxOlxyXG5cdFx0XHRyZXR1cm4gJ0JsdWVCbG9jayc7XHJcblx0XHRjYXNlIDI6XHJcblx0XHRcdHJldHVybiAnR3JlZW5CbG9jayc7XHJcblx0XHRjYXNlIDM6XHJcblx0XHRcdHJldHVybiAnUHVycGxlQmxvY2snO1xyXG5cdFx0Y2FzZSA0OlxyXG5cdFx0XHRyZXR1cm4gJ1JlZEJsb2NrJztcclxuXHRcdGNhc2UgNTpcclxuXHRcdFx0cmV0dXJuICdZZWxsb3dCbG9jayc7XHJcblx0XHRkZWZhdWx0OlxyXG5cdFx0XHRyZXR1cm4gJ0JsdWVCbG9jayc7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tDbGljayh1WDogbnVtYmVyLCB1WTogbnVtYmVyLCB4OiBudW1iZXIsIHk6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIHdpZHRoOm51bWJlcikge1xyXG5cdHJldHVybiB1WSA+IHkgJiYgdVkgPCB5ICsgaGVpZ2h0ICYmIHVYID4geCAmJiB1WCA8IHggKyB3aWR0aFxyXG59XHJcbiIsImltcG9ydCBWaWV3IGZyb20gJy4vdmlldyc7XHJcbmltcG9ydCB7IElNQUdFX1NJWkVfQ09FRkZJQ0lFTlQgfSBmcm9tICcuLi9jb25zdGFudHMnO1xyXG5pbXBvcnQgRW5kV29ybGQgZnJvbSAnLi4vd29ybGRzL2VuZFdvcmxkJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVuZFZpZXcgZXh0ZW5kcyBWaWV3IHtcclxuXHRwdWJsaWMgaW5pdCh3b3JsZDogRW5kV29ybGQpOiB2b2lkIHtcclxuXHRcdHRoaXMuaW5pdEJ1dHRvbih3b3JsZCk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgdXBkYXRlKHdvcmxkOiBFbmRXb3JsZCk6IHZvaWQge1xyXG5cdFx0dGhpcy5yZW5kZXJTY2VuZSh3b3JsZCk7XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgcmVuZGVyU2NlbmUod29ybGQ6IEVuZFdvcmxkKTogdm9pZCB7XHJcblx0XHRjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHRoaXMuX2NhbnZhcztcclxuXHRcdGNvbnN0IHsgQnV0dG9uIH0gPSB0aGlzLl9nYW1lSW1hZ2VzO1xyXG5cdFx0Y29uc3QgYldpZHRoID0gKEJ1dHRvbi53aWR0aCAvIElNQUdFX1NJWkVfQ09FRkZJQ0lFTlQpICogMjtcclxuXHRcdGNvbnN0IGJIZWlnaHQgPSAoQnV0dG9uLmhlaWdodCAvIElNQUdFX1NJWkVfQ09FRkZJQ0lFTlQpICogMjtcclxuXHRcdGNvbnN0IGR4ID0gd2lkdGggLyAyIC0gYldpZHRoIC8gMjtcclxuXHRcdGNvbnN0IGR5ID0gaGVpZ2h0IC8gMiAtIGJIZWlnaHQgLyAyO1xyXG5cdFx0dGhpcy5fY3R4LmZpbGxTdHlsZSA9ICcjYTFhMWExJztcclxuXHRcdHRoaXMuX2N0eC5maWxsUmVjdCgwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcclxuXHRcdHRoaXMuX2N0eC5kcmF3SW1hZ2UoQnV0dG9uLCBkeCwgZHksIGJXaWR0aCwgYkhlaWdodCk7XHJcblx0XHR0aGlzLl9jdHguZmlsbFN0eWxlID0gJyNmZmYnO1xyXG5cdFx0dGhpcy5fY3R4LmZvbnQgPSAnMzRweCBNYXJ2aW4nO1xyXG5cdFx0bGV0IHRleHQgPSBg0JfQsNC90L7QstC+YDtcclxuXHRcdHRoaXMuX2N0eC5maWxsVGV4dCh0ZXh0LCBkeCArIGJXaWR0aCAvIDIgLSB0aGlzLl9jdHgubWVhc3VyZVRleHQodGV4dCkud2lkdGggLyAyLCBkeSArIGJIZWlnaHQgLyAyICsgMTApO1xyXG5cdFx0dGhpcy5fY3R4LmZvbnQgPSAnNTRweCBNYXJ2aW4nO1xyXG5cdFx0dGV4dCA9IGDQktGLICR7d29ybGQucmVzdWx0fWA7XHJcblx0XHR0aGlzLl9jdHguZmlsbFRleHQodGV4dCwgd2lkdGggLyAyIC0gdGhpcy5fY3R4Lm1lYXN1cmVUZXh0KHRleHQpLndpZHRoIC8gMiwgZHkgKyBiSGVpZ2h0IC8gMiAtIDEwMCk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGluaXRCdXR0b24od29ybGQ6IEVuZFdvcmxkKSB7XHJcblx0XHRjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHRoaXMuX2NhbnZhcztcclxuXHRcdGNvbnN0IHsgQnV0dG9uIH0gPSB0aGlzLl9nYW1lSW1hZ2VzO1xyXG5cdFx0Y29uc3QgYldpZHRoID0gKEJ1dHRvbi53aWR0aCAvIElNQUdFX1NJWkVfQ09FRkZJQ0lFTlQpICogMjtcclxuXHRcdGNvbnN0IGJIZWlnaHQgPSAoQnV0dG9uLmhlaWdodCAvIElNQUdFX1NJWkVfQ09FRkZJQ0lFTlQpICogMjtcclxuXHRcdGNvbnN0IGR4ID0gd2lkdGggLyAyIC0gYldpZHRoIC8gMjtcclxuXHRcdGNvbnN0IGR5ID0gaGVpZ2h0IC8gMiAtIGJIZWlnaHQgLyAyO1xyXG5cdFx0d29ybGQuYWdhaW5CdXR0b24uaW5pdChcclxuXHRcdFx0eyB4OiBkeCwgeTogZHkgfSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHdpZHRoOiBiV2lkdGgsXHJcblx0XHRcdFx0aGVpZ2h0OiBiSGVpZ2h0LFxyXG5cdFx0XHR9XHJcblx0XHQpO1xyXG5cdH1cclxuXHJcblx0cHJvdGVjdGVkIGNsZWFyU2NyZWVuKCk6IHZvaWQge1xyXG5cdFx0dGhpcy5fY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLl9jYW52YXMud2lkdGgsIHRoaXMuX2NhbnZhcy5oZWlnaHQpO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgVmlldyBmcm9tICcuL3ZpZXcnO1xyXG5pbXBvcnQgeyBJTUFHRV9TSVpFX0NPRUZGSUNJRU5ULCBURUxFUE9SVF9DT1NUIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcclxuaW1wb3J0IFNjb3JlIGZyb20gJy4uL3Njb3JlJztcclxuaW1wb3J0IEdhbWVXb3JsZCBmcm9tICcuLi93b3JsZHMvZ2FtZVdvcmxkJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVWaWV3IGV4dGVuZHMgVmlldyB7XHJcblx0aW5pdCh3b3JsZDogR2FtZVdvcmxkKTogdm9pZCB7XHJcblx0XHR0aGlzLmluaXRHcmlkKHdvcmxkKTtcclxuXHRcdHRoaXMuaW5pdFByb2dyZXNzQmFyKHdvcmxkKTtcclxuXHRcdHRoaXMuaW5pdEJvbnVzKHdvcmxkKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZSh3b3JsZDogR2FtZVdvcmxkKTogdm9pZCB7XHJcblx0XHR0aGlzLmNsZWFyU2NyZWVuKCk7XHJcblx0XHR0aGlzLnJlbmRlclNjZW5lKHdvcmxkKTtcclxuXHR9XHJcblxyXG5cdHJlbmRlclNjZW5lKHdvcmxkOiBHYW1lV29ybGQpIHtcclxuXHRcdHRoaXMucmVuZGVySGVhZGVyKHdvcmxkKTtcclxuXHRcdHRoaXMucmVuZGVyR3JpZCh3b3JsZCk7XHJcblx0XHR0aGlzLnJlbmRlclNjb3JlKHdvcmxkKTtcclxuXHRcdHRoaXMucmVuZGVyUHJvZ3Jlc3NCYXIod29ybGQpO1xyXG5cdFx0dGhpcy5yZW5kZXJCb251cyh3b3JsZCk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIHJlbmRlckhlYWRlcih3b3JsZDogR2FtZVdvcmxkKSB7XHJcblx0XHRjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHRoaXMuX2NhbnZhcztcclxuXHRcdGNvbnN0IHsgSGVhZGVyUGFuZWwsIE1vbmV5QmxvY2sgfSA9IHRoaXMuX2dhbWVJbWFnZXM7XHJcblxyXG5cdFx0dGhpcy5fY3R4LmZpbGxTdHlsZSA9ICcjYTFhMWExJztcclxuXHRcdHRoaXMuX2N0eC5maWxsUmVjdCgwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcclxuXHRcdGNvbnN0IGR4ID0gd2lkdGggLyAyIC0gSGVhZGVyUGFuZWwud2lkdGggLyBJTUFHRV9TSVpFX0NPRUZGSUNJRU5UIC8gMjtcclxuXHRcdHRoaXMuX2N0eC5kcmF3SW1hZ2UoSGVhZGVyUGFuZWwsIGR4LCAwLCBIZWFkZXJQYW5lbC53aWR0aCAvIElNQUdFX1NJWkVfQ09FRkZJQ0lFTlQsIEhlYWRlclBhbmVsLmhlaWdodCAvIElNQUdFX1NJWkVfQ09FRkZJQ0lFTlQpO1xyXG5cdFx0dGhpcy5fY3R4LmRyYXdJbWFnZShNb25leUJsb2NrLCBkeCArIDM1LCBIZWFkZXJQYW5lbC5oZWlnaHQgLyBJTUFHRV9TSVpFX0NPRUZGSUNJRU5UIC8gMTAsIE1vbmV5QmxvY2sud2lkdGggLyBJTUFHRV9TSVpFX0NPRUZGSUNJRU5ULCBNb25leUJsb2NrLmhlaWdodCAvIElNQUdFX1NJWkVfQ09FRkZJQ0lFTlQpO1xyXG5cclxuXHRcdHRoaXMuX2N0eC5maWxsU3R5bGUgPSAnI2ZmZic7XHJcblx0XHR0aGlzLl9jdHguZm9udCA9ICcyMHB4IE1hcnZpbic7XHJcblx0XHR0aGlzLl9jdHguZmlsbFRleHQoJ9C/0YDQvtCz0YDQtdGB0YEnLCB3aWR0aCAvIDIgLSA3MCwgMjMpO1xyXG5cdFx0dGhpcy5fY3R4LmZpbGxUZXh0KGAke3dvcmxkLm1vbmV5fWAsIGR4ICsgTW9uZXlCbG9jay53aWR0aCAvIElNQUdFX1NJWkVfQ09FRkZJQ0lFTlQgLyAxLjMsIEhlYWRlclBhbmVsLmhlaWdodCAvIElNQUdFX1NJWkVfQ09FRkZJQ0lFTlQgLyAyKTtcclxuXHR9XHJcblxyXG5cdHJlbmRlclNjb3JlKHdvcmxkOiBHYW1lV29ybGQpIHtcclxuXHRcdGNvbnN0IHNjb3JlUGFuZWxJbWFnZSA9IHRoaXMuX2dhbWVJbWFnZXMuU2NvcmVQYW5lbDtcclxuXHRcdGNvbnN0IGR4ID0gdGhpcy5fY2FudmFzLndpZHRoIC8gMiArIDEyNTtcclxuXHRcdGNvbnN0IGR5ID0gdGhpcy5fZ2FtZUltYWdlcy5IZWFkZXJQYW5lbC5oZWlnaHQgLyBJTUFHRV9TSVpFX0NPRUZGSUNJRU5UICsgNTQ7XHJcblx0XHRjb25zdCB0ZXh0RHggPSBkeCArIHNjb3JlUGFuZWxJbWFnZS53aWR0aCAvIElNQUdFX1NJWkVfQ09FRkZJQ0lFTlQgLyAyO1xyXG5cdFx0dGhpcy5fY3R4LmRyYXdJbWFnZShzY29yZVBhbmVsSW1hZ2UsIGR4LCBkeSwgc2NvcmVQYW5lbEltYWdlLndpZHRoIC8gSU1BR0VfU0laRV9DT0VGRklDSUVOVCwgc2NvcmVQYW5lbEltYWdlLmhlaWdodCAvIElNQUdFX1NJWkVfQ09FRkZJQ0lFTlQpO1xyXG5cdFx0dGhpcy5yZW5kZXJTY29yZVRleHQod29ybGQuc2NvcmUsIHRleHREeCwgZHksIHNjb3JlUGFuZWxJbWFnZSk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGdldFRleHRTY29yZUR5ID0gKHBhbmVsRHk6IG51bWJlciwgaW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnQsIGs6IG51bWJlcikgPT4gcGFuZWxEeSArIGltYWdlLmhlaWdodCAvIElNQUdFX1NJWkVfQ09FRkZJQ0lFTlQgLyBrO1xyXG5cclxuXHRwcml2YXRlIGdldFRleHRTY29yZUR4ID0gKHRleHREeDogbnVtYmVyLCB0ZXh0OiBzdHJpbmcpID0+IHRleHREeCAtIHRoaXMuX2N0eC5tZWFzdXJlVGV4dCh0ZXh0KS53aWR0aCAvIDI7XHJcblxyXG5cdHByaXZhdGUgcmVuZGVyU2NvcmVUZXh0KHNjb3JlOiBTY29yZSwgdGV4dER4OiBudW1iZXIsIHBhbmVsRHk6IG51bWJlciwgaW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnQpIHtcclxuXHRcdGNvbnN0IHsgcG9pbnRzLCBtb3ZlcyB9ID0gc2NvcmU7XHJcblx0XHR0aGlzLl9jdHguZm9udCA9ICcyMHB4IE1hcnZpbic7XHJcblx0XHRsZXQgdGV4dCA9ICfQstGA0LXQvNGPOic7XHJcblx0XHR0aGlzLl9jdHguZmlsbFRleHQodGV4dCwgdGhpcy5nZXRUZXh0U2NvcmVEeCh0ZXh0RHgsIHRleHQpLCBwYW5lbER5KTtcclxuXHRcdHRoaXMuX2N0eC5mb250ID0gJzM0cHggTWFydmluJztcclxuXHRcdHRleHQgPSBgJHtwb2ludHN9YDtcclxuXHRcdHRoaXMuX2N0eC5maWxsVGV4dCh0ZXh0LCB0aGlzLmdldFRleHRTY29yZUR4KHRleHREeCwgdGV4dCksIHRoaXMuZ2V0VGV4dFNjb3JlRHkocGFuZWxEeSwgaW1hZ2UsIDEuMTYpKTtcclxuXHRcdHRleHQgPSBgJHttb3Zlc31gO1xyXG5cdFx0dGhpcy5fY3R4LmZvbnQgPSAnNTJweCBNYXJ2aW4nO1xyXG5cdFx0dGhpcy5fY3R4LmZpbGxUZXh0KHRleHQsIHRoaXMuZ2V0VGV4dFNjb3JlRHgodGV4dER4LCB0ZXh0KSwgdGhpcy5nZXRUZXh0U2NvcmVEeShwYW5lbER5LCBpbWFnZSwgMi41KSk7XHJcblx0XHR0ZXh0ID0gJ9C+0YfQutC4Oic7XHJcblx0XHR0aGlzLl9jdHguZm9udCA9ICcyMHB4IE1hcnZpbic7XHJcblx0XHR0aGlzLl9jdHguZmlsbFRleHQodGV4dCwgdGhpcy5nZXRUZXh0U2NvcmVEeCh0ZXh0RHgsIHRleHQpLCB0aGlzLmdldFRleHRTY29yZUR5KHBhbmVsRHksIGltYWdlLCAxLjQpKTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgaW5pdEJvbnVzKHdvcmxkOiBHYW1lV29ybGQpIHtcclxuXHRcdGNvbnN0IHsgU2NvcmVQYW5lbCwgSGVhZGVyUGFuZWwsIEJvbnVzIH0gPSB0aGlzLl9nYW1lSW1hZ2VzO1xyXG5cdFx0Y29uc3QgZHggPSB0aGlzLl9jYW52YXMud2lkdGggLyAyICsgMTI1O1xyXG5cdFx0Y29uc3QgZHkgPSBIZWFkZXJQYW5lbC5oZWlnaHQgLyBJTUFHRV9TSVpFX0NPRUZGSUNJRU5UICsgNTQgKyBTY29yZVBhbmVsLmhlaWdodCAvIElNQUdFX1NJWkVfQ09FRkZJQ0lFTlQ7XHJcblx0XHRjb25zdCBzY29yZVRleHREWCA9IGR4ICsgU2NvcmVQYW5lbC53aWR0aCAvIElNQUdFX1NJWkVfQ09FRkZJQ0lFTlQgLyAyO1xyXG5cdFx0d29ybGQuYm9udXMuaW5pdCh7IHg6IHNjb3JlVGV4dERYIC0gQm9udXMud2lkdGggLyAzIC8gMiwgeTogZHkgKyA1MCB9LCB7IHdpZHRoOiBCb251cy53aWR0aCAvIDMsIGhlaWdodDogQm9udXMuaGVpZ2h0IC8gMyB9KTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgcmVuZGVyQm9udXMod29ybGQ6IEdhbWVXb3JsZCkge1xyXG5cdFx0Y29uc3QgeyBTY29yZVBhbmVsLCBIZWFkZXJQYW5lbCwgQm9udXMsIFNlbGVjdGVkQm9udXMgfSA9IHRoaXMuX2dhbWVJbWFnZXM7XHJcblx0XHRjb25zdCBkeCA9IHRoaXMuX2NhbnZhcy53aWR0aCAvIDIgKyAxMjU7XHJcblx0XHRjb25zdCBkeSA9IEhlYWRlclBhbmVsLmhlaWdodCAvIElNQUdFX1NJWkVfQ09FRkZJQ0lFTlQgKyA1NCArIFNjb3JlUGFuZWwuaGVpZ2h0IC8gSU1BR0VfU0laRV9DT0VGRklDSUVOVDtcclxuXHRcdGNvbnN0IHNjb3JlVGV4dERYID0gZHggKyBTY29yZVBhbmVsLndpZHRoIC8gSU1BR0VfU0laRV9DT0VGRklDSUVOVCAvIDI7XHJcblx0XHR0aGlzLl9jdHguZm9udCA9ICcyMHB4IE1hcnZpbic7XHJcblx0XHRsZXQgdGV4dCA9ICfQsdC+0L3Rg9GBJztcclxuXHRcdHRoaXMuX2N0eC5maWxsVGV4dCh0ZXh0LCBzY29yZVRleHREWCAtIHRoaXMuX2N0eC5tZWFzdXJlVGV4dCh0ZXh0KS53aWR0aCAvIDIsIGR5ICsgNTApO1xyXG5cdFx0dGhpcy5fY3R4LmRyYXdJbWFnZSghd29ybGQuYm9udXMuc2VsZWN0ZWQgPyBCb251cyA6IFNlbGVjdGVkQm9udXMsIHNjb3JlVGV4dERYIC0gQm9udXMud2lkdGggLyAzIC8gMiwgZHkgKyA1MCwgQm9udXMud2lkdGggLyAzLCBCb251cy5oZWlnaHQgLyAzKTtcclxuXHRcdHRleHQgPSBgJHtURUxFUE9SVF9DT1NUfWA7XHJcblx0XHR0aGlzLl9jdHguZmlsbFRleHQodGV4dCwgc2NvcmVUZXh0RFggLSB0aGlzLl9jdHgubWVhc3VyZVRleHQodGV4dCkud2lkdGggLyAyIC0gNSwgZHkgKyBCb251cy5oZWlnaHQgLyAzICsgMjApO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSByZW5kZXJHcmlkKHdvcmxkOiBHYW1lV29ybGQpIHtcclxuXHRcdHRoaXMuX2N0eC5kcmF3SW1hZ2UoXHJcblx0XHRcdHRoaXMuX2dhbWVJbWFnZXMuR2FtZVBhbmVsLFxyXG5cdFx0XHR0aGlzLl9jYW52YXMud2lkdGggLyAyIC0gdGhpcy5fZ2FtZUltYWdlcy5HYW1lUGFuZWwud2lkdGggLyBJTUFHRV9TSVpFX0NPRUZGSUNJRU5ULFxyXG5cdFx0XHR0aGlzLl9nYW1lSW1hZ2VzLkhlYWRlclBhbmVsLmhlaWdodCAvIElNQUdFX1NJWkVfQ09FRkZJQ0lFTlQgKyAzMCxcclxuXHRcdFx0dGhpcy5fZ2FtZUltYWdlcy5HYW1lUGFuZWwud2lkdGggLyBJTUFHRV9TSVpFX0NPRUZGSUNJRU5ULFxyXG5cdFx0XHR0aGlzLl9nYW1lSW1hZ2VzLkdhbWVQYW5lbC5oZWlnaHQgLyBJTUFHRV9TSVpFX0NPRUZGSUNJRU5UXHJcblx0XHQpO1xyXG5cdFx0Y29uc3QgeyBuLCBtLCBibG9ja0xheW91dDogbGF5b3V0IH0gPSB3b3JsZC5ncmlkO1xyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpICs9IDEpIHtcclxuXHRcdFx0Zm9yIChsZXQgaiA9IDA7IGogPCBtOyBqICs9IDEpIHtcclxuXHRcdFx0XHRjb25zdCB7IHgsIHkgfSA9IGxheW91dFtpXVtqXS5wb3NpdGlvbjtcclxuXHRcdFx0XHRjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IGxheW91dFtpXVtqXS5zaXplO1xyXG5cdFx0XHRcdHRoaXMuX2N0eC5kcmF3SW1hZ2UodGhpcy5fZ2FtZUltYWdlc1tsYXlvdXRbaV1bal0uZ2V0Q29sb3JJbWFnZU5hbWUoKV0sIHgsIHksIHdpZHRoLCBoZWlnaHQpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIHJlbmRlclByb2dyZXNzQmFyKHdvcmxkOiBHYW1lV29ybGQpIHtcclxuXHRcdGNvbnN0IHsgUHJvZ3Jlc3NCbG9jaywgUHJvZ3Jlc3NTY2FsZSB9ID0gdGhpcy5fZ2FtZUltYWdlcztcclxuXHRcdGNvbnN0IGR4ID0gdGhpcy5fY2FudmFzLndpZHRoIC8gMiAtIFByb2dyZXNzU2NhbGUud2lkdGggLyBJTUFHRV9TSVpFX0NPRUZGSUNJRU5UIC8gMiAtIDI0O1xyXG5cdFx0Y29uc3QgZHcgPSBQcm9ncmVzc0Jsb2NrLndpZHRoIC8gSU1BR0VfU0laRV9DT0VGRklDSUVOVDtcclxuXHRcdHRoaXMuX2N0eC5kcmF3SW1hZ2UoUHJvZ3Jlc3NCbG9jaywgZHgsIDI4LCBkdywgUHJvZ3Jlc3NCbG9jay5oZWlnaHQgLyBJTUFHRV9TSVpFX0NPRUZGSUNJRU5UKTtcclxuXHRcdHRoaXMuX2N0eC5kcmF3SW1hZ2UoUHJvZ3Jlc3NTY2FsZSwgZHgsIDI4LCB3b3JsZC5wcm9ncmVzc0Jhci53aWR0aCwgUHJvZ3Jlc3NTY2FsZS5oZWlnaHQgLyBJTUFHRV9TSVpFX0NPRUZGSUNJRU5UICsgMSk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGluaXRHcmlkKHdvcmxkOiBHYW1lV29ybGQpIHtcclxuXHRcdGNvbnN0IHsgZ3JpZDogZ2FtZUdyaWQgfSA9IHdvcmxkO1xyXG5cdFx0Y29uc3QgeyBuLCBtLCBibG9ja0xheW91dDogbGF5b3V0IH0gPSBnYW1lR3JpZDtcclxuXHRcdGNvbnN0IHN0YXJ0WCA9IHRoaXMuX2NhbnZhcy53aWR0aCAvIDIgLSB0aGlzLl9nYW1lSW1hZ2VzLkdhbWVQYW5lbC53aWR0aCAvIDQgKyA3O1xyXG5cdFx0Y29uc3Qgc3RhcnRZID0gdGhpcy5fZ2FtZUltYWdlcy5IZWFkZXJQYW5lbC5oZWlnaHQgLyA0ICsgMzAgKyA3O1xyXG5cdFx0Y29uc3QgYmxvY2tXaWR0aCA9IHRoaXMuX2dhbWVJbWFnZXNbbGF5b3V0WzBdWzBdLmdldENvbG9ySW1hZ2VOYW1lKCldLndpZHRoIC8gMy4wMztcclxuXHRcdGNvbnN0IGJsb2NrSGVpZ2h0ID0gdGhpcy5fZ2FtZUltYWdlc1tsYXlvdXRbMF1bMF0uZ2V0Q29sb3JJbWFnZU5hbWUoKV0uaGVpZ2h0IC8gMy4wMztcclxuXHRcdGdhbWVHcmlkLmluaXQoXHJcblx0XHRcdHsgeDogc3RhcnRYICsgYmxvY2tXaWR0aCAqIG0gKyA1LCB5OiBzdGFydFkgfSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHdpZHRoOiBibG9ja1dpZHRoICogbSArIDUsXHJcblx0XHRcdFx0aGVpZ2h0OiBibG9ja0hlaWdodCAqIG4sXHJcblx0XHRcdH0sXHJcblx0XHRcdHsgd2lkdGg6IGJsb2NrV2lkdGgsIGhlaWdodDogYmxvY2tIZWlnaHQgfVxyXG5cdFx0KTtcclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSArPSAxKSB7XHJcblx0XHRcdGZvciAobGV0IGogPSAwOyBqIDwgbTsgaiArPSAxKSB7XHJcblx0XHRcdFx0dGhpcy5fY3R4LmRyYXdJbWFnZSh0aGlzLl9nYW1lSW1hZ2VzW2xheW91dFtpXVtqXS5nZXRDb2xvckltYWdlTmFtZSgpXSwgc3RhcnRYICsgYmxvY2tXaWR0aCAqIGosIHN0YXJ0WSArIGJsb2NrSGVpZ2h0ICogaSwgYmxvY2tXaWR0aCwgYmxvY2tIZWlnaHQpO1xyXG5cdFx0XHRcdGxheW91dFtpXVtqXS5pbml0KFxyXG5cdFx0XHRcdFx0eyB4OiBzdGFydFggKyBibG9ja1dpZHRoICogaiwgeTogc3RhcnRZICsgYmxvY2tIZWlnaHQgKiBpIH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdHdpZHRoOiBibG9ja1dpZHRoLFxyXG5cdFx0XHRcdFx0XHRoZWlnaHQ6IGJsb2NrSGVpZ2h0LFxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHByaXZhdGUgaW5pdFByb2dyZXNzQmFyKHdvcmxkOiBHYW1lV29ybGQpIHtcclxuXHRcdGNvbnN0IHByb2dyZXNzQmxvY2sgPSB0aGlzLl9nYW1lSW1hZ2VzLlByb2dyZXNzQmxvY2s7XHJcblx0XHR3b3JsZC5wcm9ncmVzc0Jhci5pbml0KHRoaXMuX2NhbnZhcy53aWR0aCAvIDIgLSBwcm9ncmVzc0Jsb2NrLndpZHRoIC8gSU1BR0VfU0laRV9DT0VGRklDSUVOVCAvIDIgLSAyNCwgcHJvZ3Jlc3NCbG9jay53aWR0aCAvIElNQUdFX1NJWkVfQ09FRkZJQ0lFTlQsIDI4LCB3b3JsZC5zY29yZS50YXJnZXRQb2ludHMpO1xyXG5cdH1cclxuXHJcblx0Y2xlYXJTY3JlZW4oKSB7XHJcblx0XHR0aGlzLl9jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuX2NhbnZhcy53aWR0aCwgdGhpcy5fY2FudmFzLmhlaWdodCk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCBXb3JsZCBmcm9tICcuLi93b3JsZHMvd29ybGQnO1xyXG5pbXBvcnQgeyBHYW1lSW1hZ2VzIH0gZnJvbSAnLi4vdHlwZXMnO1xyXG5cclxuaW50ZXJmYWNlIElWaWV3IHtcclxuXHRpbml0OiAod29ybGQ6IFdvcmxkKSA9PiB2b2lkO1xyXG5cdHVwZGF0ZTogKHdvcmxkOiBXb3JsZCkgPT4gdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgVmlldyBpbXBsZW1lbnRzIElWaWV3IHtcclxuXHRwcm90ZWN0ZWQgX2NhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XHJcblxyXG5cdHByb3RlY3RlZCBfY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XHJcblxyXG5cdHByb3RlY3RlZCBfZ2FtZUltYWdlczogR2FtZUltYWdlcztcclxuXHJcblx0Y29uc3RydWN0b3IoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCwgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIGdhbWVJbWFnZXM6IEdhbWVJbWFnZXMpIHtcclxuXHRcdHRoaXMuX2NhbnZhcyA9IGNhbnZhcztcclxuXHRcdHRoaXMuX2N0eCA9IGN0eDtcclxuXHRcdHRoaXMuX2dhbWVJbWFnZXMgPSBnYW1lSW1hZ2VzO1xyXG5cdH1cclxuXHJcblx0YWJzdHJhY3QgaW5pdCh3b3JsZDogV29ybGQpOiB2b2lkO1xyXG5cclxuXHRhYnN0cmFjdCB1cGRhdGUod29ybGQ6IFdvcmxkKTogdm9pZDtcclxuXHJcblx0cHJvdGVjdGVkIGFic3RyYWN0IHJlbmRlclNjZW5lKHdvcmxkOiBXb3JsZCk6IHZvaWQ7XHJcblxyXG5cdHByb3RlY3RlZCBhYnN0cmFjdCBjbGVhclNjcmVlbigpOiB2b2lkO1xyXG59XHJcbiIsImltcG9ydCBXb3JsZCBmcm9tICcuL3dvcmxkJztcclxuaW1wb3J0IElucHV0IGZyb20gJy4uL2lucHV0JztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9nYW1lT2JqZWN0cy9idXR0b24nO1xyXG5pbXBvcnQgeyBjaGVja0NsaWNrIH0gZnJvbSAnLi4vdXRpbHMnO1xyXG5cclxuZXhwb3J0IGVudW0gUmVzdWx0IHtcclxuXHRXaW4gPSAn0JLRi9C40LPRgNCw0LvQuCcsXHJcblx0TG9zdCA9ICfQn9GA0L7QuNCz0YDQsNC70LgnLFxyXG5cdFVuZGVmaW5lZCA9ICcnLFxyXG59XHJcblxyXG4vLyBlbnVtIFN0YWdlcyB7XHJcbi8vIFx0VmlldyxcclxuLy8gXHRCdXR0b25DbGlja2VkLFxyXG4vLyBcdEFnYWluXHJcbi8vIH1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVuZFdvcmxkIGV4dGVuZHMgV29ybGQge1xyXG5cdHByaXZhdGUgX3Jlc3VsdDogUmVzdWx0ID0gUmVzdWx0LlVuZGVmaW5lZDtcclxuXHJcblx0cHJpdmF0ZSBfYWdhaW5CdXR0b246IEJ1dHRvbiA9IG5ldyBCdXR0b24oKTtcclxuXHJcblx0cHJpdmF0ZSBfZW1pdEVGdW5jOiAoZU5hbWU6IHN0cmluZywgYXJnPzogYW55KSA9PiB2b2lkO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihyZXN1bHQ6IFJlc3VsdCwgZW1pdEVGdW5jOiAoZU5hbWU6IHN0cmluZywgYXJnPzogYW55KSA9PiB2b2lkKSB7XHJcblx0XHRzdXBlcigpO1xyXG5cdFx0dGhpcy5fcmVzdWx0ID0gcmVzdWx0O1xyXG5cdFx0dGhpcy5fZW1pdEVGdW5jID0gZW1pdEVGdW5jO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHVwZGF0ZSh1c2VySW5wdXQ6IElucHV0KTogdm9pZCB7XHJcblx0XHR0aGlzLmhhbmRsZUNsaWNrKHVzZXJJbnB1dCk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGhhbmRsZUNsaWNrKHVzZXJJbnB1dDogSW5wdXQpIHtcclxuXHRcdGNvbnN0IHsgeDogdVgsIHk6IHVZIH0gPSB1c2VySW5wdXQ7XHJcblx0XHRpZiAodVggIT09IDAgJiYgdVkgIT09IDApIHtcclxuXHRcdFx0Y29uc3QgeyB4LCB5LCB3aWR0aCwgaGVpZ2h0IH0gPSB0aGlzLl9hZ2FpbkJ1dHRvbjtcclxuXHRcdFx0aWYgKGNoZWNrQ2xpY2sodVgsIHVZLCB4LCB5LCBoZWlnaHQsIHdpZHRoKSkge1xyXG5cdFx0XHRcdC8vIHRoaXMuX2FnYWluQnV0dG9uLnRvZ2dsZVNlbGVjdCgpO1xyXG5cdFx0XHRcdHRoaXMuX2VtaXRFRnVuYygnbmV3R2FtZScpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc2V0IHJlc3VsdChyZXN1bHQ6IFJlc3VsdCkge1xyXG5cdFx0dGhpcy5fcmVzdWx0ID0gcmVzdWx0O1xyXG5cdH1cclxuXHJcblx0cHVibGljIGdldCByZXN1bHQoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fcmVzdWx0O1xyXG5cdH1cclxuXHJcblx0cHVibGljIGdldCBhZ2FpbkJ1dHRvbigpIHtcclxuXHRcdHJldHVybiB0aGlzLl9hZ2FpbkJ1dHRvbjtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IFdvcmxkIGZyb20gJy4vd29ybGQnO1xyXG5pbXBvcnQgSW5wdXQgZnJvbSAnLi4vaW5wdXQnO1xyXG5pbXBvcnQgU2NvcmUgZnJvbSAnLi4vc2NvcmUnO1xyXG5pbXBvcnQgR3JpZCBmcm9tICcuLi9nYW1lT2JqZWN0cy9ncmlkJztcclxuaW1wb3J0IFByb2dyZXNzQmFyIGZyb20gJy4uL3Byb2dyZXNzQmFyJztcclxuaW1wb3J0IHsgRGlyZWN0aW9uLCBHcmlkSW5mbywgUG9zaXRpb25MaXN0LCBSZXNpemVUeXBlIH0gZnJvbSAnLi4vdHlwZXMnO1xyXG5pbXBvcnQgQmxvY2sgZnJvbSAnLi4vYmxvY2snO1xyXG5pbXBvcnQgeyBjaGVja0NsaWNrLCBjaG9vc2VDb2xvciwgZ2V0UmFuZG9tVmFsdWUgfSBmcm9tICcuLi91dGlscyc7XHJcbmltcG9ydCB7IFJlc3VsdCB9IGZyb20gJy4vZW5kV29ybGQnO1xyXG5pbXBvcnQgQm9udXMgZnJvbSAnLi4vZ2FtZU9iamVjdHMvQm9udXMnO1xyXG5pbXBvcnQgeyBURUxFUE9SVF9DT1NUIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcclxuXHJcbmVudW0gU3RhZ2Uge1xyXG5cdFNlbGVjdGluZyxcclxuXHRTaGFkaW5nLFxyXG5cdERlbGV0aW5nLFxyXG5cdE1vdmluZyxcclxuXHRSZWNvdmVyeSxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVdvcmxkIGV4dGVuZHMgV29ybGQge1xyXG5cdHByaXZhdGUgaXNMYXN0TW92ZSA9IGZhbHNlO1xyXG5cclxuXHRwcml2YXRlIF9zY29yZTogU2NvcmU7XHJcblxyXG5cdHByaXZhdGUgX2dyaWQ6IEdyaWQ7XHJcblxyXG5cdHByaXZhdGUgX3Byb2dyZXNzQmFyOiBQcm9ncmVzc0JhcjtcclxuXHJcblx0cHJpdmF0ZSBfYm9udXM6IEJvbnVzO1xyXG5cclxuXHRwcml2YXRlIF9zdGFnZTogU3RhZ2U7XHJcblxyXG5cdHByaXZhdGUgX3RlbXBMaXN0OiBQb3NpdGlvbkxpc3QgPSBbXTtcclxuXHJcblx0cHJpdmF0ZSBfbGlzdDogUG9zaXRpb25MaXN0ID0gW107XHJcblxyXG5cdHByaXZhdGUgX2VtaXRFRnVuYzogKGVOYW1lOiBzdHJpbmcsIGFyZzogYW55KSA9PiB2b2lkO1xyXG5cclxuXHRwcml2YXRlIF9tb25leSA9IDA7XHJcblxyXG5cdGNvbnN0cnVjdG9yKGdyaWRJbmZvOiBHcmlkSW5mbywgeDogbnVtYmVyLCB5OiBudW1iZXIsIG1vbmV5OiBudW1iZXIsIGVtaXRFRnVuYzogKGVOYW1lOiBzdHJpbmcsIGFyZzogYW55KSA9PiB2b2lkKSB7XHJcblx0XHRzdXBlcigpO1xyXG5cdFx0dGhpcy5fZ3JpZCA9IG5ldyBHcmlkKGdyaWRJbmZvLCBlbWl0RUZ1bmMpO1xyXG5cdFx0dGhpcy5fcHJvZ3Jlc3NCYXIgPSBuZXcgUHJvZ3Jlc3NCYXIoKTtcclxuXHRcdHRoaXMuX2JvbnVzID0gbmV3IEJvbnVzKCk7XHJcblx0XHR0aGlzLl9zY29yZSA9IG5ldyBTY29yZSh4LCB5KTtcclxuXHRcdHRoaXMuX3N0YWdlID0gU3RhZ2UuU2VsZWN0aW5nO1xyXG5cdFx0dGhpcy5fbW9uZXkgPSBtb25leTtcclxuXHRcdHRoaXMuX2VtaXRFRnVuYyA9IGVtaXRFRnVuYztcclxuXHR9XHJcblxyXG5cdHVwZGF0ZSh1c2VySW5wdXQ6IElucHV0KTogdm9pZCB7XHJcblx0XHRzd2l0Y2ggKHRoaXMuX3N0YWdlKSB7XHJcblx0XHRcdGNhc2UgU3RhZ2UuU2VsZWN0aW5nOlxyXG5cdFx0XHRcdHRoaXMuaGFuZGxlU2VsZWN0KHVzZXJJbnB1dCk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgU3RhZ2UuU2hhZGluZzpcclxuXHRcdFx0XHR0aGlzLmhhbmRsZVNoYWRpbmcoKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSBTdGFnZS5EZWxldGluZzpcclxuXHRcdFx0XHR0aGlzLmhhbmRsZURlbGV0aW5nKCk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgU3RhZ2UuTW92aW5nOlxyXG5cdFx0XHRcdHRoaXMuaGFuZGxlTW92aW5nKCk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgU3RhZ2UuUmVjb3Zlcnk6XHJcblx0XHRcdFx0dGhpcy5oYW5kbGVSZWNvdmVyeSgpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcignVW5rbm93biBzdGFnZScpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBoYW5kbGVTZWxlY3QodXNlcklucHV0OiBJbnB1dCkge1xyXG5cdFx0Y29uc3QgeyB4OiB1WCwgeTogdVkgfSA9IHVzZXJJbnB1dDtcclxuXHRcdGlmICh1WCAhPT0gMCAmJiB1WSAhPT0gMCkge1xyXG5cdFx0XHR0aGlzLmhhbmRsZVNlbGVjdEdyaWQodXNlcklucHV0KTtcclxuXHRcdFx0dGhpcy5oYW5kbGVTZWxlY3RCb251cyh1c2VySW5wdXQpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBoYW5kbGVTZWxlY3RHcmlkKHVzZXJJbnB1dDogSW5wdXQpIHtcclxuXHRcdGNvbnN0IHsgeDogdVgsIHk6IHVZIH0gPSB1c2VySW5wdXQ7XHJcblx0XHRjb25zdCB7IHgsIHksIG4sIG0sIHdpZHRoLCBoZWlnaHQgfSA9IHRoaXMuX2dyaWQ7XHJcblx0XHRpZiAodVkgPiB5ICYmIHVZIDwgeSArIGhlaWdodCAmJiB1WCA8IHggJiYgdVggPiB4IC0gd2lkdGgpIHtcclxuXHRcdFx0Y29uc3Qgcm93ID0gTWF0aC5mbG9vcigodVkgLSB5KSAvIChoZWlnaHQgLyBuKSk7XHJcblx0XHRcdGNvbnN0IGNvbCA9IE1hdGguZmxvb3IoKHVYIC0gKHggLSB3aWR0aCkpIC8gKHdpZHRoIC8gbSkpO1xyXG5cdFx0XHRjb25zdCBsYXlvdXQgPSB0aGlzLl9ncmlkLmJsb2NrTGF5b3V0O1xyXG5cdFx0XHRsYXlvdXRbcm93XVtjb2xdLnRvZ2dsZVNlbGVjdCgpO1xyXG5cdFx0XHR0aGlzLl90ZW1wTGlzdC5wdXNoKFtyb3csIGNvbF0pO1xyXG5cdFx0XHR0aGlzLl9saXN0LnB1c2goW3JvdywgY29sXSk7XHJcblx0XHRcdGlmICh0aGlzLl9ib251cy5zZWxlY3RlZCkge1xyXG5cdFx0XHRcdGlmICh0aGlzLl9saXN0Lmxlbmd0aCA9PT0gMikge1xyXG5cdFx0XHRcdFx0aWYgKHRoaXMuX2xpc3RbMF1bMF0gPT09IHRoaXMuX2xpc3RbMV1bMF0gJiYgdGhpcy5fbGlzdFswXVsxXSA9PT0gdGhpcy5fbGlzdFsxXVsxXSkge1xyXG5cdFx0XHRcdFx0XHRpZihsYXlvdXRbdGhpcy5fbGlzdFswXVswXV1bdGhpcy5fbGlzdFswXVsxXV0uaXNTZWxlY3RlZCgpKSBsYXlvdXRbdGhpcy5fbGlzdFswXVswXV1bdGhpcy5fbGlzdFswXVsxXV0udG9nZ2xlU2VsZWN0KCk7XHJcblx0XHRcdFx0XHRcdHRoaXMuX2xpc3QgPSBbXTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHRoaXMuX3N0YWdlICs9IDI7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGVsc2UgdGhpcy5fc3RhZ2UgKz0gMTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHByaXZhdGUgaGFuZGxlU2VsZWN0Qm9udXModXNlcklucHV0OiBJbnB1dCkge1xyXG5cdFx0Y29uc3QgeyB4OiB1WCwgeTogdVkgfSA9IHVzZXJJbnB1dDtcclxuXHRcdGNvbnN0IHsgeCwgeSwgd2lkdGgsIGhlaWdodCB9ID0gdGhpcy5fYm9udXM7XHJcblx0XHRpZiAoY2hlY2tDbGljayh1WCwgdVksIHgsIHksIGhlaWdodCwgd2lkdGgpKSB7XHJcblx0XHRcdGlmICh0aGlzLl9tb25leSA+PSBURUxFUE9SVF9DT1NUICYmICF0aGlzLmJvbnVzLnNlbGVjdGVkKSB7XHJcblx0XHRcdFx0dGhpcy5ib251cy50b2dnbGVTZWxlY3QoKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBoYW5kbGVTaGFkaW5nKCkge1xyXG5cdFx0aWYgKHRoaXMuX3RlbXBMaXN0Lmxlbmd0aCA9PT0gMCkge1xyXG5cdFx0XHRpZiAodGhpcy5fbGlzdC5sZW5ndGggPT09IDEpIHtcclxuXHRcdFx0XHR0aGlzLl9ncmlkLmJsb2NrTGF5b3V0W3RoaXMuX2xpc3RbMF1bMF1dW3RoaXMuX2xpc3RbMF1bMV1dLnRvZ2dsZVNlbGVjdCgpO1xyXG5cdFx0XHRcdHRoaXMuX3N0YWdlIC09IDE7XHJcblx0XHRcdFx0dGhpcy5fbGlzdCA9IFtdO1xyXG5cdFx0XHRcdHRoaXMuX3RlbXBMaXN0ID0gW107XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dGhpcy5fc2NvcmUuZGVjcmVhc2VNb3Zlc051bSgpO1xyXG5cdFx0XHRcdGNvbnN0IHsgcG9pbnRzLCB0YXJnZXRQb2ludHMsIG1vdmVzLCB0YXJnZXRNb3ZlcyB9ID0gdGhpcy5fc2NvcmU7XHJcblx0XHRcdFx0aWYgKG1vdmVzIDw9IHRhcmdldE1vdmVzICYmIHBvaW50cyA8IHRhcmdldFBvaW50cykgdGhpcy5pc0xhc3RNb3ZlID0gdHJ1ZTtcclxuXHRcdFx0XHR0aGlzLl90ZW1wTGlzdCA9IHRoaXMuX2xpc3Q7XHJcblx0XHRcdFx0dGhpcy5fc3RhZ2UgKz0gMTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHRsZXQgcG9zaXRpb25MaXN0OiBQb3NpdGlvbkxpc3QgPSBbXTtcclxuXHRcdGNvbnN0IHsgbiwgbSB9ID0gdGhpcy5ncmlkO1xyXG5cdFx0dGhpcy5fdGVtcExpc3QuZm9yRWFjaCgoW3JvdywgY29sXSkgPT4ge1xyXG5cdFx0XHRwb3NpdGlvbkxpc3QgPSBbLi4ucG9zaXRpb25MaXN0LCAuLi5HYW1lV29ybGQuc2VsZWN0TmVpZ2hib3JzKHJvdywgY29sLCB0aGlzLl9ncmlkLmJsb2NrTGF5b3V0LCBuLCBtKV07XHJcblx0XHR9KTtcclxuXHRcdHRoaXMuX2xpc3QgPSBbLi4udGhpcy5fbGlzdCwgLi4ucG9zaXRpb25MaXN0XTtcclxuXHRcdHRoaXMuX3RlbXBMaXN0ID0gcG9zaXRpb25MaXN0O1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBzdGF0aWMgc2VsZWN0TmVpZ2hib3JzKHJvdzogbnVtYmVyLCBjb2w6IG51bWJlciwgZGVzazogQmxvY2tbXVtdLCBncmlkTjogbnVtYmVyLCBncmlkTTogbnVtYmVyKTogUG9zaXRpb25MaXN0IHtcclxuXHRcdGNvbnN0IHRlbXBMaXN0OiBQb3NpdGlvbkxpc3QgPSBbXTtcclxuXHRcdE9iamVjdC52YWx1ZXMoRGlyZWN0aW9uKS5mb3JFYWNoKGRpcmVjdGlvbiA9PiB7XHJcblx0XHRcdGNvbnN0IGRlc2tQb3NpdGlvbkl0ZW0gPSBHYW1lV29ybGQuZmluZE5laWdoYm9yKGRpcmVjdGlvbiwgcm93LCBjb2wsIGRlc2ssIGdyaWROLCBncmlkTSwgdHJ1ZSk7XHJcblx0XHRcdGlmICh0eXBlb2YgZGVza1Bvc2l0aW9uSXRlbVswXSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuXHRcdFx0XHR0ZW1wTGlzdC5wdXNoKGRlc2tQb3NpdGlvbkl0ZW0gYXMgW251bWJlciwgbnVtYmVyXSk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0cmV0dXJuIHRlbXBMaXN0O1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBzdGF0aWMgZmluZE5laWdoYm9yKGRpcmVjdGlvbjogRGlyZWN0aW9uIHwgc3RyaW5nLCByb3c6IG51bWJlciwgY29sOiBudW1iZXIsIGxheW91dDogQmxvY2tbXVtdLCBncmlkTjogbnVtYmVyLCBncmlkTTogbnVtYmVyLCBzZWxlY3QgPSBmYWxzZSk6IFtudW1iZXIsIG51bWJlcl0gfCBbdW5kZWZpbmVkLCB1bmRlZmluZWRdIHtcclxuXHRcdGNvbnN0IHsgVXAsIFJpZ2h0LCBMZWZ0LCBEb3duIH0gPSBEaXJlY3Rpb247XHJcblx0XHRzd2l0Y2ggKGRpcmVjdGlvbikge1xyXG5cdFx0XHRjYXNlIFVwOlxyXG5cdFx0XHRcdHJldHVybiBHYW1lV29ybGQuY2hlY2tVcChsYXlvdXQsIHJvdywgY29sLCBzZWxlY3QpO1xyXG5cdFx0XHRjYXNlIFJpZ2h0OlxyXG5cdFx0XHRcdHJldHVybiBHYW1lV29ybGQuY2hlY2tSaWdodChsYXlvdXQsIHJvdywgY29sLCBzZWxlY3QsIGdyaWRNKTtcclxuXHRcdFx0Y2FzZSBMZWZ0OlxyXG5cdFx0XHRcdHJldHVybiBHYW1lV29ybGQuY2hlY2tMZWZ0KGxheW91dCwgcm93LCBjb2wsIHNlbGVjdCk7XHJcblx0XHRcdGNhc2UgRG93bjpcclxuXHRcdFx0XHRyZXR1cm4gR2FtZVdvcmxkLmNoZWNrRG93bihsYXlvdXQsIHJvdywgY29sLCBzZWxlY3QsIGdyaWROKTtcclxuXHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHRyZXR1cm4gW3VuZGVmaW5lZCwgdW5kZWZpbmVkXTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHByaXZhdGUgc3RhdGljIGNoZWNrVXAobGF5b3V0OiBCbG9ja1tdW10sIHJvdzogbnVtYmVyLCBjb2w6IG51bWJlciwgc2VsZWN0OiBib29sZWFuKTogW251bWJlciwgbnVtYmVyXSB8IFt1bmRlZmluZWQsIHVuZGVmaW5lZF0ge1xyXG5cdFx0aWYgKHJvdyAhPT0gMCAmJiBsYXlvdXRbcm93XVtjb2xdLmNvbG9yID09PSBsYXlvdXRbcm93IC0gMV1bY29sXS5jb2xvciAmJiAhbGF5b3V0W3JvdyAtIDFdW2NvbF0uaXNTZWxlY3RlZCgpKSB7XHJcblx0XHRcdGlmIChzZWxlY3QpIGxheW91dFtyb3cgLSAxXVtjb2xdLnRvZ2dsZVNlbGVjdCgpO1xyXG5cdFx0XHRyZXR1cm4gW3JvdyAtIDEsIGNvbF07XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gW3VuZGVmaW5lZCwgdW5kZWZpbmVkXTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgc3RhdGljIGNoZWNrUmlnaHQobGF5b3V0OiBCbG9ja1tdW10sIHJvdzogbnVtYmVyLCBjb2w6IG51bWJlciwgc2VsZWN0OiBib29sZWFuLCBtOiBudW1iZXIpOiBbbnVtYmVyLCBudW1iZXJdIHwgW3VuZGVmaW5lZCwgdW5kZWZpbmVkXSB7XHJcblx0XHRpZiAoY29sICE9PSBtIC0gMSAmJiBsYXlvdXRbcm93XVtjb2xdLmNvbG9yID09PSBsYXlvdXRbcm93XVtjb2wgKyAxXS5jb2xvciAmJiAhbGF5b3V0W3Jvd11bY29sICsgMV0uaXNTZWxlY3RlZCgpKSB7XHJcblx0XHRcdGlmIChzZWxlY3QpIGxheW91dFtyb3ddW2NvbCArIDFdLnRvZ2dsZVNlbGVjdCgpO1xyXG5cdFx0XHRyZXR1cm4gW3JvdywgY29sICsgMV07XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gW3VuZGVmaW5lZCwgdW5kZWZpbmVkXTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgc3RhdGljIGNoZWNrTGVmdChsYXlvdXQ6IEJsb2NrW11bXSwgcm93OiBudW1iZXIsIGNvbDogbnVtYmVyLCBzZWxlY3Q6IGJvb2xlYW4pOiBbbnVtYmVyLCBudW1iZXJdIHwgW3VuZGVmaW5lZCwgdW5kZWZpbmVkXSB7XHJcblx0XHRpZiAoY29sICE9PSAwICYmIGxheW91dFtyb3ddW2NvbF0uY29sb3IgPT09IGxheW91dFtyb3ddW2NvbCAtIDFdLmNvbG9yICYmICFsYXlvdXRbcm93XVtjb2wgLSAxXS5pc1NlbGVjdGVkKCkpIHtcclxuXHRcdFx0aWYgKHNlbGVjdCkgbGF5b3V0W3Jvd11bY29sIC0gMV0udG9nZ2xlU2VsZWN0KCk7XHJcblx0XHRcdHJldHVybiBbcm93LCBjb2wgLSAxXTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBbdW5kZWZpbmVkLCB1bmRlZmluZWRdO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBzdGF0aWMgY2hlY2tEb3duKGxheW91dDogQmxvY2tbXVtdLCByb3c6IG51bWJlciwgY29sOiBudW1iZXIsIHNlbGVjdDogYm9vbGVhbiwgbjogbnVtYmVyKTogW251bWJlciwgbnVtYmVyXSB8IFt1bmRlZmluZWQsIHVuZGVmaW5lZF0ge1xyXG5cdFx0aWYgKHJvdyAhPT0gbiAtIDEgJiYgbGF5b3V0W3Jvd11bY29sXS5jb2xvciA9PT0gbGF5b3V0W3JvdyArIDFdW2NvbF0uY29sb3IgJiYgIWxheW91dFtyb3cgKyAxXVtjb2xdLmlzU2VsZWN0ZWQoKSkge1xyXG5cdFx0XHRpZiAoc2VsZWN0KSBsYXlvdXRbcm93ICsgMV1bY29sXS50b2dnbGVTZWxlY3QoKTtcclxuXHRcdFx0cmV0dXJuIFtyb3cgKyAxLCBjb2xdO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIFt1bmRlZmluZWQsIHVuZGVmaW5lZF07XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGhhbmRsZURlbGV0aW5nKCkge1xyXG5cdFx0aWYgKHRoaXMuX3RlbXBMaXN0Lmxlbmd0aCA9PT0gMCkge1xyXG5cdFx0XHRpZiAodGhpcy5ib251cy5zZWxlY3RlZCkgdGhpcy5fc3RhZ2UgKz0gMjtcclxuXHRcdFx0ZWxzZSB0aGlzLl9zdGFnZSArPSAxO1xyXG5cdFx0XHR0aGlzLl90ZW1wTGlzdCA9IFtdO1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHRjb25zdCBbcm93LCBjb2xdID0gdGhpcy5fdGVtcExpc3RbMF07XHJcblx0XHRjb25zdCBkZXNrID0gdGhpcy5fZ3JpZC5ibG9ja0xheW91dDtcclxuXHRcdGlmIChkZXNrW3Jvd11bY29sXS5oZWlnaHQgPT09IDAgJiYgZGVza1tyb3ddW2NvbF0ud2lkdGggPT09IDApIHtcclxuXHRcdFx0aWYgKCF0aGlzLmJvbnVzLnNlbGVjdGVkKSB7XHJcblx0XHRcdFx0dGhpcy5fc2NvcmUuaW5jcmVhc2VQb2ludHMoKTtcclxuXHRcdFx0XHR0aGlzLl9wcm9ncmVzc0Jhci5tb3ZlKCk7XHJcblx0XHRcdH1cclxuXHRcdFx0Y29uc3QgeyBwb2ludHMsIHRhcmdldFBvaW50cyB9ID0gdGhpcy5fc2NvcmU7XHJcblx0XHRcdGlmIChwb2ludHMgPj0gdGFyZ2V0UG9pbnRzKSB0aGlzLl9lbWl0RUZ1bmMoJ2VuZEdhbWUnLCBSZXN1bHQuV2luKTtcclxuXHRcdFx0aWYgKHRoaXMuaXNMYXN0TW92ZSkgdGhpcy5fZW1pdEVGdW5jKCdlbmRHYW1lJywgUmVzdWx0Lkxvc3QpO1xyXG5cdFx0XHR0aGlzLl90ZW1wTGlzdCA9IHRoaXMuX3RlbXBMaXN0LnNsaWNlKDEpO1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHRkZXNrW3Jvd11bY29sXS5yZXNpemUoUmVzaXplVHlwZS5TaHJpbmspO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBoYW5kbGVNb3ZpbmcoKSB7XHJcblx0XHRpZiAodGhpcy5fdGVtcExpc3QubGVuZ3RoID49IHRoaXMuX2xpc3QubGVuZ3RoKSB7XHJcblx0XHRcdHRoaXMuX3N0YWdlICs9IDE7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdGNvbnN0IGRlc2sgPSB0aGlzLl9ncmlkLmJsb2NrTGF5b3V0O1xyXG5cdFx0Zm9yIChsZXQgY29sID0gMDsgY29sIDwgdGhpcy5fZ3JpZC5tOyBjb2wgKz0gMSkge1xyXG5cdFx0XHRjb25zdCByb3dzID0gdGhpcy5fbGlzdFxyXG5cdFx0XHRcdC5maWx0ZXIoKFtyLCBjXSkgPT4gYyA9PT0gY29sKVxyXG5cdFx0XHRcdC5tYXAoKFtyb3ddKSA9PiB7XHJcblx0XHRcdFx0XHRyZXR1cm4gcm93O1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0LnNvcnQoKTtcclxuXHRcdFx0Y29uc3QgdmVsb2NpdHkgPSAxO1xyXG5cdFx0XHRpZiAocm93cy5sZW5ndGggPT09IDEgJiYgcm93c1swXSA9PT0gMCkge1xyXG5cdFx0XHRcdHRoaXMuX3RlbXBMaXN0LnB1c2goW3Jvd3NbMF0sIGNvbF0pO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHJcblx0XHRcdGZvciAobGV0IGsgPSByb3dzLmxlbmd0aCAtIDE7IGsgPj0gMDsgayAtPSAxKSB7XHJcblx0XHRcdFx0aWYgKHJvd3Nba10gLSAxIDwgMCkgYnJlYWs7XHJcblx0XHRcdFx0aWYgKGRlc2tbcm93c1trXSAtIDFdW2NvbF0ueSA+PSBkZXNrW3Jvd3Nba11dW2NvbF0ueSkge1xyXG5cdFx0XHRcdFx0dGhpcy5fdGVtcExpc3QucHVzaChbcm93c1trXSwgY29sXSk7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Zm9yIChsZXQgaSA9IHJvd3Nba10gLSAxOyBpID49IDA7IGkgLT0gMSkge1xyXG5cdFx0XHRcdFx0ZGVza1tpXVtjb2xdLm1vdmUoRGlyZWN0aW9uLkRvd24sIHZlbG9jaXR5KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHByaXZhdGUgaGFuZGxlUmVjb3ZlcnkoKSB7XHJcblx0XHRpZiAodGhpcy5ib251cy5zZWxlY3RlZCkge1xyXG5cdFx0XHRsZXQgdGVtcCA9ICcnO1xyXG5cdFx0XHRjb25zdCBibG9jazEgPSB0aGlzLl9ncmlkLmJsb2NrTGF5b3V0W3RoaXMuX2xpc3RbMF1bMF1dW3RoaXMuX2xpc3RbMF1bMV1dO1xyXG5cdFx0XHRjb25zdCBibG9jazIgPSB0aGlzLl9ncmlkLmJsb2NrTGF5b3V0W3RoaXMuX2xpc3RbMV1bMF1dW3RoaXMuX2xpc3RbMV1bMV1dO1xyXG5cdFx0XHR0ZW1wID0gYmxvY2sxLmNvbG9yO1xyXG5cdFx0XHRibG9jazEuY29sb3IgPSBibG9jazIuY29sb3I7XHJcblx0XHRcdGJsb2NrMi5jb2xvciA9IHRlbXA7XHJcblx0XHRcdGJsb2NrMS50b2dnbGVTZWxlY3QoKTtcclxuXHRcdFx0YmxvY2syLnRvZ2dsZVNlbGVjdCgpO1xyXG5cdFx0XHRibG9jazEuc2l6ZSA9IHRoaXMuZ3JpZC5pdGVtU2l6ZTtcclxuXHRcdFx0YmxvY2syLnNpemUgPSB0aGlzLmdyaWQuaXRlbVNpemU7XHJcblx0XHRcdHRoaXMuYm9udXMudG9nZ2xlU2VsZWN0KCk7XHJcblx0XHRcdHRoaXMuX21vbmV5IC09IFRFTEVQT1JUX0NPU1Q7XHJcblx0XHRcdHRoaXMuX2xpc3QgPSBbXTtcclxuXHRcdFx0dGhpcy5fdGVtcExpc3QgPSBbXTtcclxuXHRcdFx0dGhpcy5fc3RhZ2UgPSBTdGFnZS5TZWxlY3Rpbmc7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdGNvbnN0IHsgYmxvY2tMYXlvdXQ6IGxheW91dCwgbiwgbSB9ID0gdGhpcy5fZ3JpZDtcclxuXHRcdGZvciAobGV0IGkgPSBuIC0gMTsgaSA+PSAwOyBpIC09IDEpIHtcclxuXHRcdFx0Zm9yIChsZXQgaiA9IG0gLSAxOyBqID49IDA7IGogLT0gMSkge1xyXG5cdFx0XHRcdGlmIChsYXlvdXRbaV1bal0ueSAhPT0gbGF5b3V0W2ldW2pdLm9sZFkgfHwgbGF5b3V0W2ldW2pdLmlzU2VsZWN0ZWQoKSkge1xyXG5cdFx0XHRcdFx0bGV0IG5ld1JvdyA9IC0xMDAwO1xyXG5cdFx0XHRcdFx0aWYgKGxheW91dFtpXVtqXS5pc1NlbGVjdGVkKCkpIHtcclxuXHRcdFx0XHRcdFx0bGF5b3V0W2ldW2pdLnRvZ2dsZVNlbGVjdCgpO1xyXG5cdFx0XHRcdFx0XHRmb3IgKGxldCByID0gaSAtIDE7IHIgPj0gMDsgciAtPSAxKSB7XHJcblx0XHRcdFx0XHRcdFx0aWYgKGxheW91dFtpXVtqXS5vbGRZIC0gbGF5b3V0W3JdW2pdLnkgPCBsYXlvdXRbaV1bal0uaGVpZ2h0ICYmIGxheW91dFtyXVtqXS53aWR0aCAhPT0gMCAmJiAhbGF5b3V0W3JdW2pdLmlzU2VsZWN0ZWQoKSAmJiAhbGF5b3V0W3JdW2pdLmlzT2NjdXBpZWQoKSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0bGF5b3V0W3JdW2pdLm9jY3VwaWVkID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0XHRcdG5ld1JvdyA9IHI7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRuZXdSb3cgPSBpIC0gTWF0aC5mbG9vcigobGF5b3V0W2ldW2pdLnkgLSBsYXlvdXRbaV1bal0ub2xkWSkgLyB0aGlzLmdyaWQuaXRlbUhlaWdodCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRpZiAobmV3Um93ID49IDApIHtcclxuXHRcdFx0XHRcdFx0bGF5b3V0W2ldW2pdLmNvbG9yID0gbGF5b3V0W25ld1Jvd11bal0ub2xkQ29sb3I7XHJcblx0XHRcdFx0XHRcdGxheW91dFtpXVtqXS5vbGRDb2xvciA9IGxheW91dFtuZXdSb3ddW2pdLm9sZENvbG9yO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0Y29uc3QgcmFuZG9tQ29sb3IgPSBjaG9vc2VDb2xvcihnZXRSYW5kb21WYWx1ZSh0aGlzLl9ncmlkLmdyaWRJbmZvLmJsb2NrQ29sb3JzKSk7XHJcblx0XHRcdFx0XHRcdGxheW91dFtpXVtqXS5jb2xvciA9IHJhbmRvbUNvbG9yO1xyXG5cdFx0XHRcdFx0XHRsYXlvdXRbaV1bal0ub2xkQ29sb3IgPSByYW5kb21Db2xvcjtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGxheW91dFtpXVtqXS5zaXplID0gdGhpcy5ncmlkLml0ZW1TaXplO1xyXG5cdFx0XHRcdFx0bGF5b3V0W2ldW2pdLnBvc2l0aW9uID0geyB4OiBsYXlvdXRbaV1bal0ueCwgeTogbGF5b3V0W2ldW2pdLm9sZFkgfTtcclxuXHRcdFx0XHRcdGlmIChsYXlvdXRbaV1bal0uaXNPY2N1cGllZCgpKSBsYXlvdXRbaV1bal0ub2NjdXBpZWQgPSBmYWxzZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHRoaXMuX2dyaWQuYmxvY2tMYXlvdXQgPSBsYXlvdXQ7XHJcblx0XHR0aGlzLl9saXN0ID0gW107XHJcblx0XHR0aGlzLl90ZW1wTGlzdCA9IFtdO1xyXG5cdFx0dGhpcy5fc3RhZ2UgPSBTdGFnZS5TZWxlY3Rpbmc7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZ2V0IGdyaWQoKTogR3JpZCB7XHJcblx0XHRyZXR1cm4gdGhpcy5fZ3JpZDtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzZXQgZ3JpZChncmlkOiBHcmlkKSB7XHJcblx0XHR0aGlzLl9ncmlkID0gZ3JpZDtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBnZXQgc2NvcmUoKTogU2NvcmUge1xyXG5cdFx0cmV0dXJuIHRoaXMuX3Njb3JlO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHNldCBzY29yZShzY29yZTogU2NvcmUpIHtcclxuXHRcdHRoaXMuX3Njb3JlID0gc2NvcmU7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZ2V0IHByb2dyZXNzQmFyKCk6IFByb2dyZXNzQmFyIHtcclxuXHRcdHJldHVybiB0aGlzLl9wcm9ncmVzc0JhcjtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzZXQgcHJvZ3Jlc3NCYXIocHJCYXI6IFByb2dyZXNzQmFyKSB7XHJcblx0XHR0aGlzLl9wcm9ncmVzc0JhciA9IHByQmFyO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGdldCBib251cygpOiBCb251cyB7XHJcblx0XHRyZXR1cm4gdGhpcy5fYm9udXM7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZ2V0IG1vbmV5KCk6IG51bWJlciB7XHJcblx0XHRyZXR1cm4gdGhpcy5fbW9uZXk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCBJbnB1dCBmcm9tICcuLi9pbnB1dCc7XHJcblxyXG5pbnRlcmZhY2UgSVdvcmxkIHtcclxuXHR1cGRhdGU6ICh1c2VySW5wdXQ6IElucHV0KSA9PiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBXb3JsZCBpbXBsZW1lbnRzIElXb3JsZCB7XHJcblx0YWJzdHJhY3QgdXBkYXRlKHVzZXJJbnB1dDogSW5wdXQpOiB2b2lkO1xyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCAnLi9zdHlsZXMvc3R5bGUuc2Nzcyc7XHJcbmltcG9ydCBHYW1lIGZyb20gJy4vdHMvZ2FtZSc7XHJcblxyXG5jb25zdCBjYW52YXMgPSA8SFRNTENhbnZhc0VsZW1lbnQ+ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignY2FudmFzJyk7XHJcbmNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG5jYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xyXG5cclxuY29uc3QgbiA9IDc7XHJcbmNvbnN0IG0gPSA3O1xyXG5jb25zdCBjID0gNTsgLy8gY29sb3JzXHJcbmNvbnN0IGsgPSAyO1xyXG5jb25zdCBzID0gMzsgLy8gbWl4XHJcbmNvbnN0IHggPSAxMTA7IC8vIHRhcmdldCBwb2ludHNcclxuY29uc3QgeSA9IDIwOyAvLyBtb3Zlc1xyXG5cclxuY29uc3QgZ2FtZSA9IG5ldyBHYW1lKGNhbnZhcyk7XHJcblxyXG5nYW1lLmluaXQobiwgbSwgYywgaywgcywgeCwgeSkudGhlbigoKSA9PiBnYW1lLnN0YXJ0KCkpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=