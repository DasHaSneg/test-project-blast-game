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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUM7QUFDWixJQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDWixJQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxTQUFTO0FBQ3RCLElBQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNaLElBQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU07QUFDbkIsSUFBTSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsZ0JBQWdCO0FBQy9CLElBQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLFFBQVE7QUFFdEIsSUFBTSxJQUFJLEdBQUcsSUFBSSxnREFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBRTlCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQU0sV0FBSSxDQUFDLEtBQUssRUFBRSxFQUFaLENBQVksQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVzdC1wcm9qZWN0LWJsYXN0LWdhbWUvLi9zcmMvc3R5bGVzL3N0eWxlLnNjc3M/YTViNCIsIndlYnBhY2s6Ly90ZXN0LXByb2plY3QtYmxhc3QtZ2FtZS8uL3NyYy90cy9JbWFnZVJlcG9zaXRvcnkudHMiLCJ3ZWJwYWNrOi8vdGVzdC1wcm9qZWN0LWJsYXN0LWdhbWUvLi9zcmMvdHMvYXNzZXRzLnRzIiwid2VicGFjazovL3Rlc3QtcHJvamVjdC1ibGFzdC1nYW1lLy4vc3JjL3RzL2Jsb2NrLnRzIiwid2VicGFjazovL3Rlc3QtcHJvamVjdC1ibGFzdC1nYW1lLy4vc3JjL3RzL2NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly90ZXN0LXByb2plY3QtYmxhc3QtZ2FtZS8uL3NyYy90cy9ldmVudC50cyIsIndlYnBhY2s6Ly90ZXN0LXByb2plY3QtYmxhc3QtZ2FtZS8uL3NyYy90cy9nYW1lLnRzIiwid2VicGFjazovL3Rlc3QtcHJvamVjdC1ibGFzdC1nYW1lLy4vc3JjL3RzL2dhbWVPYmplY3RzL0JvbnVzLnRzIiwid2VicGFjazovL3Rlc3QtcHJvamVjdC1ibGFzdC1nYW1lLy4vc3JjL3RzL2dhbWVPYmplY3RzL2J1dHRvbi50cyIsIndlYnBhY2s6Ly90ZXN0LXByb2plY3QtYmxhc3QtZ2FtZS8uL3NyYy90cy9nYW1lT2JqZWN0cy9nYW1lT2JqZWN0LnRzIiwid2VicGFjazovL3Rlc3QtcHJvamVjdC1ibGFzdC1nYW1lLy4vc3JjL3RzL2dhbWVPYmplY3RzL2dyaWQudHMiLCJ3ZWJwYWNrOi8vdGVzdC1wcm9qZWN0LWJsYXN0LWdhbWUvLi9zcmMvdHMvaW5wdXQudHMiLCJ3ZWJwYWNrOi8vdGVzdC1wcm9qZWN0LWJsYXN0LWdhbWUvLi9zcmMvdHMvcHJvZ3Jlc3NCYXIudHMiLCJ3ZWJwYWNrOi8vdGVzdC1wcm9qZWN0LWJsYXN0LWdhbWUvLi9zcmMvdHMvc2NlbmUudHMiLCJ3ZWJwYWNrOi8vdGVzdC1wcm9qZWN0LWJsYXN0LWdhbWUvLi9zcmMvdHMvc2NvcmUudHMiLCJ3ZWJwYWNrOi8vdGVzdC1wcm9qZWN0LWJsYXN0LWdhbWUvLi9zcmMvdHMvdHlwZXMudHMiLCJ3ZWJwYWNrOi8vdGVzdC1wcm9qZWN0LWJsYXN0LWdhbWUvLi9zcmMvdHMvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vdGVzdC1wcm9qZWN0LWJsYXN0LWdhbWUvLi9zcmMvdHMvdmlld3MvZW5kVmlldy50cyIsIndlYnBhY2s6Ly90ZXN0LXByb2plY3QtYmxhc3QtZ2FtZS8uL3NyYy90cy92aWV3cy9nYW1lVmlldy50cyIsIndlYnBhY2s6Ly90ZXN0LXByb2plY3QtYmxhc3QtZ2FtZS8uL3NyYy90cy92aWV3cy92aWV3LnRzIiwid2VicGFjazovL3Rlc3QtcHJvamVjdC1ibGFzdC1nYW1lLy4vc3JjL3RzL3dvcmxkcy9lbmRXb3JsZC50cyIsIndlYnBhY2s6Ly90ZXN0LXByb2plY3QtYmxhc3QtZ2FtZS8uL3NyYy90cy93b3JsZHMvZ2FtZVdvcmxkLnRzIiwid2VicGFjazovL3Rlc3QtcHJvamVjdC1ibGFzdC1nYW1lLy4vc3JjL3RzL3dvcmxkcy93b3JsZC50cyIsIndlYnBhY2s6Ly90ZXN0LXByb2plY3QtYmxhc3QtZ2FtZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90ZXN0LXByb2plY3QtYmxhc3QtZ2FtZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdGVzdC1wcm9qZWN0LWJsYXN0LWdhbWUvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90ZXN0LXByb2plY3QtYmxhc3QtZ2FtZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Rlc3QtcHJvamVjdC1ibGFzdC1nYW1lL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdGVzdC1wcm9qZWN0LWJsYXN0LWdhbWUvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdGVzdC1wcm9qZWN0LWJsYXN0LWdhbWUvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiaW1wb3J0IGFzc2V0cyBmcm9tICcuL2Fzc2V0cyc7XHJcbmltcG9ydCB7IEFzc2V0cywgR2FtZUltYWdlcyB9IGZyb20gJy4vdHlwZXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW1hZ2VSZXBvc2l0b3J5IHtcclxuXHRwcml2YXRlIGltYWdlczogQXNzZXRzO1xyXG5cclxuXHRjb25zdHJ1Y3Rvcihhc3NldHM6IEFzc2V0cykge1xyXG5cdFx0dGhpcy5pbWFnZXMgPSBhc3NldHM7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgYXN5bmMgbG9hZEltYWdlcygpIHtcclxuXHRcdGNvbnN0IGltYWdlczogR2FtZUltYWdlcyA9IHt9O1xyXG5cdFx0Zm9yIChjb25zdCBrZXkgaW4gYXNzZXRzKSB7XHJcblx0XHRcdGltYWdlc1trZXldID0gYXdhaXQgdGhpcy5sb2FkSW1hZ2UoU3RyaW5nKChhc3NldHMgYXMgdW5rbm93biBhcyBBc3NldHMpW2tleSBhcyBzdHJpbmddKSk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gaW1hZ2VzO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBhc3luYyBsb2FkSW1hZ2UoaW1nUGF0aDogc3RyaW5nKSB7XHJcblx0XHRjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcclxuXHRcdGF3YWl0IHRoaXMubG9hZChpbWcsIGltZ1BhdGgpO1xyXG5cdFx0cmV0dXJuIGltZztcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgYXN5bmMgbG9hZChlbDogSFRNTEltYWdlRWxlbWVudCwgc3RyOiBzdHJpbmcpIHtcclxuXHRcdHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcclxuXHRcdFx0ZWwuc3JjID0gc3RyO1xyXG5cdFx0XHRlbC5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4gcmVzb2x2ZSh0aGlzKSk7XHJcblx0XHR9KTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IEhlYWRlclBhbmVsIGZyb20gJy4uL2ltZy9wcm9ncmVzcy9wYW5lbDIucG5nJztcclxuaW1wb3J0IEdhbWVQYW5lbCBmcm9tICcuLi9pbWcvZ2FtZS9wYW5lbC5wbmcnO1xyXG5pbXBvcnQgU2NvcmVQYW5lbCBmcm9tICcuLi9pbWcvc2NvcmUvcGFuZWwyLnBuZyc7XHJcbmltcG9ydCBQcm9ncmVzc0Jsb2NrIGZyb20gJy4uL2ltZy9wcm9ncmVzcy9iYXIvYmxvY2sucG5nJztcclxuaW1wb3J0IFByb2dyZXNzU2NhbGUgZnJvbSAnLi4vaW1nL3Byb2dyZXNzL2Jhci9zY2FsZS5wbmcnO1xyXG5pbXBvcnQgQmx1ZUJsb2NrIGZyb20gJy4uL2ltZy9nYW1lL2Jsb2Nrcy9ibHVlLnBuZyc7XHJcbmltcG9ydCBHcmVlbkJsb2NrIGZyb20gJy4uL2ltZy9nYW1lL2Jsb2Nrcy9ncmVlbi5wbmcnO1xyXG5pbXBvcnQgWWVsbG93QmxvY2sgZnJvbSAnLi4vaW1nL2dhbWUvYmxvY2tzL3llbGxvdy5wbmcnO1xyXG5pbXBvcnQgUHVycGxlQmxvY2sgZnJvbSAnLi4vaW1nL2dhbWUvYmxvY2tzL3B1cnBsZS5wbmcnO1xyXG5pbXBvcnQgUmVkQmxvY2sgZnJvbSAnLi4vaW1nL2dhbWUvYmxvY2tzL3JlZC5wbmcnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL2ltZy9lbmQvYnV0dG9uLnBuZyc7XHJcbmltcG9ydCBTZWxlY3RlZEJsdWVCbG9jayBmcm9tICcuLi9pbWcvZ2FtZS9zZWxlY3RlZF9ibG9ja3MvYmx1ZS5wbmcnO1xyXG5pbXBvcnQgU2VsZWN0ZWRHcmVlbkJsb2NrIGZyb20gJy4uL2ltZy9nYW1lL3NlbGVjdGVkX2Jsb2Nrcy9ncmVlbi5wbmcnO1xyXG5pbXBvcnQgU2VsZWN0ZWRZZWxsb3dCbG9jayBmcm9tICcuLi9pbWcvZ2FtZS9zZWxlY3RlZF9ibG9ja3MveWVsbG93LnBuZyc7XHJcbmltcG9ydCBTZWxlY3RlZFB1cnBsZUJsb2NrIGZyb20gJy4uL2ltZy9nYW1lL3NlbGVjdGVkX2Jsb2Nrcy9wdXJwbGUucG5nJztcclxuaW1wb3J0IFNlbGVjdGVkUmVkQmxvY2sgZnJvbSAnLi4vaW1nL2dhbWUvc2VsZWN0ZWRfYmxvY2tzL3JlZC5wbmcnO1xyXG5pbXBvcnQgQm9udXMgZnJvbSAnLi4vaW1nL2Jvb3N0ZXIvYm9udXMucG5nJztcclxuaW1wb3J0IFNlbGVjdGVkQm9udXMgZnJvbSAnLi4vaW1nL2Jvb3N0ZXIvc2VsZWN0ZWRfYm9udXMucG5nJztcclxuaW1wb3J0IE1vbmV5QmxvY2sgZnJvbSAnLi4vaW1nL2Jvb3N0ZXIvbW9uZXkucG5nJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHRIZWFkZXJQYW5lbCxcclxuXHRHYW1lUGFuZWwsXHJcblx0U2NvcmVQYW5lbCxcclxuXHRQcm9ncmVzc0Jsb2NrLFxyXG5cdFByb2dyZXNzU2NhbGUsXHJcblx0Qmx1ZUJsb2NrLFxyXG5cdEdyZWVuQmxvY2ssXHJcblx0UHVycGxlQmxvY2ssXHJcblx0UmVkQmxvY2ssXHJcblx0WWVsbG93QmxvY2ssXHJcblx0Qm9udXMsXHJcblx0U2VsZWN0ZWRCb251cyxcclxuXHRNb25leUJsb2NrLFxyXG5cdEJ1dHRvbixcclxuXHRTZWxlY3RlZEJsdWVCbG9jayxcclxuXHRTZWxlY3RlZEdyZWVuQmxvY2ssXHJcblx0U2VsZWN0ZWRQdXJwbGVCbG9jayxcclxuXHRTZWxlY3RlZFJlZEJsb2NrLFxyXG5cdFNlbGVjdGVkWWVsbG93QmxvY2ssXHJcbn07XHJcbiIsImltcG9ydCB7IGNob29zZUNvbG9yLCBnZXRSYW5kb21WYWx1ZSB9IGZyb20gJy4vdXRpbHMnO1xyXG5pbXBvcnQgeyBDb29yZGluYXRlcywgUmVzaXplVHlwZSwgRGlyZWN0aW9uLCBTaXplIH0gZnJvbSAnLi90eXBlcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCbG9jayB7XHJcblx0cHJpdmF0ZSBfc2VsZWN0ZWQgPSBmYWxzZTtcclxuXHJcblx0cHJpdmF0ZSBfb2NjdXBpZWQgPSBmYWxzZTtcclxuXHJcblx0cHJpdmF0ZSBfeCA9IDA7XHJcblxyXG5cdHByaXZhdGUgX3kgPSAwO1xyXG5cclxuXHRwcml2YXRlIF9vbGRZID0gMDtcclxuXHJcblx0cHJpdmF0ZSBfb2xkQ29sb3I6IHN0cmluZztcclxuXHJcblx0cHJpdmF0ZSBfaGVpZ2h0ID0gMDtcclxuXHJcblx0cHJpdmF0ZSBfd2lkdGggPSAwO1xyXG5cclxuXHRwcml2YXRlIF9jb2xvcjogc3RyaW5nO1xyXG5cclxuXHRwcml2YXRlIF9hbmltYXRpb25WZWxvY2l0eSA9IDEwO1xyXG5cclxuXHRjb25zdHJ1Y3Rvcihjb2xvcnM6IG51bWJlcltdKSB7XHJcblx0XHRjb25zdCBjb2xvck51bWJlciA9IGdldFJhbmRvbVZhbHVlKGNvbG9ycyk7XHJcblx0XHR0aGlzLl9jb2xvciA9IGNob29zZUNvbG9yKGNvbG9yTnVtYmVyKTtcclxuXHRcdHRoaXMuX29sZENvbG9yID0gdGhpcy5fY29sb3I7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgaW5pdChwb3NpdGlvbjogQ29vcmRpbmF0ZXMsIHNpemU6IFNpemUpIHtcclxuXHRcdHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcclxuXHRcdHRoaXMuX29sZFkgPSBwb3NpdGlvbi55O1xyXG5cdFx0dGhpcy5zaXplID0gc2l6ZTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBnZXRDb2xvckltYWdlTmFtZSgpOiBzdHJpbmcge1xyXG5cdFx0cmV0dXJuIHRoaXMuX3NlbGVjdGVkID8gYFNlbGVjdGVkJHt0aGlzLmNvbG9yfWAgOiB0aGlzLmNvbG9yO1xyXG5cdFx0Ly8gcmV0dXJuIHRoaXMuX2NvbG9yO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHJlc2l6ZShyZXNpemVUeXBlOiBSZXNpemVUeXBlKSB7XHJcblx0XHRjb25zdCB7IFpvb20sIFNocmluayB9ID0gUmVzaXplVHlwZTtcclxuXHRcdHN3aXRjaCAocmVzaXplVHlwZSkge1xyXG5cdFx0XHRjYXNlIFNocmluazpcclxuXHRcdFx0XHRpZiAodGhpcy5faGVpZ2h0ID4gMCkgdGhpcy5faGVpZ2h0IC09IHRoaXMuX2FuaW1hdGlvblZlbG9jaXR5O1xyXG5cdFx0XHRcdGVsc2UgdGhpcy5faGVpZ2h0ID0gMDtcclxuXHRcdFx0XHRpZiAodGhpcy5fd2lkdGggPiAwKSB0aGlzLl93aWR0aCAtPSB0aGlzLl9hbmltYXRpb25WZWxvY2l0eTtcclxuXHRcdFx0XHRlbHNlIHRoaXMuX3dpZHRoID0gMDtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSBab29tOlxyXG5cdFx0XHRcdHRoaXMuX2hlaWdodCArPSB0aGlzLl9hbmltYXRpb25WZWxvY2l0eTtcclxuXHRcdFx0XHR0aGlzLl93aWR0aCArPSB0aGlzLl9hbmltYXRpb25WZWxvY2l0eTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ1Vua25vd24gcmVzaXplIHR5cGUnKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHB1YmxpYyBtb3ZlKG1vdmVUeXBlOiBEaXJlY3Rpb24sIHZlbG9jaXR5PzogbnVtYmVyKSB7XHJcblx0XHRjb25zdCB7IFVwLCBSaWdodCwgTGVmdCwgRG93biB9ID0gRGlyZWN0aW9uO1xyXG5cdFx0c3dpdGNoIChtb3ZlVHlwZSkge1xyXG5cdFx0XHRjYXNlIFVwOlxyXG5cdFx0XHRcdHRoaXMuX3kgLT0gdGhpcy5fYW5pbWF0aW9uVmVsb2NpdHk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgUmlnaHQ6XHJcblx0XHRcdFx0dGhpcy5feCArPSB0aGlzLl9hbmltYXRpb25WZWxvY2l0eTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSBMZWZ0OlxyXG5cdFx0XHRcdHRoaXMuX3ggLT0gdGhpcy5fYW5pbWF0aW9uVmVsb2NpdHk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgRG93bjpcclxuXHRcdFx0XHR0aGlzLl95ICs9IHZlbG9jaXR5IHx8IHRoaXMuX2FuaW1hdGlvblZlbG9jaXR5O1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcignVW5rbm93biBtb3ZlIHR5cGUnKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHB1YmxpYyBnZXQgeCgpIHtcclxuXHRcdHJldHVybiB0aGlzLl94O1xyXG5cdH1cclxuXHJcblx0cHVibGljIGdldCB5KCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX3k7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZ2V0IGhlaWdodCgpIHtcclxuXHRcdHJldHVybiB0aGlzLl9oZWlnaHQ7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZ2V0IHdpZHRoKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX3dpZHRoO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGdldCBjb2xvcigpOiBzdHJpbmcge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2NvbG9yO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHNldCBjb2xvcihjb2xvcjogc3RyaW5nKSB7XHJcblx0XHR0aGlzLl9jb2xvciA9IGNvbG9yO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGdldCBvbGRDb2xvcigpOiBzdHJpbmcge1xyXG5cdFx0cmV0dXJuIHRoaXMuX29sZENvbG9yO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHNldCBvbGRDb2xvcihjb2xvcjogc3RyaW5nKSB7XHJcblx0XHR0aGlzLl9vbGRDb2xvciA9IGNvbG9yO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGdldCBvbGRZKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX29sZFk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc2V0IG9sZFkoeTogbnVtYmVyKSB7XHJcblx0XHR0aGlzLl9vbGRZID0geTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBnZXQgcG9zaXRpb24oKTogQ29vcmRpbmF0ZXMge1xyXG5cdFx0cmV0dXJuIHsgeDogdGhpcy5feCwgeTogdGhpcy5feSB9O1xyXG5cdH1cclxuXHJcblx0cHVibGljIHNldCBwb3NpdGlvbihwb3NpdGlvbjogQ29vcmRpbmF0ZXMpIHtcclxuXHRcdHRoaXMuX3ggPSBwb3NpdGlvbi54O1xyXG5cdFx0dGhpcy5feSA9IHBvc2l0aW9uLnk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZ2V0IHNpemUoKTogU2l6ZSB7XHJcblx0XHRyZXR1cm4geyB3aWR0aDogdGhpcy5fd2lkdGgsIGhlaWdodDogdGhpcy5faGVpZ2h0IH07XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc2V0IHNpemUoc2l6ZTogU2l6ZSkge1xyXG5cdFx0dGhpcy5faGVpZ2h0ID0gc2l6ZS5oZWlnaHQ7XHJcblx0XHR0aGlzLl93aWR0aCA9IHNpemUud2lkdGg7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgdG9nZ2xlU2VsZWN0KCkge1xyXG5cdFx0dGhpcy5fc2VsZWN0ZWQgPSAhdGhpcy5fc2VsZWN0ZWQ7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgaXNTZWxlY3RlZCgpIHtcclxuXHRcdHJldHVybiB0aGlzLl9zZWxlY3RlZDtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzZXQgb2NjdXBpZWQob2NwOiBib29sZWFuKSB7XHJcblx0XHR0aGlzLl9vY2N1cGllZCA9IG9jcDtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyB0b2dnbGVPY2N1cGllZCgpIHtcclxuXHRcdHRoaXMuX29jY3VwaWVkID0gIXRoaXMuX29jY3VwaWVkO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGlzT2NjdXBpZWQoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fb2NjdXBpZWQ7XHJcblx0fVxyXG59XHJcbiIsImV4cG9ydCBjb25zdCBQT0lOVFNfUEVSX1RVUk4gPSAyO1xyXG5leHBvcnQgY29uc3QgSU1BR0VfU0laRV9DT0VGRklDSUVOVCA9IDQ7XHJcbmV4cG9ydCBjb25zdCBURUxFUE9SVF9DT1NUID0gNTtcclxuZXhwb3J0IGNvbnN0IE1PTkVZID0gMjA7XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEV2ZW50TWFuYWdlciB7XHJcblx0ZXZlbnRzID0gbmV3IE1hcCgpO1xyXG5cclxuXHRvbihldmVudDogc3RyaW5nLCBoYW5kbGVyOiBhbnkpIHtcclxuXHRcdGlmICh0aGlzLmV2ZW50cy5oYXMoZXZlbnQpKSB7XHJcblx0XHRcdHRoaXMuZXZlbnRzLmdldChldmVudCkuYWRkKGhhbmRsZXIpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5ldmVudHMuc2V0KGV2ZW50LCBuZXcgU2V0KFtoYW5kbGVyXSkpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0b2ZmKGV2ZW50OiBzdHJpbmcsIGhhbmRsZXI6IGFueSkge1xyXG5cdFx0dGhpcy5ldmVudHMuZ2V0KGV2ZW50KT8uZGVsZXRlKGhhbmRsZXIpO1xyXG5cdH1cclxuXHJcblx0ZW1pdChldmVudDogc3RyaW5nLCBhcmc/OiBhbnkpIHtcclxuXHRcdHRoaXMuZXZlbnRzLmdldChldmVudCk/LmZvckVhY2goKGhhbmRsZXI6IChhcmcwOiBhbnkpID0+IGFueSkgPT4gaGFuZGxlcihhcmcpKTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgY2hvb3NlQ29sb3JzIH0gZnJvbSAnLi91dGlscyc7XHJcbmltcG9ydCBJbnB1dCBmcm9tICcuL2lucHV0JztcclxuaW1wb3J0IFNjZW5lTWFuYWdlciwgeyBTY2VuZXMsIFRTY2VuZSB9IGZyb20gJy4vc2NlbmUnO1xyXG5pbXBvcnQgRXZlbnRNYW5hZ2VyIGZyb20gJy4vZXZlbnQnO1xyXG5pbXBvcnQgR2FtZVdvcmxkIGZyb20gJy4vd29ybGRzL2dhbWVXb3JsZCc7XHJcbmltcG9ydCBJbWFnZVJlcG9zaXRvcnkgZnJvbSAnLi9JbWFnZVJlcG9zaXRvcnknO1xyXG5pbXBvcnQgYXNzZXRzIGZyb20gJy4vYXNzZXRzJztcclxuaW1wb3J0IEdhbWVWaWV3IGZyb20gJy4vdmlld3MvZ2FtZVZpZXcnO1xyXG5pbXBvcnQgeyBHYW1lSW1hZ2VzIH0gZnJvbSAnLi90eXBlcyc7XHJcbmltcG9ydCBFbmRXb3JsZCwgeyBSZXN1bHQgfSBmcm9tICcuL3dvcmxkcy9lbmRXb3JsZCc7XHJcbmltcG9ydCBFbmRWaWV3IGZyb20gJy4vdmlld3MvZW5kVmlldyc7XHJcbmltcG9ydCB7IE1PTkVZIH0gZnJvbSAnLi9jb25zdGFudHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSBleHRlbmRzIEV2ZW50TWFuYWdlciB7XHJcblx0cHJpdmF0ZSBfaW5wdXQ6IElucHV0O1xyXG5cclxuXHRwcml2YXRlIF9zY2VuZXM6IFNjZW5lTWFuYWdlcjtcclxuXHJcblx0cHJpdmF0ZSBfY3VycmVudFNjZW5lOiBTY2VuZXMgPSBTY2VuZXMuR2FtZTtcclxuXHJcblx0cHJpdmF0ZSBfY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcclxuXHJcblx0cHJpdmF0ZSBfY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XHJcblxyXG5cdHByaXZhdGUgX2ltYWdlUmVwb3NpdG9yeTogSW1hZ2VSZXBvc2l0b3J5O1xyXG5cclxuXHRjb25zdHJ1Y3RvcihjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50KSB7XHJcblx0XHRzdXBlcigpO1xyXG5cdFx0dGhpcy5fY2FudmFzID0gY2FudmFzO1xyXG5cdFx0dGhpcy5fY3R4ID0gPENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRD5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuXHRcdHRoaXMuX2ltYWdlUmVwb3NpdG9yeSA9IG5ldyBJbWFnZVJlcG9zaXRvcnkoYXNzZXRzKTtcclxuXHRcdHRoaXMuX3NjZW5lcyA9IG5ldyBTY2VuZU1hbmFnZXIoKTtcclxuXHRcdHRoaXMuX2lucHV0ID0gbmV3IElucHV0KCk7XHJcblx0XHR0aGlzLmxvb3AgPSB0aGlzLmxvb3AuYmluZCh0aGlzKTtcclxuXHRcdHRoaXMuY2FsbEVtaXQgPSB0aGlzLmNhbGxFbWl0LmJpbmQodGhpcyk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgYXN5bmMgaW5pdChuOiBudW1iZXIsIG06IG51bWJlciwgYzogbnVtYmVyLCBrOiBudW1iZXIsIHM6IG51bWJlciwgeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcclxuXHRcdHRoaXMuX2lucHV0LmluaXQoKTtcclxuXHRcdGNvbnN0IGdhbWVJbWFnZXMgPSBhd2FpdCB0aGlzLl9pbWFnZVJlcG9zaXRvcnkubG9hZEltYWdlcygpO1xyXG5cdFx0Y29uc3QgeyBfY2FudmFzOiBjYW52YXMsIF9jdHg6IGN0eCB9ID0gdGhpcztcclxuXHRcdHRoaXMuX3NjZW5lcy5hZGQoU2NlbmVzLkdhbWUsIEdhbWUuY3JlYXRlR2FtZVNjZW5lKG4sIG0sIGMsIGssIHMsIHgsIHksIGdhbWVJbWFnZXMsIGNhbnZhcywgY3R4LCB0aGlzLmNhbGxFbWl0KSk7XHJcblx0XHR0aGlzLm9uKCdlbmRHYW1lJywgKHJlc3VsdDogUmVzdWx0KSA9PiB7XHJcblx0XHRcdHRoaXMuX2N1cnJlbnRTY2VuZSA9IFNjZW5lcy5FbmQ7XHJcblx0XHRcdHRoaXMuX3NjZW5lcy5hZGQoU2NlbmVzLkVuZCwgR2FtZS5jcmVhdGVFbmRTY2VuZShnYW1lSW1hZ2VzLCBjYW52YXMsIGN0eCwgcmVzdWx0LCB0aGlzLmNhbGxFbWl0KSk7XHJcblx0XHR9KTtcclxuXHRcdHRoaXMub24oJ25ld0dhbWUnLCAoKSA9PiB7XHJcblx0XHRcdHRoaXMuX2N1cnJlbnRTY2VuZSA9IFNjZW5lcy5HYW1lO1xyXG5cdFx0XHR0aGlzLl9zY2VuZXMuYWRkKFNjZW5lcy5HYW1lLCBHYW1lLmNyZWF0ZUdhbWVTY2VuZShuLCBtLCBjLCBrLCBzLCB4LCB5LCBnYW1lSW1hZ2VzLCBjYW52YXMsIGN0eCwgdGhpcy5jYWxsRW1pdCkpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIHN0YXRpYyBjcmVhdGVHYW1lU2NlbmUobjogbnVtYmVyLCBtOiBudW1iZXIsIGM6IG51bWJlciwgazogbnVtYmVyLCBzOiBudW1iZXIsIHg6IG51bWJlciwgeTogbnVtYmVyLCBnYW1lSW1hZ2VzOiBHYW1lSW1hZ2VzLCBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LCBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgZW1pdEVGdW5jOiAoZU5hbWU6IHN0cmluZywgYXJnOiBhbnkpID0+IHZvaWQpIHtcclxuXHRcdGNvbnN0IGdyaWRJbmZvID0ge1xyXG5cdFx0XHRibG9ja0NvbG9yczogY2hvb3NlQ29sb3JzKGMpLFxyXG5cdFx0XHRuLFxyXG5cdFx0XHRtLFxyXG5cdFx0XHRrLFxyXG5cdFx0XHRtaW5TdGlycmluZ0Ftb3VudDogcyxcclxuXHRcdH07XHJcblx0XHRjb25zdCB3b3JsZCA9IG5ldyBHYW1lV29ybGQoZ3JpZEluZm8sIHgsIHksIE1PTkVZLCBlbWl0RUZ1bmMpO1xyXG5cdFx0Y29uc3QgdmlldyA9IG5ldyBHYW1lVmlldyhjYW52YXMsIGN0eCwgZ2FtZUltYWdlcyk7XHJcblx0XHR2aWV3LmluaXQod29ybGQpO1xyXG5cdFx0cmV0dXJuIHsgdmlldywgd29ybGQgfTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgY2FsbEVtaXQgPSAoZU5hbWU6IHN0cmluZywgYXJnPzogYW55KSA9PiB0aGlzLmVtaXQoZU5hbWUsIGFyZyk7XHJcblxyXG5cdHByaXZhdGUgc3RhdGljIGNyZWF0ZUVuZFNjZW5lKGdhbWVJbWFnZXM6IEdhbWVJbWFnZXMsIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCByZXN1bHQ6IFJlc3VsdCwgZW1pdEVGdW5jOiAoZU5hbWU6IHN0cmluZywgYXJnOiBhbnkpID0+IHZvaWQpIHtcclxuXHRcdGNvbnN0IHdvcmxkID0gbmV3IEVuZFdvcmxkKHJlc3VsdCwgZW1pdEVGdW5jKTtcclxuXHRcdGNvbnN0IHZpZXcgPSBuZXcgRW5kVmlldyhjYW52YXMsIGN0eCwgZ2FtZUltYWdlcyk7XHJcblx0XHR2aWV3LmluaXQod29ybGQpO1xyXG5cdFx0cmV0dXJuIHsgdmlldywgd29ybGQgfTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzdGFydCgpIHtcclxuXHRcdHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmxvb3ApO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBsb29wKCkge1xyXG5cdFx0Y29uc3QgeyB3b3JsZCwgdmlldyB9ID0gdGhpcy5fc2NlbmVzLmdldCh0aGlzLl9jdXJyZW50U2NlbmUpIGFzIFRTY2VuZTtcclxuXHRcdHdvcmxkLnVwZGF0ZSh0aGlzLl9pbnB1dCk7XHJcblx0XHRpZiAodGhpcy5faW5wdXQueCAhPT0gMCAmJiB0aGlzLl9pbnB1dC55ICE9PSAwKSB0aGlzLl9pbnB1dC5jb29yZGluYXRlcyA9IHsgeDogMCwgeTogMCB9O1xyXG5cdFx0dmlldy51cGRhdGUod29ybGQpO1xyXG5cdFx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMubG9vcCk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCBHYW1lT2JqZWN0IGZyb20gJy4vZ2FtZU9iamVjdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCb251cyBleHRlbmRzIEdhbWVPYmplY3Qge1xyXG5cdHByaXZhdGUgX3NlbGVjdGVkID0gZmFsc2U7XHJcblxyXG5cdHB1YmxpYyBnZXQgc2VsZWN0ZWQoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fc2VsZWN0ZWQ7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc2V0IHNlbGVjdGVkKHNlbGVjdGVkOiBib29sZWFuKSB7XHJcblx0XHR0aGlzLl9zZWxlY3RlZCA9IHNlbGVjdGVkO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHRvZ2dsZVNlbGVjdCgpIHtcclxuXHRcdHRoaXMuX3NlbGVjdGVkID0gIXRoaXMuX3NlbGVjdGVkO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgR2FtZU9iamVjdCBmcm9tICcuL2dhbWVPYmplY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnV0dG9uIGV4dGVuZHMgR2FtZU9iamVjdCB7XHJcblx0cHJpdmF0ZSBfc2VsZWN0ZWQgPSBmYWxzZTtcclxuXHJcblx0cHJpdmF0ZSBfY29sb3IgPSAnJztcclxuXHJcblx0cHVibGljIGdldCBjb2xvcigpOiBzdHJpbmcge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2NvbG9yO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHNldCBjb2xvcihjb2xvcjogc3RyaW5nKSB7XHJcblx0XHR0aGlzLl9jb2xvciA9IGNvbG9yO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHRvZ2dsZVNlbGVjdCgpIHtcclxuXHRcdHRoaXMuX3NlbGVjdGVkID0gIXRoaXMuX3NlbGVjdGVkO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGlzU2VsZWN0ZWQoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fc2VsZWN0ZWQ7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IENvb3JkaW5hdGVzLCBEaXJlY3Rpb24sIFJlc2l6ZVR5cGUsIFNpemUgfSBmcm9tICcuLi90eXBlcyc7XHJcblxyXG5pbnRlcmZhY2UgSUdhbWVPYmplY3Qge1xyXG5cdGluaXQ6IChwb3NpdGlvbjogQ29vcmRpbmF0ZXMsIHNpemU6IFNpemUsIGl0ZW1TaXplPzogU2l6ZSkgPT4gdm9pZDtcclxuXHRyZXNpemU6IChyZXNpemVUeXBlOiBSZXNpemVUeXBlKSA9PiB2b2lkO1xyXG5cdG1vdmU6IChtb3ZlVHlwZTogRGlyZWN0aW9uLCB2ZWxvY2l0eT86IG51bWJlcikgPT4gdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgR2FtZU9iamVjdCBpbXBsZW1lbnRzIElHYW1lT2JqZWN0IHtcclxuXHRwcm90ZWN0ZWQgX3ggPSAwO1xyXG5cclxuXHRwcm90ZWN0ZWQgX3kgPSAwO1xyXG5cclxuXHRwcm90ZWN0ZWQgX2hlaWdodCA9IDA7XHJcblxyXG5cdHByb3RlY3RlZCBfd2lkdGggPSAwO1xyXG5cclxuXHRwcm90ZWN0ZWQgX3ZlbG9jaXR5ID0gMDtcclxuXHJcblx0cHJvdGVjdGVkIF9vbGRZID0gMDtcclxuXHJcblx0cHJvdGVjdGVkIF9vbFggPSAwO1xyXG5cclxuXHRwcm90ZWN0ZWQgX2l0ZW1TaXplOiBTaXplID0geyBoZWlnaHQ6IDAsIHdpZHRoOiAwIH07XHJcblxyXG5cdGluaXQocG9zaXRpb246IENvb3JkaW5hdGVzLCBzaXplOiBTaXplLCBpdGVtU2l6ZT86IFNpemUgfCB1bmRlZmluZWQpOiB2b2lkIHtcclxuXHRcdHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcclxuXHRcdHRoaXMuX29sZFkgPSBwb3NpdGlvbi55O1xyXG5cdFx0dGhpcy5zaXplID0gc2l6ZTtcclxuXHRcdGlmIChpdGVtU2l6ZSkgdGhpcy5faXRlbVNpemUgPSBpdGVtU2l6ZTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBtb3ZlKG1vdmVUeXBlOiBEaXJlY3Rpb24sIHZlbG9jaXR5PzogbnVtYmVyKSB7XHJcblx0XHRjb25zdCBhblZlbG9jaXR5ID0gdmVsb2NpdHkgfHwgdGhpcy5fdmVsb2NpdHk7XHJcblx0XHRjb25zdCB7IFVwLCBSaWdodCwgTGVmdCwgRG93biB9ID0gRGlyZWN0aW9uO1xyXG5cdFx0c3dpdGNoIChtb3ZlVHlwZSkge1xyXG5cdFx0XHRjYXNlIFVwOlxyXG5cdFx0XHRcdHRoaXMuX3kgLT0gYW5WZWxvY2l0eTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSBSaWdodDpcclxuXHRcdFx0XHR0aGlzLl94ICs9IGFuVmVsb2NpdHk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgTGVmdDpcclxuXHRcdFx0XHR0aGlzLl94IC09IGFuVmVsb2NpdHk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgRG93bjpcclxuXHRcdFx0XHR0aGlzLl95ICs9IGFuVmVsb2NpdHk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCdVbmtub3duIG1vdmUgdHlwZScpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHVibGljIHJlc2l6ZShyZXNpemVUeXBlOiBSZXNpemVUeXBlLCB2ZWxvY2l0eT86IG51bWJlcikge1xyXG5cdFx0Y29uc3QgYW5WZWxvY2l0eSA9IHZlbG9jaXR5IHx8IHRoaXMuX3ZlbG9jaXR5O1xyXG5cdFx0Y29uc3QgeyBab29tLCBTaHJpbmsgfSA9IFJlc2l6ZVR5cGU7XHJcblx0XHRzd2l0Y2ggKHJlc2l6ZVR5cGUpIHtcclxuXHRcdFx0Y2FzZSBTaHJpbms6XHJcblx0XHRcdFx0aWYgKHRoaXMuX2hlaWdodCA+IDApIHRoaXMuX2hlaWdodCAtPSBhblZlbG9jaXR5O1xyXG5cdFx0XHRcdGVsc2UgdGhpcy5faGVpZ2h0ID0gMDtcclxuXHRcdFx0XHRpZiAodGhpcy5fd2lkdGggPiAwKSB0aGlzLl93aWR0aCAtPSBhblZlbG9jaXR5O1xyXG5cdFx0XHRcdGVsc2UgdGhpcy5fd2lkdGggPSAwO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIFpvb206XHJcblx0XHRcdFx0dGhpcy5faGVpZ2h0ICs9IGFuVmVsb2NpdHk7XHJcblx0XHRcdFx0dGhpcy5fd2lkdGggKz0gYW5WZWxvY2l0eTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ1Vua25vd24gcmVzaXplIHR5cGUnKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHB1YmxpYyBnZXQgeCgpIHtcclxuXHRcdHJldHVybiB0aGlzLl94O1xyXG5cdH1cclxuXHJcblx0cHVibGljIGdldCB5KCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX3k7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZ2V0IGhlaWdodCgpIHtcclxuXHRcdHJldHVybiB0aGlzLl9oZWlnaHQ7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZ2V0IHdpZHRoKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX3dpZHRoO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGdldCBwb3NpdGlvbigpOiBDb29yZGluYXRlcyB7XHJcblx0XHRyZXR1cm4geyB4OiB0aGlzLl94LCB5OiB0aGlzLl95IH07XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc2V0IHBvc2l0aW9uKHBvc2l0aW9uOiBDb29yZGluYXRlcykge1xyXG5cdFx0dGhpcy5feCA9IHBvc2l0aW9uLng7XHJcblx0XHR0aGlzLl95ID0gcG9zaXRpb24ueTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBnZXQgc2l6ZSgpOiBTaXplIHtcclxuXHRcdHJldHVybiB7IHdpZHRoOiB0aGlzLl93aWR0aCwgaGVpZ2h0OiB0aGlzLl9oZWlnaHQgfTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzZXQgc2l6ZShzaXplOiBTaXplKSB7XHJcblx0XHR0aGlzLl9oZWlnaHQgPSBzaXplLmhlaWdodDtcclxuXHRcdHRoaXMuX3dpZHRoID0gc2l6ZS53aWR0aDtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IEJsb2NrIGZyb20gJy4uL2Jsb2NrJztcclxuaW1wb3J0IHsgQ29vcmRpbmF0ZXMsIFNpemUsIEdyaWRJbmZvIH0gZnJvbSAnLi4vdHlwZXMnO1xyXG5pbXBvcnQgeyBSZXN1bHQgfSBmcm9tICcuLi93b3JsZHMvZW5kV29ybGQnO1xyXG5pbXBvcnQgR2FtZU9iamVjdCBmcm9tICcuL2dhbWVPYmplY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JpZCBleHRlbmRzIEdhbWVPYmplY3Qge1xyXG5cdHByaXZhdGUgX2dyaWRJbmZvOiBHcmlkSW5mbztcclxuXHJcblx0cHJpdmF0ZSBfYmxvY2tMYXlvdXQ6IEJsb2NrW11bXSA9IFtdO1xyXG5cclxuXHRwcml2YXRlIF9pdGVtSGVpZ2h0ID0gMDtcclxuXHJcblx0cHJpdmF0ZSBfaXRlbVdpZHRoID0gMDtcclxuXHJcblx0Y29uc3RydWN0b3IoZ3JpZEluZm86IEdyaWRJbmZvLCBlbWl0RUZ1bmM6IChlTmFtZTogc3RyaW5nLCBhcmc6IGFueSkgPT4gdm9pZCkge1xyXG5cdFx0c3VwZXIoKTtcclxuXHRcdHRoaXMuX2dyaWRJbmZvID0gZ3JpZEluZm87XHJcblx0XHR0aGlzLmNyZWF0ZUxheW91dCgpO1xyXG5cdFx0bGV0IHMgPSBncmlkSW5mby5taW5TdGlycmluZ0Ftb3VudDtcclxuXHRcdHdoaWxlICghdGhpcy5jaGVja0xheW91dCgpICYmIHMgPiAwKSB7XHJcblx0XHRcdHRoaXMuY3JlYXRlTGF5b3V0KCk7XHJcblx0XHRcdHMgLT0gMTtcclxuXHRcdH1cclxuXHRcdGlmIChzID09PSAwKSB7XHJcblx0XHRcdGVtaXRFRnVuYygnZW5kR2FtZScsIFJlc3VsdC5Mb3N0KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHB1YmxpYyBpbml0KHBvc2l0aW9uOiBDb29yZGluYXRlcywgc2l6ZTogU2l6ZSwgaXRlbVNpemU6IFNpemUpIHtcclxuXHRcdHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcclxuXHRcdHRoaXMuc2l6ZSA9IHNpemU7XHJcblx0XHR0aGlzLml0ZW1TaXplID0gaXRlbVNpemU7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGNyZWF0ZUxheW91dCgpIHtcclxuXHRcdGNvbnN0IHsgbiwgbSwgYmxvY2tDb2xvcnMgfSA9IHRoaXMuZ3JpZEluZm87XHJcblx0XHRjb25zdCBsYXlvdXQ6IEJsb2NrW11bXSA9IFtdO1xyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpICs9IDEpIHtcclxuXHRcdFx0bGF5b3V0W2ldID0gW107XHJcblx0XHRcdGZvciAobGV0IGogPSAwOyBqIDwgbTsgaiArPSAxKSB7XHJcblx0XHRcdFx0bGF5b3V0W2ldW2pdID0gbmV3IEJsb2NrKGJsb2NrQ29sb3JzKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0dGhpcy5fYmxvY2tMYXlvdXQgPSBsYXlvdXQ7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGNoZWNrTGF5b3V0KCk6IGJvb2xlYW4ge1xyXG5cdFx0Y29uc3QgeyBtIH0gPSB0aGlzLl9ncmlkSW5mbztcclxuXHRcdGNvbnN0IGxheW91dCA9IHRoaXMuX2Jsb2NrTGF5b3V0O1xyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBtIC0gMTsgaSArPSAxKSB7XHJcblx0XHRcdGNvbnN0IHJvd0xpc3QgPSBsYXlvdXRbaV0ubWFwKGJsb2NrID0+IGJsb2NrLmNvbG9yKTtcclxuXHRcdFx0Y29uc3Qgcm93U2V0ID0gbmV3IFNldChyb3dMaXN0KTtcclxuXHRcdFx0aWYgKHJvd1NldC5zaXplIDwgcm93TGlzdC5sZW5ndGgpIHJldHVybiB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0Ly8gVE9ETyBhZGQgY2hlY2sgZm9yIGNvbHVtbnNcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBnZXQgbigpIHtcclxuXHRcdHJldHVybiB0aGlzLl9ncmlkSW5mby5uO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGdldCBtKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2dyaWRJbmZvLm07XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZ2V0IGJsb2NrTGF5b3V0KCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2Jsb2NrTGF5b3V0O1xyXG5cdH1cclxuXHJcblx0cHVibGljIHNldCBibG9ja0xheW91dChsYXlvdXQ6IEJsb2NrW11bXSkge1xyXG5cdFx0dGhpcy5fYmxvY2tMYXlvdXQgPSBsYXlvdXQ7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZ2V0IGdyaWRJbmZvKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2dyaWRJbmZvO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGdldCBpdGVtSGVpZ2h0KCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2l0ZW1IZWlnaHQ7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZ2V0IGl0ZW1XaWR0aCgpIHtcclxuXHRcdHJldHVybiB0aGlzLl9pdGVtV2lkdGg7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZ2V0IGl0ZW1TaXplKCkge1xyXG5cdFx0cmV0dXJuIHsgd2lkdGg6IHRoaXMuX2l0ZW1XaWR0aCwgaGVpZ2h0OiB0aGlzLl9pdGVtSGVpZ2h0IH07XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc2V0IGl0ZW1TaXplKHNpemU6IFNpemUpIHtcclxuXHRcdHRoaXMuX2l0ZW1XaWR0aCA9IHNpemUud2lkdGg7XHJcblx0XHR0aGlzLl9pdGVtSGVpZ2h0ID0gc2l6ZS5oZWlnaHQ7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IENvb3JkaW5hdGVzIH0gZnJvbSAnLi90eXBlcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnB1dCB7XHJcblx0cHJpdmF0ZSBfeCA9IDA7XHJcblxyXG5cdHByaXZhdGUgX3kgPSAwO1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHRoaXMuaW5pdCgpO1xyXG5cdH1cclxuXHJcblx0aW5pdCgpIHtcclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGUgPT4ge1xyXG5cdFx0XHR0aGlzLl94ID0gZS5vZmZzZXRYO1xyXG5cdFx0XHR0aGlzLl95ID0gZS5vZmZzZXRZO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZ2V0IHgoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5feDtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBnZXQgeSgpIHtcclxuXHRcdHJldHVybiB0aGlzLl95O1xyXG5cdH1cclxuXHJcblx0cHVibGljIHNldCBjb29yZGluYXRlcyhjcjogQ29vcmRpbmF0ZXMpIHtcclxuXHRcdHRoaXMuX3ggPSBjci54O1xyXG5cdFx0dGhpcy5feSA9IGNyLnk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IENvb3JkaW5hdGVzLCBEaXJlY3Rpb24gfSBmcm9tICcuL3R5cGVzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2dyZXNzQmFyIHtcclxuXHRwcml2YXRlIF94ID0gMDtcclxuXHJcblx0cHJpdmF0ZSBfY3VycmVudFggPSAwO1xyXG5cclxuXHRwcml2YXRlIF9lbmRYID0gMDtcclxuXHJcblx0cHJpdmF0ZSBfdmVsb2NpdHkgPSAxO1xyXG5cclxuXHRwcml2YXRlIF95ID0gMDtcclxuXHJcblx0cHJpdmF0ZSBfZGlyZWN0aW9uOiBEaXJlY3Rpb24gPSBEaXJlY3Rpb24uUmlnaHQ7XHJcblxyXG5cdGluaXQoc3RhcnRYOiBudW1iZXIsIHdpZHRoOiBudW1iZXIsIHk6IG51bWJlciwgdGFyZ2V0UG9pbnRzOiBudW1iZXIpIHtcclxuXHRcdHRoaXMuX3ggPSBzdGFydFg7XHJcblx0XHRpZiAodGhpcy5fZGlyZWN0aW9uID09PSBEaXJlY3Rpb24uUmlnaHQpIHtcclxuXHRcdFx0dGhpcy5fY3VycmVudFggPSBzdGFydFg7XHJcblx0XHRcdHRoaXMuX2VuZFggPSBzdGFydFggKyB3aWR0aDtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuX2N1cnJlbnRYID0gc3RhcnRYICsgd2lkdGg7XHJcblx0XHRcdHRoaXMuX2VuZFggPSBzdGFydFg7XHJcblx0XHR9XHJcblx0XHR0aGlzLl95ID0geTtcclxuXHRcdHRoaXMuX3ZlbG9jaXR5ID0gUHJvZ3Jlc3NCYXIuY2FsY1ZlbG9jaXR5KHdpZHRoLCB0YXJnZXRQb2ludHMpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBzdGF0aWMgY2FsY1ZlbG9jaXR5KHdpZHRoOiBudW1iZXIsIHRhcmdldFBvaW50czogbnVtYmVyKTogbnVtYmVyIHtcclxuXHRcdHJldHVybiB3aWR0aCAvIHRhcmdldFBvaW50cztcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgbW92ZVJpZ2h0KCkge1xyXG5cdFx0aWYgKHRoaXMuX2N1cnJlbnRYID49IHRoaXMuX2VuZFgpIHJldHVybjtcclxuXHRcdHRoaXMuX2N1cnJlbnRYICs9IHRoaXMuX3ZlbG9jaXR5O1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBtb3ZlTGVmdCgpIHtcclxuXHRcdHRoaXMuX2N1cnJlbnRYIC09IHRoaXMuX3ZlbG9jaXR5O1xyXG5cdH1cclxuXHJcblx0cHVibGljIG1vdmUoKSB7XHJcblx0XHRpZiAodGhpcy5kaXJlY3Rpb24gPT09IERpcmVjdGlvbi5MZWZ0KSB0aGlzLm1vdmVMZWZ0KCk7XHJcblx0XHRlbHNlIHRoaXMubW92ZVJpZ2h0KCk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZ2V0IGN1cnJlbnRQb3NpdGlvbigpOiBDb29yZGluYXRlcyB7XHJcblx0XHRyZXR1cm4geyB4OiB0aGlzLl9jdXJyZW50WCwgeTogdGhpcy5feSB9O1xyXG5cdH1cclxuXHJcblx0cHVibGljIHNldCB2ZWxvY2l0eSh2OiBudW1iZXIpIHtcclxuXHRcdHRoaXMuX3ZlbG9jaXR5ID0gdjtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzZXRWZWxvY2l0eUJ5V2lkdGgod2lkdGg6IG51bWJlciwgdGFyZ2V0UG9pbnRzOiBudW1iZXIpIHtcclxuXHRcdHRoaXMuX3ZlbG9jaXR5ID0gUHJvZ3Jlc3NCYXIuY2FsY1ZlbG9jaXR5KHdpZHRoLCB0YXJnZXRQb2ludHMpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHNldCBkaXJlY3Rpb24oZGlyZWN0aW9uOiBEaXJlY3Rpb24pIHtcclxuXHRcdHRoaXMuX2RpcmVjdGlvbiA9IGRpcmVjdGlvbjtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzZXQgeChzdGFydDogbnVtYmVyKSB7XHJcblx0XHR0aGlzLl94ID0gc3RhcnQ7XHJcblx0XHR0aGlzLl9jdXJyZW50WCA9IHN0YXJ0O1xyXG5cdH1cclxuXHJcblx0cHVibGljIHNldCBFbmRYKHg6IG51bWJlcikge1xyXG5cdFx0dGhpcy5fZW5kWCA9IHg7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc2V0RW5kWEJ5V2lkdGgod2lkdGg6IG51bWJlcikge1xyXG5cdFx0dGhpcy5fZW5kWCA9IHRoaXMuX3ggKyB3aWR0aDtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzZXQgY3VycmVudFgod2lkdGg6IG51bWJlcikge1xyXG5cdFx0dGhpcy5fY3VycmVudFggPSB0aGlzLl94ICsgd2lkdGg7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZ2V0IHdpZHRoKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2N1cnJlbnRYIC0gdGhpcy5feDtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IFZpZXcgZnJvbSAnLi92aWV3cy92aWV3JztcclxuaW1wb3J0IFdvcmxkIGZyb20gJy4vd29ybGRzL3dvcmxkJztcclxuXHJcbmV4cG9ydCBlbnVtIFNjZW5lcyB7XHJcblx0U3RhcnQgPSAnU3RhcnQnLFxyXG5cdEdhbWUgPSAnR2FtZScsXHJcblx0RW5kID0gJ0VuZCcsXHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIFRTY2VuZSA9IHtcclxuXHR2aWV3OiBWaWV3O1xyXG5cdHdvcmxkOiBXb3JsZDtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjZW5lTWFuYWdlciB7XHJcblx0cHJpdmF0ZSBfc2NlbmVzID0gbmV3IE1hcDxTY2VuZXMsIFRTY2VuZT4oKTtcclxuXHJcblx0cHVibGljIGFkZChzY2VuZU5hbWU6IFNjZW5lcywgc2NlbmVPYmo6IFRTY2VuZSkge1xyXG5cdFx0dGhpcy5fc2NlbmVzLnNldChzY2VuZU5hbWUsIHNjZW5lT2JqKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBoYXMoc2NlbmVOYW1lOiBTY2VuZXMpIHtcclxuXHRcdHRoaXMuX3NjZW5lcy5oYXMoc2NlbmVOYW1lKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBnZXQoc2NlbmVOYW1lOiBTY2VuZXMpIHtcclxuXHRcdHJldHVybiB0aGlzLl9zY2VuZXMuZ2V0KHNjZW5lTmFtZSk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZGVsZXRlKHNjZW5lTmFtZTogU2NlbmVzKSB7XHJcblx0XHRpZiAodGhpcy5fc2NlbmVzLmhhcyhzY2VuZU5hbWUpKSB7XHJcblx0XHRcdHRoaXMuX3NjZW5lcy5kZWxldGUoc2NlbmVOYW1lKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHB1YmxpYyBnZXQgc2NlbmVzKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX3NjZW5lcztcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgUE9JTlRTX1BFUl9UVVJOIH0gZnJvbSAnLi9jb25zdGFudHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NvcmUge1xyXG5cdHByaXZhdGUgX3BvaW50cyA9IDA7XHJcblxyXG5cdHByaXZhdGUgX21vdmVzID0gMDtcclxuXHJcblx0cHJpdmF0ZSBfdGFyZ2V0UG9pbnRzID0gMDtcclxuXHJcblx0cHJpdmF0ZSBfdGFyZ2V0TW92ZXMgPSAwO1xyXG5cclxuXHRjb25zdHJ1Y3Rvcih0YXJnZXRQb2ludHM6IG51bWJlciwgdGFyZ2V0TW92ZXM6IG51bWJlcikge1xyXG5cdFx0dGhpcy5fdGFyZ2V0UG9pbnRzID0gdGFyZ2V0UG9pbnRzO1xyXG5cdFx0dGhpcy5fbW92ZXMgPSB0YXJnZXRNb3ZlcztcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBnZXQgcG9pbnRzKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX3BvaW50cztcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBpbmNyZWFzZVBvaW50cygpIHtcclxuXHRcdHRoaXMuX3BvaW50cyArPSBQT0lOVFNfUEVSX1RVUk47XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZ2V0IG1vdmVzKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX21vdmVzO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGRlY3JlYXNlTW92ZXNOdW0oKSB7XHJcblx0XHR0aGlzLl9tb3ZlcyAtPSAxO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGdldCB0YXJnZXRQb2ludHMoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fdGFyZ2V0UG9pbnRzO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGdldCB0YXJnZXRNb3ZlcygpIHtcclxuXHRcdHJldHVybiB0aGlzLl90YXJnZXRNb3ZlcztcclxuXHR9XHJcbn1cclxuIiwiZXhwb3J0IHR5cGUgQ29vcmRpbmF0ZXMgPSB7XHJcblx0eDogbnVtYmVyO1xyXG5cdHk6IG51bWJlcjtcclxufTtcclxuXHJcbmV4cG9ydCBlbnVtIFJlc2l6ZVR5cGUge1xyXG5cdFpvb20sXHJcblx0U2hyaW5rLFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBEaXJlY3Rpb24ge1xyXG5cdFVwLFxyXG5cdFJpZ2h0LFxyXG5cdERvd24sXHJcblx0TGVmdCxcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgU2l6ZSA9IHtcclxuXHR3aWR0aDogbnVtYmVyO1xyXG5cdGhlaWdodDogbnVtYmVyO1xyXG59O1xyXG5cclxuZXhwb3J0IHR5cGUgR3JpZEluZm8gPSB7XHJcblx0YmxvY2tDb2xvcnM6IG51bWJlcltdO1xyXG5cdG46IG51bWJlcjtcclxuXHRtOiBudW1iZXI7XHJcblx0azogbnVtYmVyO1xyXG5cdG1pblN0aXJyaW5nQW1vdW50OiBudW1iZXI7XHJcbn07XHJcblxyXG5leHBvcnQgdHlwZSBHYW1lSW1hZ2VzID0geyBba2V5OiBzdHJpbmddOiBIVE1MSW1hZ2VFbGVtZW50IH07XHJcbmV4cG9ydCB0eXBlIEFzc2V0cyA9IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XHJcblxyXG5leHBvcnQgdHlwZSBQb3NpdGlvbkxpc3QgPSBbbnVtYmVyLCBudW1iZXJdW107XHJcbiIsImV4cG9ydCBmdW5jdGlvbiBnZXRSYW5kb21JbnRlZ2VyKG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcikge1xyXG5cdHJldHVybiBNYXRoLmZsb29yKG1pbiArIE1hdGgucmFuZG9tKCkgKiAobWF4ICsgMSAtIG1pbikpO1xyXG59XHJcblxyXG5jb25zdCBDT0xPUlNfTlVNID0gNTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaG9vc2VDb2xvcnMoYW1vdW50OiBudW1iZXIpIHtcclxuXHRpZiAoYW1vdW50ID09PSBDT0xPUlNfTlVNKSB7XHJcblx0XHRyZXR1cm4gQXJyYXkuZnJvbSh7IGxlbmd0aDogQ09MT1JTX05VTSB9LCAodiwgaykgPT4gayArIDEpO1xyXG5cdH1cclxuXHRyZXR1cm4gQXJyYXkuZnJvbSh7IGxlbmd0aDogYW1vdW50IH0sICgpID0+IGdldFJhbmRvbUludGVnZXIoMCwgYW1vdW50IC0gMSkpO1xyXG5cdC8vIFRPRE8gY2hlY2sgcmVwZWF0c1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmFuZG9tVmFsdWUoYXJyYXk6IG51bWJlcltdKTogbnVtYmVyIHtcclxuXHRyZXR1cm4gYXJyYXlbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYXJyYXkubGVuZ3RoKV07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaG9vc2VDb2xvcihjb2xvck51bWJlcjogbnVtYmVyKTogc3RyaW5nIHtcclxuXHRzd2l0Y2ggKGNvbG9yTnVtYmVyKSB7XHJcblx0XHRjYXNlIDE6XHJcblx0XHRcdHJldHVybiAnQmx1ZUJsb2NrJztcclxuXHRcdGNhc2UgMjpcclxuXHRcdFx0cmV0dXJuICdHcmVlbkJsb2NrJztcclxuXHRcdGNhc2UgMzpcclxuXHRcdFx0cmV0dXJuICdQdXJwbGVCbG9jayc7XHJcblx0XHRjYXNlIDQ6XHJcblx0XHRcdHJldHVybiAnUmVkQmxvY2snO1xyXG5cdFx0Y2FzZSA1OlxyXG5cdFx0XHRyZXR1cm4gJ1llbGxvd0Jsb2NrJztcclxuXHRcdGRlZmF1bHQ6XHJcblx0XHRcdHJldHVybiAnQmx1ZUJsb2NrJztcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja0NsaWNrKHVYOiBudW1iZXIsIHVZOiBudW1iZXIsIHg6IG51bWJlciwgeTogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgd2lkdGg6bnVtYmVyKSB7XHJcblx0cmV0dXJuIHVZID4geSAmJiB1WSA8IHkgKyBoZWlnaHQgJiYgdVggPiB4ICYmIHVYIDwgeCArIHdpZHRoXHJcbn1cclxuIiwiaW1wb3J0IFZpZXcgZnJvbSAnLi92aWV3JztcclxuaW1wb3J0IHsgSU1BR0VfU0laRV9DT0VGRklDSUVOVCB9IGZyb20gJy4uL2NvbnN0YW50cyc7XHJcbmltcG9ydCBFbmRXb3JsZCBmcm9tICcuLi93b3JsZHMvZW5kV29ybGQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW5kVmlldyBleHRlbmRzIFZpZXcge1xyXG5cdHB1YmxpYyBpbml0KHdvcmxkOiBFbmRXb3JsZCk6IHZvaWQge1xyXG5cdFx0dGhpcy5pbml0QnV0dG9uKHdvcmxkKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyB1cGRhdGUod29ybGQ6IEVuZFdvcmxkKTogdm9pZCB7XHJcblx0XHR0aGlzLnJlbmRlclNjZW5lKHdvcmxkKTtcclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCByZW5kZXJTY2VuZSh3b3JsZDogRW5kV29ybGQpOiB2b2lkIHtcclxuXHRcdGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gdGhpcy5fY2FudmFzO1xyXG5cdFx0Y29uc3QgeyBCdXR0b24gfSA9IHRoaXMuX2dhbWVJbWFnZXM7XHJcblx0XHRjb25zdCBiV2lkdGggPSAoQnV0dG9uLndpZHRoIC8gSU1BR0VfU0laRV9DT0VGRklDSUVOVCkgKiAyO1xyXG5cdFx0Y29uc3QgYkhlaWdodCA9IChCdXR0b24uaGVpZ2h0IC8gSU1BR0VfU0laRV9DT0VGRklDSUVOVCkgKiAyO1xyXG5cdFx0Y29uc3QgZHggPSB3aWR0aCAvIDIgLSBiV2lkdGggLyAyO1xyXG5cdFx0Y29uc3QgZHkgPSBoZWlnaHQgLyAyIC0gYkhlaWdodCAvIDI7XHJcblx0XHR0aGlzLl9jdHguZmlsbFN0eWxlID0gJyNhMWExYTEnO1xyXG5cdFx0dGhpcy5fY3R4LmZpbGxSZWN0KDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xyXG5cdFx0dGhpcy5fY3R4LmRyYXdJbWFnZShCdXR0b24sIGR4LCBkeSwgYldpZHRoLCBiSGVpZ2h0KTtcclxuXHRcdHRoaXMuX2N0eC5maWxsU3R5bGUgPSAnI2ZmZic7XHJcblx0XHR0aGlzLl9jdHguZm9udCA9ICczNHB4IE1hcnZpbic7XHJcblx0XHRsZXQgdGV4dCA9IGDQl9Cw0L3QvtCy0L5gO1xyXG5cdFx0dGhpcy5fY3R4LmZpbGxUZXh0KHRleHQsIGR4ICsgYldpZHRoIC8gMiAtIHRoaXMuX2N0eC5tZWFzdXJlVGV4dCh0ZXh0KS53aWR0aCAvIDIsIGR5ICsgYkhlaWdodCAvIDIgKyAxMCk7XHJcblx0XHR0aGlzLl9jdHguZm9udCA9ICc1NHB4IE1hcnZpbic7XHJcblx0XHR0ZXh0ID0gYNCS0YsgJHt3b3JsZC5yZXN1bHR9YDtcclxuXHRcdHRoaXMuX2N0eC5maWxsVGV4dCh0ZXh0LCB3aWR0aCAvIDIgLSB0aGlzLl9jdHgubWVhc3VyZVRleHQodGV4dCkud2lkdGggLyAyLCBkeSArIGJIZWlnaHQgLyAyIC0gMTAwKTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgaW5pdEJ1dHRvbih3b3JsZDogRW5kV29ybGQpIHtcclxuXHRcdGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gdGhpcy5fY2FudmFzO1xyXG5cdFx0Y29uc3QgeyBCdXR0b24gfSA9IHRoaXMuX2dhbWVJbWFnZXM7XHJcblx0XHRjb25zdCBiV2lkdGggPSAoQnV0dG9uLndpZHRoIC8gSU1BR0VfU0laRV9DT0VGRklDSUVOVCkgKiAyO1xyXG5cdFx0Y29uc3QgYkhlaWdodCA9IChCdXR0b24uaGVpZ2h0IC8gSU1BR0VfU0laRV9DT0VGRklDSUVOVCkgKiAyO1xyXG5cdFx0Y29uc3QgZHggPSB3aWR0aCAvIDIgLSBiV2lkdGggLyAyO1xyXG5cdFx0Y29uc3QgZHkgPSBoZWlnaHQgLyAyIC0gYkhlaWdodCAvIDI7XHJcblx0XHR3b3JsZC5hZ2FpbkJ1dHRvbi5pbml0KFxyXG5cdFx0XHR7IHg6IGR4LCB5OiBkeSB9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0d2lkdGg6IGJXaWR0aCxcclxuXHRcdFx0XHRoZWlnaHQ6IGJIZWlnaHQsXHJcblx0XHRcdH1cclxuXHRcdCk7XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgY2xlYXJTY3JlZW4oKTogdm9pZCB7XHJcblx0XHR0aGlzLl9jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuX2NhbnZhcy53aWR0aCwgdGhpcy5fY2FudmFzLmhlaWdodCk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCBWaWV3IGZyb20gJy4vdmlldyc7XHJcbmltcG9ydCB7IElNQUdFX1NJWkVfQ09FRkZJQ0lFTlQsIFRFTEVQT1JUX0NPU1QgfSBmcm9tICcuLi9jb25zdGFudHMnO1xyXG5pbXBvcnQgU2NvcmUgZnJvbSAnLi4vc2NvcmUnO1xyXG5pbXBvcnQgR2FtZVdvcmxkIGZyb20gJy4uL3dvcmxkcy9nYW1lV29ybGQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVZpZXcgZXh0ZW5kcyBWaWV3IHtcclxuXHRpbml0KHdvcmxkOiBHYW1lV29ybGQpOiB2b2lkIHtcclxuXHRcdHRoaXMuaW5pdEdyaWQod29ybGQpO1xyXG5cdFx0dGhpcy5pbml0UHJvZ3Jlc3NCYXIod29ybGQpO1xyXG5cdFx0dGhpcy5pbml0Qm9udXMod29ybGQpO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlKHdvcmxkOiBHYW1lV29ybGQpOiB2b2lkIHtcclxuXHRcdHRoaXMuY2xlYXJTY3JlZW4oKTtcclxuXHRcdHRoaXMucmVuZGVyU2NlbmUod29ybGQpO1xyXG5cdH1cclxuXHJcblx0cmVuZGVyU2NlbmUod29ybGQ6IEdhbWVXb3JsZCkge1xyXG5cdFx0dGhpcy5yZW5kZXJIZWFkZXIod29ybGQpO1xyXG5cdFx0dGhpcy5yZW5kZXJHcmlkKHdvcmxkKTtcclxuXHRcdHRoaXMucmVuZGVyU2NvcmUod29ybGQpO1xyXG5cdFx0dGhpcy5yZW5kZXJQcm9ncmVzc0Jhcih3b3JsZCk7XHJcblx0XHR0aGlzLnJlbmRlckJvbnVzKHdvcmxkKTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgcmVuZGVySGVhZGVyKHdvcmxkOiBHYW1lV29ybGQpIHtcclxuXHRcdGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gdGhpcy5fY2FudmFzO1xyXG5cdFx0Y29uc3QgeyBIZWFkZXJQYW5lbCwgTW9uZXlCbG9jayB9ID0gdGhpcy5fZ2FtZUltYWdlcztcclxuXHJcblx0XHR0aGlzLl9jdHguZmlsbFN0eWxlID0gJyNhMWExYTEnO1xyXG5cdFx0dGhpcy5fY3R4LmZpbGxSZWN0KDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xyXG5cdFx0Y29uc3QgZHggPSB3aWR0aCAvIDIgLSBIZWFkZXJQYW5lbC53aWR0aCAvIElNQUdFX1NJWkVfQ09FRkZJQ0lFTlQgLyAyO1xyXG5cdFx0dGhpcy5fY3R4LmRyYXdJbWFnZShIZWFkZXJQYW5lbCwgZHgsIDAsIEhlYWRlclBhbmVsLndpZHRoIC8gSU1BR0VfU0laRV9DT0VGRklDSUVOVCwgSGVhZGVyUGFuZWwuaGVpZ2h0IC8gSU1BR0VfU0laRV9DT0VGRklDSUVOVCk7XHJcblx0XHR0aGlzLl9jdHguZHJhd0ltYWdlKE1vbmV5QmxvY2ssIGR4ICsgMzUsIEhlYWRlclBhbmVsLmhlaWdodCAvIElNQUdFX1NJWkVfQ09FRkZJQ0lFTlQgLyAxMCwgTW9uZXlCbG9jay53aWR0aCAvIElNQUdFX1NJWkVfQ09FRkZJQ0lFTlQsIE1vbmV5QmxvY2suaGVpZ2h0IC8gSU1BR0VfU0laRV9DT0VGRklDSUVOVCk7XHJcblxyXG5cdFx0dGhpcy5fY3R4LmZpbGxTdHlsZSA9ICcjZmZmJztcclxuXHRcdHRoaXMuX2N0eC5mb250ID0gJzIwcHggTWFydmluJztcclxuXHRcdHRoaXMuX2N0eC5maWxsVGV4dCgn0L/RgNC+0LPRgNC10YHRgScsIHdpZHRoIC8gMiAtIDcwLCAyMyk7XHJcblx0XHR0aGlzLl9jdHguZmlsbFRleHQoYCR7d29ybGQubW9uZXl9YCwgZHggKyBNb25leUJsb2NrLndpZHRoIC8gSU1BR0VfU0laRV9DT0VGRklDSUVOVCAvIDEuMywgSGVhZGVyUGFuZWwuaGVpZ2h0IC8gSU1BR0VfU0laRV9DT0VGRklDSUVOVCAvIDIpO1xyXG5cdH1cclxuXHJcblx0cmVuZGVyU2NvcmUod29ybGQ6IEdhbWVXb3JsZCkge1xyXG5cdFx0Y29uc3Qgc2NvcmVQYW5lbEltYWdlID0gdGhpcy5fZ2FtZUltYWdlcy5TY29yZVBhbmVsO1xyXG5cdFx0Y29uc3QgZHggPSB0aGlzLl9jYW52YXMud2lkdGggLyAyICsgMTI1O1xyXG5cdFx0Y29uc3QgZHkgPSB0aGlzLl9nYW1lSW1hZ2VzLkhlYWRlclBhbmVsLmhlaWdodCAvIElNQUdFX1NJWkVfQ09FRkZJQ0lFTlQgKyA1NDtcclxuXHRcdGNvbnN0IHRleHREeCA9IGR4ICsgc2NvcmVQYW5lbEltYWdlLndpZHRoIC8gSU1BR0VfU0laRV9DT0VGRklDSUVOVCAvIDI7XHJcblx0XHR0aGlzLl9jdHguZHJhd0ltYWdlKHNjb3JlUGFuZWxJbWFnZSwgZHgsIGR5LCBzY29yZVBhbmVsSW1hZ2Uud2lkdGggLyBJTUFHRV9TSVpFX0NPRUZGSUNJRU5ULCBzY29yZVBhbmVsSW1hZ2UuaGVpZ2h0IC8gSU1BR0VfU0laRV9DT0VGRklDSUVOVCk7XHJcblx0XHR0aGlzLnJlbmRlclNjb3JlVGV4dCh3b3JsZC5zY29yZSwgdGV4dER4LCBkeSwgc2NvcmVQYW5lbEltYWdlKTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgZ2V0VGV4dFNjb3JlRHkgPSAocGFuZWxEeTogbnVtYmVyLCBpbWFnZTogSFRNTEltYWdlRWxlbWVudCwgazogbnVtYmVyKSA9PiBwYW5lbER5ICsgaW1hZ2UuaGVpZ2h0IC8gSU1BR0VfU0laRV9DT0VGRklDSUVOVCAvIGs7XHJcblxyXG5cdHByaXZhdGUgZ2V0VGV4dFNjb3JlRHggPSAodGV4dER4OiBudW1iZXIsIHRleHQ6IHN0cmluZykgPT4gdGV4dER4IC0gdGhpcy5fY3R4Lm1lYXN1cmVUZXh0KHRleHQpLndpZHRoIC8gMjtcclxuXHJcblx0cHJpdmF0ZSByZW5kZXJTY29yZVRleHQoc2NvcmU6IFNjb3JlLCB0ZXh0RHg6IG51bWJlciwgcGFuZWxEeTogbnVtYmVyLCBpbWFnZTogSFRNTEltYWdlRWxlbWVudCkge1xyXG5cdFx0Y29uc3QgeyBwb2ludHMsIG1vdmVzIH0gPSBzY29yZTtcclxuXHRcdHRoaXMuX2N0eC5mb250ID0gJzIwcHggTWFydmluJztcclxuXHRcdGxldCB0ZXh0ID0gJ9Cy0YDQtdC80Y86JztcclxuXHRcdHRoaXMuX2N0eC5maWxsVGV4dCh0ZXh0LCB0aGlzLmdldFRleHRTY29yZUR4KHRleHREeCwgdGV4dCksIHBhbmVsRHkpO1xyXG5cdFx0dGhpcy5fY3R4LmZvbnQgPSAnMzRweCBNYXJ2aW4nO1xyXG5cdFx0dGV4dCA9IGAke3BvaW50c31gO1xyXG5cdFx0dGhpcy5fY3R4LmZpbGxUZXh0KHRleHQsIHRoaXMuZ2V0VGV4dFNjb3JlRHgodGV4dER4LCB0ZXh0KSwgdGhpcy5nZXRUZXh0U2NvcmVEeShwYW5lbER5LCBpbWFnZSwgMS4xNikpO1xyXG5cdFx0dGV4dCA9IGAke21vdmVzfWA7XHJcblx0XHR0aGlzLl9jdHguZm9udCA9ICc1MnB4IE1hcnZpbic7XHJcblx0XHR0aGlzLl9jdHguZmlsbFRleHQodGV4dCwgdGhpcy5nZXRUZXh0U2NvcmVEeCh0ZXh0RHgsIHRleHQpLCB0aGlzLmdldFRleHRTY29yZUR5KHBhbmVsRHksIGltYWdlLCAyLjUpKTtcclxuXHRcdHRleHQgPSAn0L7Rh9C60Lg6JztcclxuXHRcdHRoaXMuX2N0eC5mb250ID0gJzIwcHggTWFydmluJztcclxuXHRcdHRoaXMuX2N0eC5maWxsVGV4dCh0ZXh0LCB0aGlzLmdldFRleHRTY29yZUR4KHRleHREeCwgdGV4dCksIHRoaXMuZ2V0VGV4dFNjb3JlRHkocGFuZWxEeSwgaW1hZ2UsIDEuNCkpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBpbml0Qm9udXMod29ybGQ6IEdhbWVXb3JsZCkge1xyXG5cdFx0Y29uc3QgeyBTY29yZVBhbmVsLCBIZWFkZXJQYW5lbCwgQm9udXMgfSA9IHRoaXMuX2dhbWVJbWFnZXM7XHJcblx0XHRjb25zdCBkeCA9IHRoaXMuX2NhbnZhcy53aWR0aCAvIDIgKyAxMjU7XHJcblx0XHRjb25zdCBkeSA9IEhlYWRlclBhbmVsLmhlaWdodCAvIElNQUdFX1NJWkVfQ09FRkZJQ0lFTlQgKyA1NCArIFNjb3JlUGFuZWwuaGVpZ2h0IC8gSU1BR0VfU0laRV9DT0VGRklDSUVOVDtcclxuXHRcdGNvbnN0IHNjb3JlVGV4dERYID0gZHggKyBTY29yZVBhbmVsLndpZHRoIC8gSU1BR0VfU0laRV9DT0VGRklDSUVOVCAvIDI7XHJcblx0XHR3b3JsZC5ib251cy5pbml0KHsgeDogc2NvcmVUZXh0RFggLSBCb251cy53aWR0aCAvIDMgLyAyLCB5OiBkeSArIDUwIH0sIHsgd2lkdGg6IEJvbnVzLndpZHRoIC8gMywgaGVpZ2h0OiBCb251cy5oZWlnaHQgLyAzIH0pO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSByZW5kZXJCb251cyh3b3JsZDogR2FtZVdvcmxkKSB7XHJcblx0XHRjb25zdCB7IFNjb3JlUGFuZWwsIEhlYWRlclBhbmVsLCBCb251cywgU2VsZWN0ZWRCb251cyB9ID0gdGhpcy5fZ2FtZUltYWdlcztcclxuXHRcdGNvbnN0IGR4ID0gdGhpcy5fY2FudmFzLndpZHRoIC8gMiArIDEyNTtcclxuXHRcdGNvbnN0IGR5ID0gSGVhZGVyUGFuZWwuaGVpZ2h0IC8gSU1BR0VfU0laRV9DT0VGRklDSUVOVCArIDU0ICsgU2NvcmVQYW5lbC5oZWlnaHQgLyBJTUFHRV9TSVpFX0NPRUZGSUNJRU5UO1xyXG5cdFx0Y29uc3Qgc2NvcmVUZXh0RFggPSBkeCArIFNjb3JlUGFuZWwud2lkdGggLyBJTUFHRV9TSVpFX0NPRUZGSUNJRU5UIC8gMjtcclxuXHRcdHRoaXMuX2N0eC5mb250ID0gJzIwcHggTWFydmluJztcclxuXHRcdGxldCB0ZXh0ID0gJ9Cx0L7QvdGD0YEnO1xyXG5cdFx0dGhpcy5fY3R4LmZpbGxUZXh0KHRleHQsIHNjb3JlVGV4dERYIC0gdGhpcy5fY3R4Lm1lYXN1cmVUZXh0KHRleHQpLndpZHRoIC8gMiwgZHkgKyA1MCk7XHJcblx0XHR0aGlzLl9jdHguZHJhd0ltYWdlKCF3b3JsZC5ib251cy5zZWxlY3RlZCA/IEJvbnVzIDogU2VsZWN0ZWRCb251cywgc2NvcmVUZXh0RFggLSBCb251cy53aWR0aCAvIDMgLyAyLCBkeSArIDUwLCBCb251cy53aWR0aCAvIDMsIEJvbnVzLmhlaWdodCAvIDMpO1xyXG5cdFx0dGV4dCA9IGAke1RFTEVQT1JUX0NPU1R9YDtcclxuXHRcdHRoaXMuX2N0eC5maWxsVGV4dCh0ZXh0LCBzY29yZVRleHREWCAtIHRoaXMuX2N0eC5tZWFzdXJlVGV4dCh0ZXh0KS53aWR0aCAvIDIgLSA1LCBkeSArIEJvbnVzLmhlaWdodCAvIDMgKyAyMCk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIHJlbmRlckdyaWQod29ybGQ6IEdhbWVXb3JsZCkge1xyXG5cdFx0dGhpcy5fY3R4LmRyYXdJbWFnZShcclxuXHRcdFx0dGhpcy5fZ2FtZUltYWdlcy5HYW1lUGFuZWwsXHJcblx0XHRcdHRoaXMuX2NhbnZhcy53aWR0aCAvIDIgLSB0aGlzLl9nYW1lSW1hZ2VzLkdhbWVQYW5lbC53aWR0aCAvIElNQUdFX1NJWkVfQ09FRkZJQ0lFTlQsXHJcblx0XHRcdHRoaXMuX2dhbWVJbWFnZXMuSGVhZGVyUGFuZWwuaGVpZ2h0IC8gSU1BR0VfU0laRV9DT0VGRklDSUVOVCArIDMwLFxyXG5cdFx0XHR0aGlzLl9nYW1lSW1hZ2VzLkdhbWVQYW5lbC53aWR0aCAvIElNQUdFX1NJWkVfQ09FRkZJQ0lFTlQsXHJcblx0XHRcdHRoaXMuX2dhbWVJbWFnZXMuR2FtZVBhbmVsLmhlaWdodCAvIElNQUdFX1NJWkVfQ09FRkZJQ0lFTlRcclxuXHRcdCk7XHJcblx0XHRjb25zdCB7IG4sIG0sIGJsb2NrTGF5b3V0OiBsYXlvdXQgfSA9IHdvcmxkLmdyaWQ7XHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IG47IGkgKz0gMSkge1xyXG5cdFx0XHRmb3IgKGxldCBqID0gMDsgaiA8IG07IGogKz0gMSkge1xyXG5cdFx0XHRcdGNvbnN0IHsgeCwgeSB9ID0gbGF5b3V0W2ldW2pdLnBvc2l0aW9uO1xyXG5cdFx0XHRcdGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gbGF5b3V0W2ldW2pdLnNpemU7XHJcblx0XHRcdFx0dGhpcy5fY3R4LmRyYXdJbWFnZSh0aGlzLl9nYW1lSW1hZ2VzW2xheW91dFtpXVtqXS5nZXRDb2xvckltYWdlTmFtZSgpXSwgeCwgeSwgd2lkdGgsIGhlaWdodCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHByaXZhdGUgcmVuZGVyUHJvZ3Jlc3NCYXIod29ybGQ6IEdhbWVXb3JsZCkge1xyXG5cdFx0Y29uc3QgeyBQcm9ncmVzc0Jsb2NrLCBQcm9ncmVzc1NjYWxlIH0gPSB0aGlzLl9nYW1lSW1hZ2VzO1xyXG5cdFx0Y29uc3QgZHggPSB0aGlzLl9jYW52YXMud2lkdGggLyAyIC0gUHJvZ3Jlc3NTY2FsZS53aWR0aCAvIElNQUdFX1NJWkVfQ09FRkZJQ0lFTlQgLyAyIC0gMjQ7XHJcblx0XHRjb25zdCBkdyA9IFByb2dyZXNzQmxvY2sud2lkdGggLyBJTUFHRV9TSVpFX0NPRUZGSUNJRU5UO1xyXG5cdFx0dGhpcy5fY3R4LmRyYXdJbWFnZShQcm9ncmVzc0Jsb2NrLCBkeCwgMjgsIGR3LCBQcm9ncmVzc0Jsb2NrLmhlaWdodCAvIElNQUdFX1NJWkVfQ09FRkZJQ0lFTlQpO1xyXG5cdFx0dGhpcy5fY3R4LmRyYXdJbWFnZShQcm9ncmVzc1NjYWxlLCBkeCwgMjgsIHdvcmxkLnByb2dyZXNzQmFyLndpZHRoLCBQcm9ncmVzc1NjYWxlLmhlaWdodCAvIElNQUdFX1NJWkVfQ09FRkZJQ0lFTlQgKyAxKTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgaW5pdEdyaWQod29ybGQ6IEdhbWVXb3JsZCkge1xyXG5cdFx0Y29uc3QgeyBncmlkOiBnYW1lR3JpZCB9ID0gd29ybGQ7XHJcblx0XHRjb25zdCB7IG4sIG0sIGJsb2NrTGF5b3V0OiBsYXlvdXQgfSA9IGdhbWVHcmlkO1xyXG5cdFx0Y29uc3Qgc3RhcnRYID0gdGhpcy5fY2FudmFzLndpZHRoIC8gMiAtIHRoaXMuX2dhbWVJbWFnZXMuR2FtZVBhbmVsLndpZHRoIC8gNCArIDc7XHJcblx0XHRjb25zdCBzdGFydFkgPSB0aGlzLl9nYW1lSW1hZ2VzLkhlYWRlclBhbmVsLmhlaWdodCAvIDQgKyAzMCArIDc7XHJcblx0XHRjb25zdCBibG9ja1dpZHRoID0gdGhpcy5fZ2FtZUltYWdlc1tsYXlvdXRbMF1bMF0uZ2V0Q29sb3JJbWFnZU5hbWUoKV0ud2lkdGggLyAzLjAzO1xyXG5cdFx0Y29uc3QgYmxvY2tIZWlnaHQgPSB0aGlzLl9nYW1lSW1hZ2VzW2xheW91dFswXVswXS5nZXRDb2xvckltYWdlTmFtZSgpXS5oZWlnaHQgLyAzLjAzO1xyXG5cdFx0Z2FtZUdyaWQuaW5pdChcclxuXHRcdFx0eyB4OiBzdGFydFggKyBibG9ja1dpZHRoICogbSArIDUsIHk6IHN0YXJ0WSB9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0d2lkdGg6IGJsb2NrV2lkdGggKiBtICsgNSxcclxuXHRcdFx0XHRoZWlnaHQ6IGJsb2NrSGVpZ2h0ICogbixcclxuXHRcdFx0fSxcclxuXHRcdFx0eyB3aWR0aDogYmxvY2tXaWR0aCwgaGVpZ2h0OiBibG9ja0hlaWdodCB9XHJcblx0XHQpO1xyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpICs9IDEpIHtcclxuXHRcdFx0Zm9yIChsZXQgaiA9IDA7IGogPCBtOyBqICs9IDEpIHtcclxuXHRcdFx0XHR0aGlzLl9jdHguZHJhd0ltYWdlKHRoaXMuX2dhbWVJbWFnZXNbbGF5b3V0W2ldW2pdLmdldENvbG9ySW1hZ2VOYW1lKCldLCBzdGFydFggKyBibG9ja1dpZHRoICogaiwgc3RhcnRZICsgYmxvY2tIZWlnaHQgKiBpLCBibG9ja1dpZHRoLCBibG9ja0hlaWdodCk7XHJcblx0XHRcdFx0bGF5b3V0W2ldW2pdLmluaXQoXHJcblx0XHRcdFx0XHR7IHg6IHN0YXJ0WCArIGJsb2NrV2lkdGggKiBqLCB5OiBzdGFydFkgKyBibG9ja0hlaWdodCAqIGkgfSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0d2lkdGg6IGJsb2NrV2lkdGgsXHJcblx0XHRcdFx0XHRcdGhlaWdodDogYmxvY2tIZWlnaHQsXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBpbml0UHJvZ3Jlc3NCYXIod29ybGQ6IEdhbWVXb3JsZCkge1xyXG5cdFx0Y29uc3QgcHJvZ3Jlc3NCbG9jayA9IHRoaXMuX2dhbWVJbWFnZXMuUHJvZ3Jlc3NCbG9jaztcclxuXHRcdHdvcmxkLnByb2dyZXNzQmFyLmluaXQodGhpcy5fY2FudmFzLndpZHRoIC8gMiAtIHByb2dyZXNzQmxvY2sud2lkdGggLyBJTUFHRV9TSVpFX0NPRUZGSUNJRU5UIC8gMiAtIDI0LCBwcm9ncmVzc0Jsb2NrLndpZHRoIC8gSU1BR0VfU0laRV9DT0VGRklDSUVOVCwgMjgsIHdvcmxkLnNjb3JlLnRhcmdldFBvaW50cyk7XHJcblx0fVxyXG5cclxuXHRjbGVhclNjcmVlbigpIHtcclxuXHRcdHRoaXMuX2N0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5fY2FudmFzLndpZHRoLCB0aGlzLl9jYW52YXMuaGVpZ2h0KTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IFdvcmxkIGZyb20gJy4uL3dvcmxkcy93b3JsZCc7XHJcbmltcG9ydCB7IEdhbWVJbWFnZXMgfSBmcm9tICcuLi90eXBlcyc7XHJcblxyXG5pbnRlcmZhY2UgSVZpZXcge1xyXG5cdGluaXQ6ICh3b3JsZDogV29ybGQpID0+IHZvaWQ7XHJcblx0dXBkYXRlOiAod29ybGQ6IFdvcmxkKSA9PiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBWaWV3IGltcGxlbWVudHMgSVZpZXcge1xyXG5cdHByb3RlY3RlZCBfY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcclxuXHJcblx0cHJvdGVjdGVkIF9jdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcclxuXHJcblx0cHJvdGVjdGVkIF9nYW1lSW1hZ2VzOiBHYW1lSW1hZ2VzO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LCBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgZ2FtZUltYWdlczogR2FtZUltYWdlcykge1xyXG5cdFx0dGhpcy5fY2FudmFzID0gY2FudmFzO1xyXG5cdFx0dGhpcy5fY3R4ID0gY3R4O1xyXG5cdFx0dGhpcy5fZ2FtZUltYWdlcyA9IGdhbWVJbWFnZXM7XHJcblx0fVxyXG5cclxuXHRhYnN0cmFjdCBpbml0KHdvcmxkOiBXb3JsZCk6IHZvaWQ7XHJcblxyXG5cdGFic3RyYWN0IHVwZGF0ZSh3b3JsZDogV29ybGQpOiB2b2lkO1xyXG5cclxuXHRwcm90ZWN0ZWQgYWJzdHJhY3QgcmVuZGVyU2NlbmUod29ybGQ6IFdvcmxkKTogdm9pZDtcclxuXHJcblx0cHJvdGVjdGVkIGFic3RyYWN0IGNsZWFyU2NyZWVuKCk6IHZvaWQ7XHJcbn1cclxuIiwiaW1wb3J0IFdvcmxkIGZyb20gJy4vd29ybGQnO1xyXG5pbXBvcnQgSW5wdXQgZnJvbSAnLi4vaW5wdXQnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL2dhbWVPYmplY3RzL2J1dHRvbic7XHJcbmltcG9ydCB7IGNoZWNrQ2xpY2sgfSBmcm9tICcuLi91dGlscyc7XHJcblxyXG5leHBvcnQgZW51bSBSZXN1bHQge1xyXG5cdFdpbiA9ICfQktGL0LjQs9GA0LDQu9C4JyxcclxuXHRMb3N0ID0gJ9Cf0YDQvtC40LPRgNCw0LvQuCcsXHJcblx0VW5kZWZpbmVkID0gJycsXHJcbn1cclxuXHJcbi8vIGVudW0gU3RhZ2VzIHtcclxuLy8gXHRWaWV3LFxyXG4vLyBcdEJ1dHRvbkNsaWNrZWQsXHJcbi8vIFx0QWdhaW5cclxuLy8gfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW5kV29ybGQgZXh0ZW5kcyBXb3JsZCB7XHJcblx0cHJpdmF0ZSBfcmVzdWx0OiBSZXN1bHQgPSBSZXN1bHQuVW5kZWZpbmVkO1xyXG5cclxuXHRwcml2YXRlIF9hZ2FpbkJ1dHRvbjogQnV0dG9uID0gbmV3IEJ1dHRvbigpO1xyXG5cclxuXHRwcml2YXRlIF9lbWl0RUZ1bmM6IChlTmFtZTogc3RyaW5nLCBhcmc/OiBhbnkpID0+IHZvaWQ7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHJlc3VsdDogUmVzdWx0LCBlbWl0RUZ1bmM6IChlTmFtZTogc3RyaW5nLCBhcmc/OiBhbnkpID0+IHZvaWQpIHtcclxuXHRcdHN1cGVyKCk7XHJcblx0XHR0aGlzLl9yZXN1bHQgPSByZXN1bHQ7XHJcblx0XHR0aGlzLl9lbWl0RUZ1bmMgPSBlbWl0RUZ1bmM7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgdXBkYXRlKHVzZXJJbnB1dDogSW5wdXQpOiB2b2lkIHtcclxuXHRcdHRoaXMuaGFuZGxlQ2xpY2sodXNlcklucHV0KTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgaGFuZGxlQ2xpY2sodXNlcklucHV0OiBJbnB1dCkge1xyXG5cdFx0Y29uc3QgeyB4OiB1WCwgeTogdVkgfSA9IHVzZXJJbnB1dDtcclxuXHRcdGlmICh1WCAhPT0gMCAmJiB1WSAhPT0gMCkge1xyXG5cdFx0XHRjb25zdCB7IHgsIHksIHdpZHRoLCBoZWlnaHQgfSA9IHRoaXMuX2FnYWluQnV0dG9uO1xyXG5cdFx0XHRpZiAoY2hlY2tDbGljayh1WCwgdVksIHgsIHksIGhlaWdodCwgd2lkdGgpKSB7XHJcblx0XHRcdFx0Ly8gdGhpcy5fYWdhaW5CdXR0b24udG9nZ2xlU2VsZWN0KCk7XHJcblx0XHRcdFx0dGhpcy5fZW1pdEVGdW5jKCduZXdHYW1lJyk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzZXQgcmVzdWx0KHJlc3VsdDogUmVzdWx0KSB7XHJcblx0XHR0aGlzLl9yZXN1bHQgPSByZXN1bHQ7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZ2V0IHJlc3VsdCgpIHtcclxuXHRcdHJldHVybiB0aGlzLl9yZXN1bHQ7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZ2V0IGFnYWluQnV0dG9uKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2FnYWluQnV0dG9uO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgV29ybGQgZnJvbSAnLi93b3JsZCc7XHJcbmltcG9ydCBJbnB1dCBmcm9tICcuLi9pbnB1dCc7XHJcbmltcG9ydCBTY29yZSBmcm9tICcuLi9zY29yZSc7XHJcbmltcG9ydCBHcmlkIGZyb20gJy4uL2dhbWVPYmplY3RzL2dyaWQnO1xyXG5pbXBvcnQgUHJvZ3Jlc3NCYXIgZnJvbSAnLi4vcHJvZ3Jlc3NCYXInO1xyXG5pbXBvcnQgeyBEaXJlY3Rpb24sIEdyaWRJbmZvLCBQb3NpdGlvbkxpc3QsIFJlc2l6ZVR5cGUgfSBmcm9tICcuLi90eXBlcyc7XHJcbmltcG9ydCBCbG9jayBmcm9tICcuLi9ibG9jayc7XHJcbmltcG9ydCB7IGNoZWNrQ2xpY2ssIGNob29zZUNvbG9yLCBnZXRSYW5kb21WYWx1ZSB9IGZyb20gJy4uL3V0aWxzJztcclxuaW1wb3J0IHsgUmVzdWx0IH0gZnJvbSAnLi9lbmRXb3JsZCc7XHJcbmltcG9ydCBCb251cyBmcm9tICcuLi9nYW1lT2JqZWN0cy9Cb251cyc7XHJcbmltcG9ydCB7IFRFTEVQT1JUX0NPU1QgfSBmcm9tICcuLi9jb25zdGFudHMnO1xyXG5cclxuZW51bSBTdGFnZSB7XHJcblx0U2VsZWN0aW5nLFxyXG5cdFNoYWRpbmcsXHJcblx0RGVsZXRpbmcsXHJcblx0TW92aW5nLFxyXG5cdFJlY292ZXJ5LFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lV29ybGQgZXh0ZW5kcyBXb3JsZCB7XHJcblx0cHJpdmF0ZSBpc0xhc3RNb3ZlID0gZmFsc2U7XHJcblxyXG5cdHByaXZhdGUgX3Njb3JlOiBTY29yZTtcclxuXHJcblx0cHJpdmF0ZSBfZ3JpZDogR3JpZDtcclxuXHJcblx0cHJpdmF0ZSBfcHJvZ3Jlc3NCYXI6IFByb2dyZXNzQmFyO1xyXG5cclxuXHRwcml2YXRlIF9ib251czogQm9udXM7XHJcblxyXG5cdHByaXZhdGUgX3N0YWdlOiBTdGFnZTtcclxuXHJcblx0cHJpdmF0ZSBfdGVtcExpc3Q6IFBvc2l0aW9uTGlzdCA9IFtdO1xyXG5cclxuXHRwcml2YXRlIF9saXN0OiBQb3NpdGlvbkxpc3QgPSBbXTtcclxuXHJcblx0cHJpdmF0ZSBfZW1pdEVGdW5jOiAoZU5hbWU6IHN0cmluZywgYXJnOiBhbnkpID0+IHZvaWQ7XHJcblxyXG5cdHByaXZhdGUgX21vbmV5ID0gMDtcclxuXHJcblx0Y29uc3RydWN0b3IoZ3JpZEluZm86IEdyaWRJbmZvLCB4OiBudW1iZXIsIHk6IG51bWJlciwgbW9uZXk6IG51bWJlciwgZW1pdEVGdW5jOiAoZU5hbWU6IHN0cmluZywgYXJnOiBhbnkpID0+IHZvaWQpIHtcclxuXHRcdHN1cGVyKCk7XHJcblx0XHR0aGlzLl9ncmlkID0gbmV3IEdyaWQoZ3JpZEluZm8sIGVtaXRFRnVuYyk7XHJcblx0XHR0aGlzLl9wcm9ncmVzc0JhciA9IG5ldyBQcm9ncmVzc0JhcigpO1xyXG5cdFx0dGhpcy5fYm9udXMgPSBuZXcgQm9udXMoKTtcclxuXHRcdHRoaXMuX3Njb3JlID0gbmV3IFNjb3JlKHgsIHkpO1xyXG5cdFx0dGhpcy5fc3RhZ2UgPSBTdGFnZS5TZWxlY3Rpbmc7XHJcblx0XHR0aGlzLl9tb25leSA9IG1vbmV5O1xyXG5cdFx0dGhpcy5fZW1pdEVGdW5jID0gZW1pdEVGdW5jO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlKHVzZXJJbnB1dDogSW5wdXQpOiB2b2lkIHtcclxuXHRcdHN3aXRjaCAodGhpcy5fc3RhZ2UpIHtcclxuXHRcdFx0Y2FzZSBTdGFnZS5TZWxlY3Rpbmc6XHJcblx0XHRcdFx0dGhpcy5oYW5kbGVTZWxlY3QodXNlcklucHV0KTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSBTdGFnZS5TaGFkaW5nOlxyXG5cdFx0XHRcdHRoaXMuaGFuZGxlU2hhZGluZygpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIFN0YWdlLkRlbGV0aW5nOlxyXG5cdFx0XHRcdHRoaXMuaGFuZGxlRGVsZXRpbmcoKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSBTdGFnZS5Nb3Zpbmc6XHJcblx0XHRcdFx0dGhpcy5oYW5kbGVNb3ZpbmcoKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSBTdGFnZS5SZWNvdmVyeTpcclxuXHRcdFx0XHR0aGlzLmhhbmRsZVJlY292ZXJ5KCk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCdVbmtub3duIHN0YWdlJyk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGhhbmRsZVNlbGVjdCh1c2VySW5wdXQ6IElucHV0KSB7XHJcblx0XHRjb25zdCB7IHg6IHVYLCB5OiB1WSB9ID0gdXNlcklucHV0O1xyXG5cdFx0aWYgKHVYICE9PSAwICYmIHVZICE9PSAwKSB7XHJcblx0XHRcdHRoaXMuaGFuZGxlU2VsZWN0R3JpZCh1c2VySW5wdXQpO1xyXG5cdFx0XHR0aGlzLmhhbmRsZVNlbGVjdEJvbnVzKHVzZXJJbnB1dCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGhhbmRsZVNlbGVjdEdyaWQodXNlcklucHV0OiBJbnB1dCkge1xyXG5cdFx0Y29uc3QgeyB4OiB1WCwgeTogdVkgfSA9IHVzZXJJbnB1dDtcclxuXHRcdGNvbnN0IHsgeCwgeSwgbiwgbSwgd2lkdGgsIGhlaWdodCB9ID0gdGhpcy5fZ3JpZDtcclxuXHRcdGlmICh1WSA+IHkgJiYgdVkgPCB5ICsgaGVpZ2h0ICYmIHVYIDwgeCAmJiB1WCA+IHggLSB3aWR0aCkge1xyXG5cdFx0XHRjb25zdCByb3cgPSBNYXRoLmZsb29yKCh1WSAtIHkpIC8gKGhlaWdodCAvIG4pKTtcclxuXHRcdFx0Y29uc3QgY29sID0gTWF0aC5mbG9vcigodVggLSAoeCAtIHdpZHRoKSkgLyAod2lkdGggLyBtKSk7XHJcblx0XHRcdGNvbnN0IGxheW91dCA9IHRoaXMuX2dyaWQuYmxvY2tMYXlvdXQ7XHJcblx0XHRcdGxheW91dFtyb3ddW2NvbF0udG9nZ2xlU2VsZWN0KCk7XHJcblx0XHRcdHRoaXMuX3RlbXBMaXN0LnB1c2goW3JvdywgY29sXSk7XHJcblx0XHRcdHRoaXMuX2xpc3QucHVzaChbcm93LCBjb2xdKTtcclxuXHRcdFx0aWYgKHRoaXMuX2JvbnVzLnNlbGVjdGVkKSB7XHJcblx0XHRcdFx0aWYgKHRoaXMuX2xpc3QubGVuZ3RoID09PSAyKSB7XHJcblx0XHRcdFx0XHRpZiAodGhpcy5fbGlzdFswXVswXSA9PT0gdGhpcy5fbGlzdFsxXVswXSAmJiB0aGlzLl9saXN0WzBdWzFdID09PSB0aGlzLl9saXN0WzFdWzFdKSB7XHJcblx0XHRcdFx0XHRcdGlmKGxheW91dFt0aGlzLl9saXN0WzBdWzBdXVt0aGlzLl9saXN0WzBdWzFdXS5pc1NlbGVjdGVkKCkpIGxheW91dFt0aGlzLl9saXN0WzBdWzBdXVt0aGlzLl9saXN0WzBdWzFdXS50b2dnbGVTZWxlY3QoKTtcclxuXHRcdFx0XHRcdFx0dGhpcy5fbGlzdCA9IFtdO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5fc3RhZ2UgKz0gMjtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gZWxzZSB0aGlzLl9zdGFnZSArPSAxO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBoYW5kbGVTZWxlY3RCb251cyh1c2VySW5wdXQ6IElucHV0KSB7XHJcblx0XHRjb25zdCB7IHg6IHVYLCB5OiB1WSB9ID0gdXNlcklucHV0O1xyXG5cdFx0Y29uc3QgeyB4LCB5LCB3aWR0aCwgaGVpZ2h0IH0gPSB0aGlzLl9ib251cztcclxuXHRcdGlmIChjaGVja0NsaWNrKHVYLCB1WSwgeCwgeSwgaGVpZ2h0LCB3aWR0aCkpIHtcclxuXHRcdFx0aWYgKHRoaXMuX21vbmV5ID49IFRFTEVQT1JUX0NPU1QgJiYgIXRoaXMuYm9udXMuc2VsZWN0ZWQpIHtcclxuXHRcdFx0XHR0aGlzLmJvbnVzLnRvZ2dsZVNlbGVjdCgpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGhhbmRsZVNoYWRpbmcoKSB7XHJcblx0XHRpZiAodGhpcy5fdGVtcExpc3QubGVuZ3RoID09PSAwKSB7XHJcblx0XHRcdGlmICh0aGlzLl9saXN0Lmxlbmd0aCA9PT0gMSkge1xyXG5cdFx0XHRcdHRoaXMuX2dyaWQuYmxvY2tMYXlvdXRbdGhpcy5fbGlzdFswXVswXV1bdGhpcy5fbGlzdFswXVsxXV0udG9nZ2xlU2VsZWN0KCk7XHJcblx0XHRcdFx0dGhpcy5fc3RhZ2UgLT0gMTtcclxuXHRcdFx0XHR0aGlzLl9saXN0ID0gW107XHJcblx0XHRcdFx0dGhpcy5fdGVtcExpc3QgPSBbXTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR0aGlzLl9zY29yZS5kZWNyZWFzZU1vdmVzTnVtKCk7XHJcblx0XHRcdFx0Y29uc3QgeyBwb2ludHMsIHRhcmdldFBvaW50cywgbW92ZXMsIHRhcmdldE1vdmVzIH0gPSB0aGlzLl9zY29yZTtcclxuXHRcdFx0XHRpZiAobW92ZXMgPD0gdGFyZ2V0TW92ZXMgJiYgcG9pbnRzIDwgdGFyZ2V0UG9pbnRzKSB0aGlzLmlzTGFzdE1vdmUgPSB0cnVlO1xyXG5cdFx0XHRcdHRoaXMuX3RlbXBMaXN0ID0gdGhpcy5fbGlzdDtcclxuXHRcdFx0XHR0aGlzLl9zdGFnZSArPSAxO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdGxldCBwb3NpdGlvbkxpc3Q6IFBvc2l0aW9uTGlzdCA9IFtdO1xyXG5cdFx0Y29uc3QgeyBuLCBtIH0gPSB0aGlzLmdyaWQ7XHJcblx0XHR0aGlzLl90ZW1wTGlzdC5mb3JFYWNoKChbcm93LCBjb2xdKSA9PiB7XHJcblx0XHRcdHBvc2l0aW9uTGlzdCA9IFsuLi5wb3NpdGlvbkxpc3QsIC4uLkdhbWVXb3JsZC5zZWxlY3ROZWlnaGJvcnMocm93LCBjb2wsIHRoaXMuX2dyaWQuYmxvY2tMYXlvdXQsIG4sIG0pXTtcclxuXHRcdH0pO1xyXG5cdFx0dGhpcy5fbGlzdCA9IFsuLi50aGlzLl9saXN0LCAuLi5wb3NpdGlvbkxpc3RdO1xyXG5cdFx0dGhpcy5fdGVtcExpc3QgPSBwb3NpdGlvbkxpc3Q7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIHN0YXRpYyBzZWxlY3ROZWlnaGJvcnMocm93OiBudW1iZXIsIGNvbDogbnVtYmVyLCBkZXNrOiBCbG9ja1tdW10sIGdyaWROOiBudW1iZXIsIGdyaWRNOiBudW1iZXIpOiBQb3NpdGlvbkxpc3Qge1xyXG5cdFx0Y29uc3QgdGVtcExpc3Q6IFBvc2l0aW9uTGlzdCA9IFtdO1xyXG5cdFx0T2JqZWN0LnZhbHVlcyhEaXJlY3Rpb24pLmZvckVhY2goZGlyZWN0aW9uID0+IHtcclxuXHRcdFx0Y29uc3QgZGVza1Bvc2l0aW9uSXRlbSA9IEdhbWVXb3JsZC5maW5kTmVpZ2hib3IoZGlyZWN0aW9uLCByb3csIGNvbCwgZGVzaywgZ3JpZE4sIGdyaWRNLCB0cnVlKTtcclxuXHRcdFx0aWYgKHR5cGVvZiBkZXNrUG9zaXRpb25JdGVtWzBdICE9PSAndW5kZWZpbmVkJykge1xyXG5cdFx0XHRcdHRlbXBMaXN0LnB1c2goZGVza1Bvc2l0aW9uSXRlbSBhcyBbbnVtYmVyLCBudW1iZXJdKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRyZXR1cm4gdGVtcExpc3Q7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIHN0YXRpYyBmaW5kTmVpZ2hib3IoZGlyZWN0aW9uOiBEaXJlY3Rpb24gfCBzdHJpbmcsIHJvdzogbnVtYmVyLCBjb2w6IG51bWJlciwgbGF5b3V0OiBCbG9ja1tdW10sIGdyaWROOiBudW1iZXIsIGdyaWRNOiBudW1iZXIsIHNlbGVjdCA9IGZhbHNlKTogW251bWJlciwgbnVtYmVyXSB8IFt1bmRlZmluZWQsIHVuZGVmaW5lZF0ge1xyXG5cdFx0Y29uc3QgeyBVcCwgUmlnaHQsIExlZnQsIERvd24gfSA9IERpcmVjdGlvbjtcclxuXHRcdHN3aXRjaCAoZGlyZWN0aW9uKSB7XHJcblx0XHRcdGNhc2UgVXA6XHJcblx0XHRcdFx0cmV0dXJuIEdhbWVXb3JsZC5jaGVja1VwKGxheW91dCwgcm93LCBjb2wsIHNlbGVjdCk7XHJcblx0XHRcdGNhc2UgUmlnaHQ6XHJcblx0XHRcdFx0cmV0dXJuIEdhbWVXb3JsZC5jaGVja1JpZ2h0KGxheW91dCwgcm93LCBjb2wsIHNlbGVjdCwgZ3JpZE0pO1xyXG5cdFx0XHRjYXNlIExlZnQ6XHJcblx0XHRcdFx0cmV0dXJuIEdhbWVXb3JsZC5jaGVja0xlZnQobGF5b3V0LCByb3csIGNvbCwgc2VsZWN0KTtcclxuXHRcdFx0Y2FzZSBEb3duOlxyXG5cdFx0XHRcdHJldHVybiBHYW1lV29ybGQuY2hlY2tEb3duKGxheW91dCwgcm93LCBjb2wsIHNlbGVjdCwgZ3JpZE4pO1xyXG5cdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdHJldHVybiBbdW5kZWZpbmVkLCB1bmRlZmluZWRdO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBzdGF0aWMgY2hlY2tVcChsYXlvdXQ6IEJsb2NrW11bXSwgcm93OiBudW1iZXIsIGNvbDogbnVtYmVyLCBzZWxlY3Q6IGJvb2xlYW4pOiBbbnVtYmVyLCBudW1iZXJdIHwgW3VuZGVmaW5lZCwgdW5kZWZpbmVkXSB7XHJcblx0XHRpZiAocm93ICE9PSAwICYmIGxheW91dFtyb3ddW2NvbF0uY29sb3IgPT09IGxheW91dFtyb3cgLSAxXVtjb2xdLmNvbG9yICYmICFsYXlvdXRbcm93IC0gMV1bY29sXS5pc1NlbGVjdGVkKCkpIHtcclxuXHRcdFx0aWYgKHNlbGVjdCkgbGF5b3V0W3JvdyAtIDFdW2NvbF0udG9nZ2xlU2VsZWN0KCk7XHJcblx0XHRcdHJldHVybiBbcm93IC0gMSwgY29sXTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBbdW5kZWZpbmVkLCB1bmRlZmluZWRdO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBzdGF0aWMgY2hlY2tSaWdodChsYXlvdXQ6IEJsb2NrW11bXSwgcm93OiBudW1iZXIsIGNvbDogbnVtYmVyLCBzZWxlY3Q6IGJvb2xlYW4sIG06IG51bWJlcik6IFtudW1iZXIsIG51bWJlcl0gfCBbdW5kZWZpbmVkLCB1bmRlZmluZWRdIHtcclxuXHRcdGlmIChjb2wgIT09IG0gLSAxICYmIGxheW91dFtyb3ddW2NvbF0uY29sb3IgPT09IGxheW91dFtyb3ddW2NvbCArIDFdLmNvbG9yICYmICFsYXlvdXRbcm93XVtjb2wgKyAxXS5pc1NlbGVjdGVkKCkpIHtcclxuXHRcdFx0aWYgKHNlbGVjdCkgbGF5b3V0W3Jvd11bY29sICsgMV0udG9nZ2xlU2VsZWN0KCk7XHJcblx0XHRcdHJldHVybiBbcm93LCBjb2wgKyAxXTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBbdW5kZWZpbmVkLCB1bmRlZmluZWRdO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBzdGF0aWMgY2hlY2tMZWZ0KGxheW91dDogQmxvY2tbXVtdLCByb3c6IG51bWJlciwgY29sOiBudW1iZXIsIHNlbGVjdDogYm9vbGVhbik6IFtudW1iZXIsIG51bWJlcl0gfCBbdW5kZWZpbmVkLCB1bmRlZmluZWRdIHtcclxuXHRcdGlmIChjb2wgIT09IDAgJiYgbGF5b3V0W3Jvd11bY29sXS5jb2xvciA9PT0gbGF5b3V0W3Jvd11bY29sIC0gMV0uY29sb3IgJiYgIWxheW91dFtyb3ddW2NvbCAtIDFdLmlzU2VsZWN0ZWQoKSkge1xyXG5cdFx0XHRpZiAoc2VsZWN0KSBsYXlvdXRbcm93XVtjb2wgLSAxXS50b2dnbGVTZWxlY3QoKTtcclxuXHRcdFx0cmV0dXJuIFtyb3csIGNvbCAtIDFdO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIFt1bmRlZmluZWQsIHVuZGVmaW5lZF07XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIHN0YXRpYyBjaGVja0Rvd24obGF5b3V0OiBCbG9ja1tdW10sIHJvdzogbnVtYmVyLCBjb2w6IG51bWJlciwgc2VsZWN0OiBib29sZWFuLCBuOiBudW1iZXIpOiBbbnVtYmVyLCBudW1iZXJdIHwgW3VuZGVmaW5lZCwgdW5kZWZpbmVkXSB7XHJcblx0XHRpZiAocm93ICE9PSBuIC0gMSAmJiBsYXlvdXRbcm93XVtjb2xdLmNvbG9yID09PSBsYXlvdXRbcm93ICsgMV1bY29sXS5jb2xvciAmJiAhbGF5b3V0W3JvdyArIDFdW2NvbF0uaXNTZWxlY3RlZCgpKSB7XHJcblx0XHRcdGlmIChzZWxlY3QpIGxheW91dFtyb3cgKyAxXVtjb2xdLnRvZ2dsZVNlbGVjdCgpO1xyXG5cdFx0XHRyZXR1cm4gW3JvdyArIDEsIGNvbF07XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gW3VuZGVmaW5lZCwgdW5kZWZpbmVkXTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgaGFuZGxlRGVsZXRpbmcoKSB7XHJcblx0XHRpZiAodGhpcy5fdGVtcExpc3QubGVuZ3RoID09PSAwKSB7XHJcblx0XHRcdGlmICh0aGlzLmJvbnVzLnNlbGVjdGVkKSB0aGlzLl9zdGFnZSArPSAyO1xyXG5cdFx0XHRlbHNlIHRoaXMuX3N0YWdlICs9IDE7XHJcblx0XHRcdHRoaXMuX3RlbXBMaXN0ID0gW107XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdGNvbnN0IFtyb3csIGNvbF0gPSB0aGlzLl90ZW1wTGlzdFswXTtcclxuXHRcdGNvbnN0IGRlc2sgPSB0aGlzLl9ncmlkLmJsb2NrTGF5b3V0O1xyXG5cdFx0aWYgKGRlc2tbcm93XVtjb2xdLmhlaWdodCA9PT0gMCAmJiBkZXNrW3Jvd11bY29sXS53aWR0aCA9PT0gMCkge1xyXG5cdFx0XHRpZiAoIXRoaXMuYm9udXMuc2VsZWN0ZWQpIHtcclxuXHRcdFx0XHR0aGlzLl9zY29yZS5pbmNyZWFzZVBvaW50cygpO1xyXG5cdFx0XHRcdHRoaXMuX3Byb2dyZXNzQmFyLm1vdmUoKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRjb25zdCB7IHBvaW50cywgdGFyZ2V0UG9pbnRzIH0gPSB0aGlzLl9zY29yZTtcclxuXHRcdFx0aWYgKHBvaW50cyA+PSB0YXJnZXRQb2ludHMpIHRoaXMuX2VtaXRFRnVuYygnZW5kR2FtZScsIFJlc3VsdC5XaW4pO1xyXG5cdFx0XHRpZiAodGhpcy5pc0xhc3RNb3ZlKSB0aGlzLl9lbWl0RUZ1bmMoJ2VuZEdhbWUnLCBSZXN1bHQuTG9zdCk7XHJcblx0XHRcdHRoaXMuX3RlbXBMaXN0ID0gdGhpcy5fdGVtcExpc3Quc2xpY2UoMSk7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdGRlc2tbcm93XVtjb2xdLnJlc2l6ZShSZXNpemVUeXBlLlNocmluayk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGhhbmRsZU1vdmluZygpIHtcclxuXHRcdGlmICh0aGlzLl90ZW1wTGlzdC5sZW5ndGggPj0gdGhpcy5fbGlzdC5sZW5ndGgpIHtcclxuXHRcdFx0dGhpcy5fc3RhZ2UgKz0gMTtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0Y29uc3QgZGVzayA9IHRoaXMuX2dyaWQuYmxvY2tMYXlvdXQ7XHJcblx0XHRmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCB0aGlzLl9ncmlkLm07IGNvbCArPSAxKSB7XHJcblx0XHRcdGNvbnN0IHJvd3MgPSB0aGlzLl9saXN0XHJcblx0XHRcdFx0LmZpbHRlcigoW3IsIGNdKSA9PiBjID09PSBjb2wpXHJcblx0XHRcdFx0Lm1hcCgoW3Jvd10pID0+IHtcclxuXHRcdFx0XHRcdHJldHVybiByb3c7XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHQuc29ydCgpO1xyXG5cdFx0XHRjb25zdCB2ZWxvY2l0eSA9IDE7XHJcblx0XHRcdGlmIChyb3dzLmxlbmd0aCA9PT0gMSAmJiByb3dzWzBdID09PSAwKSB7XHJcblx0XHRcdFx0dGhpcy5fdGVtcExpc3QucHVzaChbcm93c1swXSwgY29sXSk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdH1cclxuXHRcdFx0Zm9yIChsZXQgayA9IHJvd3MubGVuZ3RoIC0gMTsgayA+PSAwOyBrIC09IDEpIHtcclxuXHRcdFx0XHRpZiAocm93c1trXSAtIDEgPCAwKSBicmVhaztcclxuXHRcdFx0XHRpZiAoZGVza1tyb3dzW2tdIC0gMV1bY29sXS55ID49IGRlc2tbcm93c1trXV1bY29sXS55KSB7XHJcblx0XHRcdFx0XHR0aGlzLl90ZW1wTGlzdC5wdXNoKFtyb3dzW2tdLCBjb2xdKTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRmb3IgKGxldCBpID0gcm93c1trXSAtIDE7IGkgPj0gMDsgaSAtPSAxKSB7XHJcblx0XHRcdFx0XHRkZXNrW2ldW2NvbF0ubW92ZShEaXJlY3Rpb24uRG93biwgdmVsb2NpdHkpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBoYW5kbGVSZWNvdmVyeSgpIHtcclxuXHRcdGlmICh0aGlzLmJvbnVzLnNlbGVjdGVkKSB7XHJcblx0XHRcdGxldCB0ZW1wID0gJyc7XHJcblx0XHRcdGNvbnN0IGJsb2NrMSA9IHRoaXMuX2dyaWQuYmxvY2tMYXlvdXRbdGhpcy5fbGlzdFswXVswXV1bdGhpcy5fbGlzdFswXVsxXV07XHJcblx0XHRcdGNvbnN0IGJsb2NrMiA9IHRoaXMuX2dyaWQuYmxvY2tMYXlvdXRbdGhpcy5fbGlzdFsxXVswXV1bdGhpcy5fbGlzdFsxXVsxXV07XHJcblx0XHRcdHRlbXAgPSBibG9jazEuY29sb3I7XHJcblx0XHRcdGJsb2NrMS5jb2xvciA9IGJsb2NrMi5jb2xvcjtcclxuXHRcdFx0YmxvY2syLmNvbG9yID0gdGVtcDtcclxuXHRcdFx0YmxvY2sxLnRvZ2dsZVNlbGVjdCgpO1xyXG5cdFx0XHRibG9jazIudG9nZ2xlU2VsZWN0KCk7XHJcblx0XHRcdGJsb2NrMS5zaXplID0gdGhpcy5ncmlkLml0ZW1TaXplO1xyXG5cdFx0XHRibG9jazIuc2l6ZSA9IHRoaXMuZ3JpZC5pdGVtU2l6ZTtcclxuXHRcdFx0dGhpcy5ib251cy50b2dnbGVTZWxlY3QoKTtcclxuXHRcdFx0dGhpcy5fbW9uZXkgLT0gVEVMRVBPUlRfQ09TVDtcclxuXHRcdFx0dGhpcy5fbGlzdCA9IFtdO1xyXG5cdFx0XHR0aGlzLl90ZW1wTGlzdCA9IFtdO1xyXG5cdFx0XHR0aGlzLl9zdGFnZSA9IFN0YWdlLlNlbGVjdGluZztcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0Y29uc3QgeyBibG9ja0xheW91dDogbGF5b3V0LCBuLCBtIH0gPSB0aGlzLl9ncmlkO1xyXG5cdFx0Zm9yIChsZXQgaSA9IG4gLSAxOyBpID49IDA7IGkgLT0gMSkge1xyXG5cdFx0XHRmb3IgKGxldCBqID0gbSAtIDE7IGogPj0gMDsgaiAtPSAxKSB7XHJcblx0XHRcdFx0aWYgKGxheW91dFtpXVtqXS55ICE9PSBsYXlvdXRbaV1bal0ub2xkWSB8fCBsYXlvdXRbaV1bal0uaXNTZWxlY3RlZCgpKSB7XHJcblx0XHRcdFx0XHRsZXQgbmV3Um93ID0gLTEwMDA7XHJcblx0XHRcdFx0XHRpZiAobGF5b3V0W2ldW2pdLmlzU2VsZWN0ZWQoKSkge1xyXG5cdFx0XHRcdFx0XHRsYXlvdXRbaV1bal0udG9nZ2xlU2VsZWN0KCk7XHJcblx0XHRcdFx0XHRcdGZvciAobGV0IHIgPSBpIC0gMTsgciA+PSAwOyByIC09IDEpIHtcclxuXHRcdFx0XHRcdFx0XHRpZiAobGF5b3V0W2ldW2pdLm9sZFkgLSBsYXlvdXRbcl1bal0ueSA8IGxheW91dFtpXVtqXS5oZWlnaHQgJiYgbGF5b3V0W3JdW2pdLndpZHRoICE9PSAwICYmICFsYXlvdXRbcl1bal0uaXNTZWxlY3RlZCgpICYmICFsYXlvdXRbcl1bal0uaXNPY2N1cGllZCgpKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRsYXlvdXRbcl1bal0ub2NjdXBpZWQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHRcdFx0bmV3Um93ID0gcjtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdG5ld1JvdyA9IGkgLSBNYXRoLmZsb29yKChsYXlvdXRbaV1bal0ueSAtIGxheW91dFtpXVtqXS5vbGRZKSAvIHRoaXMuZ3JpZC5pdGVtSGVpZ2h0KTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGlmIChuZXdSb3cgPj0gMCkge1xyXG5cdFx0XHRcdFx0XHRsYXlvdXRbaV1bal0uY29sb3IgPSBsYXlvdXRbbmV3Um93XVtqXS5vbGRDb2xvcjtcclxuXHRcdFx0XHRcdFx0bGF5b3V0W2ldW2pdLm9sZENvbG9yID0gbGF5b3V0W25ld1Jvd11bal0ub2xkQ29sb3I7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRjb25zdCByYW5kb21Db2xvciA9IGNob29zZUNvbG9yKGdldFJhbmRvbVZhbHVlKHRoaXMuX2dyaWQuZ3JpZEluZm8uYmxvY2tDb2xvcnMpKTtcclxuXHRcdFx0XHRcdFx0bGF5b3V0W2ldW2pdLmNvbG9yID0gcmFuZG9tQ29sb3I7XHJcblx0XHRcdFx0XHRcdGxheW91dFtpXVtqXS5vbGRDb2xvciA9IHJhbmRvbUNvbG9yO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0bGF5b3V0W2ldW2pdLnNpemUgPSB0aGlzLmdyaWQuaXRlbVNpemU7XHJcblx0XHRcdFx0XHRsYXlvdXRbaV1bal0ucG9zaXRpb24gPSB7IHg6IGxheW91dFtpXVtqXS54LCB5OiBsYXlvdXRbaV1bal0ub2xkWSB9O1xyXG5cdFx0XHRcdFx0aWYgKGxheW91dFtpXVtqXS5pc09jY3VwaWVkKCkpIGxheW91dFtpXVtqXS5vY2N1cGllZCA9IGZhbHNlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0dGhpcy5fZ3JpZC5ibG9ja0xheW91dCA9IGxheW91dDtcclxuXHRcdHRoaXMuX2xpc3QgPSBbXTtcclxuXHRcdHRoaXMuX3RlbXBMaXN0ID0gW107XHJcblx0XHR0aGlzLl9zdGFnZSA9IFN0YWdlLlNlbGVjdGluZztcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBnZXQgZ3JpZCgpOiBHcmlkIHtcclxuXHRcdHJldHVybiB0aGlzLl9ncmlkO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHNldCBncmlkKGdyaWQ6IEdyaWQpIHtcclxuXHRcdHRoaXMuX2dyaWQgPSBncmlkO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGdldCBzY29yZSgpOiBTY29yZSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fc2NvcmU7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc2V0IHNjb3JlKHNjb3JlOiBTY29yZSkge1xyXG5cdFx0dGhpcy5fc2NvcmUgPSBzY29yZTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBnZXQgcHJvZ3Jlc3NCYXIoKTogUHJvZ3Jlc3NCYXIge1xyXG5cdFx0cmV0dXJuIHRoaXMuX3Byb2dyZXNzQmFyO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHNldCBwcm9ncmVzc0JhcihwckJhcjogUHJvZ3Jlc3NCYXIpIHtcclxuXHRcdHRoaXMuX3Byb2dyZXNzQmFyID0gcHJCYXI7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZ2V0IGJvbnVzKCk6IEJvbnVzIHtcclxuXHRcdHJldHVybiB0aGlzLl9ib251cztcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBnZXQgbW9uZXkoKTogbnVtYmVyIHtcclxuXHRcdHJldHVybiB0aGlzLl9tb25leTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IElucHV0IGZyb20gJy4uL2lucHV0JztcclxuXHJcbmludGVyZmFjZSBJV29ybGQge1xyXG5cdHVwZGF0ZTogKHVzZXJJbnB1dDogSW5wdXQpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIFdvcmxkIGltcGxlbWVudHMgSVdvcmxkIHtcclxuXHRhYnN0cmFjdCB1cGRhdGUodXNlcklucHV0OiBJbnB1dCk6IHZvaWQ7XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0ICcuL3N0eWxlcy9zdHlsZS5zY3NzJztcclxuaW1wb3J0IEdhbWUgZnJvbSAnLi90cy9nYW1lJztcclxuXHJcbmNvbnN0IGNhbnZhcyA9IDxIVE1MQ2FudmFzRWxlbWVudD5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdjYW52YXMnKTtcclxuY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcbmNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcblxyXG5jb25zdCBuID0gNztcclxuY29uc3QgbSA9IDc7XHJcbmNvbnN0IGMgPSA1OyAvLyBjb2xvcnNcclxuY29uc3QgayA9IDI7XHJcbmNvbnN0IHMgPSAzOyAvLyBtaXhcclxuY29uc3QgeCA9IDExMDsgLy8gdGFyZ2V0IHBvaW50c1xyXG5jb25zdCB5ID0gMjA7IC8vIG1vdmVzXHJcblxyXG5jb25zdCBnYW1lID0gbmV3IEdhbWUoY2FudmFzKTtcclxuXHJcbmdhbWUuaW5pdChuLCBtLCBjLCBrLCBzLCB4LCB5KS50aGVuKCgpID0+IGdhbWUuc3RhcnQoKSk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==