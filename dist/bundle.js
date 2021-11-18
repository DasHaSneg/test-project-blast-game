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
                    if (this._list[0][0] === this._list[1][0] && this._list[0][1] === this._list[1][1])
                        this._list = this._list.slice(1);
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
            if (this._money >= _constants__WEBPACK_IMPORTED_MODULE_8__.TELEPORT_COST) {
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
            if (!this.bonus.selected)
                this._score.increasePoints();
            this._progressBar.move();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBTSxXQUFJLENBQUMsS0FBSyxFQUFFLEVBQVosQ0FBWSxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXN0LXByb2plY3QtYmxhc3QtZ2FtZS8uL3NyYy9zdHlsZXMvc3R5bGUuc2Nzcz9hNWI0Iiwid2VicGFjazovL3Rlc3QtcHJvamVjdC1ibGFzdC1nYW1lLy4vc3JjL3RzL0ltYWdlUmVwb3NpdG9yeS50cyIsIndlYnBhY2s6Ly90ZXN0LXByb2plY3QtYmxhc3QtZ2FtZS8uL3NyYy90cy9hc3NldHMudHMiLCJ3ZWJwYWNrOi8vdGVzdC1wcm9qZWN0LWJsYXN0LWdhbWUvLi9zcmMvdHMvYmxvY2sudHMiLCJ3ZWJwYWNrOi8vdGVzdC1wcm9qZWN0LWJsYXN0LWdhbWUvLi9zcmMvdHMvY29uc3RhbnRzLnRzIiwid2VicGFjazovL3Rlc3QtcHJvamVjdC1ibGFzdC1nYW1lLy4vc3JjL3RzL2V2ZW50LnRzIiwid2VicGFjazovL3Rlc3QtcHJvamVjdC1ibGFzdC1nYW1lLy4vc3JjL3RzL2dhbWUudHMiLCJ3ZWJwYWNrOi8vdGVzdC1wcm9qZWN0LWJsYXN0LWdhbWUvLi9zcmMvdHMvZ2FtZU9iamVjdHMvQm9udXMudHMiLCJ3ZWJwYWNrOi8vdGVzdC1wcm9qZWN0LWJsYXN0LWdhbWUvLi9zcmMvdHMvZ2FtZU9iamVjdHMvYnV0dG9uLnRzIiwid2VicGFjazovL3Rlc3QtcHJvamVjdC1ibGFzdC1nYW1lLy4vc3JjL3RzL2dhbWVPYmplY3RzL2dhbWVPYmplY3QudHMiLCJ3ZWJwYWNrOi8vdGVzdC1wcm9qZWN0LWJsYXN0LWdhbWUvLi9zcmMvdHMvZ2FtZU9iamVjdHMvZ3JpZC50cyIsIndlYnBhY2s6Ly90ZXN0LXByb2plY3QtYmxhc3QtZ2FtZS8uL3NyYy90cy9pbnB1dC50cyIsIndlYnBhY2s6Ly90ZXN0LXByb2plY3QtYmxhc3QtZ2FtZS8uL3NyYy90cy9wcm9ncmVzc0Jhci50cyIsIndlYnBhY2s6Ly90ZXN0LXByb2plY3QtYmxhc3QtZ2FtZS8uL3NyYy90cy9zY2VuZS50cyIsIndlYnBhY2s6Ly90ZXN0LXByb2plY3QtYmxhc3QtZ2FtZS8uL3NyYy90cy9zY29yZS50cyIsIndlYnBhY2s6Ly90ZXN0LXByb2plY3QtYmxhc3QtZ2FtZS8uL3NyYy90cy90eXBlcy50cyIsIndlYnBhY2s6Ly90ZXN0LXByb2plY3QtYmxhc3QtZ2FtZS8uL3NyYy90cy91dGlscy50cyIsIndlYnBhY2s6Ly90ZXN0LXByb2plY3QtYmxhc3QtZ2FtZS8uL3NyYy90cy92aWV3cy9lbmRWaWV3LnRzIiwid2VicGFjazovL3Rlc3QtcHJvamVjdC1ibGFzdC1nYW1lLy4vc3JjL3RzL3ZpZXdzL2dhbWVWaWV3LnRzIiwid2VicGFjazovL3Rlc3QtcHJvamVjdC1ibGFzdC1nYW1lLy4vc3JjL3RzL3ZpZXdzL3ZpZXcudHMiLCJ3ZWJwYWNrOi8vdGVzdC1wcm9qZWN0LWJsYXN0LWdhbWUvLi9zcmMvdHMvd29ybGRzL2VuZFdvcmxkLnRzIiwid2VicGFjazovL3Rlc3QtcHJvamVjdC1ibGFzdC1nYW1lLy4vc3JjL3RzL3dvcmxkcy9nYW1lV29ybGQudHMiLCJ3ZWJwYWNrOi8vdGVzdC1wcm9qZWN0LWJsYXN0LWdhbWUvLi9zcmMvdHMvd29ybGRzL3dvcmxkLnRzIiwid2VicGFjazovL3Rlc3QtcHJvamVjdC1ibGFzdC1nYW1lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Rlc3QtcHJvamVjdC1ibGFzdC1nYW1lL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90ZXN0LXByb2plY3QtYmxhc3QtZ2FtZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Rlc3QtcHJvamVjdC1ibGFzdC1nYW1lL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdGVzdC1wcm9qZWN0LWJsYXN0LWdhbWUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90ZXN0LXByb2plY3QtYmxhc3QtZ2FtZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90ZXN0LXByb2plY3QtYmxhc3QtZ2FtZS8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJpbXBvcnQgYXNzZXRzIGZyb20gJy4vYXNzZXRzJztcclxuaW1wb3J0IHsgQXNzZXRzLCBHYW1lSW1hZ2VzIH0gZnJvbSAnLi90eXBlcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbWFnZVJlcG9zaXRvcnkge1xyXG5cdHByaXZhdGUgaW1hZ2VzOiBBc3NldHM7XHJcblxyXG5cdGNvbnN0cnVjdG9yKGFzc2V0czogQXNzZXRzKSB7XHJcblx0XHR0aGlzLmltYWdlcyA9IGFzc2V0cztcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBhc3luYyBsb2FkSW1hZ2VzKCkge1xyXG5cdFx0Y29uc3QgaW1hZ2VzOiBHYW1lSW1hZ2VzID0ge307XHJcblx0XHRmb3IgKGNvbnN0IGtleSBpbiBhc3NldHMpIHtcclxuXHRcdFx0aW1hZ2VzW2tleV0gPSBhd2FpdCB0aGlzLmxvYWRJbWFnZShTdHJpbmcoKGFzc2V0cyBhcyB1bmtub3duIGFzIEFzc2V0cylba2V5IGFzIHN0cmluZ10pKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBpbWFnZXM7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGFzeW5jIGxvYWRJbWFnZShpbWdQYXRoOiBzdHJpbmcpIHtcclxuXHRcdGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xyXG5cdFx0YXdhaXQgdGhpcy5sb2FkKGltZywgaW1nUGF0aCk7XHJcblx0XHRyZXR1cm4gaW1nO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBhc3luYyBsb2FkKGVsOiBIVE1MSW1hZ2VFbGVtZW50LCBzdHI6IHN0cmluZykge1xyXG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xyXG5cdFx0XHRlbC5zcmMgPSBzdHI7XHJcblx0XHRcdGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiByZXNvbHZlKHRoaXMpKTtcclxuXHRcdH0pO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgSGVhZGVyUGFuZWwgZnJvbSAnLi4vaW1nL3Byb2dyZXNzL3BhbmVsMi5wbmcnO1xyXG5pbXBvcnQgR2FtZVBhbmVsIGZyb20gJy4uL2ltZy9nYW1lL3BhbmVsLnBuZyc7XHJcbmltcG9ydCBTY29yZVBhbmVsIGZyb20gJy4uL2ltZy9zY29yZS9wYW5lbDIucG5nJztcclxuaW1wb3J0IFByb2dyZXNzQmxvY2sgZnJvbSAnLi4vaW1nL3Byb2dyZXNzL2Jhci9ibG9jay5wbmcnO1xyXG5pbXBvcnQgUHJvZ3Jlc3NTY2FsZSBmcm9tICcuLi9pbWcvcHJvZ3Jlc3MvYmFyL3NjYWxlLnBuZyc7XHJcbmltcG9ydCBCbHVlQmxvY2sgZnJvbSAnLi4vaW1nL2dhbWUvYmxvY2tzL2JsdWUucG5nJztcclxuaW1wb3J0IEdyZWVuQmxvY2sgZnJvbSAnLi4vaW1nL2dhbWUvYmxvY2tzL2dyZWVuLnBuZyc7XHJcbmltcG9ydCBZZWxsb3dCbG9jayBmcm9tICcuLi9pbWcvZ2FtZS9ibG9ja3MveWVsbG93LnBuZyc7XHJcbmltcG9ydCBQdXJwbGVCbG9jayBmcm9tICcuLi9pbWcvZ2FtZS9ibG9ja3MvcHVycGxlLnBuZyc7XHJcbmltcG9ydCBSZWRCbG9jayBmcm9tICcuLi9pbWcvZ2FtZS9ibG9ja3MvcmVkLnBuZyc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vaW1nL2VuZC9idXR0b24ucG5nJztcclxuaW1wb3J0IFNlbGVjdGVkQmx1ZUJsb2NrIGZyb20gJy4uL2ltZy9nYW1lL3NlbGVjdGVkX2Jsb2Nrcy9ibHVlLnBuZyc7XHJcbmltcG9ydCBTZWxlY3RlZEdyZWVuQmxvY2sgZnJvbSAnLi4vaW1nL2dhbWUvc2VsZWN0ZWRfYmxvY2tzL2dyZWVuLnBuZyc7XHJcbmltcG9ydCBTZWxlY3RlZFllbGxvd0Jsb2NrIGZyb20gJy4uL2ltZy9nYW1lL3NlbGVjdGVkX2Jsb2Nrcy95ZWxsb3cucG5nJztcclxuaW1wb3J0IFNlbGVjdGVkUHVycGxlQmxvY2sgZnJvbSAnLi4vaW1nL2dhbWUvc2VsZWN0ZWRfYmxvY2tzL3B1cnBsZS5wbmcnO1xyXG5pbXBvcnQgU2VsZWN0ZWRSZWRCbG9jayBmcm9tICcuLi9pbWcvZ2FtZS9zZWxlY3RlZF9ibG9ja3MvcmVkLnBuZyc7XHJcbmltcG9ydCBCb251cyBmcm9tICcuLi9pbWcvYm9vc3Rlci9ib251cy5wbmcnO1xyXG5pbXBvcnQgU2VsZWN0ZWRCb251cyBmcm9tICcuLi9pbWcvYm9vc3Rlci9zZWxlY3RlZF9ib251cy5wbmcnO1xyXG5pbXBvcnQgTW9uZXlCbG9jayBmcm9tICcuLi9pbWcvYm9vc3Rlci9tb25leS5wbmcnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG5cdEhlYWRlclBhbmVsLFxyXG5cdEdhbWVQYW5lbCxcclxuXHRTY29yZVBhbmVsLFxyXG5cdFByb2dyZXNzQmxvY2ssXHJcblx0UHJvZ3Jlc3NTY2FsZSxcclxuXHRCbHVlQmxvY2ssXHJcblx0R3JlZW5CbG9jayxcclxuXHRQdXJwbGVCbG9jayxcclxuXHRSZWRCbG9jayxcclxuXHRZZWxsb3dCbG9jayxcclxuXHRCb251cyxcclxuXHRTZWxlY3RlZEJvbnVzLFxyXG5cdE1vbmV5QmxvY2ssXHJcblx0QnV0dG9uLFxyXG5cdFNlbGVjdGVkQmx1ZUJsb2NrLFxyXG5cdFNlbGVjdGVkR3JlZW5CbG9jayxcclxuXHRTZWxlY3RlZFB1cnBsZUJsb2NrLFxyXG5cdFNlbGVjdGVkUmVkQmxvY2ssXHJcblx0U2VsZWN0ZWRZZWxsb3dCbG9jayxcclxufTtcclxuIiwiaW1wb3J0IHsgY2hvb3NlQ29sb3IsIGdldFJhbmRvbVZhbHVlIH0gZnJvbSAnLi91dGlscyc7XHJcbmltcG9ydCB7IENvb3JkaW5hdGVzLCBSZXNpemVUeXBlLCBEaXJlY3Rpb24sIFNpemUgfSBmcm9tICcuL3R5cGVzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJsb2NrIHtcclxuXHRwcml2YXRlIF9zZWxlY3RlZCA9IGZhbHNlO1xyXG5cclxuXHRwcml2YXRlIF9vY2N1cGllZCA9IGZhbHNlO1xyXG5cclxuXHRwcml2YXRlIF94ID0gMDtcclxuXHJcblx0cHJpdmF0ZSBfeSA9IDA7XHJcblxyXG5cdHByaXZhdGUgX29sZFkgPSAwO1xyXG5cclxuXHRwcml2YXRlIF9vbGRDb2xvcjogc3RyaW5nO1xyXG5cclxuXHRwcml2YXRlIF9oZWlnaHQgPSAwO1xyXG5cclxuXHRwcml2YXRlIF93aWR0aCA9IDA7XHJcblxyXG5cdHByaXZhdGUgX2NvbG9yOiBzdHJpbmc7XHJcblxyXG5cdHByaXZhdGUgX2FuaW1hdGlvblZlbG9jaXR5ID0gMTA7XHJcblxyXG5cdGNvbnN0cnVjdG9yKGNvbG9yczogbnVtYmVyW10pIHtcclxuXHRcdGNvbnN0IGNvbG9yTnVtYmVyID0gZ2V0UmFuZG9tVmFsdWUoY29sb3JzKTtcclxuXHRcdHRoaXMuX2NvbG9yID0gY2hvb3NlQ29sb3IoY29sb3JOdW1iZXIpO1xyXG5cdFx0dGhpcy5fb2xkQ29sb3IgPSB0aGlzLl9jb2xvcjtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBpbml0KHBvc2l0aW9uOiBDb29yZGluYXRlcywgc2l6ZTogU2l6ZSkge1xyXG5cdFx0dGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uO1xyXG5cdFx0dGhpcy5fb2xkWSA9IHBvc2l0aW9uLnk7XHJcblx0XHR0aGlzLnNpemUgPSBzaXplO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGdldENvbG9ySW1hZ2VOYW1lKCk6IHN0cmluZyB7XHJcblx0XHRyZXR1cm4gdGhpcy5fc2VsZWN0ZWQgPyBgU2VsZWN0ZWQke3RoaXMuY29sb3J9YCA6IHRoaXMuY29sb3I7XHJcblx0XHQvLyByZXR1cm4gdGhpcy5fY29sb3I7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgcmVzaXplKHJlc2l6ZVR5cGU6IFJlc2l6ZVR5cGUpIHtcclxuXHRcdGNvbnN0IHsgWm9vbSwgU2hyaW5rIH0gPSBSZXNpemVUeXBlO1xyXG5cdFx0c3dpdGNoIChyZXNpemVUeXBlKSB7XHJcblx0XHRcdGNhc2UgU2hyaW5rOlxyXG5cdFx0XHRcdGlmICh0aGlzLl9oZWlnaHQgPiAwKSB0aGlzLl9oZWlnaHQgLT0gdGhpcy5fYW5pbWF0aW9uVmVsb2NpdHk7XHJcblx0XHRcdFx0ZWxzZSB0aGlzLl9oZWlnaHQgPSAwO1xyXG5cdFx0XHRcdGlmICh0aGlzLl93aWR0aCA+IDApIHRoaXMuX3dpZHRoIC09IHRoaXMuX2FuaW1hdGlvblZlbG9jaXR5O1xyXG5cdFx0XHRcdGVsc2UgdGhpcy5fd2lkdGggPSAwO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIFpvb206XHJcblx0XHRcdFx0dGhpcy5faGVpZ2h0ICs9IHRoaXMuX2FuaW1hdGlvblZlbG9jaXR5O1xyXG5cdFx0XHRcdHRoaXMuX3dpZHRoICs9IHRoaXMuX2FuaW1hdGlvblZlbG9jaXR5O1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcignVW5rbm93biByZXNpemUgdHlwZScpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHVibGljIG1vdmUobW92ZVR5cGU6IERpcmVjdGlvbiwgdmVsb2NpdHk/OiBudW1iZXIpIHtcclxuXHRcdGNvbnN0IHsgVXAsIFJpZ2h0LCBMZWZ0LCBEb3duIH0gPSBEaXJlY3Rpb247XHJcblx0XHRzd2l0Y2ggKG1vdmVUeXBlKSB7XHJcblx0XHRcdGNhc2UgVXA6XHJcblx0XHRcdFx0dGhpcy5feSAtPSB0aGlzLl9hbmltYXRpb25WZWxvY2l0eTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSBSaWdodDpcclxuXHRcdFx0XHR0aGlzLl94ICs9IHRoaXMuX2FuaW1hdGlvblZlbG9jaXR5O1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIExlZnQ6XHJcblx0XHRcdFx0dGhpcy5feCAtPSB0aGlzLl9hbmltYXRpb25WZWxvY2l0eTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSBEb3duOlxyXG5cdFx0XHRcdHRoaXMuX3kgKz0gdmVsb2NpdHkgfHwgdGhpcy5fYW5pbWF0aW9uVmVsb2NpdHk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCdVbmtub3duIG1vdmUgdHlwZScpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHVibGljIGdldCB4KCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX3g7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZ2V0IHkoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5feTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBnZXQgaGVpZ2h0KCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2hlaWdodDtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBnZXQgd2lkdGgoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fd2lkdGg7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZ2V0IGNvbG9yKCk6IHN0cmluZyB7XHJcblx0XHRyZXR1cm4gdGhpcy5fY29sb3I7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc2V0IGNvbG9yKGNvbG9yOiBzdHJpbmcpIHtcclxuXHRcdHRoaXMuX2NvbG9yID0gY29sb3I7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZ2V0IG9sZENvbG9yKCk6IHN0cmluZyB7XHJcblx0XHRyZXR1cm4gdGhpcy5fb2xkQ29sb3I7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc2V0IG9sZENvbG9yKGNvbG9yOiBzdHJpbmcpIHtcclxuXHRcdHRoaXMuX29sZENvbG9yID0gY29sb3I7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZ2V0IG9sZFkoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fb2xkWTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzZXQgb2xkWSh5OiBudW1iZXIpIHtcclxuXHRcdHRoaXMuX29sZFkgPSB5O1xyXG5cdH1cclxuXHJcblx0cHVibGljIGdldCBwb3NpdGlvbigpOiBDb29yZGluYXRlcyB7XHJcblx0XHRyZXR1cm4geyB4OiB0aGlzLl94LCB5OiB0aGlzLl95IH07XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc2V0IHBvc2l0aW9uKHBvc2l0aW9uOiBDb29yZGluYXRlcykge1xyXG5cdFx0dGhpcy5feCA9IHBvc2l0aW9uLng7XHJcblx0XHR0aGlzLl95ID0gcG9zaXRpb24ueTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBnZXQgc2l6ZSgpOiBTaXplIHtcclxuXHRcdHJldHVybiB7IHdpZHRoOiB0aGlzLl93aWR0aCwgaGVpZ2h0OiB0aGlzLl9oZWlnaHQgfTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzZXQgc2l6ZShzaXplOiBTaXplKSB7XHJcblx0XHR0aGlzLl9oZWlnaHQgPSBzaXplLmhlaWdodDtcclxuXHRcdHRoaXMuX3dpZHRoID0gc2l6ZS53aWR0aDtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyB0b2dnbGVTZWxlY3QoKSB7XHJcblx0XHR0aGlzLl9zZWxlY3RlZCA9ICF0aGlzLl9zZWxlY3RlZDtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBpc1NlbGVjdGVkKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX3NlbGVjdGVkO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHNldCBvY2N1cGllZChvY3A6IGJvb2xlYW4pIHtcclxuXHRcdHRoaXMuX29jY3VwaWVkID0gb2NwO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHRvZ2dsZU9jY3VwaWVkKCkge1xyXG5cdFx0dGhpcy5fb2NjdXBpZWQgPSAhdGhpcy5fb2NjdXBpZWQ7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgaXNPY2N1cGllZCgpIHtcclxuXHRcdHJldHVybiB0aGlzLl9vY2N1cGllZDtcclxuXHR9XHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IFBPSU5UU19QRVJfVFVSTiA9IDI7XHJcbmV4cG9ydCBjb25zdCBJTUFHRV9TSVpFX0NPRUZGSUNJRU5UID0gNDtcclxuZXhwb3J0IGNvbnN0IFRFTEVQT1JUX0NPU1QgPSA1O1xyXG5leHBvcnQgY29uc3QgTU9ORVkgPSAyMDtcclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXZlbnRNYW5hZ2VyIHtcclxuXHRldmVudHMgPSBuZXcgTWFwKCk7XHJcblxyXG5cdG9uKGV2ZW50OiBzdHJpbmcsIGhhbmRsZXI6IGFueSkge1xyXG5cdFx0aWYgKHRoaXMuZXZlbnRzLmhhcyhldmVudCkpIHtcclxuXHRcdFx0dGhpcy5ldmVudHMuZ2V0KGV2ZW50KS5hZGQoaGFuZGxlcik7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLmV2ZW50cy5zZXQoZXZlbnQsIG5ldyBTZXQoW2hhbmRsZXJdKSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRvZmYoZXZlbnQ6IHN0cmluZywgaGFuZGxlcjogYW55KSB7XHJcblx0XHR0aGlzLmV2ZW50cy5nZXQoZXZlbnQpPy5kZWxldGUoaGFuZGxlcik7XHJcblx0fVxyXG5cclxuXHRlbWl0KGV2ZW50OiBzdHJpbmcsIGFyZz86IGFueSkge1xyXG5cdFx0dGhpcy5ldmVudHMuZ2V0KGV2ZW50KT8uZm9yRWFjaCgoaGFuZGxlcjogKGFyZzA6IGFueSkgPT4gYW55KSA9PiBoYW5kbGVyKGFyZykpO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBjaG9vc2VDb2xvcnMgfSBmcm9tICcuL3V0aWxzJztcclxuaW1wb3J0IElucHV0IGZyb20gJy4vaW5wdXQnO1xyXG5pbXBvcnQgU2NlbmVNYW5hZ2VyLCB7IFNjZW5lcywgVFNjZW5lIH0gZnJvbSAnLi9zY2VuZSc7XHJcbmltcG9ydCBFdmVudE1hbmFnZXIgZnJvbSAnLi9ldmVudCc7XHJcbmltcG9ydCBHYW1lV29ybGQgZnJvbSAnLi93b3JsZHMvZ2FtZVdvcmxkJztcclxuaW1wb3J0IEltYWdlUmVwb3NpdG9yeSBmcm9tICcuL0ltYWdlUmVwb3NpdG9yeSc7XHJcbmltcG9ydCBhc3NldHMgZnJvbSAnLi9hc3NldHMnO1xyXG5pbXBvcnQgR2FtZVZpZXcgZnJvbSAnLi92aWV3cy9nYW1lVmlldyc7XHJcbmltcG9ydCB7IEdhbWVJbWFnZXMgfSBmcm9tICcuL3R5cGVzJztcclxuaW1wb3J0IEVuZFdvcmxkLCB7IFJlc3VsdCB9IGZyb20gJy4vd29ybGRzL2VuZFdvcmxkJztcclxuaW1wb3J0IEVuZFZpZXcgZnJvbSAnLi92aWV3cy9lbmRWaWV3JztcclxuaW1wb3J0IHsgTU9ORVkgfSBmcm9tICcuL2NvbnN0YW50cyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIGV4dGVuZHMgRXZlbnRNYW5hZ2VyIHtcclxuXHRwcml2YXRlIF9pbnB1dDogSW5wdXQ7XHJcblxyXG5cdHByaXZhdGUgX3NjZW5lczogU2NlbmVNYW5hZ2VyO1xyXG5cclxuXHRwcml2YXRlIF9jdXJyZW50U2NlbmU6IFNjZW5lcyA9IFNjZW5lcy5HYW1lO1xyXG5cclxuXHRwcml2YXRlIF9jYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xyXG5cclxuXHRwcml2YXRlIF9jdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcclxuXHJcblx0cHJpdmF0ZSBfaW1hZ2VSZXBvc2l0b3J5OiBJbWFnZVJlcG9zaXRvcnk7XHJcblxyXG5cdGNvbnN0cnVjdG9yKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQpIHtcclxuXHRcdHN1cGVyKCk7XHJcblx0XHR0aGlzLl9jYW52YXMgPSBjYW52YXM7XHJcblx0XHR0aGlzLl9jdHggPSA8Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJEPmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG5cdFx0dGhpcy5faW1hZ2VSZXBvc2l0b3J5ID0gbmV3IEltYWdlUmVwb3NpdG9yeShhc3NldHMpO1xyXG5cdFx0dGhpcy5fc2NlbmVzID0gbmV3IFNjZW5lTWFuYWdlcigpO1xyXG5cdFx0dGhpcy5faW5wdXQgPSBuZXcgSW5wdXQoKTtcclxuXHRcdHRoaXMubG9vcCA9IHRoaXMubG9vcC5iaW5kKHRoaXMpO1xyXG5cdFx0dGhpcy5jYWxsRW1pdCA9IHRoaXMuY2FsbEVtaXQuYmluZCh0aGlzKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBhc3luYyBpbml0KG46IG51bWJlciwgbTogbnVtYmVyLCBjOiBudW1iZXIsIGs6IG51bWJlciwgczogbnVtYmVyLCB4OiBudW1iZXIsIHk6IG51bWJlcikge1xyXG5cdFx0dGhpcy5faW5wdXQuaW5pdCgpO1xyXG5cdFx0Y29uc3QgZ2FtZUltYWdlcyA9IGF3YWl0IHRoaXMuX2ltYWdlUmVwb3NpdG9yeS5sb2FkSW1hZ2VzKCk7XHJcblx0XHRjb25zdCB7IF9jYW52YXM6IGNhbnZhcywgX2N0eDogY3R4IH0gPSB0aGlzO1xyXG5cdFx0dGhpcy5fc2NlbmVzLmFkZChTY2VuZXMuR2FtZSwgR2FtZS5jcmVhdGVHYW1lU2NlbmUobiwgbSwgYywgaywgcywgeCwgeSwgZ2FtZUltYWdlcywgY2FudmFzLCBjdHgsIHRoaXMuY2FsbEVtaXQpKTtcclxuXHRcdHRoaXMub24oJ2VuZEdhbWUnLCAocmVzdWx0OiBSZXN1bHQpID0+IHtcclxuXHRcdFx0dGhpcy5fY3VycmVudFNjZW5lID0gU2NlbmVzLkVuZDtcclxuXHRcdFx0dGhpcy5fc2NlbmVzLmFkZChTY2VuZXMuRW5kLCBHYW1lLmNyZWF0ZUVuZFNjZW5lKGdhbWVJbWFnZXMsIGNhbnZhcywgY3R4LCByZXN1bHQsIHRoaXMuY2FsbEVtaXQpKTtcclxuXHRcdH0pO1xyXG5cdFx0dGhpcy5vbignbmV3R2FtZScsICgpID0+IHtcclxuXHRcdFx0dGhpcy5fY3VycmVudFNjZW5lID0gU2NlbmVzLkdhbWU7XHJcblx0XHRcdHRoaXMuX3NjZW5lcy5hZGQoU2NlbmVzLkdhbWUsIEdhbWUuY3JlYXRlR2FtZVNjZW5lKG4sIG0sIGMsIGssIHMsIHgsIHksIGdhbWVJbWFnZXMsIGNhbnZhcywgY3R4LCB0aGlzLmNhbGxFbWl0KSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgc3RhdGljIGNyZWF0ZUdhbWVTY2VuZShuOiBudW1iZXIsIG06IG51bWJlciwgYzogbnVtYmVyLCBrOiBudW1iZXIsIHM6IG51bWJlciwgeDogbnVtYmVyLCB5OiBudW1iZXIsIGdhbWVJbWFnZXM6IEdhbWVJbWFnZXMsIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCBlbWl0RUZ1bmM6IChlTmFtZTogc3RyaW5nLCBhcmc6IGFueSkgPT4gdm9pZCkge1xyXG5cdFx0Y29uc3QgZ3JpZEluZm8gPSB7XHJcblx0XHRcdGJsb2NrQ29sb3JzOiBjaG9vc2VDb2xvcnMoYyksXHJcblx0XHRcdG4sXHJcblx0XHRcdG0sXHJcblx0XHRcdGssXHJcblx0XHRcdG1pblN0aXJyaW5nQW1vdW50OiBzLFxyXG5cdFx0fTtcclxuXHRcdGNvbnN0IHdvcmxkID0gbmV3IEdhbWVXb3JsZChncmlkSW5mbywgeCwgeSwgTU9ORVksIGVtaXRFRnVuYyk7XHJcblx0XHRjb25zdCB2aWV3ID0gbmV3IEdhbWVWaWV3KGNhbnZhcywgY3R4LCBnYW1lSW1hZ2VzKTtcclxuXHRcdHZpZXcuaW5pdCh3b3JsZCk7XHJcblx0XHRyZXR1cm4geyB2aWV3LCB3b3JsZCB9O1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBjYWxsRW1pdCA9IChlTmFtZTogc3RyaW5nLCBhcmc/OiBhbnkpID0+IHRoaXMuZW1pdChlTmFtZSwgYXJnKTtcclxuXHJcblx0cHJpdmF0ZSBzdGF0aWMgY3JlYXRlRW5kU2NlbmUoZ2FtZUltYWdlczogR2FtZUltYWdlcywgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCwgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIHJlc3VsdDogUmVzdWx0LCBlbWl0RUZ1bmM6IChlTmFtZTogc3RyaW5nLCBhcmc6IGFueSkgPT4gdm9pZCkge1xyXG5cdFx0Y29uc3Qgd29ybGQgPSBuZXcgRW5kV29ybGQocmVzdWx0LCBlbWl0RUZ1bmMpO1xyXG5cdFx0Y29uc3QgdmlldyA9IG5ldyBFbmRWaWV3KGNhbnZhcywgY3R4LCBnYW1lSW1hZ2VzKTtcclxuXHRcdHZpZXcuaW5pdCh3b3JsZCk7XHJcblx0XHRyZXR1cm4geyB2aWV3LCB3b3JsZCB9O1xyXG5cdH1cclxuXHJcblx0cHVibGljIHN0YXJ0KCkge1xyXG5cdFx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMubG9vcCk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGxvb3AoKSB7XHJcblx0XHRjb25zdCB7IHdvcmxkLCB2aWV3IH0gPSB0aGlzLl9zY2VuZXMuZ2V0KHRoaXMuX2N1cnJlbnRTY2VuZSkgYXMgVFNjZW5lO1xyXG5cdFx0d29ybGQudXBkYXRlKHRoaXMuX2lucHV0KTtcclxuXHRcdGlmICh0aGlzLl9pbnB1dC54ICE9PSAwICYmIHRoaXMuX2lucHV0LnkgIT09IDApIHRoaXMuX2lucHV0LmNvb3JkaW5hdGVzID0geyB4OiAwLCB5OiAwIH07XHJcblx0XHR2aWV3LnVwZGF0ZSh3b3JsZCk7XHJcblx0XHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5sb29wKTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IEdhbWVPYmplY3QgZnJvbSAnLi9nYW1lT2JqZWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvbnVzIGV4dGVuZHMgR2FtZU9iamVjdCB7XHJcblx0cHJpdmF0ZSBfc2VsZWN0ZWQgPSBmYWxzZTtcclxuXHJcblx0cHVibGljIGdldCBzZWxlY3RlZCgpIHtcclxuXHRcdHJldHVybiB0aGlzLl9zZWxlY3RlZDtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzZXQgc2VsZWN0ZWQoc2VsZWN0ZWQ6IGJvb2xlYW4pIHtcclxuXHRcdHRoaXMuX3NlbGVjdGVkID0gc2VsZWN0ZWQ7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgdG9nZ2xlU2VsZWN0KCkge1xyXG5cdFx0dGhpcy5fc2VsZWN0ZWQgPSAhdGhpcy5fc2VsZWN0ZWQ7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCBHYW1lT2JqZWN0IGZyb20gJy4vZ2FtZU9iamVjdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCdXR0b24gZXh0ZW5kcyBHYW1lT2JqZWN0IHtcclxuXHRwcml2YXRlIF9zZWxlY3RlZCA9IGZhbHNlO1xyXG5cclxuXHRwcml2YXRlIF9jb2xvciA9ICcnO1xyXG5cclxuXHRwdWJsaWMgZ2V0IGNvbG9yKCk6IHN0cmluZyB7XHJcblx0XHRyZXR1cm4gdGhpcy5fY29sb3I7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc2V0IGNvbG9yKGNvbG9yOiBzdHJpbmcpIHtcclxuXHRcdHRoaXMuX2NvbG9yID0gY29sb3I7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgdG9nZ2xlU2VsZWN0KCkge1xyXG5cdFx0dGhpcy5fc2VsZWN0ZWQgPSAhdGhpcy5fc2VsZWN0ZWQ7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgaXNTZWxlY3RlZCgpIHtcclxuXHRcdHJldHVybiB0aGlzLl9zZWxlY3RlZDtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29vcmRpbmF0ZXMsIERpcmVjdGlvbiwgUmVzaXplVHlwZSwgU2l6ZSB9IGZyb20gJy4uL3R5cGVzJztcclxuXHJcbmludGVyZmFjZSBJR2FtZU9iamVjdCB7XHJcblx0aW5pdDogKHBvc2l0aW9uOiBDb29yZGluYXRlcywgc2l6ZTogU2l6ZSwgaXRlbVNpemU/OiBTaXplKSA9PiB2b2lkO1xyXG5cdHJlc2l6ZTogKHJlc2l6ZVR5cGU6IFJlc2l6ZVR5cGUpID0+IHZvaWQ7XHJcblx0bW92ZTogKG1vdmVUeXBlOiBEaXJlY3Rpb24sIHZlbG9jaXR5PzogbnVtYmVyKSA9PiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBHYW1lT2JqZWN0IGltcGxlbWVudHMgSUdhbWVPYmplY3Qge1xyXG5cdHByb3RlY3RlZCBfeCA9IDA7XHJcblxyXG5cdHByb3RlY3RlZCBfeSA9IDA7XHJcblxyXG5cdHByb3RlY3RlZCBfaGVpZ2h0ID0gMDtcclxuXHJcblx0cHJvdGVjdGVkIF93aWR0aCA9IDA7XHJcblxyXG5cdHByb3RlY3RlZCBfdmVsb2NpdHkgPSAwO1xyXG5cclxuXHRwcm90ZWN0ZWQgX29sZFkgPSAwO1xyXG5cclxuXHRwcm90ZWN0ZWQgX29sWCA9IDA7XHJcblxyXG5cdHByb3RlY3RlZCBfaXRlbVNpemU6IFNpemUgPSB7IGhlaWdodDogMCwgd2lkdGg6IDAgfTtcclxuXHJcblx0aW5pdChwb3NpdGlvbjogQ29vcmRpbmF0ZXMsIHNpemU6IFNpemUsIGl0ZW1TaXplPzogU2l6ZSB8IHVuZGVmaW5lZCk6IHZvaWQge1xyXG5cdFx0dGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uO1xyXG5cdFx0dGhpcy5fb2xkWSA9IHBvc2l0aW9uLnk7XHJcblx0XHR0aGlzLnNpemUgPSBzaXplO1xyXG5cdFx0aWYgKGl0ZW1TaXplKSB0aGlzLl9pdGVtU2l6ZSA9IGl0ZW1TaXplO1xyXG5cdH1cclxuXHJcblx0cHVibGljIG1vdmUobW92ZVR5cGU6IERpcmVjdGlvbiwgdmVsb2NpdHk/OiBudW1iZXIpIHtcclxuXHRcdGNvbnN0IGFuVmVsb2NpdHkgPSB2ZWxvY2l0eSB8fCB0aGlzLl92ZWxvY2l0eTtcclxuXHRcdGNvbnN0IHsgVXAsIFJpZ2h0LCBMZWZ0LCBEb3duIH0gPSBEaXJlY3Rpb247XHJcblx0XHRzd2l0Y2ggKG1vdmVUeXBlKSB7XHJcblx0XHRcdGNhc2UgVXA6XHJcblx0XHRcdFx0dGhpcy5feSAtPSBhblZlbG9jaXR5O1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIFJpZ2h0OlxyXG5cdFx0XHRcdHRoaXMuX3ggKz0gYW5WZWxvY2l0eTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSBMZWZ0OlxyXG5cdFx0XHRcdHRoaXMuX3ggLT0gYW5WZWxvY2l0eTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSBEb3duOlxyXG5cdFx0XHRcdHRoaXMuX3kgKz0gYW5WZWxvY2l0eTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ1Vua25vd24gbW92ZSB0eXBlJyk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgcmVzaXplKHJlc2l6ZVR5cGU6IFJlc2l6ZVR5cGUsIHZlbG9jaXR5PzogbnVtYmVyKSB7XHJcblx0XHRjb25zdCBhblZlbG9jaXR5ID0gdmVsb2NpdHkgfHwgdGhpcy5fdmVsb2NpdHk7XHJcblx0XHRjb25zdCB7IFpvb20sIFNocmluayB9ID0gUmVzaXplVHlwZTtcclxuXHRcdHN3aXRjaCAocmVzaXplVHlwZSkge1xyXG5cdFx0XHRjYXNlIFNocmluazpcclxuXHRcdFx0XHRpZiAodGhpcy5faGVpZ2h0ID4gMCkgdGhpcy5faGVpZ2h0IC09IGFuVmVsb2NpdHk7XHJcblx0XHRcdFx0ZWxzZSB0aGlzLl9oZWlnaHQgPSAwO1xyXG5cdFx0XHRcdGlmICh0aGlzLl93aWR0aCA+IDApIHRoaXMuX3dpZHRoIC09IGFuVmVsb2NpdHk7XHJcblx0XHRcdFx0ZWxzZSB0aGlzLl93aWR0aCA9IDA7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgWm9vbTpcclxuXHRcdFx0XHR0aGlzLl9oZWlnaHQgKz0gYW5WZWxvY2l0eTtcclxuXHRcdFx0XHR0aGlzLl93aWR0aCArPSBhblZlbG9jaXR5O1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcignVW5rbm93biByZXNpemUgdHlwZScpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHVibGljIGdldCB4KCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX3g7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZ2V0IHkoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5feTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBnZXQgaGVpZ2h0KCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2hlaWdodDtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBnZXQgd2lkdGgoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fd2lkdGg7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZ2V0IHBvc2l0aW9uKCk6IENvb3JkaW5hdGVzIHtcclxuXHRcdHJldHVybiB7IHg6IHRoaXMuX3gsIHk6IHRoaXMuX3kgfTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzZXQgcG9zaXRpb24ocG9zaXRpb246IENvb3JkaW5hdGVzKSB7XHJcblx0XHR0aGlzLl94ID0gcG9zaXRpb24ueDtcclxuXHRcdHRoaXMuX3kgPSBwb3NpdGlvbi55O1xyXG5cdH1cclxuXHJcblx0cHVibGljIGdldCBzaXplKCk6IFNpemUge1xyXG5cdFx0cmV0dXJuIHsgd2lkdGg6IHRoaXMuX3dpZHRoLCBoZWlnaHQ6IHRoaXMuX2hlaWdodCB9O1xyXG5cdH1cclxuXHJcblx0cHVibGljIHNldCBzaXplKHNpemU6IFNpemUpIHtcclxuXHRcdHRoaXMuX2hlaWdodCA9IHNpemUuaGVpZ2h0O1xyXG5cdFx0dGhpcy5fd2lkdGggPSBzaXplLndpZHRoO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgQmxvY2sgZnJvbSAnLi4vYmxvY2snO1xyXG5pbXBvcnQgeyBDb29yZGluYXRlcywgU2l6ZSwgR3JpZEluZm8gfSBmcm9tICcuLi90eXBlcyc7XHJcbmltcG9ydCB7IFJlc3VsdCB9IGZyb20gJy4uL3dvcmxkcy9lbmRXb3JsZCc7XHJcbmltcG9ydCBHYW1lT2JqZWN0IGZyb20gJy4vZ2FtZU9iamVjdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHcmlkIGV4dGVuZHMgR2FtZU9iamVjdCB7XHJcblx0cHJpdmF0ZSBfZ3JpZEluZm86IEdyaWRJbmZvO1xyXG5cclxuXHRwcml2YXRlIF9ibG9ja0xheW91dDogQmxvY2tbXVtdID0gW107XHJcblxyXG5cdHByaXZhdGUgX2l0ZW1IZWlnaHQgPSAwO1xyXG5cclxuXHRwcml2YXRlIF9pdGVtV2lkdGggPSAwO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihncmlkSW5mbzogR3JpZEluZm8sIGVtaXRFRnVuYzogKGVOYW1lOiBzdHJpbmcsIGFyZzogYW55KSA9PiB2b2lkKSB7XHJcblx0XHRzdXBlcigpO1xyXG5cdFx0dGhpcy5fZ3JpZEluZm8gPSBncmlkSW5mbztcclxuXHRcdHRoaXMuY3JlYXRlTGF5b3V0KCk7XHJcblx0XHRsZXQgcyA9IGdyaWRJbmZvLm1pblN0aXJyaW5nQW1vdW50O1xyXG5cdFx0d2hpbGUgKCF0aGlzLmNoZWNrTGF5b3V0KCkgJiYgcyA+IDApIHtcclxuXHRcdFx0dGhpcy5jcmVhdGVMYXlvdXQoKTtcclxuXHRcdFx0cyAtPSAxO1xyXG5cdFx0fVxyXG5cdFx0aWYgKHMgPT09IDApIHtcclxuXHRcdFx0ZW1pdEVGdW5jKCdlbmRHYW1lJywgUmVzdWx0Lkxvc3QpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHVibGljIGluaXQocG9zaXRpb246IENvb3JkaW5hdGVzLCBzaXplOiBTaXplLCBpdGVtU2l6ZTogU2l6ZSkge1xyXG5cdFx0dGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uO1xyXG5cdFx0dGhpcy5zaXplID0gc2l6ZTtcclxuXHRcdHRoaXMuaXRlbVNpemUgPSBpdGVtU2l6ZTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgY3JlYXRlTGF5b3V0KCkge1xyXG5cdFx0Y29uc3QgeyBuLCBtLCBibG9ja0NvbG9ycyB9ID0gdGhpcy5ncmlkSW5mbztcclxuXHRcdGNvbnN0IGxheW91dDogQmxvY2tbXVtdID0gW107XHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IG47IGkgKz0gMSkge1xyXG5cdFx0XHRsYXlvdXRbaV0gPSBbXTtcclxuXHRcdFx0Zm9yIChsZXQgaiA9IDA7IGogPCBtOyBqICs9IDEpIHtcclxuXHRcdFx0XHRsYXlvdXRbaV1bal0gPSBuZXcgQmxvY2soYmxvY2tDb2xvcnMpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHR0aGlzLl9ibG9ja0xheW91dCA9IGxheW91dDtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgY2hlY2tMYXlvdXQoKTogYm9vbGVhbiB7XHJcblx0XHRjb25zdCB7IG0gfSA9IHRoaXMuX2dyaWRJbmZvO1xyXG5cdFx0Y29uc3QgbGF5b3V0ID0gdGhpcy5fYmxvY2tMYXlvdXQ7XHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IG0gLSAxOyBpICs9IDEpIHtcclxuXHRcdFx0Y29uc3Qgcm93TGlzdCA9IGxheW91dFtpXS5tYXAoYmxvY2sgPT4gYmxvY2suY29sb3IpO1xyXG5cdFx0XHRjb25zdCByb3dTZXQgPSBuZXcgU2V0KHJvd0xpc3QpO1xyXG5cdFx0XHRpZiAocm93U2V0LnNpemUgPCByb3dMaXN0Lmxlbmd0aCkgcmV0dXJuIHRydWU7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHQvLyBUT0RPIGFkZCBjaGVjayBmb3IgY29sdW1uc1xyXG5cdH1cclxuXHJcblx0cHVibGljIGdldCBuKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2dyaWRJbmZvLm47XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZ2V0IG0oKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fZ3JpZEluZm8ubTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBnZXQgYmxvY2tMYXlvdXQoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fYmxvY2tMYXlvdXQ7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc2V0IGJsb2NrTGF5b3V0KGxheW91dDogQmxvY2tbXVtdKSB7XHJcblx0XHR0aGlzLl9ibG9ja0xheW91dCA9IGxheW91dDtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBnZXQgZ3JpZEluZm8oKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fZ3JpZEluZm87XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZ2V0IGl0ZW1IZWlnaHQoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5faXRlbUhlaWdodDtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBnZXQgaXRlbVdpZHRoKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2l0ZW1XaWR0aDtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBnZXQgaXRlbVNpemUoKSB7XHJcblx0XHRyZXR1cm4geyB3aWR0aDogdGhpcy5faXRlbVdpZHRoLCBoZWlnaHQ6IHRoaXMuX2l0ZW1IZWlnaHQgfTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzZXQgaXRlbVNpemUoc2l6ZTogU2l6ZSkge1xyXG5cdFx0dGhpcy5faXRlbVdpZHRoID0gc2l6ZS53aWR0aDtcclxuXHRcdHRoaXMuX2l0ZW1IZWlnaHQgPSBzaXplLmhlaWdodDtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29vcmRpbmF0ZXMgfSBmcm9tICcuL3R5cGVzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElucHV0IHtcclxuXHRwcml2YXRlIF94ID0gMDtcclxuXHJcblx0cHJpdmF0ZSBfeSA9IDA7XHJcblxyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0dGhpcy5pbml0KCk7XHJcblx0fVxyXG5cclxuXHRpbml0KCkge1xyXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZSA9PiB7XHJcblx0XHRcdHRoaXMuX3ggPSBlLm9mZnNldFg7XHJcblx0XHRcdHRoaXMuX3kgPSBlLm9mZnNldFk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBnZXQgeCgpIHtcclxuXHRcdHJldHVybiB0aGlzLl94O1xyXG5cdH1cclxuXHJcblx0cHVibGljIGdldCB5KCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX3k7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc2V0IGNvb3JkaW5hdGVzKGNyOiBDb29yZGluYXRlcykge1xyXG5cdFx0dGhpcy5feCA9IGNyLng7XHJcblx0XHR0aGlzLl95ID0gY3IueTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29vcmRpbmF0ZXMsIERpcmVjdGlvbiB9IGZyb20gJy4vdHlwZXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZ3Jlc3NCYXIge1xyXG5cdHByaXZhdGUgX3ggPSAwO1xyXG5cclxuXHRwcml2YXRlIF9jdXJyZW50WCA9IDA7XHJcblxyXG5cdHByaXZhdGUgX2VuZFggPSAwO1xyXG5cclxuXHRwcml2YXRlIF92ZWxvY2l0eSA9IDE7XHJcblxyXG5cdHByaXZhdGUgX3kgPSAwO1xyXG5cclxuXHRwcml2YXRlIF9kaXJlY3Rpb246IERpcmVjdGlvbiA9IERpcmVjdGlvbi5SaWdodDtcclxuXHJcblx0aW5pdChzdGFydFg6IG51bWJlciwgd2lkdGg6IG51bWJlciwgeTogbnVtYmVyLCB0YXJnZXRQb2ludHM6IG51bWJlcikge1xyXG5cdFx0dGhpcy5feCA9IHN0YXJ0WDtcclxuXHRcdGlmICh0aGlzLl9kaXJlY3Rpb24gPT09IERpcmVjdGlvbi5SaWdodCkge1xyXG5cdFx0XHR0aGlzLl9jdXJyZW50WCA9IHN0YXJ0WDtcclxuXHRcdFx0dGhpcy5fZW5kWCA9IHN0YXJ0WCArIHdpZHRoO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5fY3VycmVudFggPSBzdGFydFggKyB3aWR0aDtcclxuXHRcdFx0dGhpcy5fZW5kWCA9IHN0YXJ0WDtcclxuXHRcdH1cclxuXHRcdHRoaXMuX3kgPSB5O1xyXG5cdFx0dGhpcy5fdmVsb2NpdHkgPSBQcm9ncmVzc0Jhci5jYWxjVmVsb2NpdHkod2lkdGgsIHRhcmdldFBvaW50cyk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIHN0YXRpYyBjYWxjVmVsb2NpdHkod2lkdGg6IG51bWJlciwgdGFyZ2V0UG9pbnRzOiBudW1iZXIpOiBudW1iZXIge1xyXG5cdFx0cmV0dXJuIHdpZHRoIC8gdGFyZ2V0UG9pbnRzO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBtb3ZlUmlnaHQoKSB7XHJcblx0XHRpZiAodGhpcy5fY3VycmVudFggPj0gdGhpcy5fZW5kWCkgcmV0dXJuO1xyXG5cdFx0dGhpcy5fY3VycmVudFggKz0gdGhpcy5fdmVsb2NpdHk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIG1vdmVMZWZ0KCkge1xyXG5cdFx0dGhpcy5fY3VycmVudFggLT0gdGhpcy5fdmVsb2NpdHk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgbW92ZSgpIHtcclxuXHRcdGlmICh0aGlzLmRpcmVjdGlvbiA9PT0gRGlyZWN0aW9uLkxlZnQpIHRoaXMubW92ZUxlZnQoKTtcclxuXHRcdGVsc2UgdGhpcy5tb3ZlUmlnaHQoKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBnZXQgY3VycmVudFBvc2l0aW9uKCk6IENvb3JkaW5hdGVzIHtcclxuXHRcdHJldHVybiB7IHg6IHRoaXMuX2N1cnJlbnRYLCB5OiB0aGlzLl95IH07XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc2V0IHZlbG9jaXR5KHY6IG51bWJlcikge1xyXG5cdFx0dGhpcy5fdmVsb2NpdHkgPSB2O1xyXG5cdH1cclxuXHJcblx0cHVibGljIHNldFZlbG9jaXR5QnlXaWR0aCh3aWR0aDogbnVtYmVyLCB0YXJnZXRQb2ludHM6IG51bWJlcikge1xyXG5cdFx0dGhpcy5fdmVsb2NpdHkgPSBQcm9ncmVzc0Jhci5jYWxjVmVsb2NpdHkod2lkdGgsIHRhcmdldFBvaW50cyk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc2V0IGRpcmVjdGlvbihkaXJlY3Rpb246IERpcmVjdGlvbikge1xyXG5cdFx0dGhpcy5fZGlyZWN0aW9uID0gZGlyZWN0aW9uO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHNldCB4KHN0YXJ0OiBudW1iZXIpIHtcclxuXHRcdHRoaXMuX3ggPSBzdGFydDtcclxuXHRcdHRoaXMuX2N1cnJlbnRYID0gc3RhcnQ7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc2V0IEVuZFgoeDogbnVtYmVyKSB7XHJcblx0XHR0aGlzLl9lbmRYID0geDtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzZXRFbmRYQnlXaWR0aCh3aWR0aDogbnVtYmVyKSB7XHJcblx0XHR0aGlzLl9lbmRYID0gdGhpcy5feCArIHdpZHRoO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHNldCBjdXJyZW50WCh3aWR0aDogbnVtYmVyKSB7XHJcblx0XHR0aGlzLl9jdXJyZW50WCA9IHRoaXMuX3ggKyB3aWR0aDtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBnZXQgd2lkdGgoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fY3VycmVudFggLSB0aGlzLl94O1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgVmlldyBmcm9tICcuL3ZpZXdzL3ZpZXcnO1xyXG5pbXBvcnQgV29ybGQgZnJvbSAnLi93b3JsZHMvd29ybGQnO1xyXG5cclxuZXhwb3J0IGVudW0gU2NlbmVzIHtcclxuXHRTdGFydCA9ICdTdGFydCcsXHJcblx0R2FtZSA9ICdHYW1lJyxcclxuXHRFbmQgPSAnRW5kJyxcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgVFNjZW5lID0ge1xyXG5cdHZpZXc6IFZpZXc7XHJcblx0d29ybGQ6IFdvcmxkO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NlbmVNYW5hZ2VyIHtcclxuXHRwcml2YXRlIF9zY2VuZXMgPSBuZXcgTWFwPFNjZW5lcywgVFNjZW5lPigpO1xyXG5cclxuXHRwdWJsaWMgYWRkKHNjZW5lTmFtZTogU2NlbmVzLCBzY2VuZU9iajogVFNjZW5lKSB7XHJcblx0XHR0aGlzLl9zY2VuZXMuc2V0KHNjZW5lTmFtZSwgc2NlbmVPYmopO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGhhcyhzY2VuZU5hbWU6IFNjZW5lcykge1xyXG5cdFx0dGhpcy5fc2NlbmVzLmhhcyhzY2VuZU5hbWUpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGdldChzY2VuZU5hbWU6IFNjZW5lcykge1xyXG5cdFx0cmV0dXJuIHRoaXMuX3NjZW5lcy5nZXQoc2NlbmVOYW1lKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBkZWxldGUoc2NlbmVOYW1lOiBTY2VuZXMpIHtcclxuXHRcdGlmICh0aGlzLl9zY2VuZXMuaGFzKHNjZW5lTmFtZSkpIHtcclxuXHRcdFx0dGhpcy5fc2NlbmVzLmRlbGV0ZShzY2VuZU5hbWUpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHVibGljIGdldCBzY2VuZXMoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fc2NlbmVzO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBQT0lOVFNfUEVSX1RVUk4gfSBmcm9tICcuL2NvbnN0YW50cyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY29yZSB7XHJcblx0cHJpdmF0ZSBfcG9pbnRzID0gMDtcclxuXHJcblx0cHJpdmF0ZSBfbW92ZXMgPSAwO1xyXG5cclxuXHRwcml2YXRlIF90YXJnZXRQb2ludHMgPSAwO1xyXG5cclxuXHRwcml2YXRlIF90YXJnZXRNb3ZlcyA9IDA7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHRhcmdldFBvaW50czogbnVtYmVyLCB0YXJnZXRNb3ZlczogbnVtYmVyKSB7XHJcblx0XHR0aGlzLl90YXJnZXRQb2ludHMgPSB0YXJnZXRQb2ludHM7XHJcblx0XHR0aGlzLl9tb3ZlcyA9IHRhcmdldE1vdmVzO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGdldCBwb2ludHMoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fcG9pbnRzO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGluY3JlYXNlUG9pbnRzKCkge1xyXG5cdFx0dGhpcy5fcG9pbnRzICs9IFBPSU5UU19QRVJfVFVSTjtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBnZXQgbW92ZXMoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fbW92ZXM7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZGVjcmVhc2VNb3Zlc051bSgpIHtcclxuXHRcdHRoaXMuX21vdmVzIC09IDE7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZ2V0IHRhcmdldFBvaW50cygpIHtcclxuXHRcdHJldHVybiB0aGlzLl90YXJnZXRQb2ludHM7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZ2V0IHRhcmdldE1vdmVzKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX3RhcmdldE1vdmVzO1xyXG5cdH1cclxufVxyXG4iLCJleHBvcnQgdHlwZSBDb29yZGluYXRlcyA9IHtcclxuXHR4OiBudW1iZXI7XHJcblx0eTogbnVtYmVyO1xyXG59O1xyXG5cclxuZXhwb3J0IGVudW0gUmVzaXplVHlwZSB7XHJcblx0Wm9vbSxcclxuXHRTaHJpbmssXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIERpcmVjdGlvbiB7XHJcblx0VXAsXHJcblx0UmlnaHQsXHJcblx0RG93bixcclxuXHRMZWZ0LFxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBTaXplID0ge1xyXG5cdHdpZHRoOiBudW1iZXI7XHJcblx0aGVpZ2h0OiBudW1iZXI7XHJcbn07XHJcblxyXG5leHBvcnQgdHlwZSBHcmlkSW5mbyA9IHtcclxuXHRibG9ja0NvbG9yczogbnVtYmVyW107XHJcblx0bjogbnVtYmVyO1xyXG5cdG06IG51bWJlcjtcclxuXHRrOiBudW1iZXI7XHJcblx0bWluU3RpcnJpbmdBbW91bnQ6IG51bWJlcjtcclxufTtcclxuXHJcbmV4cG9ydCB0eXBlIEdhbWVJbWFnZXMgPSB7IFtrZXk6IHN0cmluZ106IEhUTUxJbWFnZUVsZW1lbnQgfTtcclxuZXhwb3J0IHR5cGUgQXNzZXRzID0geyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcclxuXHJcbmV4cG9ydCB0eXBlIFBvc2l0aW9uTGlzdCA9IFtudW1iZXIsIG51bWJlcl1bXTtcclxuIiwiZXhwb3J0IGZ1bmN0aW9uIGdldFJhbmRvbUludGVnZXIobWluOiBudW1iZXIsIG1heDogbnVtYmVyKSB7XHJcblx0cmV0dXJuIE1hdGguZmxvb3IobWluICsgTWF0aC5yYW5kb20oKSAqIChtYXggKyAxIC0gbWluKSk7XHJcbn1cclxuXHJcbmNvbnN0IENPTE9SU19OVU0gPSA1O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNob29zZUNvbG9ycyhhbW91bnQ6IG51bWJlcikge1xyXG5cdGlmIChhbW91bnQgPT09IENPTE9SU19OVU0pIHtcclxuXHRcdHJldHVybiBBcnJheS5mcm9tKHsgbGVuZ3RoOiBDT0xPUlNfTlVNIH0sICh2LCBrKSA9PiBrICsgMSk7XHJcblx0fVxyXG5cdHJldHVybiBBcnJheS5mcm9tKHsgbGVuZ3RoOiBhbW91bnQgfSwgKCkgPT4gZ2V0UmFuZG9tSW50ZWdlcigwLCBhbW91bnQgLSAxKSk7XHJcblx0Ly8gVE9ETyBjaGVjayByZXBlYXRzXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRSYW5kb21WYWx1ZShhcnJheTogbnVtYmVyW10pOiBudW1iZXIge1xyXG5cdHJldHVybiBhcnJheVtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhcnJheS5sZW5ndGgpXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNob29zZUNvbG9yKGNvbG9yTnVtYmVyOiBudW1iZXIpOiBzdHJpbmcge1xyXG5cdHN3aXRjaCAoY29sb3JOdW1iZXIpIHtcclxuXHRcdGNhc2UgMTpcclxuXHRcdFx0cmV0dXJuICdCbHVlQmxvY2snO1xyXG5cdFx0Y2FzZSAyOlxyXG5cdFx0XHRyZXR1cm4gJ0dyZWVuQmxvY2snO1xyXG5cdFx0Y2FzZSAzOlxyXG5cdFx0XHRyZXR1cm4gJ1B1cnBsZUJsb2NrJztcclxuXHRcdGNhc2UgNDpcclxuXHRcdFx0cmV0dXJuICdSZWRCbG9jayc7XHJcblx0XHRjYXNlIDU6XHJcblx0XHRcdHJldHVybiAnWWVsbG93QmxvY2snO1xyXG5cdFx0ZGVmYXVsdDpcclxuXHRcdFx0cmV0dXJuICdCbHVlQmxvY2snO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrQ2xpY2sodVg6IG51bWJlciwgdVk6IG51bWJlciwgeDogbnVtYmVyLCB5OiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCB3aWR0aDpudW1iZXIpIHtcclxuXHRyZXR1cm4gdVkgPiB5ICYmIHVZIDwgeSArIGhlaWdodCAmJiB1WCA+IHggJiYgdVggPCB4ICsgd2lkdGhcclxufVxyXG4iLCJpbXBvcnQgVmlldyBmcm9tICcuL3ZpZXcnO1xyXG5pbXBvcnQgeyBJTUFHRV9TSVpFX0NPRUZGSUNJRU5UIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcclxuaW1wb3J0IEVuZFdvcmxkIGZyb20gJy4uL3dvcmxkcy9lbmRXb3JsZCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbmRWaWV3IGV4dGVuZHMgVmlldyB7XHJcblx0cHVibGljIGluaXQod29ybGQ6IEVuZFdvcmxkKTogdm9pZCB7XHJcblx0XHR0aGlzLmluaXRCdXR0b24od29ybGQpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHVwZGF0ZSh3b3JsZDogRW5kV29ybGQpOiB2b2lkIHtcclxuXHRcdHRoaXMucmVuZGVyU2NlbmUod29ybGQpO1xyXG5cdH1cclxuXHJcblx0cHJvdGVjdGVkIHJlbmRlclNjZW5lKHdvcmxkOiBFbmRXb3JsZCk6IHZvaWQge1xyXG5cdFx0Y29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSB0aGlzLl9jYW52YXM7XHJcblx0XHRjb25zdCB7IEJ1dHRvbiB9ID0gdGhpcy5fZ2FtZUltYWdlcztcclxuXHRcdGNvbnN0IGJXaWR0aCA9IChCdXR0b24ud2lkdGggLyBJTUFHRV9TSVpFX0NPRUZGSUNJRU5UKSAqIDI7XHJcblx0XHRjb25zdCBiSGVpZ2h0ID0gKEJ1dHRvbi5oZWlnaHQgLyBJTUFHRV9TSVpFX0NPRUZGSUNJRU5UKSAqIDI7XHJcblx0XHRjb25zdCBkeCA9IHdpZHRoIC8gMiAtIGJXaWR0aCAvIDI7XHJcblx0XHRjb25zdCBkeSA9IGhlaWdodCAvIDIgLSBiSGVpZ2h0IC8gMjtcclxuXHRcdHRoaXMuX2N0eC5maWxsU3R5bGUgPSAnI2ExYTFhMSc7XHJcblx0XHR0aGlzLl9jdHguZmlsbFJlY3QoMCwgMCwgd2lkdGgsIGhlaWdodCk7XHJcblx0XHR0aGlzLl9jdHguZHJhd0ltYWdlKEJ1dHRvbiwgZHgsIGR5LCBiV2lkdGgsIGJIZWlnaHQpO1xyXG5cdFx0dGhpcy5fY3R4LmZpbGxTdHlsZSA9ICcjZmZmJztcclxuXHRcdHRoaXMuX2N0eC5mb250ID0gJzM0cHggTWFydmluJztcclxuXHRcdGxldCB0ZXh0ID0gYNCX0LDQvdC+0LLQvmA7XHJcblx0XHR0aGlzLl9jdHguZmlsbFRleHQodGV4dCwgZHggKyBiV2lkdGggLyAyIC0gdGhpcy5fY3R4Lm1lYXN1cmVUZXh0KHRleHQpLndpZHRoIC8gMiwgZHkgKyBiSGVpZ2h0IC8gMiArIDEwKTtcclxuXHRcdHRoaXMuX2N0eC5mb250ID0gJzU0cHggTWFydmluJztcclxuXHRcdHRleHQgPSBg0JLRiyAke3dvcmxkLnJlc3VsdH1gO1xyXG5cdFx0dGhpcy5fY3R4LmZpbGxUZXh0KHRleHQsIHdpZHRoIC8gMiAtIHRoaXMuX2N0eC5tZWFzdXJlVGV4dCh0ZXh0KS53aWR0aCAvIDIsIGR5ICsgYkhlaWdodCAvIDIgLSAxMDApO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBpbml0QnV0dG9uKHdvcmxkOiBFbmRXb3JsZCkge1xyXG5cdFx0Y29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSB0aGlzLl9jYW52YXM7XHJcblx0XHRjb25zdCB7IEJ1dHRvbiB9ID0gdGhpcy5fZ2FtZUltYWdlcztcclxuXHRcdGNvbnN0IGJXaWR0aCA9IChCdXR0b24ud2lkdGggLyBJTUFHRV9TSVpFX0NPRUZGSUNJRU5UKSAqIDI7XHJcblx0XHRjb25zdCBiSGVpZ2h0ID0gKEJ1dHRvbi5oZWlnaHQgLyBJTUFHRV9TSVpFX0NPRUZGSUNJRU5UKSAqIDI7XHJcblx0XHRjb25zdCBkeCA9IHdpZHRoIC8gMiAtIGJXaWR0aCAvIDI7XHJcblx0XHRjb25zdCBkeSA9IGhlaWdodCAvIDIgLSBiSGVpZ2h0IC8gMjtcclxuXHRcdHdvcmxkLmFnYWluQnV0dG9uLmluaXQoXHJcblx0XHRcdHsgeDogZHgsIHk6IGR5IH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHR3aWR0aDogYldpZHRoLFxyXG5cdFx0XHRcdGhlaWdodDogYkhlaWdodCxcclxuXHRcdFx0fVxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCBjbGVhclNjcmVlbigpOiB2b2lkIHtcclxuXHRcdHRoaXMuX2N0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5fY2FudmFzLndpZHRoLCB0aGlzLl9jYW52YXMuaGVpZ2h0KTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IFZpZXcgZnJvbSAnLi92aWV3JztcclxuaW1wb3J0IHsgSU1BR0VfU0laRV9DT0VGRklDSUVOVCwgVEVMRVBPUlRfQ09TVCB9IGZyb20gJy4uL2NvbnN0YW50cyc7XHJcbmltcG9ydCBTY29yZSBmcm9tICcuLi9zY29yZSc7XHJcbmltcG9ydCBHYW1lV29ybGQgZnJvbSAnLi4vd29ybGRzL2dhbWVXb3JsZCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lVmlldyBleHRlbmRzIFZpZXcge1xyXG5cdGluaXQod29ybGQ6IEdhbWVXb3JsZCk6IHZvaWQge1xyXG5cdFx0dGhpcy5pbml0R3JpZCh3b3JsZCk7XHJcblx0XHR0aGlzLmluaXRQcm9ncmVzc0Jhcih3b3JsZCk7XHJcblx0XHR0aGlzLmluaXRCb251cyh3b3JsZCk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGUod29ybGQ6IEdhbWVXb3JsZCk6IHZvaWQge1xyXG5cdFx0dGhpcy5jbGVhclNjcmVlbigpO1xyXG5cdFx0dGhpcy5yZW5kZXJTY2VuZSh3b3JsZCk7XHJcblx0fVxyXG5cclxuXHRyZW5kZXJTY2VuZSh3b3JsZDogR2FtZVdvcmxkKSB7XHJcblx0XHR0aGlzLnJlbmRlckhlYWRlcih3b3JsZCk7XHJcblx0XHR0aGlzLnJlbmRlckdyaWQod29ybGQpO1xyXG5cdFx0dGhpcy5yZW5kZXJTY29yZSh3b3JsZCk7XHJcblx0XHR0aGlzLnJlbmRlclByb2dyZXNzQmFyKHdvcmxkKTtcclxuXHRcdHRoaXMucmVuZGVyQm9udXMod29ybGQpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSByZW5kZXJIZWFkZXIod29ybGQ6IEdhbWVXb3JsZCkge1xyXG5cdFx0Y29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSB0aGlzLl9jYW52YXM7XHJcblx0XHRjb25zdCB7IEhlYWRlclBhbmVsLCBNb25leUJsb2NrIH0gPSB0aGlzLl9nYW1lSW1hZ2VzO1xyXG5cclxuXHRcdHRoaXMuX2N0eC5maWxsU3R5bGUgPSAnI2ExYTFhMSc7XHJcblx0XHR0aGlzLl9jdHguZmlsbFJlY3QoMCwgMCwgd2lkdGgsIGhlaWdodCk7XHJcblx0XHRjb25zdCBkeCA9IHdpZHRoIC8gMiAtIEhlYWRlclBhbmVsLndpZHRoIC8gSU1BR0VfU0laRV9DT0VGRklDSUVOVCAvIDI7XHJcblx0XHR0aGlzLl9jdHguZHJhd0ltYWdlKEhlYWRlclBhbmVsLCBkeCwgMCwgSGVhZGVyUGFuZWwud2lkdGggLyBJTUFHRV9TSVpFX0NPRUZGSUNJRU5ULCBIZWFkZXJQYW5lbC5oZWlnaHQgLyBJTUFHRV9TSVpFX0NPRUZGSUNJRU5UKTtcclxuXHRcdHRoaXMuX2N0eC5kcmF3SW1hZ2UoTW9uZXlCbG9jaywgZHggKyAzNSwgSGVhZGVyUGFuZWwuaGVpZ2h0IC8gSU1BR0VfU0laRV9DT0VGRklDSUVOVCAvIDEwLCBNb25leUJsb2NrLndpZHRoIC8gSU1BR0VfU0laRV9DT0VGRklDSUVOVCwgTW9uZXlCbG9jay5oZWlnaHQgLyBJTUFHRV9TSVpFX0NPRUZGSUNJRU5UKTtcclxuXHJcblx0XHR0aGlzLl9jdHguZmlsbFN0eWxlID0gJyNmZmYnO1xyXG5cdFx0dGhpcy5fY3R4LmZvbnQgPSAnMjBweCBNYXJ2aW4nO1xyXG5cdFx0dGhpcy5fY3R4LmZpbGxUZXh0KCfQv9GA0L7Qs9GA0LXRgdGBJywgd2lkdGggLyAyIC0gNzAsIDIzKTtcclxuXHRcdHRoaXMuX2N0eC5maWxsVGV4dChgJHt3b3JsZC5tb25leX1gLCBkeCArIE1vbmV5QmxvY2sud2lkdGggLyBJTUFHRV9TSVpFX0NPRUZGSUNJRU5UIC8gMS4zLCBIZWFkZXJQYW5lbC5oZWlnaHQgLyBJTUFHRV9TSVpFX0NPRUZGSUNJRU5UIC8gMik7XHJcblx0fVxyXG5cclxuXHRyZW5kZXJTY29yZSh3b3JsZDogR2FtZVdvcmxkKSB7XHJcblx0XHRjb25zdCBzY29yZVBhbmVsSW1hZ2UgPSB0aGlzLl9nYW1lSW1hZ2VzLlNjb3JlUGFuZWw7XHJcblx0XHRjb25zdCBkeCA9IHRoaXMuX2NhbnZhcy53aWR0aCAvIDIgKyAxMjU7XHJcblx0XHRjb25zdCBkeSA9IHRoaXMuX2dhbWVJbWFnZXMuSGVhZGVyUGFuZWwuaGVpZ2h0IC8gSU1BR0VfU0laRV9DT0VGRklDSUVOVCArIDU0O1xyXG5cdFx0Y29uc3QgdGV4dER4ID0gZHggKyBzY29yZVBhbmVsSW1hZ2Uud2lkdGggLyBJTUFHRV9TSVpFX0NPRUZGSUNJRU5UIC8gMjtcclxuXHRcdHRoaXMuX2N0eC5kcmF3SW1hZ2Uoc2NvcmVQYW5lbEltYWdlLCBkeCwgZHksIHNjb3JlUGFuZWxJbWFnZS53aWR0aCAvIElNQUdFX1NJWkVfQ09FRkZJQ0lFTlQsIHNjb3JlUGFuZWxJbWFnZS5oZWlnaHQgLyBJTUFHRV9TSVpFX0NPRUZGSUNJRU5UKTtcclxuXHRcdHRoaXMucmVuZGVyU2NvcmVUZXh0KHdvcmxkLnNjb3JlLCB0ZXh0RHgsIGR5LCBzY29yZVBhbmVsSW1hZ2UpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBnZXRUZXh0U2NvcmVEeSA9IChwYW5lbER5OiBudW1iZXIsIGltYWdlOiBIVE1MSW1hZ2VFbGVtZW50LCBrOiBudW1iZXIpID0+IHBhbmVsRHkgKyBpbWFnZS5oZWlnaHQgLyBJTUFHRV9TSVpFX0NPRUZGSUNJRU5UIC8gaztcclxuXHJcblx0cHJpdmF0ZSBnZXRUZXh0U2NvcmVEeCA9ICh0ZXh0RHg6IG51bWJlciwgdGV4dDogc3RyaW5nKSA9PiB0ZXh0RHggLSB0aGlzLl9jdHgubWVhc3VyZVRleHQodGV4dCkud2lkdGggLyAyO1xyXG5cclxuXHRwcml2YXRlIHJlbmRlclNjb3JlVGV4dChzY29yZTogU2NvcmUsIHRleHREeDogbnVtYmVyLCBwYW5lbER5OiBudW1iZXIsIGltYWdlOiBIVE1MSW1hZ2VFbGVtZW50KSB7XHJcblx0XHRjb25zdCB7IHBvaW50cywgbW92ZXMgfSA9IHNjb3JlO1xyXG5cdFx0dGhpcy5fY3R4LmZvbnQgPSAnMjBweCBNYXJ2aW4nO1xyXG5cdFx0bGV0IHRleHQgPSAn0LLRgNC10LzRjzonO1xyXG5cdFx0dGhpcy5fY3R4LmZpbGxUZXh0KHRleHQsIHRoaXMuZ2V0VGV4dFNjb3JlRHgodGV4dER4LCB0ZXh0KSwgcGFuZWxEeSk7XHJcblx0XHR0aGlzLl9jdHguZm9udCA9ICczNHB4IE1hcnZpbic7XHJcblx0XHR0ZXh0ID0gYCR7cG9pbnRzfWA7XHJcblx0XHR0aGlzLl9jdHguZmlsbFRleHQodGV4dCwgdGhpcy5nZXRUZXh0U2NvcmVEeCh0ZXh0RHgsIHRleHQpLCB0aGlzLmdldFRleHRTY29yZUR5KHBhbmVsRHksIGltYWdlLCAxLjE2KSk7XHJcblx0XHR0ZXh0ID0gYCR7bW92ZXN9YDtcclxuXHRcdHRoaXMuX2N0eC5mb250ID0gJzUycHggTWFydmluJztcclxuXHRcdHRoaXMuX2N0eC5maWxsVGV4dCh0ZXh0LCB0aGlzLmdldFRleHRTY29yZUR4KHRleHREeCwgdGV4dCksIHRoaXMuZ2V0VGV4dFNjb3JlRHkocGFuZWxEeSwgaW1hZ2UsIDIuNSkpO1xyXG5cdFx0dGV4dCA9ICfQvtGH0LrQuDonO1xyXG5cdFx0dGhpcy5fY3R4LmZvbnQgPSAnMjBweCBNYXJ2aW4nO1xyXG5cdFx0dGhpcy5fY3R4LmZpbGxUZXh0KHRleHQsIHRoaXMuZ2V0VGV4dFNjb3JlRHgodGV4dER4LCB0ZXh0KSwgdGhpcy5nZXRUZXh0U2NvcmVEeShwYW5lbER5LCBpbWFnZSwgMS40KSk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGluaXRCb251cyh3b3JsZDogR2FtZVdvcmxkKSB7XHJcblx0XHRjb25zdCB7IFNjb3JlUGFuZWwsIEhlYWRlclBhbmVsLCBCb251cyB9ID0gdGhpcy5fZ2FtZUltYWdlcztcclxuXHRcdGNvbnN0IGR4ID0gdGhpcy5fY2FudmFzLndpZHRoIC8gMiArIDEyNTtcclxuXHRcdGNvbnN0IGR5ID0gSGVhZGVyUGFuZWwuaGVpZ2h0IC8gSU1BR0VfU0laRV9DT0VGRklDSUVOVCArIDU0ICsgU2NvcmVQYW5lbC5oZWlnaHQgLyBJTUFHRV9TSVpFX0NPRUZGSUNJRU5UO1xyXG5cdFx0Y29uc3Qgc2NvcmVUZXh0RFggPSBkeCArIFNjb3JlUGFuZWwud2lkdGggLyBJTUFHRV9TSVpFX0NPRUZGSUNJRU5UIC8gMjtcclxuXHRcdHdvcmxkLmJvbnVzLmluaXQoeyB4OiBzY29yZVRleHREWCAtIEJvbnVzLndpZHRoIC8gMyAvIDIsIHk6IGR5ICsgNTAgfSwgeyB3aWR0aDogQm9udXMud2lkdGggLyAzLCBoZWlnaHQ6IEJvbnVzLmhlaWdodCAvIDMgfSk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIHJlbmRlckJvbnVzKHdvcmxkOiBHYW1lV29ybGQpIHtcclxuXHRcdGNvbnN0IHsgU2NvcmVQYW5lbCwgSGVhZGVyUGFuZWwsIEJvbnVzLCBTZWxlY3RlZEJvbnVzIH0gPSB0aGlzLl9nYW1lSW1hZ2VzO1xyXG5cdFx0Y29uc3QgZHggPSB0aGlzLl9jYW52YXMud2lkdGggLyAyICsgMTI1O1xyXG5cdFx0Y29uc3QgZHkgPSBIZWFkZXJQYW5lbC5oZWlnaHQgLyBJTUFHRV9TSVpFX0NPRUZGSUNJRU5UICsgNTQgKyBTY29yZVBhbmVsLmhlaWdodCAvIElNQUdFX1NJWkVfQ09FRkZJQ0lFTlQ7XHJcblx0XHRjb25zdCBzY29yZVRleHREWCA9IGR4ICsgU2NvcmVQYW5lbC53aWR0aCAvIElNQUdFX1NJWkVfQ09FRkZJQ0lFTlQgLyAyO1xyXG5cdFx0dGhpcy5fY3R4LmZvbnQgPSAnMjBweCBNYXJ2aW4nO1xyXG5cdFx0bGV0IHRleHQgPSAn0LHQvtC90YPRgSc7XHJcblx0XHR0aGlzLl9jdHguZmlsbFRleHQodGV4dCwgc2NvcmVUZXh0RFggLSB0aGlzLl9jdHgubWVhc3VyZVRleHQodGV4dCkud2lkdGggLyAyLCBkeSArIDUwKTtcclxuXHRcdHRoaXMuX2N0eC5kcmF3SW1hZ2UoIXdvcmxkLmJvbnVzLnNlbGVjdGVkID8gQm9udXMgOiBTZWxlY3RlZEJvbnVzLCBzY29yZVRleHREWCAtIEJvbnVzLndpZHRoIC8gMyAvIDIsIGR5ICsgNTAsIEJvbnVzLndpZHRoIC8gMywgQm9udXMuaGVpZ2h0IC8gMyk7XHJcblx0XHR0ZXh0ID0gYCR7VEVMRVBPUlRfQ09TVH1gO1xyXG5cdFx0dGhpcy5fY3R4LmZpbGxUZXh0KHRleHQsIHNjb3JlVGV4dERYIC0gdGhpcy5fY3R4Lm1lYXN1cmVUZXh0KHRleHQpLndpZHRoIC8gMiAtIDUsIGR5ICsgQm9udXMuaGVpZ2h0IC8gMyArIDIwKTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgcmVuZGVyR3JpZCh3b3JsZDogR2FtZVdvcmxkKSB7XHJcblx0XHR0aGlzLl9jdHguZHJhd0ltYWdlKFxyXG5cdFx0XHR0aGlzLl9nYW1lSW1hZ2VzLkdhbWVQYW5lbCxcclxuXHRcdFx0dGhpcy5fY2FudmFzLndpZHRoIC8gMiAtIHRoaXMuX2dhbWVJbWFnZXMuR2FtZVBhbmVsLndpZHRoIC8gSU1BR0VfU0laRV9DT0VGRklDSUVOVCxcclxuXHRcdFx0dGhpcy5fZ2FtZUltYWdlcy5IZWFkZXJQYW5lbC5oZWlnaHQgLyBJTUFHRV9TSVpFX0NPRUZGSUNJRU5UICsgMzAsXHJcblx0XHRcdHRoaXMuX2dhbWVJbWFnZXMuR2FtZVBhbmVsLndpZHRoIC8gSU1BR0VfU0laRV9DT0VGRklDSUVOVCxcclxuXHRcdFx0dGhpcy5fZ2FtZUltYWdlcy5HYW1lUGFuZWwuaGVpZ2h0IC8gSU1BR0VfU0laRV9DT0VGRklDSUVOVFxyXG5cdFx0KTtcclxuXHRcdGNvbnN0IHsgbiwgbSwgYmxvY2tMYXlvdXQ6IGxheW91dCB9ID0gd29ybGQuZ3JpZDtcclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSArPSAxKSB7XHJcblx0XHRcdGZvciAobGV0IGogPSAwOyBqIDwgbTsgaiArPSAxKSB7XHJcblx0XHRcdFx0Y29uc3QgeyB4LCB5IH0gPSBsYXlvdXRbaV1bal0ucG9zaXRpb247XHJcblx0XHRcdFx0Y29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSBsYXlvdXRbaV1bal0uc2l6ZTtcclxuXHRcdFx0XHR0aGlzLl9jdHguZHJhd0ltYWdlKHRoaXMuX2dhbWVJbWFnZXNbbGF5b3V0W2ldW2pdLmdldENvbG9ySW1hZ2VOYW1lKCldLCB4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSByZW5kZXJQcm9ncmVzc0Jhcih3b3JsZDogR2FtZVdvcmxkKSB7XHJcblx0XHRjb25zdCB7IFByb2dyZXNzQmxvY2ssIFByb2dyZXNzU2NhbGUgfSA9IHRoaXMuX2dhbWVJbWFnZXM7XHJcblx0XHRjb25zdCBkeCA9IHRoaXMuX2NhbnZhcy53aWR0aCAvIDIgLSBQcm9ncmVzc1NjYWxlLndpZHRoIC8gSU1BR0VfU0laRV9DT0VGRklDSUVOVCAvIDIgLSAyNDtcclxuXHRcdGNvbnN0IGR3ID0gUHJvZ3Jlc3NCbG9jay53aWR0aCAvIElNQUdFX1NJWkVfQ09FRkZJQ0lFTlQ7XHJcblx0XHR0aGlzLl9jdHguZHJhd0ltYWdlKFByb2dyZXNzQmxvY2ssIGR4LCAyOCwgZHcsIFByb2dyZXNzQmxvY2suaGVpZ2h0IC8gSU1BR0VfU0laRV9DT0VGRklDSUVOVCk7XHJcblx0XHR0aGlzLl9jdHguZHJhd0ltYWdlKFByb2dyZXNzU2NhbGUsIGR4LCAyOCwgd29ybGQucHJvZ3Jlc3NCYXIud2lkdGgsIFByb2dyZXNzU2NhbGUuaGVpZ2h0IC8gSU1BR0VfU0laRV9DT0VGRklDSUVOVCArIDEpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBpbml0R3JpZCh3b3JsZDogR2FtZVdvcmxkKSB7XHJcblx0XHRjb25zdCB7IGdyaWQ6IGdhbWVHcmlkIH0gPSB3b3JsZDtcclxuXHRcdGNvbnN0IHsgbiwgbSwgYmxvY2tMYXlvdXQ6IGxheW91dCB9ID0gZ2FtZUdyaWQ7XHJcblx0XHRjb25zdCBzdGFydFggPSB0aGlzLl9jYW52YXMud2lkdGggLyAyIC0gdGhpcy5fZ2FtZUltYWdlcy5HYW1lUGFuZWwud2lkdGggLyA0ICsgNztcclxuXHRcdGNvbnN0IHN0YXJ0WSA9IHRoaXMuX2dhbWVJbWFnZXMuSGVhZGVyUGFuZWwuaGVpZ2h0IC8gNCArIDMwICsgNztcclxuXHRcdGNvbnN0IGJsb2NrV2lkdGggPSB0aGlzLl9nYW1lSW1hZ2VzW2xheW91dFswXVswXS5nZXRDb2xvckltYWdlTmFtZSgpXS53aWR0aCAvIDMuMDM7XHJcblx0XHRjb25zdCBibG9ja0hlaWdodCA9IHRoaXMuX2dhbWVJbWFnZXNbbGF5b3V0WzBdWzBdLmdldENvbG9ySW1hZ2VOYW1lKCldLmhlaWdodCAvIDMuMDM7XHJcblx0XHRnYW1lR3JpZC5pbml0KFxyXG5cdFx0XHR7IHg6IHN0YXJ0WCArIGJsb2NrV2lkdGggKiBtICsgNSwgeTogc3RhcnRZIH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHR3aWR0aDogYmxvY2tXaWR0aCAqIG0gKyA1LFxyXG5cdFx0XHRcdGhlaWdodDogYmxvY2tIZWlnaHQgKiBuLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7IHdpZHRoOiBibG9ja1dpZHRoLCBoZWlnaHQ6IGJsb2NrSGVpZ2h0IH1cclxuXHRcdCk7XHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IG47IGkgKz0gMSkge1xyXG5cdFx0XHRmb3IgKGxldCBqID0gMDsgaiA8IG07IGogKz0gMSkge1xyXG5cdFx0XHRcdHRoaXMuX2N0eC5kcmF3SW1hZ2UodGhpcy5fZ2FtZUltYWdlc1tsYXlvdXRbaV1bal0uZ2V0Q29sb3JJbWFnZU5hbWUoKV0sIHN0YXJ0WCArIGJsb2NrV2lkdGggKiBqLCBzdGFydFkgKyBibG9ja0hlaWdodCAqIGksIGJsb2NrV2lkdGgsIGJsb2NrSGVpZ2h0KTtcclxuXHRcdFx0XHRsYXlvdXRbaV1bal0uaW5pdChcclxuXHRcdFx0XHRcdHsgeDogc3RhcnRYICsgYmxvY2tXaWR0aCAqIGosIHk6IHN0YXJ0WSArIGJsb2NrSGVpZ2h0ICogaSB9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHR3aWR0aDogYmxvY2tXaWR0aCxcclxuXHRcdFx0XHRcdFx0aGVpZ2h0OiBibG9ja0hlaWdodCxcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHQpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGluaXRQcm9ncmVzc0Jhcih3b3JsZDogR2FtZVdvcmxkKSB7XHJcblx0XHRjb25zdCBwcm9ncmVzc0Jsb2NrID0gdGhpcy5fZ2FtZUltYWdlcy5Qcm9ncmVzc0Jsb2NrO1xyXG5cdFx0d29ybGQucHJvZ3Jlc3NCYXIuaW5pdCh0aGlzLl9jYW52YXMud2lkdGggLyAyIC0gcHJvZ3Jlc3NCbG9jay53aWR0aCAvIElNQUdFX1NJWkVfQ09FRkZJQ0lFTlQgLyAyIC0gMjQsIHByb2dyZXNzQmxvY2sud2lkdGggLyBJTUFHRV9TSVpFX0NPRUZGSUNJRU5ULCAyOCwgd29ybGQuc2NvcmUudGFyZ2V0UG9pbnRzKTtcclxuXHR9XHJcblxyXG5cdGNsZWFyU2NyZWVuKCkge1xyXG5cdFx0dGhpcy5fY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLl9jYW52YXMud2lkdGgsIHRoaXMuX2NhbnZhcy5oZWlnaHQpO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgV29ybGQgZnJvbSAnLi4vd29ybGRzL3dvcmxkJztcclxuaW1wb3J0IHsgR2FtZUltYWdlcyB9IGZyb20gJy4uL3R5cGVzJztcclxuXHJcbmludGVyZmFjZSBJVmlldyB7XHJcblx0aW5pdDogKHdvcmxkOiBXb3JsZCkgPT4gdm9pZDtcclxuXHR1cGRhdGU6ICh3b3JsZDogV29ybGQpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIFZpZXcgaW1wbGVtZW50cyBJVmlldyB7XHJcblx0cHJvdGVjdGVkIF9jYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xyXG5cclxuXHRwcm90ZWN0ZWQgX2N0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xyXG5cclxuXHRwcm90ZWN0ZWQgX2dhbWVJbWFnZXM6IEdhbWVJbWFnZXM7XHJcblxyXG5cdGNvbnN0cnVjdG9yKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCBnYW1lSW1hZ2VzOiBHYW1lSW1hZ2VzKSB7XHJcblx0XHR0aGlzLl9jYW52YXMgPSBjYW52YXM7XHJcblx0XHR0aGlzLl9jdHggPSBjdHg7XHJcblx0XHR0aGlzLl9nYW1lSW1hZ2VzID0gZ2FtZUltYWdlcztcclxuXHR9XHJcblxyXG5cdGFic3RyYWN0IGluaXQod29ybGQ6IFdvcmxkKTogdm9pZDtcclxuXHJcblx0YWJzdHJhY3QgdXBkYXRlKHdvcmxkOiBXb3JsZCk6IHZvaWQ7XHJcblxyXG5cdHByb3RlY3RlZCBhYnN0cmFjdCByZW5kZXJTY2VuZSh3b3JsZDogV29ybGQpOiB2b2lkO1xyXG5cclxuXHRwcm90ZWN0ZWQgYWJzdHJhY3QgY2xlYXJTY3JlZW4oKTogdm9pZDtcclxufVxyXG4iLCJpbXBvcnQgV29ybGQgZnJvbSAnLi93b3JsZCc7XHJcbmltcG9ydCBJbnB1dCBmcm9tICcuLi9pbnB1dCc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vZ2FtZU9iamVjdHMvYnV0dG9uJztcclxuaW1wb3J0IHsgY2hlY2tDbGljayB9IGZyb20gJy4uL3V0aWxzJztcclxuXHJcbmV4cG9ydCBlbnVtIFJlc3VsdCB7XHJcblx0V2luID0gJ9CS0YvQuNCz0YDQsNC70LgnLFxyXG5cdExvc3QgPSAn0J/RgNC+0LjQs9GA0LDQu9C4JyxcclxuXHRVbmRlZmluZWQgPSAnJyxcclxufVxyXG5cclxuLy8gZW51bSBTdGFnZXMge1xyXG4vLyBcdFZpZXcsXHJcbi8vIFx0QnV0dG9uQ2xpY2tlZCxcclxuLy8gXHRBZ2FpblxyXG4vLyB9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbmRXb3JsZCBleHRlbmRzIFdvcmxkIHtcclxuXHRwcml2YXRlIF9yZXN1bHQ6IFJlc3VsdCA9IFJlc3VsdC5VbmRlZmluZWQ7XHJcblxyXG5cdHByaXZhdGUgX2FnYWluQnV0dG9uOiBCdXR0b24gPSBuZXcgQnV0dG9uKCk7XHJcblxyXG5cdHByaXZhdGUgX2VtaXRFRnVuYzogKGVOYW1lOiBzdHJpbmcsIGFyZz86IGFueSkgPT4gdm9pZDtcclxuXHJcblx0Y29uc3RydWN0b3IocmVzdWx0OiBSZXN1bHQsIGVtaXRFRnVuYzogKGVOYW1lOiBzdHJpbmcsIGFyZz86IGFueSkgPT4gdm9pZCkge1xyXG5cdFx0c3VwZXIoKTtcclxuXHRcdHRoaXMuX3Jlc3VsdCA9IHJlc3VsdDtcclxuXHRcdHRoaXMuX2VtaXRFRnVuYyA9IGVtaXRFRnVuYztcclxuXHR9XHJcblxyXG5cdHB1YmxpYyB1cGRhdGUodXNlcklucHV0OiBJbnB1dCk6IHZvaWQge1xyXG5cdFx0dGhpcy5oYW5kbGVDbGljayh1c2VySW5wdXQpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBoYW5kbGVDbGljayh1c2VySW5wdXQ6IElucHV0KSB7XHJcblx0XHRjb25zdCB7IHg6IHVYLCB5OiB1WSB9ID0gdXNlcklucHV0O1xyXG5cdFx0aWYgKHVYICE9PSAwICYmIHVZICE9PSAwKSB7XHJcblx0XHRcdGNvbnN0IHsgeCwgeSwgd2lkdGgsIGhlaWdodCB9ID0gdGhpcy5fYWdhaW5CdXR0b247XHJcblx0XHRcdGlmIChjaGVja0NsaWNrKHVYLCB1WSwgeCwgeSwgaGVpZ2h0LCB3aWR0aCkpIHtcclxuXHRcdFx0XHQvLyB0aGlzLl9hZ2FpbkJ1dHRvbi50b2dnbGVTZWxlY3QoKTtcclxuXHRcdFx0XHR0aGlzLl9lbWl0RUZ1bmMoJ25ld0dhbWUnKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHVibGljIHNldCByZXN1bHQocmVzdWx0OiBSZXN1bHQpIHtcclxuXHRcdHRoaXMuX3Jlc3VsdCA9IHJlc3VsdDtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBnZXQgcmVzdWx0KCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX3Jlc3VsdDtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBnZXQgYWdhaW5CdXR0b24oKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fYWdhaW5CdXR0b247XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCBXb3JsZCBmcm9tICcuL3dvcmxkJztcclxuaW1wb3J0IElucHV0IGZyb20gJy4uL2lucHV0JztcclxuaW1wb3J0IFNjb3JlIGZyb20gJy4uL3Njb3JlJztcclxuaW1wb3J0IEdyaWQgZnJvbSAnLi4vZ2FtZU9iamVjdHMvZ3JpZCc7XHJcbmltcG9ydCBQcm9ncmVzc0JhciBmcm9tICcuLi9wcm9ncmVzc0Jhcic7XHJcbmltcG9ydCB7IERpcmVjdGlvbiwgR3JpZEluZm8sIFBvc2l0aW9uTGlzdCwgUmVzaXplVHlwZSB9IGZyb20gJy4uL3R5cGVzJztcclxuaW1wb3J0IEJsb2NrIGZyb20gJy4uL2Jsb2NrJztcclxuaW1wb3J0IHsgY2hlY2tDbGljaywgY2hvb3NlQ29sb3IsIGdldFJhbmRvbVZhbHVlIH0gZnJvbSAnLi4vdXRpbHMnO1xyXG5pbXBvcnQgeyBSZXN1bHQgfSBmcm9tICcuL2VuZFdvcmxkJztcclxuaW1wb3J0IEJvbnVzIGZyb20gJy4uL2dhbWVPYmplY3RzL0JvbnVzJztcclxuaW1wb3J0IHsgVEVMRVBPUlRfQ09TVCB9IGZyb20gJy4uL2NvbnN0YW50cyc7XHJcblxyXG5lbnVtIFN0YWdlIHtcclxuXHRTZWxlY3RpbmcsXHJcblx0U2hhZGluZyxcclxuXHREZWxldGluZyxcclxuXHRNb3ZpbmcsXHJcblx0UmVjb3ZlcnksXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVXb3JsZCBleHRlbmRzIFdvcmxkIHtcclxuXHRwcml2YXRlIGlzTGFzdE1vdmUgPSBmYWxzZTtcclxuXHJcblx0cHJpdmF0ZSBfc2NvcmU6IFNjb3JlO1xyXG5cclxuXHRwcml2YXRlIF9ncmlkOiBHcmlkO1xyXG5cclxuXHRwcml2YXRlIF9wcm9ncmVzc0JhcjogUHJvZ3Jlc3NCYXI7XHJcblxyXG5cdHByaXZhdGUgX2JvbnVzOiBCb251cztcclxuXHJcblx0cHJpdmF0ZSBfc3RhZ2U6IFN0YWdlO1xyXG5cclxuXHRwcml2YXRlIF90ZW1wTGlzdDogUG9zaXRpb25MaXN0ID0gW107XHJcblxyXG5cdHByaXZhdGUgX2xpc3Q6IFBvc2l0aW9uTGlzdCA9IFtdO1xyXG5cclxuXHRwcml2YXRlIF9lbWl0RUZ1bmM6IChlTmFtZTogc3RyaW5nLCBhcmc6IGFueSkgPT4gdm9pZDtcclxuXHJcblx0cHJpdmF0ZSBfbW9uZXkgPSAwO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihncmlkSW5mbzogR3JpZEluZm8sIHg6IG51bWJlciwgeTogbnVtYmVyLCBtb25leTogbnVtYmVyLCBlbWl0RUZ1bmM6IChlTmFtZTogc3RyaW5nLCBhcmc6IGFueSkgPT4gdm9pZCkge1xyXG5cdFx0c3VwZXIoKTtcclxuXHRcdHRoaXMuX2dyaWQgPSBuZXcgR3JpZChncmlkSW5mbywgZW1pdEVGdW5jKTtcclxuXHRcdHRoaXMuX3Byb2dyZXNzQmFyID0gbmV3IFByb2dyZXNzQmFyKCk7XHJcblx0XHR0aGlzLl9ib251cyA9IG5ldyBCb251cygpO1xyXG5cdFx0dGhpcy5fc2NvcmUgPSBuZXcgU2NvcmUoeCwgeSk7XHJcblx0XHR0aGlzLl9zdGFnZSA9IFN0YWdlLlNlbGVjdGluZztcclxuXHRcdHRoaXMuX21vbmV5ID0gbW9uZXk7XHJcblx0XHR0aGlzLl9lbWl0RUZ1bmMgPSBlbWl0RUZ1bmM7XHJcblx0fVxyXG5cclxuXHR1cGRhdGUodXNlcklucHV0OiBJbnB1dCk6IHZvaWQge1xyXG5cdFx0c3dpdGNoICh0aGlzLl9zdGFnZSkge1xyXG5cdFx0XHRjYXNlIFN0YWdlLlNlbGVjdGluZzpcclxuXHRcdFx0XHR0aGlzLmhhbmRsZVNlbGVjdCh1c2VySW5wdXQpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIFN0YWdlLlNoYWRpbmc6XHJcblx0XHRcdFx0dGhpcy5oYW5kbGVTaGFkaW5nKCk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgU3RhZ2UuRGVsZXRpbmc6XHJcblx0XHRcdFx0dGhpcy5oYW5kbGVEZWxldGluZygpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIFN0YWdlLk1vdmluZzpcclxuXHRcdFx0XHR0aGlzLmhhbmRsZU1vdmluZygpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIFN0YWdlLlJlY292ZXJ5OlxyXG5cdFx0XHRcdHRoaXMuaGFuZGxlUmVjb3ZlcnkoKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ1Vua25vd24gc3RhZ2UnKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHByaXZhdGUgaGFuZGxlU2VsZWN0KHVzZXJJbnB1dDogSW5wdXQpIHtcclxuXHRcdGNvbnN0IHsgeDogdVgsIHk6IHVZIH0gPSB1c2VySW5wdXQ7XHJcblx0XHRpZiAodVggIT09IDAgJiYgdVkgIT09IDApIHtcclxuXHRcdFx0dGhpcy5oYW5kbGVTZWxlY3RHcmlkKHVzZXJJbnB1dCk7XHJcblx0XHRcdHRoaXMuaGFuZGxlU2VsZWN0Qm9udXModXNlcklucHV0KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHByaXZhdGUgaGFuZGxlU2VsZWN0R3JpZCh1c2VySW5wdXQ6IElucHV0KSB7XHJcblx0XHRjb25zdCB7IHg6IHVYLCB5OiB1WSB9ID0gdXNlcklucHV0O1xyXG5cdFx0Y29uc3QgeyB4LCB5LCBuLCBtLCB3aWR0aCwgaGVpZ2h0IH0gPSB0aGlzLl9ncmlkO1xyXG5cdFx0aWYgKHVZID4geSAmJiB1WSA8IHkgKyBoZWlnaHQgJiYgdVggPCB4ICYmIHVYID4geCAtIHdpZHRoKSB7XHJcblx0XHRcdGNvbnN0IHJvdyA9IE1hdGguZmxvb3IoKHVZIC0geSkgLyAoaGVpZ2h0IC8gbikpO1xyXG5cdFx0XHRjb25zdCBjb2wgPSBNYXRoLmZsb29yKCh1WCAtICh4IC0gd2lkdGgpKSAvICh3aWR0aCAvIG0pKTtcclxuXHRcdFx0Y29uc3QgbGF5b3V0ID0gdGhpcy5fZ3JpZC5ibG9ja0xheW91dDtcclxuXHRcdFx0bGF5b3V0W3Jvd11bY29sXS50b2dnbGVTZWxlY3QoKTtcclxuXHRcdFx0dGhpcy5fdGVtcExpc3QucHVzaChbcm93LCBjb2xdKTtcclxuXHRcdFx0dGhpcy5fbGlzdC5wdXNoKFtyb3csIGNvbF0pO1xyXG5cdFx0XHRpZiAodGhpcy5fYm9udXMuc2VsZWN0ZWQpIHtcclxuXHRcdFx0XHRpZiAodGhpcy5fbGlzdC5sZW5ndGggPT09IDIpIHtcclxuXHRcdFx0XHRcdGlmICh0aGlzLl9saXN0WzBdWzBdID09PSB0aGlzLl9saXN0WzFdWzBdICYmIHRoaXMuX2xpc3RbMF1bMV0gPT09IHRoaXMuX2xpc3RbMV1bMV0pIHRoaXMuX2xpc3QgPSB0aGlzLl9saXN0LnNsaWNlKDEpO1xyXG5cdFx0XHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0XHRcdHRoaXMuX3N0YWdlICs9IDI7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGVsc2UgdGhpcy5fc3RhZ2UgKz0gMTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHByaXZhdGUgaGFuZGxlU2VsZWN0Qm9udXModXNlcklucHV0OiBJbnB1dCkge1xyXG5cdFx0Y29uc3QgeyB4OiB1WCwgeTogdVkgfSA9IHVzZXJJbnB1dDtcclxuXHRcdGNvbnN0IHsgeCwgeSwgd2lkdGgsIGhlaWdodCB9ID0gdGhpcy5fYm9udXM7XHJcblx0XHRpZiAoY2hlY2tDbGljayh1WCwgdVksIHgsIHksIGhlaWdodCwgd2lkdGgpKSB7XHJcblx0XHRcdGlmICh0aGlzLl9tb25leSA+PSBURUxFUE9SVF9DT1NUKSB7XHJcblx0XHRcdFx0dGhpcy5ib251cy50b2dnbGVTZWxlY3QoKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBoYW5kbGVTaGFkaW5nKCkge1xyXG5cdFx0aWYgKHRoaXMuX3RlbXBMaXN0Lmxlbmd0aCA9PT0gMCkge1xyXG5cdFx0XHRpZiAodGhpcy5fbGlzdC5sZW5ndGggPT09IDEpIHtcclxuXHRcdFx0XHR0aGlzLl9ncmlkLmJsb2NrTGF5b3V0W3RoaXMuX2xpc3RbMF1bMF1dW3RoaXMuX2xpc3RbMF1bMV1dLnRvZ2dsZVNlbGVjdCgpO1xyXG5cdFx0XHRcdHRoaXMuX3N0YWdlIC09IDE7XHJcblx0XHRcdFx0dGhpcy5fbGlzdCA9IFtdO1xyXG5cdFx0XHRcdHRoaXMuX3RlbXBMaXN0ID0gW107XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dGhpcy5fc2NvcmUuZGVjcmVhc2VNb3Zlc051bSgpO1xyXG5cdFx0XHRcdGNvbnN0IHsgcG9pbnRzLCB0YXJnZXRQb2ludHMsIG1vdmVzLCB0YXJnZXRNb3ZlcyB9ID0gdGhpcy5fc2NvcmU7XHJcblx0XHRcdFx0aWYgKG1vdmVzIDw9IHRhcmdldE1vdmVzICYmIHBvaW50cyA8IHRhcmdldFBvaW50cykgdGhpcy5pc0xhc3RNb3ZlID0gdHJ1ZTtcclxuXHRcdFx0XHR0aGlzLl90ZW1wTGlzdCA9IHRoaXMuX2xpc3Q7XHJcblx0XHRcdFx0dGhpcy5fc3RhZ2UgKz0gMTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHRsZXQgcG9zaXRpb25MaXN0OiBQb3NpdGlvbkxpc3QgPSBbXTtcclxuXHRcdGNvbnN0IHsgbiwgbSB9ID0gdGhpcy5ncmlkO1xyXG5cdFx0dGhpcy5fdGVtcExpc3QuZm9yRWFjaCgoW3JvdywgY29sXSkgPT4ge1xyXG5cdFx0XHRwb3NpdGlvbkxpc3QgPSBbLi4ucG9zaXRpb25MaXN0LCAuLi5HYW1lV29ybGQuc2VsZWN0TmVpZ2hib3JzKHJvdywgY29sLCB0aGlzLl9ncmlkLmJsb2NrTGF5b3V0LCBuLCBtKV07XHJcblx0XHR9KTtcclxuXHRcdHRoaXMuX2xpc3QgPSBbLi4udGhpcy5fbGlzdCwgLi4ucG9zaXRpb25MaXN0XTtcclxuXHRcdHRoaXMuX3RlbXBMaXN0ID0gcG9zaXRpb25MaXN0O1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBzdGF0aWMgc2VsZWN0TmVpZ2hib3JzKHJvdzogbnVtYmVyLCBjb2w6IG51bWJlciwgZGVzazogQmxvY2tbXVtdLCBncmlkTjogbnVtYmVyLCBncmlkTTogbnVtYmVyKTogUG9zaXRpb25MaXN0IHtcclxuXHRcdGNvbnN0IHRlbXBMaXN0OiBQb3NpdGlvbkxpc3QgPSBbXTtcclxuXHRcdE9iamVjdC52YWx1ZXMoRGlyZWN0aW9uKS5mb3JFYWNoKGRpcmVjdGlvbiA9PiB7XHJcblx0XHRcdGNvbnN0IGRlc2tQb3NpdGlvbkl0ZW0gPSBHYW1lV29ybGQuZmluZE5laWdoYm9yKGRpcmVjdGlvbiwgcm93LCBjb2wsIGRlc2ssIGdyaWROLCBncmlkTSwgdHJ1ZSk7XHJcblx0XHRcdGlmICh0eXBlb2YgZGVza1Bvc2l0aW9uSXRlbVswXSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuXHRcdFx0XHR0ZW1wTGlzdC5wdXNoKGRlc2tQb3NpdGlvbkl0ZW0gYXMgW251bWJlciwgbnVtYmVyXSk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0cmV0dXJuIHRlbXBMaXN0O1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBzdGF0aWMgZmluZE5laWdoYm9yKGRpcmVjdGlvbjogRGlyZWN0aW9uIHwgc3RyaW5nLCByb3c6IG51bWJlciwgY29sOiBudW1iZXIsIGxheW91dDogQmxvY2tbXVtdLCBncmlkTjogbnVtYmVyLCBncmlkTTogbnVtYmVyLCBzZWxlY3QgPSBmYWxzZSk6IFtudW1iZXIsIG51bWJlcl0gfCBbdW5kZWZpbmVkLCB1bmRlZmluZWRdIHtcclxuXHRcdGNvbnN0IHsgVXAsIFJpZ2h0LCBMZWZ0LCBEb3duIH0gPSBEaXJlY3Rpb247XHJcblx0XHRzd2l0Y2ggKGRpcmVjdGlvbikge1xyXG5cdFx0XHRjYXNlIFVwOlxyXG5cdFx0XHRcdHJldHVybiBHYW1lV29ybGQuY2hlY2tVcChsYXlvdXQsIHJvdywgY29sLCBzZWxlY3QpO1xyXG5cdFx0XHRjYXNlIFJpZ2h0OlxyXG5cdFx0XHRcdHJldHVybiBHYW1lV29ybGQuY2hlY2tSaWdodChsYXlvdXQsIHJvdywgY29sLCBzZWxlY3QsIGdyaWRNKTtcclxuXHRcdFx0Y2FzZSBMZWZ0OlxyXG5cdFx0XHRcdHJldHVybiBHYW1lV29ybGQuY2hlY2tMZWZ0KGxheW91dCwgcm93LCBjb2wsIHNlbGVjdCk7XHJcblx0XHRcdGNhc2UgRG93bjpcclxuXHRcdFx0XHRyZXR1cm4gR2FtZVdvcmxkLmNoZWNrRG93bihsYXlvdXQsIHJvdywgY29sLCBzZWxlY3QsIGdyaWROKTtcclxuXHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHRyZXR1cm4gW3VuZGVmaW5lZCwgdW5kZWZpbmVkXTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHByaXZhdGUgc3RhdGljIGNoZWNrVXAobGF5b3V0OiBCbG9ja1tdW10sIHJvdzogbnVtYmVyLCBjb2w6IG51bWJlciwgc2VsZWN0OiBib29sZWFuKTogW251bWJlciwgbnVtYmVyXSB8IFt1bmRlZmluZWQsIHVuZGVmaW5lZF0ge1xyXG5cdFx0aWYgKHJvdyAhPT0gMCAmJiBsYXlvdXRbcm93XVtjb2xdLmNvbG9yID09PSBsYXlvdXRbcm93IC0gMV1bY29sXS5jb2xvciAmJiAhbGF5b3V0W3JvdyAtIDFdW2NvbF0uaXNTZWxlY3RlZCgpKSB7XHJcblx0XHRcdGlmIChzZWxlY3QpIGxheW91dFtyb3cgLSAxXVtjb2xdLnRvZ2dsZVNlbGVjdCgpO1xyXG5cdFx0XHRyZXR1cm4gW3JvdyAtIDEsIGNvbF07XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gW3VuZGVmaW5lZCwgdW5kZWZpbmVkXTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgc3RhdGljIGNoZWNrUmlnaHQobGF5b3V0OiBCbG9ja1tdW10sIHJvdzogbnVtYmVyLCBjb2w6IG51bWJlciwgc2VsZWN0OiBib29sZWFuLCBtOiBudW1iZXIpOiBbbnVtYmVyLCBudW1iZXJdIHwgW3VuZGVmaW5lZCwgdW5kZWZpbmVkXSB7XHJcblx0XHRpZiAoY29sICE9PSBtIC0gMSAmJiBsYXlvdXRbcm93XVtjb2xdLmNvbG9yID09PSBsYXlvdXRbcm93XVtjb2wgKyAxXS5jb2xvciAmJiAhbGF5b3V0W3Jvd11bY29sICsgMV0uaXNTZWxlY3RlZCgpKSB7XHJcblx0XHRcdGlmIChzZWxlY3QpIGxheW91dFtyb3ddW2NvbCArIDFdLnRvZ2dsZVNlbGVjdCgpO1xyXG5cdFx0XHRyZXR1cm4gW3JvdywgY29sICsgMV07XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gW3VuZGVmaW5lZCwgdW5kZWZpbmVkXTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgc3RhdGljIGNoZWNrTGVmdChsYXlvdXQ6IEJsb2NrW11bXSwgcm93OiBudW1iZXIsIGNvbDogbnVtYmVyLCBzZWxlY3Q6IGJvb2xlYW4pOiBbbnVtYmVyLCBudW1iZXJdIHwgW3VuZGVmaW5lZCwgdW5kZWZpbmVkXSB7XHJcblx0XHRpZiAoY29sICE9PSAwICYmIGxheW91dFtyb3ddW2NvbF0uY29sb3IgPT09IGxheW91dFtyb3ddW2NvbCAtIDFdLmNvbG9yICYmICFsYXlvdXRbcm93XVtjb2wgLSAxXS5pc1NlbGVjdGVkKCkpIHtcclxuXHRcdFx0aWYgKHNlbGVjdCkgbGF5b3V0W3Jvd11bY29sIC0gMV0udG9nZ2xlU2VsZWN0KCk7XHJcblx0XHRcdHJldHVybiBbcm93LCBjb2wgLSAxXTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBbdW5kZWZpbmVkLCB1bmRlZmluZWRdO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBzdGF0aWMgY2hlY2tEb3duKGxheW91dDogQmxvY2tbXVtdLCByb3c6IG51bWJlciwgY29sOiBudW1iZXIsIHNlbGVjdDogYm9vbGVhbiwgbjogbnVtYmVyKTogW251bWJlciwgbnVtYmVyXSB8IFt1bmRlZmluZWQsIHVuZGVmaW5lZF0ge1xyXG5cdFx0aWYgKHJvdyAhPT0gbiAtIDEgJiYgbGF5b3V0W3Jvd11bY29sXS5jb2xvciA9PT0gbGF5b3V0W3JvdyArIDFdW2NvbF0uY29sb3IgJiYgIWxheW91dFtyb3cgKyAxXVtjb2xdLmlzU2VsZWN0ZWQoKSkge1xyXG5cdFx0XHRpZiAoc2VsZWN0KSBsYXlvdXRbcm93ICsgMV1bY29sXS50b2dnbGVTZWxlY3QoKTtcclxuXHRcdFx0cmV0dXJuIFtyb3cgKyAxLCBjb2xdO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIFt1bmRlZmluZWQsIHVuZGVmaW5lZF07XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGhhbmRsZURlbGV0aW5nKCkge1xyXG5cdFx0aWYgKHRoaXMuX3RlbXBMaXN0Lmxlbmd0aCA9PT0gMCkge1xyXG5cdFx0XHRpZiAodGhpcy5ib251cy5zZWxlY3RlZCkgdGhpcy5fc3RhZ2UgKz0gMjtcclxuXHRcdFx0ZWxzZSB0aGlzLl9zdGFnZSArPSAxO1xyXG5cdFx0XHR0aGlzLl90ZW1wTGlzdCA9IFtdO1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHRjb25zdCBbcm93LCBjb2xdID0gdGhpcy5fdGVtcExpc3RbMF07XHJcblx0XHRjb25zdCBkZXNrID0gdGhpcy5fZ3JpZC5ibG9ja0xheW91dDtcclxuXHRcdGlmIChkZXNrW3Jvd11bY29sXS5oZWlnaHQgPT09IDAgJiYgZGVza1tyb3ddW2NvbF0ud2lkdGggPT09IDApIHtcclxuXHRcdFx0aWYgKCF0aGlzLmJvbnVzLnNlbGVjdGVkKSB0aGlzLl9zY29yZS5pbmNyZWFzZVBvaW50cygpO1xyXG5cdFx0XHR0aGlzLl9wcm9ncmVzc0Jhci5tb3ZlKCk7XHJcblx0XHRcdGNvbnN0IHsgcG9pbnRzLCB0YXJnZXRQb2ludHMgfSA9IHRoaXMuX3Njb3JlO1xyXG5cdFx0XHRpZiAocG9pbnRzID49IHRhcmdldFBvaW50cykgdGhpcy5fZW1pdEVGdW5jKCdlbmRHYW1lJywgUmVzdWx0Lldpbik7XHJcblx0XHRcdGlmICh0aGlzLmlzTGFzdE1vdmUpIHRoaXMuX2VtaXRFRnVuYygnZW5kR2FtZScsIFJlc3VsdC5Mb3N0KTtcclxuXHRcdFx0dGhpcy5fdGVtcExpc3QgPSB0aGlzLl90ZW1wTGlzdC5zbGljZSgxKTtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0ZGVza1tyb3ddW2NvbF0ucmVzaXplKFJlc2l6ZVR5cGUuU2hyaW5rKTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgaGFuZGxlTW92aW5nKCkge1xyXG5cdFx0aWYgKHRoaXMuX3RlbXBMaXN0Lmxlbmd0aCA+PSB0aGlzLl9saXN0Lmxlbmd0aCkge1xyXG5cdFx0XHR0aGlzLl9zdGFnZSArPSAxO1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHRjb25zdCBkZXNrID0gdGhpcy5fZ3JpZC5ibG9ja0xheW91dDtcclxuXHRcdGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IHRoaXMuX2dyaWQubTsgY29sICs9IDEpIHtcclxuXHRcdFx0Y29uc3Qgcm93cyA9IHRoaXMuX2xpc3RcclxuXHRcdFx0XHQuZmlsdGVyKChbciwgY10pID0+IGMgPT09IGNvbClcclxuXHRcdFx0XHQubWFwKChbcm93XSkgPT4ge1xyXG5cdFx0XHRcdFx0cmV0dXJuIHJvdztcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdC5zb3J0KCk7XHJcblx0XHRcdGNvbnN0IHZlbG9jaXR5ID0gMTtcclxuXHRcdFx0aWYgKHJvd3MubGVuZ3RoID09PSAxICYmIHJvd3NbMF0gPT09IDApIHtcclxuXHRcdFx0XHR0aGlzLl90ZW1wTGlzdC5wdXNoKFtyb3dzWzBdLCBjb2xdKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0fVxyXG5cdFx0XHRmb3IgKGxldCBrID0gcm93cy5sZW5ndGggLSAxOyBrID49IDA7IGsgLT0gMSkge1xyXG5cdFx0XHRcdGlmIChyb3dzW2tdIC0gMSA8IDApIGJyZWFrO1xyXG5cdFx0XHRcdGlmIChkZXNrW3Jvd3Nba10gLSAxXVtjb2xdLnkgPj0gZGVza1tyb3dzW2tdXVtjb2xdLnkpIHtcclxuXHRcdFx0XHRcdHRoaXMuX3RlbXBMaXN0LnB1c2goW3Jvd3Nba10sIGNvbF0pO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGZvciAobGV0IGkgPSByb3dzW2tdIC0gMTsgaSA+PSAwOyBpIC09IDEpIHtcclxuXHRcdFx0XHRcdGRlc2tbaV1bY29sXS5tb3ZlKERpcmVjdGlvbi5Eb3duLCB2ZWxvY2l0eSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGhhbmRsZVJlY292ZXJ5KCkge1xyXG5cdFx0aWYgKHRoaXMuYm9udXMuc2VsZWN0ZWQpIHtcclxuXHRcdFx0bGV0IHRlbXAgPSAnJztcclxuXHRcdFx0Y29uc3QgYmxvY2sxID0gdGhpcy5fZ3JpZC5ibG9ja0xheW91dFt0aGlzLl9saXN0WzBdWzBdXVt0aGlzLl9saXN0WzBdWzFdXTtcclxuXHRcdFx0Y29uc3QgYmxvY2syID0gdGhpcy5fZ3JpZC5ibG9ja0xheW91dFt0aGlzLl9saXN0WzFdWzBdXVt0aGlzLl9saXN0WzFdWzFdXTtcclxuXHRcdFx0dGVtcCA9IGJsb2NrMS5jb2xvcjtcclxuXHRcdFx0YmxvY2sxLmNvbG9yID0gYmxvY2syLmNvbG9yO1xyXG5cdFx0XHRibG9jazIuY29sb3IgPSB0ZW1wO1xyXG5cdFx0XHRibG9jazEudG9nZ2xlU2VsZWN0KCk7XHJcblx0XHRcdGJsb2NrMi50b2dnbGVTZWxlY3QoKTtcclxuXHRcdFx0YmxvY2sxLnNpemUgPSB0aGlzLmdyaWQuaXRlbVNpemU7XHJcblx0XHRcdGJsb2NrMi5zaXplID0gdGhpcy5ncmlkLml0ZW1TaXplO1xyXG5cdFx0XHR0aGlzLmJvbnVzLnRvZ2dsZVNlbGVjdCgpO1xyXG5cdFx0XHR0aGlzLl9tb25leSAtPSBURUxFUE9SVF9DT1NUO1xyXG5cdFx0XHR0aGlzLl9saXN0ID0gW107XHJcblx0XHRcdHRoaXMuX3RlbXBMaXN0ID0gW107XHJcblx0XHRcdHRoaXMuX3N0YWdlID0gU3RhZ2UuU2VsZWN0aW5nO1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHRjb25zdCB7IGJsb2NrTGF5b3V0OiBsYXlvdXQsIG4sIG0gfSA9IHRoaXMuX2dyaWQ7XHJcblx0XHRmb3IgKGxldCBpID0gbiAtIDE7IGkgPj0gMDsgaSAtPSAxKSB7XHJcblx0XHRcdGZvciAobGV0IGogPSBtIC0gMTsgaiA+PSAwOyBqIC09IDEpIHtcclxuXHRcdFx0XHRpZiAobGF5b3V0W2ldW2pdLnkgIT09IGxheW91dFtpXVtqXS5vbGRZIHx8IGxheW91dFtpXVtqXS5pc1NlbGVjdGVkKCkpIHtcclxuXHRcdFx0XHRcdGxldCBuZXdSb3cgPSAtMTAwMDtcclxuXHRcdFx0XHRcdGlmIChsYXlvdXRbaV1bal0uaXNTZWxlY3RlZCgpKSB7XHJcblx0XHRcdFx0XHRcdGxheW91dFtpXVtqXS50b2dnbGVTZWxlY3QoKTtcclxuXHRcdFx0XHRcdFx0Zm9yIChsZXQgciA9IGkgLSAxOyByID49IDA7IHIgLT0gMSkge1xyXG5cdFx0XHRcdFx0XHRcdGlmIChsYXlvdXRbaV1bal0ub2xkWSAtIGxheW91dFtyXVtqXS55IDwgbGF5b3V0W2ldW2pdLmhlaWdodCAmJiBsYXlvdXRbcl1bal0ud2lkdGggIT09IDAgJiYgIWxheW91dFtyXVtqXS5pc1NlbGVjdGVkKCkgJiYgIWxheW91dFtyXVtqXS5pc09jY3VwaWVkKCkpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGxheW91dFtyXVtqXS5vY2N1cGllZCA9IHRydWU7XHJcblx0XHRcdFx0XHRcdFx0XHRuZXdSb3cgPSByO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0bmV3Um93ID0gaSAtIE1hdGguZmxvb3IoKGxheW91dFtpXVtqXS55IC0gbGF5b3V0W2ldW2pdLm9sZFkpIC8gdGhpcy5ncmlkLml0ZW1IZWlnaHQpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0aWYgKG5ld1JvdyA+PSAwKSB7XHJcblx0XHRcdFx0XHRcdGxheW91dFtpXVtqXS5jb2xvciA9IGxheW91dFtuZXdSb3ddW2pdLm9sZENvbG9yO1xyXG5cdFx0XHRcdFx0XHRsYXlvdXRbaV1bal0ub2xkQ29sb3IgPSBsYXlvdXRbbmV3Um93XVtqXS5vbGRDb2xvcjtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdGNvbnN0IHJhbmRvbUNvbG9yID0gY2hvb3NlQ29sb3IoZ2V0UmFuZG9tVmFsdWUodGhpcy5fZ3JpZC5ncmlkSW5mby5ibG9ja0NvbG9ycykpO1xyXG5cdFx0XHRcdFx0XHRsYXlvdXRbaV1bal0uY29sb3IgPSByYW5kb21Db2xvcjtcclxuXHRcdFx0XHRcdFx0bGF5b3V0W2ldW2pdLm9sZENvbG9yID0gcmFuZG9tQ29sb3I7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRsYXlvdXRbaV1bal0uc2l6ZSA9IHRoaXMuZ3JpZC5pdGVtU2l6ZTtcclxuXHRcdFx0XHRcdGxheW91dFtpXVtqXS5wb3NpdGlvbiA9IHsgeDogbGF5b3V0W2ldW2pdLngsIHk6IGxheW91dFtpXVtqXS5vbGRZIH07XHJcblx0XHRcdFx0XHRpZiAobGF5b3V0W2ldW2pdLmlzT2NjdXBpZWQoKSkgbGF5b3V0W2ldW2pdLm9jY3VwaWVkID0gZmFsc2U7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHR0aGlzLl9ncmlkLmJsb2NrTGF5b3V0ID0gbGF5b3V0O1xyXG5cdFx0dGhpcy5fbGlzdCA9IFtdO1xyXG5cdFx0dGhpcy5fdGVtcExpc3QgPSBbXTtcclxuXHRcdHRoaXMuX3N0YWdlID0gU3RhZ2UuU2VsZWN0aW5nO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGdldCBncmlkKCk6IEdyaWQge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2dyaWQ7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc2V0IGdyaWQoZ3JpZDogR3JpZCkge1xyXG5cdFx0dGhpcy5fZ3JpZCA9IGdyaWQ7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZ2V0IHNjb3JlKCk6IFNjb3JlIHtcclxuXHRcdHJldHVybiB0aGlzLl9zY29yZTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzZXQgc2NvcmUoc2NvcmU6IFNjb3JlKSB7XHJcblx0XHR0aGlzLl9zY29yZSA9IHNjb3JlO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGdldCBwcm9ncmVzc0JhcigpOiBQcm9ncmVzc0JhciB7XHJcblx0XHRyZXR1cm4gdGhpcy5fcHJvZ3Jlc3NCYXI7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc2V0IHByb2dyZXNzQmFyKHByQmFyOiBQcm9ncmVzc0Jhcikge1xyXG5cdFx0dGhpcy5fcHJvZ3Jlc3NCYXIgPSBwckJhcjtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBnZXQgYm9udXMoKTogQm9udXMge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2JvbnVzO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGdldCBtb25leSgpOiBudW1iZXIge1xyXG5cdFx0cmV0dXJuIHRoaXMuX21vbmV5O1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgSW5wdXQgZnJvbSAnLi4vaW5wdXQnO1xyXG5cclxuaW50ZXJmYWNlIElXb3JsZCB7XHJcblx0dXBkYXRlOiAodXNlcklucHV0OiBJbnB1dCkgPT4gdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgV29ybGQgaW1wbGVtZW50cyBJV29ybGQge1xyXG5cdGFic3RyYWN0IHVwZGF0ZSh1c2VySW5wdXQ6IElucHV0KTogdm9pZDtcclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgJy4vc3R5bGVzL3N0eWxlLnNjc3MnO1xyXG5pbXBvcnQgR2FtZSBmcm9tICcuL3RzL2dhbWUnO1xyXG5cclxuY29uc3QgY2FudmFzID0gPEhUTUxDYW52YXNFbGVtZW50PmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2NhbnZhcycpO1xyXG5jYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuXHJcbmNvbnN0IG4gPSA3O1xyXG5jb25zdCBtID0gNztcclxuY29uc3QgYyA9IDU7IC8vIGNvbG9yc1xyXG5jb25zdCBrID0gMjtcclxuY29uc3QgcyA9IDM7IC8vIG1peFxyXG5jb25zdCB4ID0gMTEwOyAvLyB0YXJnZXQgcG9pbnRzXHJcbmNvbnN0IHkgPSAyMDsgLy8gbW92ZXNcclxuXHJcbmNvbnN0IGdhbWUgPSBuZXcgR2FtZShjYW52YXMpO1xyXG5cclxuZ2FtZS5pbml0KG4sIG0sIGMsIGssIHMsIHgsIHkpLnRoZW4oKCkgPT4gZ2FtZS5zdGFydCgpKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9