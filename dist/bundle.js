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

/***/ "./src/ts/gameObjects/block.ts":
/*!*************************************!*\
  !*** ./src/ts/gameObjects/block.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _gameObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameObject */ "./src/ts/gameObjects/gameObject.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./src/ts/utils.ts");
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


var Block = /** @class */ (function (_super) {
    __extends(Block, _super);
    function Block(colors) {
        var _this = _super.call(this) || this;
        _this._selected = false;
        _this._occupied = false;
        _this._velocity = 10;
        var colorNumber = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getRandomValue)(colors);
        _this._color = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.chooseColor)(colorNumber);
        _this._oldColor = _this._color;
        return _this;
    }
    Block.prototype.getColorImageName = function () {
        return this._selected ? "Selected" + this.color : this.color;
    };
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
    return Block;
}(_gameObject__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Block);


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
/* harmony import */ var _block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block */ "./src/ts/gameObjects/block.ts");
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
/* harmony export */   "checkClick": () => (/* binding */ checkClick),
/* harmony export */   "contains": () => (/* binding */ contains)
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
function contains(arr, elem) {
    for (var i = 0; i < arr.length; i += 1) {
        if (arr[i][0] === elem[0] && arr[i][1] === elem[1]) {
            return true;
        }
    }
    return false;
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
        this._ctx.fillText('????????????????', width / 2 - 70, 23);
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
        var text = '??????????:';
        this._ctx.fillText(text, this.getTextScoreDx(textDx, text), panelDy);
        this._ctx.font = '34px Marvin';
        text = "" + points;
        this._ctx.fillText(text, this.getTextScoreDx(textDx, text), this.getTextScoreDy(panelDy, image, 1.16));
        text = "" + moves;
        this._ctx.font = '52px Marvin';
        this._ctx.fillText(text, this.getTextScoreDx(textDx, text), this.getTextScoreDy(panelDy, image, 2.5));
        text = '????????:';
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
        var text = '??????????';
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
            this._list.sort(function (_a, _b) {
                var n1 = _a[0];
                var n2 = _b[0];
                return (n1 > n2 ? 1 : -1);
            });
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
        var layout = this._grid.blockLayout;
        var rows = [];
        var velocity = 1;
        var _loop_1 = function (col) {
            rows = this_1._list.filter(function (_a) {
                var r = _a[0], c = _a[1];
                return c === col;
            }).map(function (_a) {
                var r = _a[0];
                return r;
            });
            for (var rowNum = rows.length - 1; rowNum >= 0; rowNum -= 1) {
                if (rows[rowNum] - 1 < 0) {
                    if (!(0,_utils__WEBPACK_IMPORTED_MODULE_5__.contains)(this_1._tempList, [rows[rowNum], col]))
                        this_1._tempList.push([rows[rowNum], col]);
                    if (this_1._tempList.length >= this_1._list.length)
                        break;
                }
                else {
                    for (var row = rows[rowNum] - 1; row >= 0; row -= 1) {
                        layout[row][col].move(_types__WEBPACK_IMPORTED_MODULE_4__.Direction.Down, velocity);
                    }
                    if (layout[rows[rowNum] - 1][col].y >= layout[rows[rowNum]][col].y) {
                        if (!(0,_utils__WEBPACK_IMPORTED_MODULE_5__.contains)(this_1._tempList, [rows[rowNum], col]))
                            this_1._tempList.push([rows[rowNum], col]);
                        if (this_1._tempList.length >= this_1._list.length)
                            break;
                    }
                }
            }
            if (this_1._tempList.length >= this_1._list.length)
                return "break";
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
            var _a = this._list, _b = _a[0], n1 = _b[0], m1 = _b[1], _c = _a[1], n2 = _c[0], m2 = _c[1];
            var block1 = this._grid.blockLayout[n1][m1];
            var block2 = this._grid.blockLayout[n2][m2];
            // [block1.color, block2.color] = [block2.color, block1.color];
            temp = block1.color;
            block1.color = block2.color;
            block1.oldColor = block2.color;
            block2.color = temp;
            block2.oldColor = temp;
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
        var _d = this._grid, layout = _d.blockLayout, n = _d.n, m = _d.m;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ25DLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQUUsRUFBRTtvQkFDdEUsSUFBSSxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUM7b0JBQ25CLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsRUFBRSxFQUFFO3dCQUM5QixNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxFQUFFLENBQUM7d0JBQzVCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUU7NEJBQ25DLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxFQUFFLEVBQUU7Z0NBQ3JKLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO2dDQUM3QixNQUFNLEdBQUcsQ0FBQyxDQUFDOzZCQUNY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QUM7QUFDWixJQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxTQUFTO0FBQ3RCLElBQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNaLElBQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU07QUFDbkIsSUFBTSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsZ0JBQWdCO0FBQy9CLElBQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLFFBQVE7QUFFdEIsSUFBTSxJQUFJLEdBQUcsSUFBSSxnREFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBRTlCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQU0sV0FBSSxDQUFDLEtBQUssRUFBRSxFQUFaLENBQVksQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVzdC1wcm9qZWN0LWJsYXN0LWdhbWUvLi9zcmMvc3R5bGVzL3N0eWxlLnNjc3M/YTViNCIsIndlYnBhY2s6Ly90ZXN0LXByb2plY3QtYmxhc3QtZ2FtZS8uL3NyYy90cy9JbWFnZVJlcG9zaXRvcnkudHMiLCJ3ZWJwYWNrOi8vdGVzdC1wcm9qZWN0LWJsYXN0LWdhbWUvLi9zcmMvdHMvYXNzZXRzLnRzIiwid2VicGFjazovL3Rlc3QtcHJvamVjdC1ibGFzdC1nYW1lLy4vc3JjL3RzL2NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly90ZXN0LXByb2plY3QtYmxhc3QtZ2FtZS8uL3NyYy90cy9ldmVudC50cyIsIndlYnBhY2s6Ly90ZXN0LXByb2plY3QtYmxhc3QtZ2FtZS8uL3NyYy90cy9nYW1lLnRzIiwid2VicGFjazovL3Rlc3QtcHJvamVjdC1ibGFzdC1nYW1lLy4vc3JjL3RzL2dhbWVPYmplY3RzL0JvbnVzLnRzIiwid2VicGFjazovL3Rlc3QtcHJvamVjdC1ibGFzdC1nYW1lLy4vc3JjL3RzL2dhbWVPYmplY3RzL2Jsb2NrLnRzIiwid2VicGFjazovL3Rlc3QtcHJvamVjdC1ibGFzdC1nYW1lLy4vc3JjL3RzL2dhbWVPYmplY3RzL2J1dHRvbi50cyIsIndlYnBhY2s6Ly90ZXN0LXByb2plY3QtYmxhc3QtZ2FtZS8uL3NyYy90cy9nYW1lT2JqZWN0cy9nYW1lT2JqZWN0LnRzIiwid2VicGFjazovL3Rlc3QtcHJvamVjdC1ibGFzdC1nYW1lLy4vc3JjL3RzL2dhbWVPYmplY3RzL2dyaWQudHMiLCJ3ZWJwYWNrOi8vdGVzdC1wcm9qZWN0LWJsYXN0LWdhbWUvLi9zcmMvdHMvaW5wdXQudHMiLCJ3ZWJwYWNrOi8vdGVzdC1wcm9qZWN0LWJsYXN0LWdhbWUvLi9zcmMvdHMvcHJvZ3Jlc3NCYXIudHMiLCJ3ZWJwYWNrOi8vdGVzdC1wcm9qZWN0LWJsYXN0LWdhbWUvLi9zcmMvdHMvc2NlbmUudHMiLCJ3ZWJwYWNrOi8vdGVzdC1wcm9qZWN0LWJsYXN0LWdhbWUvLi9zcmMvdHMvc2NvcmUudHMiLCJ3ZWJwYWNrOi8vdGVzdC1wcm9qZWN0LWJsYXN0LWdhbWUvLi9zcmMvdHMvdHlwZXMudHMiLCJ3ZWJwYWNrOi8vdGVzdC1wcm9qZWN0LWJsYXN0LWdhbWUvLi9zcmMvdHMvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vdGVzdC1wcm9qZWN0LWJsYXN0LWdhbWUvLi9zcmMvdHMvdmlld3MvZW5kVmlldy50cyIsIndlYnBhY2s6Ly90ZXN0LXByb2plY3QtYmxhc3QtZ2FtZS8uL3NyYy90cy92aWV3cy9nYW1lVmlldy50cyIsIndlYnBhY2s6Ly90ZXN0LXByb2plY3QtYmxhc3QtZ2FtZS8uL3NyYy90cy92aWV3cy92aWV3LnRzIiwid2VicGFjazovL3Rlc3QtcHJvamVjdC1ibGFzdC1nYW1lLy4vc3JjL3RzL3dvcmxkcy9lbmRXb3JsZC50cyIsIndlYnBhY2s6Ly90ZXN0LXByb2plY3QtYmxhc3QtZ2FtZS8uL3NyYy90cy93b3JsZHMvZ2FtZVdvcmxkLnRzIiwid2VicGFjazovL3Rlc3QtcHJvamVjdC1ibGFzdC1nYW1lLy4vc3JjL3RzL3dvcmxkcy93b3JsZC50cyIsIndlYnBhY2s6Ly90ZXN0LXByb2plY3QtYmxhc3QtZ2FtZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90ZXN0LXByb2plY3QtYmxhc3QtZ2FtZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdGVzdC1wcm9qZWN0LWJsYXN0LWdhbWUvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90ZXN0LXByb2plY3QtYmxhc3QtZ2FtZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Rlc3QtcHJvamVjdC1ibGFzdC1nYW1lL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdGVzdC1wcm9qZWN0LWJsYXN0LWdhbWUvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdGVzdC1wcm9qZWN0LWJsYXN0LWdhbWUvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiaW1wb3J0IGFzc2V0cyBmcm9tICcuL2Fzc2V0cyc7XHJcbmltcG9ydCB7IEFzc2V0cywgR2FtZUltYWdlcyB9IGZyb20gJy4vdHlwZXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW1hZ2VSZXBvc2l0b3J5IHtcclxuXHRwcml2YXRlIGltYWdlczogQXNzZXRzO1xyXG5cclxuXHRjb25zdHJ1Y3Rvcihhc3NldHM6IEFzc2V0cykge1xyXG5cdFx0dGhpcy5pbWFnZXMgPSBhc3NldHM7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgYXN5bmMgbG9hZEltYWdlcygpIHtcclxuXHRcdGNvbnN0IGltYWdlczogR2FtZUltYWdlcyA9IHt9O1xyXG5cdFx0Zm9yIChjb25zdCBrZXkgaW4gYXNzZXRzKSB7XHJcblx0XHRcdGltYWdlc1trZXldID0gYXdhaXQgdGhpcy5sb2FkSW1hZ2UoU3RyaW5nKChhc3NldHMgYXMgdW5rbm93biBhcyBBc3NldHMpW2tleSBhcyBzdHJpbmddKSk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gaW1hZ2VzO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBhc3luYyBsb2FkSW1hZ2UoaW1nUGF0aDogc3RyaW5nKSB7XHJcblx0XHRjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcclxuXHRcdGF3YWl0IHRoaXMubG9hZChpbWcsIGltZ1BhdGgpO1xyXG5cdFx0cmV0dXJuIGltZztcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgYXN5bmMgbG9hZChlbDogSFRNTEltYWdlRWxlbWVudCwgc3RyOiBzdHJpbmcpIHtcclxuXHRcdHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcclxuXHRcdFx0ZWwuc3JjID0gc3RyO1xyXG5cdFx0XHRlbC5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4gcmVzb2x2ZSh0aGlzKSk7XHJcblx0XHR9KTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IEhlYWRlclBhbmVsIGZyb20gJy4uL2ltZy9wcm9ncmVzcy9wYW5lbDIucG5nJztcclxuaW1wb3J0IEdhbWVQYW5lbCBmcm9tICcuLi9pbWcvZ2FtZS9wYW5lbC5wbmcnO1xyXG5pbXBvcnQgU2NvcmVQYW5lbCBmcm9tICcuLi9pbWcvc2NvcmUvcGFuZWwyLnBuZyc7XHJcbmltcG9ydCBQcm9ncmVzc0Jsb2NrIGZyb20gJy4uL2ltZy9wcm9ncmVzcy9iYXIvYmxvY2sucG5nJztcclxuaW1wb3J0IFByb2dyZXNzU2NhbGUgZnJvbSAnLi4vaW1nL3Byb2dyZXNzL2Jhci9zY2FsZS5wbmcnO1xyXG5pbXBvcnQgQmx1ZUJsb2NrIGZyb20gJy4uL2ltZy9nYW1lL2Jsb2Nrcy9ibHVlLnBuZyc7XHJcbmltcG9ydCBHcmVlbkJsb2NrIGZyb20gJy4uL2ltZy9nYW1lL2Jsb2Nrcy9ncmVlbi5wbmcnO1xyXG5pbXBvcnQgWWVsbG93QmxvY2sgZnJvbSAnLi4vaW1nL2dhbWUvYmxvY2tzL3llbGxvdy5wbmcnO1xyXG5pbXBvcnQgUHVycGxlQmxvY2sgZnJvbSAnLi4vaW1nL2dhbWUvYmxvY2tzL3B1cnBsZS5wbmcnO1xyXG5pbXBvcnQgUmVkQmxvY2sgZnJvbSAnLi4vaW1nL2dhbWUvYmxvY2tzL3JlZC5wbmcnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL2ltZy9lbmQvYnV0dG9uLnBuZyc7XHJcbmltcG9ydCBTZWxlY3RlZEJsdWVCbG9jayBmcm9tICcuLi9pbWcvZ2FtZS9zZWxlY3RlZF9ibG9ja3MvYmx1ZS5wbmcnO1xyXG5pbXBvcnQgU2VsZWN0ZWRHcmVlbkJsb2NrIGZyb20gJy4uL2ltZy9nYW1lL3NlbGVjdGVkX2Jsb2Nrcy9ncmVlbi5wbmcnO1xyXG5pbXBvcnQgU2VsZWN0ZWRZZWxsb3dCbG9jayBmcm9tICcuLi9pbWcvZ2FtZS9zZWxlY3RlZF9ibG9ja3MveWVsbG93LnBuZyc7XHJcbmltcG9ydCBTZWxlY3RlZFB1cnBsZUJsb2NrIGZyb20gJy4uL2ltZy9nYW1lL3NlbGVjdGVkX2Jsb2Nrcy9wdXJwbGUucG5nJztcclxuaW1wb3J0IFNlbGVjdGVkUmVkQmxvY2sgZnJvbSAnLi4vaW1nL2dhbWUvc2VsZWN0ZWRfYmxvY2tzL3JlZC5wbmcnO1xyXG5pbXBvcnQgQm9udXMgZnJvbSAnLi4vaW1nL2Jvb3N0ZXIvYm9udXMucG5nJztcclxuaW1wb3J0IFNlbGVjdGVkQm9udXMgZnJvbSAnLi4vaW1nL2Jvb3N0ZXIvc2VsZWN0ZWRfYm9udXMucG5nJztcclxuaW1wb3J0IE1vbmV5QmxvY2sgZnJvbSAnLi4vaW1nL2Jvb3N0ZXIvbW9uZXkucG5nJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHRIZWFkZXJQYW5lbCxcclxuXHRHYW1lUGFuZWwsXHJcblx0U2NvcmVQYW5lbCxcclxuXHRQcm9ncmVzc0Jsb2NrLFxyXG5cdFByb2dyZXNzU2NhbGUsXHJcblx0Qmx1ZUJsb2NrLFxyXG5cdEdyZWVuQmxvY2ssXHJcblx0UHVycGxlQmxvY2ssXHJcblx0UmVkQmxvY2ssXHJcblx0WWVsbG93QmxvY2ssXHJcblx0Qm9udXMsXHJcblx0U2VsZWN0ZWRCb251cyxcclxuXHRNb25leUJsb2NrLFxyXG5cdEJ1dHRvbixcclxuXHRTZWxlY3RlZEJsdWVCbG9jayxcclxuXHRTZWxlY3RlZEdyZWVuQmxvY2ssXHJcblx0U2VsZWN0ZWRQdXJwbGVCbG9jayxcclxuXHRTZWxlY3RlZFJlZEJsb2NrLFxyXG5cdFNlbGVjdGVkWWVsbG93QmxvY2ssXHJcbn07XHJcbiIsImV4cG9ydCBjb25zdCBQT0lOVFNfUEVSX1RVUk4gPSAyO1xyXG5leHBvcnQgY29uc3QgSU1BR0VfU0laRV9DT0VGRklDSUVOVCA9IDQ7XHJcbmV4cG9ydCBjb25zdCBURUxFUE9SVF9DT1NUID0gNTtcclxuZXhwb3J0IGNvbnN0IE1PTkVZID0gMjA7XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEV2ZW50TWFuYWdlciB7XHJcblx0ZXZlbnRzID0gbmV3IE1hcCgpO1xyXG5cclxuXHRvbihldmVudDogc3RyaW5nLCBoYW5kbGVyOiBhbnkpIHtcclxuXHRcdGlmICh0aGlzLmV2ZW50cy5oYXMoZXZlbnQpKSB7XHJcblx0XHRcdHRoaXMuZXZlbnRzLmdldChldmVudCkuYWRkKGhhbmRsZXIpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5ldmVudHMuc2V0KGV2ZW50LCBuZXcgU2V0KFtoYW5kbGVyXSkpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0b2ZmKGV2ZW50OiBzdHJpbmcsIGhhbmRsZXI6IGFueSkge1xyXG5cdFx0dGhpcy5ldmVudHMuZ2V0KGV2ZW50KT8uZGVsZXRlKGhhbmRsZXIpO1xyXG5cdH1cclxuXHJcblx0ZW1pdChldmVudDogc3RyaW5nLCBhcmc/OiBhbnkpIHtcclxuXHRcdHRoaXMuZXZlbnRzLmdldChldmVudCk/LmZvckVhY2goKGhhbmRsZXI6IChhcmcwOiBhbnkpID0+IGFueSkgPT4gaGFuZGxlcihhcmcpKTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgY2hvb3NlQ29sb3JzIH0gZnJvbSAnLi91dGlscyc7XHJcbmltcG9ydCBJbnB1dCBmcm9tICcuL2lucHV0JztcclxuaW1wb3J0IFNjZW5lTWFuYWdlciwgeyBTY2VuZXMsIFRTY2VuZSB9IGZyb20gJy4vc2NlbmUnO1xyXG5pbXBvcnQgRXZlbnRNYW5hZ2VyIGZyb20gJy4vZXZlbnQnO1xyXG5pbXBvcnQgR2FtZVdvcmxkIGZyb20gJy4vd29ybGRzL2dhbWVXb3JsZCc7XHJcbmltcG9ydCBJbWFnZVJlcG9zaXRvcnkgZnJvbSAnLi9JbWFnZVJlcG9zaXRvcnknO1xyXG5pbXBvcnQgYXNzZXRzIGZyb20gJy4vYXNzZXRzJztcclxuaW1wb3J0IEdhbWVWaWV3IGZyb20gJy4vdmlld3MvZ2FtZVZpZXcnO1xyXG5pbXBvcnQgeyBHYW1lSW1hZ2VzIH0gZnJvbSAnLi90eXBlcyc7XHJcbmltcG9ydCBFbmRXb3JsZCwgeyBSZXN1bHQgfSBmcm9tICcuL3dvcmxkcy9lbmRXb3JsZCc7XHJcbmltcG9ydCBFbmRWaWV3IGZyb20gJy4vdmlld3MvZW5kVmlldyc7XHJcbmltcG9ydCB7IE1PTkVZIH0gZnJvbSAnLi9jb25zdGFudHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSBleHRlbmRzIEV2ZW50TWFuYWdlciB7XHJcblx0cHJpdmF0ZSBfaW5wdXQ6IElucHV0O1xyXG5cclxuXHRwcml2YXRlIF9zY2VuZXM6IFNjZW5lTWFuYWdlcjtcclxuXHJcblx0cHJpdmF0ZSBfY3VycmVudFNjZW5lOiBTY2VuZXMgPSBTY2VuZXMuR2FtZTtcclxuXHJcblx0cHJpdmF0ZSBfY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcclxuXHJcblx0cHJpdmF0ZSBfY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XHJcblxyXG5cdHByaXZhdGUgX2ltYWdlUmVwb3NpdG9yeTogSW1hZ2VSZXBvc2l0b3J5O1xyXG5cclxuXHRjb25zdHJ1Y3RvcihjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50KSB7XHJcblx0XHRzdXBlcigpO1xyXG5cdFx0dGhpcy5fY2FudmFzID0gY2FudmFzO1xyXG5cdFx0dGhpcy5fY3R4ID0gPENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRD5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuXHRcdHRoaXMuX2ltYWdlUmVwb3NpdG9yeSA9IG5ldyBJbWFnZVJlcG9zaXRvcnkoYXNzZXRzKTtcclxuXHRcdHRoaXMuX3NjZW5lcyA9IG5ldyBTY2VuZU1hbmFnZXIoKTtcclxuXHRcdHRoaXMuX2lucHV0ID0gbmV3IElucHV0KCk7XHJcblx0XHR0aGlzLmxvb3AgPSB0aGlzLmxvb3AuYmluZCh0aGlzKTtcclxuXHRcdHRoaXMuY2FsbEVtaXQgPSB0aGlzLmNhbGxFbWl0LmJpbmQodGhpcyk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgYXN5bmMgaW5pdChuOiBudW1iZXIsIG06IG51bWJlciwgYzogbnVtYmVyLCBrOiBudW1iZXIsIHM6IG51bWJlciwgeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcclxuXHRcdHRoaXMuX2lucHV0LmluaXQoKTtcclxuXHRcdGNvbnN0IGdhbWVJbWFnZXMgPSBhd2FpdCB0aGlzLl9pbWFnZVJlcG9zaXRvcnkubG9hZEltYWdlcygpO1xyXG5cdFx0Y29uc3QgeyBfY2FudmFzOiBjYW52YXMsIF9jdHg6IGN0eCB9ID0gdGhpcztcclxuXHRcdHRoaXMuX3NjZW5lcy5hZGQoU2NlbmVzLkdhbWUsIEdhbWUuY3JlYXRlR2FtZVNjZW5lKG4sIG0sIGMsIGssIHMsIHgsIHksIGdhbWVJbWFnZXMsIGNhbnZhcywgY3R4LCB0aGlzLmNhbGxFbWl0KSk7XHJcblx0XHR0aGlzLm9uKCdlbmRHYW1lJywgKHJlc3VsdDogUmVzdWx0KSA9PiB7XHJcblx0XHRcdHRoaXMuX2N1cnJlbnRTY2VuZSA9IFNjZW5lcy5FbmQ7XHJcblx0XHRcdHRoaXMuX3NjZW5lcy5hZGQoU2NlbmVzLkVuZCwgR2FtZS5jcmVhdGVFbmRTY2VuZShnYW1lSW1hZ2VzLCBjYW52YXMsIGN0eCwgcmVzdWx0LCB0aGlzLmNhbGxFbWl0KSk7XHJcblx0XHR9KTtcclxuXHRcdHRoaXMub24oJ25ld0dhbWUnLCAoKSA9PiB7XHJcblx0XHRcdHRoaXMuX2N1cnJlbnRTY2VuZSA9IFNjZW5lcy5HYW1lO1xyXG5cdFx0XHR0aGlzLl9zY2VuZXMuYWRkKFNjZW5lcy5HYW1lLCBHYW1lLmNyZWF0ZUdhbWVTY2VuZShuLCBtLCBjLCBrLCBzLCB4LCB5LCBnYW1lSW1hZ2VzLCBjYW52YXMsIGN0eCwgdGhpcy5jYWxsRW1pdCkpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIHN0YXRpYyBjcmVhdGVHYW1lU2NlbmUobjogbnVtYmVyLCBtOiBudW1iZXIsIGM6IG51bWJlciwgazogbnVtYmVyLCBzOiBudW1iZXIsIHg6IG51bWJlciwgeTogbnVtYmVyLCBnYW1lSW1hZ2VzOiBHYW1lSW1hZ2VzLCBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LCBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgZW1pdEVGdW5jOiAoZU5hbWU6IHN0cmluZywgYXJnOiBhbnkpID0+IHZvaWQpIHtcclxuXHRcdGNvbnN0IGdyaWRJbmZvID0ge1xyXG5cdFx0XHRibG9ja0NvbG9yczogY2hvb3NlQ29sb3JzKGMpLFxyXG5cdFx0XHRuLFxyXG5cdFx0XHRtLFxyXG5cdFx0XHRrLFxyXG5cdFx0XHRtaW5TdGlycmluZ0Ftb3VudDogcyxcclxuXHRcdH07XHJcblx0XHRjb25zdCB3b3JsZCA9IG5ldyBHYW1lV29ybGQoZ3JpZEluZm8sIHgsIHksIE1PTkVZLCBlbWl0RUZ1bmMpO1xyXG5cdFx0Y29uc3QgdmlldyA9IG5ldyBHYW1lVmlldyhjYW52YXMsIGN0eCwgZ2FtZUltYWdlcyk7XHJcblx0XHR2aWV3LmluaXQod29ybGQpO1xyXG5cdFx0cmV0dXJuIHsgdmlldywgd29ybGQgfTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgY2FsbEVtaXQgPSAoZU5hbWU6IHN0cmluZywgYXJnPzogYW55KSA9PiB0aGlzLmVtaXQoZU5hbWUsIGFyZyk7XHJcblxyXG5cdHByaXZhdGUgc3RhdGljIGNyZWF0ZUVuZFNjZW5lKGdhbWVJbWFnZXM6IEdhbWVJbWFnZXMsIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCByZXN1bHQ6IFJlc3VsdCwgZW1pdEVGdW5jOiAoZU5hbWU6IHN0cmluZywgYXJnOiBhbnkpID0+IHZvaWQpIHtcclxuXHRcdGNvbnN0IHdvcmxkID0gbmV3IEVuZFdvcmxkKHJlc3VsdCwgZW1pdEVGdW5jKTtcclxuXHRcdGNvbnN0IHZpZXcgPSBuZXcgRW5kVmlldyhjYW52YXMsIGN0eCwgZ2FtZUltYWdlcyk7XHJcblx0XHR2aWV3LmluaXQod29ybGQpO1xyXG5cdFx0cmV0dXJuIHsgdmlldywgd29ybGQgfTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzdGFydCgpIHtcclxuXHRcdHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmxvb3ApO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBsb29wKCkge1xyXG5cdFx0Y29uc3QgeyB3b3JsZCwgdmlldyB9ID0gdGhpcy5fc2NlbmVzLmdldCh0aGlzLl9jdXJyZW50U2NlbmUpIGFzIFRTY2VuZTtcclxuXHRcdHdvcmxkLnVwZGF0ZSh0aGlzLl9pbnB1dCk7XHJcblx0XHRpZiAodGhpcy5faW5wdXQueCAhPT0gMCAmJiB0aGlzLl9pbnB1dC55ICE9PSAwKSB0aGlzLl9pbnB1dC5jb29yZGluYXRlcyA9IHsgeDogMCwgeTogMCB9O1xyXG5cdFx0dmlldy51cGRhdGUod29ybGQpO1xyXG5cdFx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMubG9vcCk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCBHYW1lT2JqZWN0IGZyb20gJy4vZ2FtZU9iamVjdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCb251cyBleHRlbmRzIEdhbWVPYmplY3Qge1xyXG5cdHByaXZhdGUgX3NlbGVjdGVkID0gZmFsc2U7XHJcblxyXG5cdHB1YmxpYyBnZXQgc2VsZWN0ZWQoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fc2VsZWN0ZWQ7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc2V0IHNlbGVjdGVkKHNlbGVjdGVkOiBib29sZWFuKSB7XHJcblx0XHR0aGlzLl9zZWxlY3RlZCA9IHNlbGVjdGVkO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHRvZ2dsZVNlbGVjdCgpIHtcclxuXHRcdHRoaXMuX3NlbGVjdGVkID0gIXRoaXMuX3NlbGVjdGVkO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgR2FtZU9iamVjdCBmcm9tICcuL2dhbWVPYmplY3QnO1xyXG5pbXBvcnQgeyBjaG9vc2VDb2xvciwgZ2V0UmFuZG9tVmFsdWUgfSBmcm9tICcuLi91dGlscyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCbG9jayBleHRlbmRzIEdhbWVPYmplY3Qge1xyXG5cdHByaXZhdGUgX3NlbGVjdGVkID0gZmFsc2U7XHJcblxyXG5cdHByaXZhdGUgX29jY3VwaWVkID0gZmFsc2U7XHJcblxyXG5cdHByaXZhdGUgX29sZENvbG9yOiBzdHJpbmc7XHJcblxyXG5cdHByaXZhdGUgX2NvbG9yOiBzdHJpbmc7XHJcblxyXG5cdHByb3RlY3RlZCBfdmVsb2NpdHkgPSAxMDtcclxuXHJcblx0Y29uc3RydWN0b3IoY29sb3JzOiBudW1iZXJbXSkge1xyXG5cdFx0c3VwZXIoKTtcclxuXHRcdGNvbnN0IGNvbG9yTnVtYmVyID0gZ2V0UmFuZG9tVmFsdWUoY29sb3JzKTtcclxuXHRcdHRoaXMuX2NvbG9yID0gY2hvb3NlQ29sb3IoY29sb3JOdW1iZXIpO1xyXG5cdFx0dGhpcy5fb2xkQ29sb3IgPSB0aGlzLl9jb2xvcjtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBnZXRDb2xvckltYWdlTmFtZSgpOiBzdHJpbmcge1xyXG5cdFx0cmV0dXJuIHRoaXMuX3NlbGVjdGVkID8gYFNlbGVjdGVkJHt0aGlzLmNvbG9yfWAgOiB0aGlzLmNvbG9yO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGdldCBjb2xvcigpOiBzdHJpbmcge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2NvbG9yO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHNldCBjb2xvcihjb2xvcjogc3RyaW5nKSB7XHJcblx0XHR0aGlzLl9jb2xvciA9IGNvbG9yO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGdldCBvbGRDb2xvcigpOiBzdHJpbmcge1xyXG5cdFx0cmV0dXJuIHRoaXMuX29sZENvbG9yO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHNldCBvbGRDb2xvcihjb2xvcjogc3RyaW5nKSB7XHJcblx0XHR0aGlzLl9vbGRDb2xvciA9IGNvbG9yO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHRvZ2dsZVNlbGVjdCgpIHtcclxuXHRcdHRoaXMuX3NlbGVjdGVkID0gIXRoaXMuX3NlbGVjdGVkO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGlzU2VsZWN0ZWQoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fc2VsZWN0ZWQ7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc2V0IG9jY3VwaWVkKG9jcDogYm9vbGVhbikge1xyXG5cdFx0dGhpcy5fb2NjdXBpZWQgPSBvY3A7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgdG9nZ2xlT2NjdXBpZWQoKSB7XHJcblx0XHR0aGlzLl9vY2N1cGllZCA9ICF0aGlzLl9vY2N1cGllZDtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBpc09jY3VwaWVkKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX29jY3VwaWVkO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGdldCBvbGRZKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX29sZFk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc2V0IG9sZFkoeTogbnVtYmVyKSB7XHJcblx0XHR0aGlzLl9vbGRZID0geTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IEdhbWVPYmplY3QgZnJvbSAnLi9nYW1lT2JqZWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1dHRvbiBleHRlbmRzIEdhbWVPYmplY3Qge1xyXG5cdHByaXZhdGUgX3NlbGVjdGVkID0gZmFsc2U7XHJcblxyXG5cdHByaXZhdGUgX2NvbG9yID0gJyc7XHJcblxyXG5cdHB1YmxpYyBnZXQgY29sb3IoKTogc3RyaW5nIHtcclxuXHRcdHJldHVybiB0aGlzLl9jb2xvcjtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzZXQgY29sb3IoY29sb3I6IHN0cmluZykge1xyXG5cdFx0dGhpcy5fY29sb3IgPSBjb2xvcjtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyB0b2dnbGVTZWxlY3QoKSB7XHJcblx0XHR0aGlzLl9zZWxlY3RlZCA9ICF0aGlzLl9zZWxlY3RlZDtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBpc1NlbGVjdGVkKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX3NlbGVjdGVkO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb29yZGluYXRlcywgRGlyZWN0aW9uLCBSZXNpemVUeXBlLCBTaXplIH0gZnJvbSAnLi4vdHlwZXMnO1xyXG5cclxuaW50ZXJmYWNlIElHYW1lT2JqZWN0IHtcclxuXHRpbml0OiAocG9zaXRpb246IENvb3JkaW5hdGVzLCBzaXplOiBTaXplLCBpdGVtU2l6ZT86IFNpemUpID0+IHZvaWQ7XHJcblx0cmVzaXplOiAocmVzaXplVHlwZTogUmVzaXplVHlwZSkgPT4gdm9pZDtcclxuXHRtb3ZlOiAobW92ZVR5cGU6IERpcmVjdGlvbiwgdmVsb2NpdHk/OiBudW1iZXIpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIEdhbWVPYmplY3QgaW1wbGVtZW50cyBJR2FtZU9iamVjdCB7XHJcblx0cHJvdGVjdGVkIF94ID0gMDtcclxuXHJcblx0cHJvdGVjdGVkIF95ID0gMDtcclxuXHJcblx0cHJvdGVjdGVkIF9oZWlnaHQgPSAwO1xyXG5cclxuXHRwcm90ZWN0ZWQgX3dpZHRoID0gMDtcclxuXHJcblx0cHJvdGVjdGVkIF92ZWxvY2l0eSA9IDA7XHJcblxyXG5cdHByb3RlY3RlZCBfb2xkWSA9IDA7XHJcblxyXG5cdHByb3RlY3RlZCBfb2xYID0gMDtcclxuXHJcblx0cHJvdGVjdGVkIF9pdGVtU2l6ZTogU2l6ZSA9IHsgaGVpZ2h0OiAwLCB3aWR0aDogMCB9O1xyXG5cclxuXHRpbml0KHBvc2l0aW9uOiBDb29yZGluYXRlcywgc2l6ZTogU2l6ZSwgaXRlbVNpemU/OiBTaXplIHwgdW5kZWZpbmVkKTogdm9pZCB7XHJcblx0XHR0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XHJcblx0XHR0aGlzLl9vbGRZID0gcG9zaXRpb24ueTtcclxuXHRcdHRoaXMuc2l6ZSA9IHNpemU7XHJcblx0XHRpZiAoaXRlbVNpemUpIHRoaXMuX2l0ZW1TaXplID0gaXRlbVNpemU7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgbW92ZShtb3ZlVHlwZTogRGlyZWN0aW9uLCB2ZWxvY2l0eT86IG51bWJlcikge1xyXG5cdFx0Y29uc3QgYW5WZWxvY2l0eSA9IHZlbG9jaXR5IHx8IHRoaXMuX3ZlbG9jaXR5O1xyXG5cdFx0Y29uc3QgeyBVcCwgUmlnaHQsIExlZnQsIERvd24gfSA9IERpcmVjdGlvbjtcclxuXHRcdHN3aXRjaCAobW92ZVR5cGUpIHtcclxuXHRcdFx0Y2FzZSBVcDpcclxuXHRcdFx0XHR0aGlzLl95IC09IGFuVmVsb2NpdHk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgUmlnaHQ6XHJcblx0XHRcdFx0dGhpcy5feCArPSBhblZlbG9jaXR5O1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIExlZnQ6XHJcblx0XHRcdFx0dGhpcy5feCAtPSBhblZlbG9jaXR5O1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIERvd246XHJcblx0XHRcdFx0dGhpcy5feSArPSBhblZlbG9jaXR5O1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcignVW5rbm93biBtb3ZlIHR5cGUnKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHB1YmxpYyByZXNpemUocmVzaXplVHlwZTogUmVzaXplVHlwZSwgdmVsb2NpdHk/OiBudW1iZXIpIHtcclxuXHRcdGNvbnN0IGFuVmVsb2NpdHkgPSB2ZWxvY2l0eSB8fCB0aGlzLl92ZWxvY2l0eTtcclxuXHRcdGNvbnN0IHsgWm9vbSwgU2hyaW5rIH0gPSBSZXNpemVUeXBlO1xyXG5cdFx0c3dpdGNoIChyZXNpemVUeXBlKSB7XHJcblx0XHRcdGNhc2UgU2hyaW5rOlxyXG5cdFx0XHRcdGlmICh0aGlzLl9oZWlnaHQgPiAwKSB0aGlzLl9oZWlnaHQgLT0gYW5WZWxvY2l0eTtcclxuXHRcdFx0XHRlbHNlIHRoaXMuX2hlaWdodCA9IDA7XHJcblx0XHRcdFx0aWYgKHRoaXMuX3dpZHRoID4gMCkgdGhpcy5fd2lkdGggLT0gYW5WZWxvY2l0eTtcclxuXHRcdFx0XHRlbHNlIHRoaXMuX3dpZHRoID0gMDtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSBab29tOlxyXG5cdFx0XHRcdHRoaXMuX2hlaWdodCArPSBhblZlbG9jaXR5O1xyXG5cdFx0XHRcdHRoaXMuX3dpZHRoICs9IGFuVmVsb2NpdHk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCdVbmtub3duIHJlc2l6ZSB0eXBlJyk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZ2V0IHgoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5feDtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBnZXQgeSgpIHtcclxuXHRcdHJldHVybiB0aGlzLl95O1xyXG5cdH1cclxuXHJcblx0cHVibGljIGdldCBoZWlnaHQoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5faGVpZ2h0O1xyXG5cdH1cclxuXHJcblx0cHVibGljIGdldCB3aWR0aCgpIHtcclxuXHRcdHJldHVybiB0aGlzLl93aWR0aDtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBnZXQgcG9zaXRpb24oKTogQ29vcmRpbmF0ZXMge1xyXG5cdFx0cmV0dXJuIHsgeDogdGhpcy5feCwgeTogdGhpcy5feSB9O1xyXG5cdH1cclxuXHJcblx0cHVibGljIHNldCBwb3NpdGlvbihwb3NpdGlvbjogQ29vcmRpbmF0ZXMpIHtcclxuXHRcdHRoaXMuX3ggPSBwb3NpdGlvbi54O1xyXG5cdFx0dGhpcy5feSA9IHBvc2l0aW9uLnk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZ2V0IHNpemUoKTogU2l6ZSB7XHJcblx0XHRyZXR1cm4geyB3aWR0aDogdGhpcy5fd2lkdGgsIGhlaWdodDogdGhpcy5faGVpZ2h0IH07XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc2V0IHNpemUoc2l6ZTogU2l6ZSkge1xyXG5cdFx0dGhpcy5faGVpZ2h0ID0gc2l6ZS5oZWlnaHQ7XHJcblx0XHR0aGlzLl93aWR0aCA9IHNpemUud2lkdGg7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCBCbG9jayBmcm9tICcuL2Jsb2NrJztcclxuaW1wb3J0IHsgQ29vcmRpbmF0ZXMsIFNpemUsIEdyaWRJbmZvIH0gZnJvbSAnLi4vdHlwZXMnO1xyXG5pbXBvcnQgeyBSZXN1bHQgfSBmcm9tICcuLi93b3JsZHMvZW5kV29ybGQnO1xyXG5pbXBvcnQgR2FtZU9iamVjdCBmcm9tICcuL2dhbWVPYmplY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JpZCBleHRlbmRzIEdhbWVPYmplY3Qge1xyXG5cdHByaXZhdGUgX2dyaWRJbmZvOiBHcmlkSW5mbztcclxuXHJcblx0cHJpdmF0ZSBfYmxvY2tMYXlvdXQ6IEJsb2NrW11bXSA9IFtdO1xyXG5cclxuXHRwcml2YXRlIF9pdGVtSGVpZ2h0ID0gMDtcclxuXHJcblx0cHJpdmF0ZSBfaXRlbVdpZHRoID0gMDtcclxuXHJcblx0Y29uc3RydWN0b3IoZ3JpZEluZm86IEdyaWRJbmZvLCBlbWl0RUZ1bmM6IChlTmFtZTogc3RyaW5nLCBhcmc6IGFueSkgPT4gdm9pZCkge1xyXG5cdFx0c3VwZXIoKTtcclxuXHRcdHRoaXMuX2dyaWRJbmZvID0gZ3JpZEluZm87XHJcblx0XHR0aGlzLmNyZWF0ZUxheW91dCgpO1xyXG5cdFx0bGV0IHMgPSBncmlkSW5mby5taW5TdGlycmluZ0Ftb3VudDtcclxuXHRcdHdoaWxlICghdGhpcy5jaGVja0xheW91dCgpICYmIHMgPiAwKSB7XHJcblx0XHRcdHRoaXMuY3JlYXRlTGF5b3V0KCk7XHJcblx0XHRcdHMgLT0gMTtcclxuXHRcdH1cclxuXHRcdGlmIChzID09PSAwKSB7XHJcblx0XHRcdGVtaXRFRnVuYygnZW5kR2FtZScsIFJlc3VsdC5Mb3N0KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHB1YmxpYyBpbml0KHBvc2l0aW9uOiBDb29yZGluYXRlcywgc2l6ZTogU2l6ZSwgaXRlbVNpemU6IFNpemUpIHtcclxuXHRcdHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcclxuXHRcdHRoaXMuc2l6ZSA9IHNpemU7XHJcblx0XHR0aGlzLml0ZW1TaXplID0gaXRlbVNpemU7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGNyZWF0ZUxheW91dCgpIHtcclxuXHRcdGNvbnN0IHsgbiwgbSwgYmxvY2tDb2xvcnMgfSA9IHRoaXMuZ3JpZEluZm87XHJcblx0XHRjb25zdCBsYXlvdXQ6IEJsb2NrW11bXSA9IFtdO1xyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpICs9IDEpIHtcclxuXHRcdFx0bGF5b3V0W2ldID0gW107XHJcblx0XHRcdGZvciAobGV0IGogPSAwOyBqIDwgbTsgaiArPSAxKSB7XHJcblx0XHRcdFx0bGF5b3V0W2ldW2pdID0gbmV3IEJsb2NrKGJsb2NrQ29sb3JzKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0dGhpcy5fYmxvY2tMYXlvdXQgPSBsYXlvdXQ7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGNoZWNrTGF5b3V0KCk6IGJvb2xlYW4ge1xyXG5cdFx0bGV0IHJlc3VsdCA9IGZhbHNlO1xyXG5cdFx0Y29uc3QgeyBtLCBuIH0gPSB0aGlzLl9ncmlkSW5mbztcclxuXHRcdGNvbnN0IGxheW91dCA9IHRoaXMuX2Jsb2NrTGF5b3V0O1xyXG5cdFx0bGV0IGkgPSAwO1xyXG5cdFx0Zm9yIChpID0gMDsgaSA8IG0gLSAxOyBpICs9IDEpIHtcclxuXHRcdFx0Y29uc3Qgcm93TGlzdCA9IGxheW91dFtpXS5tYXAoYmxvY2sgPT4gYmxvY2suY29sb3IpO1xyXG5cdFx0XHRjb25zdCByb3dTZXQgPSBuZXcgU2V0KHJvd0xpc3QpO1xyXG5cdFx0XHRpZiAocm93U2V0LnNpemUgPCByb3dMaXN0Lmxlbmd0aCkge1xyXG5cdFx0XHRcdHJlc3VsdCA9IHRydWU7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGZvciAoaSA9IDA7IGkgPCBtOyBpICs9IDEpIHtcclxuXHRcdFx0Zm9yIChsZXQgaiA9IDE7IGogPCBuOyBqICs9IDEpIHtcclxuXHRcdFx0XHRpZiAobGF5b3V0W2ogLSAxXVtpXSA9PT0gbGF5b3V0W2pdW2ldKSB7XHJcblx0XHRcdFx0XHRyZXN1bHQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGlmIChyZXN1bHQpIGJyZWFrO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHJlc3VsdDtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBnZXQgbigpIHtcclxuXHRcdHJldHVybiB0aGlzLl9ncmlkSW5mby5uO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGdldCBtKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2dyaWRJbmZvLm07XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZ2V0IGJsb2NrTGF5b3V0KCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2Jsb2NrTGF5b3V0O1xyXG5cdH1cclxuXHJcblx0cHVibGljIHNldCBibG9ja0xheW91dChsYXlvdXQ6IEJsb2NrW11bXSkge1xyXG5cdFx0dGhpcy5fYmxvY2tMYXlvdXQgPSBsYXlvdXQ7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZ2V0IGdyaWRJbmZvKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2dyaWRJbmZvO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGdldCBpdGVtSGVpZ2h0KCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2l0ZW1IZWlnaHQ7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZ2V0IGl0ZW1XaWR0aCgpIHtcclxuXHRcdHJldHVybiB0aGlzLl9pdGVtV2lkdGg7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZ2V0IGl0ZW1TaXplKCkge1xyXG5cdFx0cmV0dXJuIHsgd2lkdGg6IHRoaXMuX2l0ZW1XaWR0aCwgaGVpZ2h0OiB0aGlzLl9pdGVtSGVpZ2h0IH07XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc2V0IGl0ZW1TaXplKHNpemU6IFNpemUpIHtcclxuXHRcdHRoaXMuX2l0ZW1XaWR0aCA9IHNpemUud2lkdGg7XHJcblx0XHR0aGlzLl9pdGVtSGVpZ2h0ID0gc2l6ZS5oZWlnaHQ7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IENvb3JkaW5hdGVzIH0gZnJvbSAnLi90eXBlcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnB1dCB7XHJcblx0cHJpdmF0ZSBfeCA9IDA7XHJcblxyXG5cdHByaXZhdGUgX3kgPSAwO1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHRoaXMuaW5pdCgpO1xyXG5cdH1cclxuXHJcblx0aW5pdCgpIHtcclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGUgPT4ge1xyXG5cdFx0XHR0aGlzLl94ID0gZS5vZmZzZXRYO1xyXG5cdFx0XHR0aGlzLl95ID0gZS5vZmZzZXRZO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZ2V0IHgoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5feDtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBnZXQgeSgpIHtcclxuXHRcdHJldHVybiB0aGlzLl95O1xyXG5cdH1cclxuXHJcblx0cHVibGljIHNldCBjb29yZGluYXRlcyhjcjogQ29vcmRpbmF0ZXMpIHtcclxuXHRcdHRoaXMuX3ggPSBjci54O1xyXG5cdFx0dGhpcy5feSA9IGNyLnk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IENvb3JkaW5hdGVzLCBEaXJlY3Rpb24gfSBmcm9tICcuL3R5cGVzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2dyZXNzQmFyIHtcclxuXHRwcml2YXRlIF94ID0gMDtcclxuXHJcblx0cHJpdmF0ZSBfY3VycmVudFggPSAwO1xyXG5cclxuXHRwcml2YXRlIF9lbmRYID0gMDtcclxuXHJcblx0cHJpdmF0ZSBfdmVsb2NpdHkgPSAxO1xyXG5cclxuXHRwcml2YXRlIF95ID0gMDtcclxuXHJcblx0cHJpdmF0ZSBfZGlyZWN0aW9uOiBEaXJlY3Rpb24gPSBEaXJlY3Rpb24uUmlnaHQ7XHJcblxyXG5cdGluaXQoc3RhcnRYOiBudW1iZXIsIHdpZHRoOiBudW1iZXIsIHk6IG51bWJlciwgdGFyZ2V0UG9pbnRzOiBudW1iZXIpIHtcclxuXHRcdHRoaXMuX3ggPSBzdGFydFg7XHJcblx0XHRpZiAodGhpcy5fZGlyZWN0aW9uID09PSBEaXJlY3Rpb24uUmlnaHQpIHtcclxuXHRcdFx0dGhpcy5fY3VycmVudFggPSBzdGFydFg7XHJcblx0XHRcdHRoaXMuX2VuZFggPSBzdGFydFggKyB3aWR0aDtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuX2N1cnJlbnRYID0gc3RhcnRYICsgd2lkdGg7XHJcblx0XHRcdHRoaXMuX2VuZFggPSBzdGFydFg7XHJcblx0XHR9XHJcblx0XHR0aGlzLl95ID0geTtcclxuXHRcdHRoaXMuX3ZlbG9jaXR5ID0gUHJvZ3Jlc3NCYXIuY2FsY1ZlbG9jaXR5KHdpZHRoLCB0YXJnZXRQb2ludHMpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBzdGF0aWMgY2FsY1ZlbG9jaXR5KHdpZHRoOiBudW1iZXIsIHRhcmdldFBvaW50czogbnVtYmVyKTogbnVtYmVyIHtcclxuXHRcdHJldHVybiB3aWR0aCAvIHRhcmdldFBvaW50cztcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgbW92ZVJpZ2h0KCkge1xyXG5cdFx0aWYgKHRoaXMuX2N1cnJlbnRYID49IHRoaXMuX2VuZFgpIHJldHVybjtcclxuXHRcdHRoaXMuX2N1cnJlbnRYICs9IHRoaXMuX3ZlbG9jaXR5O1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBtb3ZlTGVmdCgpIHtcclxuXHRcdHRoaXMuX2N1cnJlbnRYIC09IHRoaXMuX3ZlbG9jaXR5O1xyXG5cdH1cclxuXHJcblx0cHVibGljIG1vdmUoKSB7XHJcblx0XHRpZiAodGhpcy5kaXJlY3Rpb24gPT09IERpcmVjdGlvbi5MZWZ0KSB0aGlzLm1vdmVMZWZ0KCk7XHJcblx0XHRlbHNlIHRoaXMubW92ZVJpZ2h0KCk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZ2V0IGN1cnJlbnRQb3NpdGlvbigpOiBDb29yZGluYXRlcyB7XHJcblx0XHRyZXR1cm4geyB4OiB0aGlzLl9jdXJyZW50WCwgeTogdGhpcy5feSB9O1xyXG5cdH1cclxuXHJcblx0cHVibGljIHNldCB2ZWxvY2l0eSh2OiBudW1iZXIpIHtcclxuXHRcdHRoaXMuX3ZlbG9jaXR5ID0gdjtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzZXRWZWxvY2l0eUJ5V2lkdGgod2lkdGg6IG51bWJlciwgdGFyZ2V0UG9pbnRzOiBudW1iZXIpIHtcclxuXHRcdHRoaXMuX3ZlbG9jaXR5ID0gUHJvZ3Jlc3NCYXIuY2FsY1ZlbG9jaXR5KHdpZHRoLCB0YXJnZXRQb2ludHMpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHNldCBkaXJlY3Rpb24oZGlyZWN0aW9uOiBEaXJlY3Rpb24pIHtcclxuXHRcdHRoaXMuX2RpcmVjdGlvbiA9IGRpcmVjdGlvbjtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzZXQgeChzdGFydDogbnVtYmVyKSB7XHJcblx0XHR0aGlzLl94ID0gc3RhcnQ7XHJcblx0XHR0aGlzLl9jdXJyZW50WCA9IHN0YXJ0O1xyXG5cdH1cclxuXHJcblx0cHVibGljIHNldCBFbmRYKHg6IG51bWJlcikge1xyXG5cdFx0dGhpcy5fZW5kWCA9IHg7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc2V0RW5kWEJ5V2lkdGgod2lkdGg6IG51bWJlcikge1xyXG5cdFx0dGhpcy5fZW5kWCA9IHRoaXMuX3ggKyB3aWR0aDtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzZXQgY3VycmVudFgod2lkdGg6IG51bWJlcikge1xyXG5cdFx0dGhpcy5fY3VycmVudFggPSB0aGlzLl94ICsgd2lkdGg7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZ2V0IHdpZHRoKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2N1cnJlbnRYIC0gdGhpcy5feDtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IFZpZXcgZnJvbSAnLi92aWV3cy92aWV3JztcclxuaW1wb3J0IFdvcmxkIGZyb20gJy4vd29ybGRzL3dvcmxkJztcclxuXHJcbmV4cG9ydCBlbnVtIFNjZW5lcyB7XHJcblx0U3RhcnQgPSAnU3RhcnQnLFxyXG5cdEdhbWUgPSAnR2FtZScsXHJcblx0RW5kID0gJ0VuZCcsXHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIFRTY2VuZSA9IHtcclxuXHR2aWV3OiBWaWV3O1xyXG5cdHdvcmxkOiBXb3JsZDtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjZW5lTWFuYWdlciB7XHJcblx0cHJpdmF0ZSBfc2NlbmVzID0gbmV3IE1hcDxTY2VuZXMsIFRTY2VuZT4oKTtcclxuXHJcblx0cHVibGljIGFkZChzY2VuZU5hbWU6IFNjZW5lcywgc2NlbmVPYmo6IFRTY2VuZSkge1xyXG5cdFx0dGhpcy5fc2NlbmVzLnNldChzY2VuZU5hbWUsIHNjZW5lT2JqKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBoYXMoc2NlbmVOYW1lOiBTY2VuZXMpIHtcclxuXHRcdHRoaXMuX3NjZW5lcy5oYXMoc2NlbmVOYW1lKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBnZXQoc2NlbmVOYW1lOiBTY2VuZXMpIHtcclxuXHRcdHJldHVybiB0aGlzLl9zY2VuZXMuZ2V0KHNjZW5lTmFtZSk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZGVsZXRlKHNjZW5lTmFtZTogU2NlbmVzKSB7XHJcblx0XHRpZiAodGhpcy5fc2NlbmVzLmhhcyhzY2VuZU5hbWUpKSB7XHJcblx0XHRcdHRoaXMuX3NjZW5lcy5kZWxldGUoc2NlbmVOYW1lKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHB1YmxpYyBnZXQgc2NlbmVzKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX3NjZW5lcztcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgUE9JTlRTX1BFUl9UVVJOIH0gZnJvbSAnLi9jb25zdGFudHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NvcmUge1xyXG5cdHByaXZhdGUgX3BvaW50cyA9IDA7XHJcblxyXG5cdHByaXZhdGUgX21vdmVzID0gMDtcclxuXHJcblx0cHJpdmF0ZSBfdGFyZ2V0UG9pbnRzID0gMDtcclxuXHJcblx0cHJpdmF0ZSBfdGFyZ2V0TW92ZXMgPSAwO1xyXG5cclxuXHRjb25zdHJ1Y3Rvcih0YXJnZXRQb2ludHM6IG51bWJlciwgdGFyZ2V0TW92ZXM6IG51bWJlcikge1xyXG5cdFx0dGhpcy5fdGFyZ2V0UG9pbnRzID0gdGFyZ2V0UG9pbnRzO1xyXG5cdFx0dGhpcy5fbW92ZXMgPSB0YXJnZXRNb3ZlcztcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBnZXQgcG9pbnRzKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX3BvaW50cztcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBpbmNyZWFzZVBvaW50cygpIHtcclxuXHRcdHRoaXMuX3BvaW50cyArPSBQT0lOVFNfUEVSX1RVUk47XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZ2V0IG1vdmVzKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX21vdmVzO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGRlY3JlYXNlTW92ZXNOdW0oKSB7XHJcblx0XHR0aGlzLl9tb3ZlcyAtPSAxO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGdldCB0YXJnZXRQb2ludHMoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fdGFyZ2V0UG9pbnRzO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGdldCB0YXJnZXRNb3ZlcygpIHtcclxuXHRcdHJldHVybiB0aGlzLl90YXJnZXRNb3ZlcztcclxuXHR9XHJcbn1cclxuIiwiZXhwb3J0IHR5cGUgQ29vcmRpbmF0ZXMgPSB7XHJcblx0eDogbnVtYmVyO1xyXG5cdHk6IG51bWJlcjtcclxufTtcclxuXHJcbmV4cG9ydCBlbnVtIFJlc2l6ZVR5cGUge1xyXG5cdFpvb20sXHJcblx0U2hyaW5rLFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBEaXJlY3Rpb24ge1xyXG5cdFVwLFxyXG5cdFJpZ2h0LFxyXG5cdERvd24sXHJcblx0TGVmdCxcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgU2l6ZSA9IHtcclxuXHR3aWR0aDogbnVtYmVyO1xyXG5cdGhlaWdodDogbnVtYmVyO1xyXG59O1xyXG5cclxuZXhwb3J0IHR5cGUgR3JpZEluZm8gPSB7XHJcblx0YmxvY2tDb2xvcnM6IG51bWJlcltdO1xyXG5cdG46IG51bWJlcjtcclxuXHRtOiBudW1iZXI7XHJcblx0azogbnVtYmVyO1xyXG5cdG1pblN0aXJyaW5nQW1vdW50OiBudW1iZXI7XHJcbn07XHJcblxyXG5leHBvcnQgdHlwZSBHYW1lSW1hZ2VzID0geyBba2V5OiBzdHJpbmddOiBIVE1MSW1hZ2VFbGVtZW50IH07XHJcbmV4cG9ydCB0eXBlIEFzc2V0cyA9IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XHJcblxyXG5leHBvcnQgdHlwZSBQb3NpdGlvbkxpc3QgPSBbbnVtYmVyLCBudW1iZXJdW107XHJcbiIsImV4cG9ydCBmdW5jdGlvbiBnZXRSYW5kb21JbnRlZ2VyKG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcikge1xyXG5cdHJldHVybiBNYXRoLmZsb29yKG1pbiArIE1hdGgucmFuZG9tKCkgKiAobWF4ICsgMSAtIG1pbikpO1xyXG59XHJcblxyXG5jb25zdCBDT0xPUlNfTlVNID0gNTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaG9vc2VDb2xvcnMoYW1vdW50OiBudW1iZXIpIHtcclxuXHRpZiAoYW1vdW50ID09PSBDT0xPUlNfTlVNKSB7XHJcblx0XHRyZXR1cm4gQXJyYXkuZnJvbSh7IGxlbmd0aDogQ09MT1JTX05VTSB9LCAodiwgaykgPT4gayArIDEpO1xyXG5cdH1cclxuXHRyZXR1cm4gQXJyYXkuZnJvbSh7IGxlbmd0aDogYW1vdW50IH0sICgpID0+IGdldFJhbmRvbUludGVnZXIoMCwgYW1vdW50IC0gMSkpO1xyXG5cdC8vIFRPRE8gY2hlY2sgcmVwZWF0c1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmFuZG9tVmFsdWUoYXJyYXk6IG51bWJlcltdKTogbnVtYmVyIHtcclxuXHRyZXR1cm4gYXJyYXlbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYXJyYXkubGVuZ3RoKV07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaG9vc2VDb2xvcihjb2xvck51bWJlcjogbnVtYmVyKTogc3RyaW5nIHtcclxuXHRzd2l0Y2ggKGNvbG9yTnVtYmVyKSB7XHJcblx0XHRjYXNlIDE6XHJcblx0XHRcdHJldHVybiAnQmx1ZUJsb2NrJztcclxuXHRcdGNhc2UgMjpcclxuXHRcdFx0cmV0dXJuICdHcmVlbkJsb2NrJztcclxuXHRcdGNhc2UgMzpcclxuXHRcdFx0cmV0dXJuICdQdXJwbGVCbG9jayc7XHJcblx0XHRjYXNlIDQ6XHJcblx0XHRcdHJldHVybiAnUmVkQmxvY2snO1xyXG5cdFx0Y2FzZSA1OlxyXG5cdFx0XHRyZXR1cm4gJ1llbGxvd0Jsb2NrJztcclxuXHRcdGRlZmF1bHQ6XHJcblx0XHRcdHJldHVybiAnQmx1ZUJsb2NrJztcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja0NsaWNrKHVYOiBudW1iZXIsIHVZOiBudW1iZXIsIHg6IG51bWJlciwgeTogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgd2lkdGg6bnVtYmVyKSB7XHJcblx0cmV0dXJuIHVZID4geSAmJiB1WSA8IHkgKyBoZWlnaHQgJiYgdVggPiB4ICYmIHVYIDwgeCArIHdpZHRoXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb250YWlucyhhcnI6IFtudW1iZXIsIG51bWJlcl1bXSwgZWxlbTogW251bWJlciwgbnVtYmVyXSkge1xyXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSArPSAxKSB7XHJcblx0XHRpZiAoYXJyW2ldWzBdID09PSBlbGVtWzBdICYmIGFycltpXVsxXSA9PT0gZWxlbVsxXSkge1xyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdH1cclxuXHR9XHJcblx0cmV0dXJuIGZhbHNlO1xyXG59XHJcbiIsImltcG9ydCBWaWV3IGZyb20gJy4vdmlldyc7XHJcbmltcG9ydCB7IElNQUdFX1NJWkVfQ09FRkZJQ0lFTlQgfSBmcm9tICcuLi9jb25zdGFudHMnO1xyXG5pbXBvcnQgRW5kV29ybGQgZnJvbSAnLi4vd29ybGRzL2VuZFdvcmxkJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVuZFZpZXcgZXh0ZW5kcyBWaWV3IHtcclxuXHRwdWJsaWMgaW5pdCh3b3JsZDogRW5kV29ybGQpOiB2b2lkIHtcclxuXHRcdHRoaXMuaW5pdEJ1dHRvbih3b3JsZCk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgdXBkYXRlKHdvcmxkOiBFbmRXb3JsZCk6IHZvaWQge1xyXG5cdFx0dGhpcy5yZW5kZXJTY2VuZSh3b3JsZCk7XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgcmVuZGVyU2NlbmUod29ybGQ6IEVuZFdvcmxkKTogdm9pZCB7XHJcblx0XHRjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHRoaXMuX2NhbnZhcztcclxuXHRcdGNvbnN0IHsgQnV0dG9uIH0gPSB0aGlzLl9nYW1lSW1hZ2VzO1xyXG5cdFx0Y29uc3QgYldpZHRoID0gKEJ1dHRvbi53aWR0aCAvIElNQUdFX1NJWkVfQ09FRkZJQ0lFTlQpICogMjtcclxuXHRcdGNvbnN0IGJIZWlnaHQgPSAoQnV0dG9uLmhlaWdodCAvIElNQUdFX1NJWkVfQ09FRkZJQ0lFTlQpICogMjtcclxuXHRcdGNvbnN0IGR4ID0gd2lkdGggLyAyIC0gYldpZHRoIC8gMjtcclxuXHRcdGNvbnN0IGR5ID0gaGVpZ2h0IC8gMiAtIGJIZWlnaHQgLyAyO1xyXG5cdFx0dGhpcy5fY3R4LmZpbGxTdHlsZSA9ICcjYTFhMWExJztcclxuXHRcdHRoaXMuX2N0eC5maWxsUmVjdCgwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcclxuXHRcdHRoaXMuX2N0eC5kcmF3SW1hZ2UoQnV0dG9uLCBkeCwgZHksIGJXaWR0aCwgYkhlaWdodCk7XHJcblx0XHR0aGlzLl9jdHguZmlsbFN0eWxlID0gJyNmZmYnO1xyXG5cdFx0dGhpcy5fY3R4LmZvbnQgPSAnMzRweCBNYXJ2aW4nO1xyXG5cdFx0bGV0IHRleHQgPSBg0JfQsNC90L7QstC+YDtcclxuXHRcdHRoaXMuX2N0eC5maWxsVGV4dCh0ZXh0LCBkeCArIGJXaWR0aCAvIDIgLSB0aGlzLl9jdHgubWVhc3VyZVRleHQodGV4dCkud2lkdGggLyAyLCBkeSArIGJIZWlnaHQgLyAyICsgMTApO1xyXG5cdFx0dGhpcy5fY3R4LmZvbnQgPSAnNTRweCBNYXJ2aW4nO1xyXG5cdFx0dGV4dCA9IGDQktGLICR7d29ybGQucmVzdWx0fWA7XHJcblx0XHR0aGlzLl9jdHguZmlsbFRleHQodGV4dCwgd2lkdGggLyAyIC0gdGhpcy5fY3R4Lm1lYXN1cmVUZXh0KHRleHQpLndpZHRoIC8gMiwgZHkgKyBiSGVpZ2h0IC8gMiAtIDEwMCk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGluaXRCdXR0b24od29ybGQ6IEVuZFdvcmxkKSB7XHJcblx0XHRjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHRoaXMuX2NhbnZhcztcclxuXHRcdGNvbnN0IHsgQnV0dG9uIH0gPSB0aGlzLl9nYW1lSW1hZ2VzO1xyXG5cdFx0Y29uc3QgYldpZHRoID0gKEJ1dHRvbi53aWR0aCAvIElNQUdFX1NJWkVfQ09FRkZJQ0lFTlQpICogMjtcclxuXHRcdGNvbnN0IGJIZWlnaHQgPSAoQnV0dG9uLmhlaWdodCAvIElNQUdFX1NJWkVfQ09FRkZJQ0lFTlQpICogMjtcclxuXHRcdGNvbnN0IGR4ID0gd2lkdGggLyAyIC0gYldpZHRoIC8gMjtcclxuXHRcdGNvbnN0IGR5ID0gaGVpZ2h0IC8gMiAtIGJIZWlnaHQgLyAyO1xyXG5cdFx0d29ybGQuYWdhaW5CdXR0b24uaW5pdChcclxuXHRcdFx0eyB4OiBkeCwgeTogZHkgfSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHdpZHRoOiBiV2lkdGgsXHJcblx0XHRcdFx0aGVpZ2h0OiBiSGVpZ2h0LFxyXG5cdFx0XHR9XHJcblx0XHQpO1xyXG5cdH1cclxuXHJcblx0cHJvdGVjdGVkIGNsZWFyU2NyZWVuKCk6IHZvaWQge1xyXG5cdFx0dGhpcy5fY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLl9jYW52YXMud2lkdGgsIHRoaXMuX2NhbnZhcy5oZWlnaHQpO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgVmlldyBmcm9tICcuL3ZpZXcnO1xyXG5pbXBvcnQgeyBJTUFHRV9TSVpFX0NPRUZGSUNJRU5ULCBURUxFUE9SVF9DT1NUIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcclxuaW1wb3J0IFNjb3JlIGZyb20gJy4uL3Njb3JlJztcclxuaW1wb3J0IEdhbWVXb3JsZCBmcm9tICcuLi93b3JsZHMvZ2FtZVdvcmxkJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVWaWV3IGV4dGVuZHMgVmlldyB7XHJcblx0aW5pdCh3b3JsZDogR2FtZVdvcmxkKTogdm9pZCB7XHJcblx0XHR0aGlzLmluaXRHcmlkKHdvcmxkKTtcclxuXHRcdHRoaXMuaW5pdFByb2dyZXNzQmFyKHdvcmxkKTtcclxuXHRcdHRoaXMuaW5pdEJvbnVzKHdvcmxkKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZSh3b3JsZDogR2FtZVdvcmxkKTogdm9pZCB7XHJcblx0XHR0aGlzLmNsZWFyU2NyZWVuKCk7XHJcblx0XHR0aGlzLnJlbmRlclNjZW5lKHdvcmxkKTtcclxuXHR9XHJcblxyXG5cdHJlbmRlclNjZW5lKHdvcmxkOiBHYW1lV29ybGQpIHtcclxuXHRcdHRoaXMucmVuZGVySGVhZGVyKHdvcmxkKTtcclxuXHRcdHRoaXMucmVuZGVyR3JpZCh3b3JsZCk7XHJcblx0XHR0aGlzLnJlbmRlclNjb3JlKHdvcmxkKTtcclxuXHRcdHRoaXMucmVuZGVyUHJvZ3Jlc3NCYXIod29ybGQpO1xyXG5cdFx0dGhpcy5yZW5kZXJCb251cyh3b3JsZCk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIHJlbmRlckhlYWRlcih3b3JsZDogR2FtZVdvcmxkKSB7XHJcblx0XHRjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHRoaXMuX2NhbnZhcztcclxuXHRcdGNvbnN0IHsgSGVhZGVyUGFuZWwsIE1vbmV5QmxvY2sgfSA9IHRoaXMuX2dhbWVJbWFnZXM7XHJcblxyXG5cdFx0dGhpcy5fY3R4LmZpbGxTdHlsZSA9ICcjYTFhMWExJztcclxuXHRcdHRoaXMuX2N0eC5maWxsUmVjdCgwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcclxuXHRcdGNvbnN0IGR4ID0gd2lkdGggLyAyIC0gSGVhZGVyUGFuZWwud2lkdGggLyBJTUFHRV9TSVpFX0NPRUZGSUNJRU5UIC8gMjtcclxuXHRcdHRoaXMuX2N0eC5kcmF3SW1hZ2UoSGVhZGVyUGFuZWwsIGR4LCAwLCBIZWFkZXJQYW5lbC53aWR0aCAvIElNQUdFX1NJWkVfQ09FRkZJQ0lFTlQsIEhlYWRlclBhbmVsLmhlaWdodCAvIElNQUdFX1NJWkVfQ09FRkZJQ0lFTlQpO1xyXG5cdFx0dGhpcy5fY3R4LmRyYXdJbWFnZShNb25leUJsb2NrLCBkeCArIDM1LCBIZWFkZXJQYW5lbC5oZWlnaHQgLyBJTUFHRV9TSVpFX0NPRUZGSUNJRU5UIC8gMTAsIE1vbmV5QmxvY2sud2lkdGggLyBJTUFHRV9TSVpFX0NPRUZGSUNJRU5ULCBNb25leUJsb2NrLmhlaWdodCAvIElNQUdFX1NJWkVfQ09FRkZJQ0lFTlQpO1xyXG5cclxuXHRcdHRoaXMuX2N0eC5maWxsU3R5bGUgPSAnI2ZmZic7XHJcblx0XHR0aGlzLl9jdHguZm9udCA9ICcyMHB4IE1hcnZpbic7XHJcblx0XHR0aGlzLl9jdHguZmlsbFRleHQoJ9C/0YDQvtCz0YDQtdGB0YEnLCB3aWR0aCAvIDIgLSA3MCwgMjMpO1xyXG5cdFx0dGhpcy5fY3R4LmZpbGxUZXh0KGAke3dvcmxkLm1vbmV5fWAsIGR4ICsgTW9uZXlCbG9jay53aWR0aCAvIElNQUdFX1NJWkVfQ09FRkZJQ0lFTlQgLyAxLjMsIEhlYWRlclBhbmVsLmhlaWdodCAvIElNQUdFX1NJWkVfQ09FRkZJQ0lFTlQgLyAyKTtcclxuXHR9XHJcblxyXG5cdHJlbmRlclNjb3JlKHdvcmxkOiBHYW1lV29ybGQpIHtcclxuXHRcdGNvbnN0IHNjb3JlUGFuZWxJbWFnZSA9IHRoaXMuX2dhbWVJbWFnZXMuU2NvcmVQYW5lbDtcclxuXHRcdGNvbnN0IGR4ID0gdGhpcy5fY2FudmFzLndpZHRoIC8gMiArIDEyNTtcclxuXHRcdGNvbnN0IGR5ID0gdGhpcy5fZ2FtZUltYWdlcy5IZWFkZXJQYW5lbC5oZWlnaHQgLyBJTUFHRV9TSVpFX0NPRUZGSUNJRU5UICsgNTQ7XHJcblx0XHRjb25zdCB0ZXh0RHggPSBkeCArIHNjb3JlUGFuZWxJbWFnZS53aWR0aCAvIElNQUdFX1NJWkVfQ09FRkZJQ0lFTlQgLyAyO1xyXG5cdFx0dGhpcy5fY3R4LmRyYXdJbWFnZShzY29yZVBhbmVsSW1hZ2UsIGR4LCBkeSwgc2NvcmVQYW5lbEltYWdlLndpZHRoIC8gSU1BR0VfU0laRV9DT0VGRklDSUVOVCwgc2NvcmVQYW5lbEltYWdlLmhlaWdodCAvIElNQUdFX1NJWkVfQ09FRkZJQ0lFTlQpO1xyXG5cdFx0dGhpcy5yZW5kZXJTY29yZVRleHQod29ybGQuc2NvcmUsIHRleHREeCwgZHksIHNjb3JlUGFuZWxJbWFnZSk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGdldFRleHRTY29yZUR5ID0gKHBhbmVsRHk6IG51bWJlciwgaW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnQsIGs6IG51bWJlcikgPT4gcGFuZWxEeSArIGltYWdlLmhlaWdodCAvIElNQUdFX1NJWkVfQ09FRkZJQ0lFTlQgLyBrO1xyXG5cclxuXHRwcml2YXRlIGdldFRleHRTY29yZUR4ID0gKHRleHREeDogbnVtYmVyLCB0ZXh0OiBzdHJpbmcpID0+IHRleHREeCAtIHRoaXMuX2N0eC5tZWFzdXJlVGV4dCh0ZXh0KS53aWR0aCAvIDI7XHJcblxyXG5cdHByaXZhdGUgcmVuZGVyU2NvcmVUZXh0KHNjb3JlOiBTY29yZSwgdGV4dER4OiBudW1iZXIsIHBhbmVsRHk6IG51bWJlciwgaW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnQpIHtcclxuXHRcdGNvbnN0IHsgcG9pbnRzLCBtb3ZlcyB9ID0gc2NvcmU7XHJcblx0XHR0aGlzLl9jdHguZm9udCA9ICcyMHB4IE1hcnZpbic7XHJcblx0XHRsZXQgdGV4dCA9ICfQstGA0LXQvNGPOic7XHJcblx0XHR0aGlzLl9jdHguZmlsbFRleHQodGV4dCwgdGhpcy5nZXRUZXh0U2NvcmVEeCh0ZXh0RHgsIHRleHQpLCBwYW5lbER5KTtcclxuXHRcdHRoaXMuX2N0eC5mb250ID0gJzM0cHggTWFydmluJztcclxuXHRcdHRleHQgPSBgJHtwb2ludHN9YDtcclxuXHRcdHRoaXMuX2N0eC5maWxsVGV4dCh0ZXh0LCB0aGlzLmdldFRleHRTY29yZUR4KHRleHREeCwgdGV4dCksIHRoaXMuZ2V0VGV4dFNjb3JlRHkocGFuZWxEeSwgaW1hZ2UsIDEuMTYpKTtcclxuXHRcdHRleHQgPSBgJHttb3Zlc31gO1xyXG5cdFx0dGhpcy5fY3R4LmZvbnQgPSAnNTJweCBNYXJ2aW4nO1xyXG5cdFx0dGhpcy5fY3R4LmZpbGxUZXh0KHRleHQsIHRoaXMuZ2V0VGV4dFNjb3JlRHgodGV4dER4LCB0ZXh0KSwgdGhpcy5nZXRUZXh0U2NvcmVEeShwYW5lbER5LCBpbWFnZSwgMi41KSk7XHJcblx0XHR0ZXh0ID0gJ9C+0YfQutC4Oic7XHJcblx0XHR0aGlzLl9jdHguZm9udCA9ICcyMHB4IE1hcnZpbic7XHJcblx0XHR0aGlzLl9jdHguZmlsbFRleHQodGV4dCwgdGhpcy5nZXRUZXh0U2NvcmVEeCh0ZXh0RHgsIHRleHQpLCB0aGlzLmdldFRleHRTY29yZUR5KHBhbmVsRHksIGltYWdlLCAxLjQpKTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgaW5pdEJvbnVzKHdvcmxkOiBHYW1lV29ybGQpIHtcclxuXHRcdGNvbnN0IHsgU2NvcmVQYW5lbCwgSGVhZGVyUGFuZWwsIEJvbnVzIH0gPSB0aGlzLl9nYW1lSW1hZ2VzO1xyXG5cdFx0Y29uc3QgZHggPSB0aGlzLl9jYW52YXMud2lkdGggLyAyICsgMTI1O1xyXG5cdFx0Y29uc3QgZHkgPSBIZWFkZXJQYW5lbC5oZWlnaHQgLyBJTUFHRV9TSVpFX0NPRUZGSUNJRU5UICsgNTQgKyBTY29yZVBhbmVsLmhlaWdodCAvIElNQUdFX1NJWkVfQ09FRkZJQ0lFTlQ7XHJcblx0XHRjb25zdCBzY29yZVRleHREWCA9IGR4ICsgU2NvcmVQYW5lbC53aWR0aCAvIElNQUdFX1NJWkVfQ09FRkZJQ0lFTlQgLyAyO1xyXG5cdFx0d29ybGQuYm9udXMuaW5pdCh7IHg6IHNjb3JlVGV4dERYIC0gQm9udXMud2lkdGggLyAzIC8gMiwgeTogZHkgKyA1MCB9LCB7IHdpZHRoOiBCb251cy53aWR0aCAvIDMsIGhlaWdodDogQm9udXMuaGVpZ2h0IC8gMyB9KTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgcmVuZGVyQm9udXMod29ybGQ6IEdhbWVXb3JsZCkge1xyXG5cdFx0Y29uc3QgeyBTY29yZVBhbmVsLCBIZWFkZXJQYW5lbCwgQm9udXMsIFNlbGVjdGVkQm9udXMgfSA9IHRoaXMuX2dhbWVJbWFnZXM7XHJcblx0XHRjb25zdCBkeCA9IHRoaXMuX2NhbnZhcy53aWR0aCAvIDIgKyAxMjU7XHJcblx0XHRjb25zdCBkeSA9IEhlYWRlclBhbmVsLmhlaWdodCAvIElNQUdFX1NJWkVfQ09FRkZJQ0lFTlQgKyA1NCArIFNjb3JlUGFuZWwuaGVpZ2h0IC8gSU1BR0VfU0laRV9DT0VGRklDSUVOVDtcclxuXHRcdGNvbnN0IHNjb3JlVGV4dERYID0gZHggKyBTY29yZVBhbmVsLndpZHRoIC8gSU1BR0VfU0laRV9DT0VGRklDSUVOVCAvIDI7XHJcblx0XHR0aGlzLl9jdHguZm9udCA9ICcyMHB4IE1hcnZpbic7XHJcblx0XHRsZXQgdGV4dCA9ICfQsdC+0L3Rg9GBJztcclxuXHRcdHRoaXMuX2N0eC5maWxsVGV4dCh0ZXh0LCBzY29yZVRleHREWCAtIHRoaXMuX2N0eC5tZWFzdXJlVGV4dCh0ZXh0KS53aWR0aCAvIDIsIGR5ICsgNTApO1xyXG5cdFx0dGhpcy5fY3R4LmRyYXdJbWFnZSghd29ybGQuYm9udXMuc2VsZWN0ZWQgPyBCb251cyA6IFNlbGVjdGVkQm9udXMsIHNjb3JlVGV4dERYIC0gQm9udXMud2lkdGggLyAzIC8gMiwgZHkgKyA1MCwgQm9udXMud2lkdGggLyAzLCBCb251cy5oZWlnaHQgLyAzKTtcclxuXHRcdHRleHQgPSBgJHtURUxFUE9SVF9DT1NUfWA7XHJcblx0XHR0aGlzLl9jdHguZmlsbFRleHQodGV4dCwgc2NvcmVUZXh0RFggLSB0aGlzLl9jdHgubWVhc3VyZVRleHQodGV4dCkud2lkdGggLyAyIC0gNSwgZHkgKyBCb251cy5oZWlnaHQgLyAzICsgMjApO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSByZW5kZXJHcmlkKHdvcmxkOiBHYW1lV29ybGQpIHtcclxuXHRcdHRoaXMuX2N0eC5kcmF3SW1hZ2UoXHJcblx0XHRcdHRoaXMuX2dhbWVJbWFnZXMuR2FtZVBhbmVsLFxyXG5cdFx0XHR0aGlzLl9jYW52YXMud2lkdGggLyAyIC0gdGhpcy5fZ2FtZUltYWdlcy5HYW1lUGFuZWwud2lkdGggLyBJTUFHRV9TSVpFX0NPRUZGSUNJRU5ULFxyXG5cdFx0XHR0aGlzLl9nYW1lSW1hZ2VzLkhlYWRlclBhbmVsLmhlaWdodCAvIElNQUdFX1NJWkVfQ09FRkZJQ0lFTlQgKyAzMCxcclxuXHRcdFx0dGhpcy5fZ2FtZUltYWdlcy5HYW1lUGFuZWwud2lkdGggLyBJTUFHRV9TSVpFX0NPRUZGSUNJRU5ULFxyXG5cdFx0XHR0aGlzLl9nYW1lSW1hZ2VzLkdhbWVQYW5lbC5oZWlnaHQgLyBJTUFHRV9TSVpFX0NPRUZGSUNJRU5UXHJcblx0XHQpO1xyXG5cdFx0Y29uc3QgeyBuLCBtLCBibG9ja0xheW91dDogbGF5b3V0IH0gPSB3b3JsZC5ncmlkO1xyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpICs9IDEpIHtcclxuXHRcdFx0Zm9yIChsZXQgaiA9IDA7IGogPCBtOyBqICs9IDEpIHtcclxuXHRcdFx0XHRjb25zdCB7IHgsIHkgfSA9IGxheW91dFtpXVtqXS5wb3NpdGlvbjtcclxuXHRcdFx0XHRjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IGxheW91dFtpXVtqXS5zaXplO1xyXG5cdFx0XHRcdHRoaXMuX2N0eC5kcmF3SW1hZ2UodGhpcy5fZ2FtZUltYWdlc1tsYXlvdXRbaV1bal0uZ2V0Q29sb3JJbWFnZU5hbWUoKV0sIHgsIHksIHdpZHRoLCBoZWlnaHQpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIHJlbmRlclByb2dyZXNzQmFyKHdvcmxkOiBHYW1lV29ybGQpIHtcclxuXHRcdGNvbnN0IHsgUHJvZ3Jlc3NCbG9jaywgUHJvZ3Jlc3NTY2FsZSB9ID0gdGhpcy5fZ2FtZUltYWdlcztcclxuXHRcdGNvbnN0IGR4ID0gdGhpcy5fY2FudmFzLndpZHRoIC8gMiAtIFByb2dyZXNzU2NhbGUud2lkdGggLyBJTUFHRV9TSVpFX0NPRUZGSUNJRU5UIC8gMiAtIDI0O1xyXG5cdFx0Y29uc3QgZHcgPSBQcm9ncmVzc0Jsb2NrLndpZHRoIC8gSU1BR0VfU0laRV9DT0VGRklDSUVOVDtcclxuXHRcdHRoaXMuX2N0eC5kcmF3SW1hZ2UoUHJvZ3Jlc3NCbG9jaywgZHgsIDI4LCBkdywgUHJvZ3Jlc3NCbG9jay5oZWlnaHQgLyBJTUFHRV9TSVpFX0NPRUZGSUNJRU5UKTtcclxuXHRcdHRoaXMuX2N0eC5kcmF3SW1hZ2UoUHJvZ3Jlc3NTY2FsZSwgZHgsIDI4LCB3b3JsZC5wcm9ncmVzc0Jhci53aWR0aCwgUHJvZ3Jlc3NTY2FsZS5oZWlnaHQgLyBJTUFHRV9TSVpFX0NPRUZGSUNJRU5UICsgMSk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGluaXRHcmlkKHdvcmxkOiBHYW1lV29ybGQpIHtcclxuXHRcdGNvbnN0IHsgZ3JpZDogZ2FtZUdyaWQgfSA9IHdvcmxkO1xyXG5cdFx0Y29uc3QgeyBuLCBtLCBibG9ja0xheW91dDogbGF5b3V0IH0gPSBnYW1lR3JpZDtcclxuXHRcdGNvbnN0IHN0YXJ0WCA9IHRoaXMuX2NhbnZhcy53aWR0aCAvIDIgLSB0aGlzLl9nYW1lSW1hZ2VzLkdhbWVQYW5lbC53aWR0aCAvIDQgKyA3O1xyXG5cdFx0Y29uc3Qgc3RhcnRZID0gdGhpcy5fZ2FtZUltYWdlcy5IZWFkZXJQYW5lbC5oZWlnaHQgLyA0ICsgMzAgKyA3O1xyXG5cdFx0Y29uc3QgYmxvY2tXaWR0aCA9IHRoaXMuX2dhbWVJbWFnZXNbbGF5b3V0WzBdWzBdLmdldENvbG9ySW1hZ2VOYW1lKCldLndpZHRoIC8gMy4wMztcclxuXHRcdGNvbnN0IGJsb2NrSGVpZ2h0ID0gdGhpcy5fZ2FtZUltYWdlc1tsYXlvdXRbMF1bMF0uZ2V0Q29sb3JJbWFnZU5hbWUoKV0uaGVpZ2h0IC8gMy4wMztcclxuXHRcdGdhbWVHcmlkLmluaXQoXHJcblx0XHRcdHsgeDogc3RhcnRYICsgYmxvY2tXaWR0aCAqIG0gKyA1LCB5OiBzdGFydFkgfSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHdpZHRoOiBibG9ja1dpZHRoICogbSArIDUsXHJcblx0XHRcdFx0aGVpZ2h0OiBibG9ja0hlaWdodCAqIG4sXHJcblx0XHRcdH0sXHJcblx0XHRcdHsgd2lkdGg6IGJsb2NrV2lkdGgsIGhlaWdodDogYmxvY2tIZWlnaHQgfVxyXG5cdFx0KTtcclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSArPSAxKSB7XHJcblx0XHRcdGZvciAobGV0IGogPSAwOyBqIDwgbTsgaiArPSAxKSB7XHJcblx0XHRcdFx0dGhpcy5fY3R4LmRyYXdJbWFnZSh0aGlzLl9nYW1lSW1hZ2VzW2xheW91dFtpXVtqXS5nZXRDb2xvckltYWdlTmFtZSgpXSwgc3RhcnRYICsgYmxvY2tXaWR0aCAqIGosIHN0YXJ0WSArIGJsb2NrSGVpZ2h0ICogaSwgYmxvY2tXaWR0aCwgYmxvY2tIZWlnaHQpO1xyXG5cdFx0XHRcdGxheW91dFtpXVtqXS5pbml0KFxyXG5cdFx0XHRcdFx0eyB4OiBzdGFydFggKyBibG9ja1dpZHRoICogaiwgeTogc3RhcnRZICsgYmxvY2tIZWlnaHQgKiBpIH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdHdpZHRoOiBibG9ja1dpZHRoLFxyXG5cdFx0XHRcdFx0XHRoZWlnaHQ6IGJsb2NrSGVpZ2h0LFxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHByaXZhdGUgaW5pdFByb2dyZXNzQmFyKHdvcmxkOiBHYW1lV29ybGQpIHtcclxuXHRcdGNvbnN0IHByb2dyZXNzQmxvY2sgPSB0aGlzLl9nYW1lSW1hZ2VzLlByb2dyZXNzQmxvY2s7XHJcblx0XHR3b3JsZC5wcm9ncmVzc0Jhci5pbml0KHRoaXMuX2NhbnZhcy53aWR0aCAvIDIgLSBwcm9ncmVzc0Jsb2NrLndpZHRoIC8gSU1BR0VfU0laRV9DT0VGRklDSUVOVCAvIDIgLSAyNCwgcHJvZ3Jlc3NCbG9jay53aWR0aCAvIElNQUdFX1NJWkVfQ09FRkZJQ0lFTlQsIDI4LCB3b3JsZC5zY29yZS50YXJnZXRQb2ludHMpO1xyXG5cdH1cclxuXHJcblx0Y2xlYXJTY3JlZW4oKSB7XHJcblx0XHR0aGlzLl9jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuX2NhbnZhcy53aWR0aCwgdGhpcy5fY2FudmFzLmhlaWdodCk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCBXb3JsZCBmcm9tICcuLi93b3JsZHMvd29ybGQnO1xyXG5pbXBvcnQgeyBHYW1lSW1hZ2VzIH0gZnJvbSAnLi4vdHlwZXMnO1xyXG5cclxuaW50ZXJmYWNlIElWaWV3IHtcclxuXHRpbml0OiAod29ybGQ6IFdvcmxkKSA9PiB2b2lkO1xyXG5cdHVwZGF0ZTogKHdvcmxkOiBXb3JsZCkgPT4gdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgVmlldyBpbXBsZW1lbnRzIElWaWV3IHtcclxuXHRwcm90ZWN0ZWQgX2NhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XHJcblxyXG5cdHByb3RlY3RlZCBfY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XHJcblxyXG5cdHByb3RlY3RlZCBfZ2FtZUltYWdlczogR2FtZUltYWdlcztcclxuXHJcblx0Y29uc3RydWN0b3IoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCwgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIGdhbWVJbWFnZXM6IEdhbWVJbWFnZXMpIHtcclxuXHRcdHRoaXMuX2NhbnZhcyA9IGNhbnZhcztcclxuXHRcdHRoaXMuX2N0eCA9IGN0eDtcclxuXHRcdHRoaXMuX2dhbWVJbWFnZXMgPSBnYW1lSW1hZ2VzO1xyXG5cdH1cclxuXHJcblx0YWJzdHJhY3QgaW5pdCh3b3JsZDogV29ybGQpOiB2b2lkO1xyXG5cclxuXHRhYnN0cmFjdCB1cGRhdGUod29ybGQ6IFdvcmxkKTogdm9pZDtcclxuXHJcblx0cHJvdGVjdGVkIGFic3RyYWN0IHJlbmRlclNjZW5lKHdvcmxkOiBXb3JsZCk6IHZvaWQ7XHJcblxyXG5cdHByb3RlY3RlZCBhYnN0cmFjdCBjbGVhclNjcmVlbigpOiB2b2lkO1xyXG59XHJcbiIsImltcG9ydCBXb3JsZCBmcm9tICcuL3dvcmxkJztcclxuaW1wb3J0IElucHV0IGZyb20gJy4uL2lucHV0JztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9nYW1lT2JqZWN0cy9idXR0b24nO1xyXG5pbXBvcnQgeyBjaGVja0NsaWNrIH0gZnJvbSAnLi4vdXRpbHMnO1xyXG5cclxuZXhwb3J0IGVudW0gUmVzdWx0IHtcclxuXHRXaW4gPSAn0JLRi9C40LPRgNCw0LvQuCcsXHJcblx0TG9zdCA9ICfQn9GA0L7QuNCz0YDQsNC70LgnLFxyXG5cdFVuZGVmaW5lZCA9ICcnLFxyXG59XHJcblxyXG4vLyBlbnVtIFN0YWdlcyB7XHJcbi8vIFx0VmlldyxcclxuLy8gXHRCdXR0b25DbGlja2VkLFxyXG4vLyBcdEFnYWluXHJcbi8vIH1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVuZFdvcmxkIGV4dGVuZHMgV29ybGQge1xyXG5cdHByaXZhdGUgX3Jlc3VsdDogUmVzdWx0ID0gUmVzdWx0LlVuZGVmaW5lZDtcclxuXHJcblx0cHJpdmF0ZSBfYWdhaW5CdXR0b246IEJ1dHRvbiA9IG5ldyBCdXR0b24oKTtcclxuXHJcblx0cHJpdmF0ZSBfZW1pdEVGdW5jOiAoZU5hbWU6IHN0cmluZywgYXJnPzogYW55KSA9PiB2b2lkO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihyZXN1bHQ6IFJlc3VsdCwgZW1pdEVGdW5jOiAoZU5hbWU6IHN0cmluZywgYXJnPzogYW55KSA9PiB2b2lkKSB7XHJcblx0XHRzdXBlcigpO1xyXG5cdFx0dGhpcy5fcmVzdWx0ID0gcmVzdWx0O1xyXG5cdFx0dGhpcy5fZW1pdEVGdW5jID0gZW1pdEVGdW5jO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHVwZGF0ZSh1c2VySW5wdXQ6IElucHV0KTogdm9pZCB7XHJcblx0XHR0aGlzLmhhbmRsZUNsaWNrKHVzZXJJbnB1dCk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGhhbmRsZUNsaWNrKHVzZXJJbnB1dDogSW5wdXQpIHtcclxuXHRcdGNvbnN0IHsgeDogdVgsIHk6IHVZIH0gPSB1c2VySW5wdXQ7XHJcblx0XHRpZiAodVggIT09IDAgJiYgdVkgIT09IDApIHtcclxuXHRcdFx0Y29uc3QgeyB4LCB5LCB3aWR0aCwgaGVpZ2h0IH0gPSB0aGlzLl9hZ2FpbkJ1dHRvbjtcclxuXHRcdFx0aWYgKGNoZWNrQ2xpY2sodVgsIHVZLCB4LCB5LCBoZWlnaHQsIHdpZHRoKSkge1xyXG5cdFx0XHRcdC8vIHRoaXMuX2FnYWluQnV0dG9uLnRvZ2dsZVNlbGVjdCgpO1xyXG5cdFx0XHRcdHRoaXMuX2VtaXRFRnVuYygnbmV3R2FtZScpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc2V0IHJlc3VsdChyZXN1bHQ6IFJlc3VsdCkge1xyXG5cdFx0dGhpcy5fcmVzdWx0ID0gcmVzdWx0O1xyXG5cdH1cclxuXHJcblx0cHVibGljIGdldCByZXN1bHQoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fcmVzdWx0O1xyXG5cdH1cclxuXHJcblx0cHVibGljIGdldCBhZ2FpbkJ1dHRvbigpIHtcclxuXHRcdHJldHVybiB0aGlzLl9hZ2FpbkJ1dHRvbjtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IFdvcmxkIGZyb20gJy4vd29ybGQnO1xyXG5pbXBvcnQgSW5wdXQgZnJvbSAnLi4vaW5wdXQnO1xyXG5pbXBvcnQgU2NvcmUgZnJvbSAnLi4vc2NvcmUnO1xyXG5pbXBvcnQgR3JpZCBmcm9tICcuLi9nYW1lT2JqZWN0cy9ncmlkJztcclxuaW1wb3J0IFByb2dyZXNzQmFyIGZyb20gJy4uL3Byb2dyZXNzQmFyJztcclxuaW1wb3J0IHsgRGlyZWN0aW9uLCBHcmlkSW5mbywgUG9zaXRpb25MaXN0LCBSZXNpemVUeXBlIH0gZnJvbSAnLi4vdHlwZXMnO1xyXG5pbXBvcnQgQmxvY2sgZnJvbSAnLi4vZ2FtZU9iamVjdHMvYmxvY2snO1xyXG5pbXBvcnQgeyBjaGVja0NsaWNrLCBjaG9vc2VDb2xvciwgY29udGFpbnMsIGdldFJhbmRvbVZhbHVlIH0gZnJvbSAnLi4vdXRpbHMnO1xyXG5pbXBvcnQgeyBSZXN1bHQgfSBmcm9tICcuL2VuZFdvcmxkJztcclxuaW1wb3J0IEJvbnVzIGZyb20gJy4uL2dhbWVPYmplY3RzL0JvbnVzJztcclxuaW1wb3J0IHsgVEVMRVBPUlRfQ09TVCB9IGZyb20gJy4uL2NvbnN0YW50cyc7XHJcblxyXG5lbnVtIFN0YWdlIHtcclxuXHRTZWxlY3RpbmcsXHJcblx0U2hhZGluZyxcclxuXHREZWxldGluZyxcclxuXHRNb3ZpbmcsXHJcblx0UmVjb3ZlcnksXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVXb3JsZCBleHRlbmRzIFdvcmxkIHtcclxuXHRwcml2YXRlIGlzTGFzdE1vdmUgPSBmYWxzZTtcclxuXHJcblx0cHJpdmF0ZSBfc2NvcmU6IFNjb3JlO1xyXG5cclxuXHRwcml2YXRlIF9ncmlkOiBHcmlkO1xyXG5cclxuXHRwcml2YXRlIF9wcm9ncmVzc0JhcjogUHJvZ3Jlc3NCYXI7XHJcblxyXG5cdHByaXZhdGUgX2JvbnVzOiBCb251cztcclxuXHJcblx0cHJpdmF0ZSBfc3RhZ2U6IFN0YWdlO1xyXG5cclxuXHRwcml2YXRlIF90ZW1wTGlzdDogUG9zaXRpb25MaXN0ID0gW107XHJcblxyXG5cdHByaXZhdGUgX2xpc3Q6IFBvc2l0aW9uTGlzdCA9IFtdO1xyXG5cclxuXHRwcml2YXRlIF9lbWl0RUZ1bmM6IChlTmFtZTogc3RyaW5nLCBhcmc6IGFueSkgPT4gdm9pZDtcclxuXHJcblx0cHJpdmF0ZSBfbW9uZXkgPSAwO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihncmlkSW5mbzogR3JpZEluZm8sIHg6IG51bWJlciwgeTogbnVtYmVyLCBtb25leTogbnVtYmVyLCBlbWl0RUZ1bmM6IChlTmFtZTogc3RyaW5nLCBhcmc6IGFueSkgPT4gdm9pZCkge1xyXG5cdFx0c3VwZXIoKTtcclxuXHRcdHRoaXMuX2dyaWQgPSBuZXcgR3JpZChncmlkSW5mbywgZW1pdEVGdW5jKTtcclxuXHRcdHRoaXMuX3Byb2dyZXNzQmFyID0gbmV3IFByb2dyZXNzQmFyKCk7XHJcblx0XHR0aGlzLl9ib251cyA9IG5ldyBCb251cygpO1xyXG5cdFx0dGhpcy5fc2NvcmUgPSBuZXcgU2NvcmUoeCwgeSk7XHJcblx0XHR0aGlzLl9zdGFnZSA9IFN0YWdlLlNlbGVjdGluZztcclxuXHRcdHRoaXMuX21vbmV5ID0gbW9uZXk7XHJcblx0XHR0aGlzLl9lbWl0RUZ1bmMgPSBlbWl0RUZ1bmM7XHJcblx0fVxyXG5cclxuXHR1cGRhdGUodXNlcklucHV0OiBJbnB1dCk6IHZvaWQge1xyXG5cdFx0c3dpdGNoICh0aGlzLl9zdGFnZSkge1xyXG5cdFx0XHRjYXNlIFN0YWdlLlNlbGVjdGluZzpcclxuXHRcdFx0XHR0aGlzLmhhbmRsZVNlbGVjdCh1c2VySW5wdXQpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIFN0YWdlLlNoYWRpbmc6XHJcblx0XHRcdFx0dGhpcy5oYW5kbGVTaGFkaW5nKCk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgU3RhZ2UuRGVsZXRpbmc6XHJcblx0XHRcdFx0dGhpcy5oYW5kbGVEZWxldGluZygpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIFN0YWdlLk1vdmluZzpcclxuXHRcdFx0XHR0aGlzLmhhbmRsZU1vdmluZygpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIFN0YWdlLlJlY292ZXJ5OlxyXG5cdFx0XHRcdHRoaXMuaGFuZGxlUmVjb3ZlcnkoKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ1Vua25vd24gc3RhZ2UnKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHByaXZhdGUgaGFuZGxlU2VsZWN0KHVzZXJJbnB1dDogSW5wdXQpIHtcclxuXHRcdGNvbnN0IHsgeDogdVgsIHk6IHVZIH0gPSB1c2VySW5wdXQ7XHJcblx0XHRpZiAodVggIT09IDAgJiYgdVkgIT09IDApIHtcclxuXHRcdFx0dGhpcy5oYW5kbGVTZWxlY3RHcmlkKHVzZXJJbnB1dCk7XHJcblx0XHRcdHRoaXMuaGFuZGxlU2VsZWN0Qm9udXModXNlcklucHV0KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHByaXZhdGUgaGFuZGxlU2VsZWN0R3JpZCh1c2VySW5wdXQ6IElucHV0KSB7XHJcblx0XHRjb25zdCB7IHg6IHVYLCB5OiB1WSB9ID0gdXNlcklucHV0O1xyXG5cdFx0Y29uc3QgeyB4LCB5LCBuLCBtLCB3aWR0aCwgaGVpZ2h0IH0gPSB0aGlzLl9ncmlkO1xyXG5cdFx0aWYgKHVZID4geSAmJiB1WSA8IHkgKyBoZWlnaHQgJiYgdVggPCB4ICYmIHVYID4geCAtIHdpZHRoKSB7XHJcblx0XHRcdGNvbnN0IHJvdyA9IE1hdGguZmxvb3IoKHVZIC0geSkgLyAoaGVpZ2h0IC8gbikpO1xyXG5cdFx0XHRjb25zdCBjb2wgPSBNYXRoLmZsb29yKCh1WCAtICh4IC0gd2lkdGgpKSAvICh3aWR0aCAvIG0pKTtcclxuXHRcdFx0Y29uc3QgbGF5b3V0ID0gdGhpcy5fZ3JpZC5ibG9ja0xheW91dDtcclxuXHRcdFx0bGF5b3V0W3Jvd11bY29sXS50b2dnbGVTZWxlY3QoKTtcclxuXHRcdFx0dGhpcy5fdGVtcExpc3QucHVzaChbcm93LCBjb2xdKTtcclxuXHRcdFx0dGhpcy5fbGlzdC5wdXNoKFtyb3csIGNvbF0pO1xyXG5cdFx0XHRpZiAodGhpcy5fYm9udXMuc2VsZWN0ZWQpIHtcclxuXHRcdFx0XHRpZiAodGhpcy5fbGlzdC5sZW5ndGggPT09IDIpIHtcclxuXHRcdFx0XHRcdGlmICh0aGlzLl9saXN0WzBdWzBdID09PSB0aGlzLl9saXN0WzFdWzBdICYmIHRoaXMuX2xpc3RbMF1bMV0gPT09IHRoaXMuX2xpc3RbMV1bMV0pIHtcclxuXHRcdFx0XHRcdFx0aWYgKGxheW91dFt0aGlzLl9saXN0WzBdWzBdXVt0aGlzLl9saXN0WzBdWzFdXS5pc1NlbGVjdGVkKCkpIGxheW91dFt0aGlzLl9saXN0WzBdWzBdXVt0aGlzLl9saXN0WzBdWzFdXS50b2dnbGVTZWxlY3QoKTtcclxuXHRcdFx0XHRcdFx0dGhpcy5fbGlzdCA9IFtdO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5fc3RhZ2UgKz0gMjtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gZWxzZSB0aGlzLl9zdGFnZSArPSAxO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBoYW5kbGVTZWxlY3RCb251cyh1c2VySW5wdXQ6IElucHV0KSB7XHJcblx0XHRjb25zdCB7IHg6IHVYLCB5OiB1WSB9ID0gdXNlcklucHV0O1xyXG5cdFx0Y29uc3QgeyB4LCB5LCB3aWR0aCwgaGVpZ2h0IH0gPSB0aGlzLl9ib251cztcclxuXHRcdGlmIChjaGVja0NsaWNrKHVYLCB1WSwgeCwgeSwgaGVpZ2h0LCB3aWR0aCkpIHtcclxuXHRcdFx0aWYgKHRoaXMuX21vbmV5ID49IFRFTEVQT1JUX0NPU1QgJiYgIXRoaXMuYm9udXMuc2VsZWN0ZWQpIHtcclxuXHRcdFx0XHR0aGlzLmJvbnVzLnRvZ2dsZVNlbGVjdCgpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGhhbmRsZVNoYWRpbmcoKSB7XHJcblx0XHRpZiAodGhpcy5fdGVtcExpc3QubGVuZ3RoID09PSAwKSB7XHJcblx0XHRcdGlmICh0aGlzLl9saXN0Lmxlbmd0aCA9PT0gMSkge1xyXG5cdFx0XHRcdHRoaXMuX2dyaWQuYmxvY2tMYXlvdXRbdGhpcy5fbGlzdFswXVswXV1bdGhpcy5fbGlzdFswXVsxXV0udG9nZ2xlU2VsZWN0KCk7XHJcblx0XHRcdFx0dGhpcy5fc3RhZ2UgLT0gMTtcclxuXHRcdFx0XHR0aGlzLl9saXN0ID0gW107XHJcblx0XHRcdFx0dGhpcy5fdGVtcExpc3QgPSBbXTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR0aGlzLl9zY29yZS5kZWNyZWFzZU1vdmVzTnVtKCk7XHJcblx0XHRcdFx0Y29uc3QgeyBwb2ludHMsIHRhcmdldFBvaW50cywgbW92ZXMsIHRhcmdldE1vdmVzIH0gPSB0aGlzLl9zY29yZTtcclxuXHRcdFx0XHRpZiAobW92ZXMgPD0gdGFyZ2V0TW92ZXMgJiYgcG9pbnRzIDwgdGFyZ2V0UG9pbnRzKSB0aGlzLmlzTGFzdE1vdmUgPSB0cnVlO1xyXG5cdFx0XHRcdHRoaXMuX3RlbXBMaXN0ID0gdGhpcy5fbGlzdDtcclxuXHRcdFx0XHR0aGlzLl9zdGFnZSArPSAxO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdGxldCBwb3NpdGlvbkxpc3Q6IFBvc2l0aW9uTGlzdCA9IFtdO1xyXG5cdFx0Y29uc3QgeyBuLCBtIH0gPSB0aGlzLmdyaWQ7XHJcblx0XHR0aGlzLl90ZW1wTGlzdC5mb3JFYWNoKChbcm93LCBjb2xdKSA9PiB7XHJcblx0XHRcdHBvc2l0aW9uTGlzdCA9IFsuLi5wb3NpdGlvbkxpc3QsIC4uLkdhbWVXb3JsZC5zZWxlY3ROZWlnaGJvcnMocm93LCBjb2wsIHRoaXMuX2dyaWQuYmxvY2tMYXlvdXQsIG4sIG0pXTtcclxuXHRcdH0pO1xyXG5cdFx0dGhpcy5fbGlzdCA9IFsuLi50aGlzLl9saXN0LCAuLi5wb3NpdGlvbkxpc3RdO1xyXG5cdFx0dGhpcy5fdGVtcExpc3QgPSBwb3NpdGlvbkxpc3Q7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIHN0YXRpYyBzZWxlY3ROZWlnaGJvcnMocm93OiBudW1iZXIsIGNvbDogbnVtYmVyLCBkZXNrOiBCbG9ja1tdW10sIGdyaWROOiBudW1iZXIsIGdyaWRNOiBudW1iZXIpOiBQb3NpdGlvbkxpc3Qge1xyXG5cdFx0Y29uc3QgdGVtcExpc3Q6IFBvc2l0aW9uTGlzdCA9IFtdO1xyXG5cdFx0T2JqZWN0LnZhbHVlcyhEaXJlY3Rpb24pLmZvckVhY2goZGlyZWN0aW9uID0+IHtcclxuXHRcdFx0Y29uc3QgZGVza1Bvc2l0aW9uSXRlbSA9IEdhbWVXb3JsZC5maW5kTmVpZ2hib3IoZGlyZWN0aW9uLCByb3csIGNvbCwgZGVzaywgZ3JpZE4sIGdyaWRNLCB0cnVlKTtcclxuXHRcdFx0aWYgKHR5cGVvZiBkZXNrUG9zaXRpb25JdGVtWzBdICE9PSAndW5kZWZpbmVkJykge1xyXG5cdFx0XHRcdHRlbXBMaXN0LnB1c2goZGVza1Bvc2l0aW9uSXRlbSBhcyBbbnVtYmVyLCBudW1iZXJdKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRyZXR1cm4gdGVtcExpc3Q7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIHN0YXRpYyBmaW5kTmVpZ2hib3IoZGlyZWN0aW9uOiBEaXJlY3Rpb24gfCBzdHJpbmcsIHJvdzogbnVtYmVyLCBjb2w6IG51bWJlciwgbGF5b3V0OiBCbG9ja1tdW10sIGdyaWROOiBudW1iZXIsIGdyaWRNOiBudW1iZXIsIHNlbGVjdCA9IGZhbHNlKTogW251bWJlciwgbnVtYmVyXSB8IFt1bmRlZmluZWQsIHVuZGVmaW5lZF0ge1xyXG5cdFx0Y29uc3QgeyBVcCwgUmlnaHQsIExlZnQsIERvd24gfSA9IERpcmVjdGlvbjtcclxuXHRcdHN3aXRjaCAoZGlyZWN0aW9uKSB7XHJcblx0XHRcdGNhc2UgVXA6XHJcblx0XHRcdFx0cmV0dXJuIEdhbWVXb3JsZC5jaGVja1VwKGxheW91dCwgcm93LCBjb2wsIHNlbGVjdCk7XHJcblx0XHRcdGNhc2UgUmlnaHQ6XHJcblx0XHRcdFx0cmV0dXJuIEdhbWVXb3JsZC5jaGVja1JpZ2h0KGxheW91dCwgcm93LCBjb2wsIHNlbGVjdCwgZ3JpZE0pO1xyXG5cdFx0XHRjYXNlIExlZnQ6XHJcblx0XHRcdFx0cmV0dXJuIEdhbWVXb3JsZC5jaGVja0xlZnQobGF5b3V0LCByb3csIGNvbCwgc2VsZWN0KTtcclxuXHRcdFx0Y2FzZSBEb3duOlxyXG5cdFx0XHRcdHJldHVybiBHYW1lV29ybGQuY2hlY2tEb3duKGxheW91dCwgcm93LCBjb2wsIHNlbGVjdCwgZ3JpZE4pO1xyXG5cdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdHJldHVybiBbdW5kZWZpbmVkLCB1bmRlZmluZWRdO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBzdGF0aWMgY2hlY2tVcChsYXlvdXQ6IEJsb2NrW11bXSwgcm93OiBudW1iZXIsIGNvbDogbnVtYmVyLCBzZWxlY3Q6IGJvb2xlYW4pOiBbbnVtYmVyLCBudW1iZXJdIHwgW3VuZGVmaW5lZCwgdW5kZWZpbmVkXSB7XHJcblx0XHRpZiAocm93ICE9PSAwICYmIGxheW91dFtyb3ddW2NvbF0uY29sb3IgPT09IGxheW91dFtyb3cgLSAxXVtjb2xdLmNvbG9yICYmICFsYXlvdXRbcm93IC0gMV1bY29sXS5pc1NlbGVjdGVkKCkpIHtcclxuXHRcdFx0aWYgKHNlbGVjdCkgbGF5b3V0W3JvdyAtIDFdW2NvbF0udG9nZ2xlU2VsZWN0KCk7XHJcblx0XHRcdHJldHVybiBbcm93IC0gMSwgY29sXTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBbdW5kZWZpbmVkLCB1bmRlZmluZWRdO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBzdGF0aWMgY2hlY2tSaWdodChsYXlvdXQ6IEJsb2NrW11bXSwgcm93OiBudW1iZXIsIGNvbDogbnVtYmVyLCBzZWxlY3Q6IGJvb2xlYW4sIG06IG51bWJlcik6IFtudW1iZXIsIG51bWJlcl0gfCBbdW5kZWZpbmVkLCB1bmRlZmluZWRdIHtcclxuXHRcdGlmIChjb2wgIT09IG0gLSAxICYmIGxheW91dFtyb3ddW2NvbF0uY29sb3IgPT09IGxheW91dFtyb3ddW2NvbCArIDFdLmNvbG9yICYmICFsYXlvdXRbcm93XVtjb2wgKyAxXS5pc1NlbGVjdGVkKCkpIHtcclxuXHRcdFx0aWYgKHNlbGVjdCkgbGF5b3V0W3Jvd11bY29sICsgMV0udG9nZ2xlU2VsZWN0KCk7XHJcblx0XHRcdHJldHVybiBbcm93LCBjb2wgKyAxXTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBbdW5kZWZpbmVkLCB1bmRlZmluZWRdO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBzdGF0aWMgY2hlY2tMZWZ0KGxheW91dDogQmxvY2tbXVtdLCByb3c6IG51bWJlciwgY29sOiBudW1iZXIsIHNlbGVjdDogYm9vbGVhbik6IFtudW1iZXIsIG51bWJlcl0gfCBbdW5kZWZpbmVkLCB1bmRlZmluZWRdIHtcclxuXHRcdGlmIChjb2wgIT09IDAgJiYgbGF5b3V0W3Jvd11bY29sXS5jb2xvciA9PT0gbGF5b3V0W3Jvd11bY29sIC0gMV0uY29sb3IgJiYgIWxheW91dFtyb3ddW2NvbCAtIDFdLmlzU2VsZWN0ZWQoKSkge1xyXG5cdFx0XHRpZiAoc2VsZWN0KSBsYXlvdXRbcm93XVtjb2wgLSAxXS50b2dnbGVTZWxlY3QoKTtcclxuXHRcdFx0cmV0dXJuIFtyb3csIGNvbCAtIDFdO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIFt1bmRlZmluZWQsIHVuZGVmaW5lZF07XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIHN0YXRpYyBjaGVja0Rvd24obGF5b3V0OiBCbG9ja1tdW10sIHJvdzogbnVtYmVyLCBjb2w6IG51bWJlciwgc2VsZWN0OiBib29sZWFuLCBuOiBudW1iZXIpOiBbbnVtYmVyLCBudW1iZXJdIHwgW3VuZGVmaW5lZCwgdW5kZWZpbmVkXSB7XHJcblx0XHRpZiAocm93ICE9PSBuIC0gMSAmJiBsYXlvdXRbcm93XVtjb2xdLmNvbG9yID09PSBsYXlvdXRbcm93ICsgMV1bY29sXS5jb2xvciAmJiAhbGF5b3V0W3JvdyArIDFdW2NvbF0uaXNTZWxlY3RlZCgpKSB7XHJcblx0XHRcdGlmIChzZWxlY3QpIGxheW91dFtyb3cgKyAxXVtjb2xdLnRvZ2dsZVNlbGVjdCgpO1xyXG5cdFx0XHRyZXR1cm4gW3JvdyArIDEsIGNvbF07XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gW3VuZGVmaW5lZCwgdW5kZWZpbmVkXTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgaGFuZGxlRGVsZXRpbmcoKSB7XHJcblx0XHRpZiAodGhpcy5fdGVtcExpc3QubGVuZ3RoID09PSAwKSB7XHJcblx0XHRcdGlmICh0aGlzLmJvbnVzLnNlbGVjdGVkKSB0aGlzLl9zdGFnZSArPSAyO1xyXG5cdFx0XHRlbHNlIHRoaXMuX3N0YWdlICs9IDE7XHJcblx0XHRcdHRoaXMuX2xpc3Quc29ydCgoW24xXSwgW24yXSkgPT4gKG4xID4gbjIgPyAxIDogLTEpKTtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0Y29uc3QgW3JvdywgY29sXSA9IHRoaXMuX3RlbXBMaXN0WzBdO1xyXG5cdFx0Y29uc3QgZGVzayA9IHRoaXMuX2dyaWQuYmxvY2tMYXlvdXQ7XHJcblx0XHRpZiAoZGVza1tyb3ddW2NvbF0uaGVpZ2h0ID09PSAwICYmIGRlc2tbcm93XVtjb2xdLndpZHRoID09PSAwKSB7XHJcblx0XHRcdGlmICghdGhpcy5ib251cy5zZWxlY3RlZCkge1xyXG5cdFx0XHRcdHRoaXMuX3Njb3JlLmluY3JlYXNlUG9pbnRzKCk7XHJcblx0XHRcdFx0dGhpcy5fcHJvZ3Jlc3NCYXIubW92ZSgpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGNvbnN0IHsgcG9pbnRzLCB0YXJnZXRQb2ludHMgfSA9IHRoaXMuX3Njb3JlO1xyXG5cdFx0XHRpZiAocG9pbnRzID49IHRhcmdldFBvaW50cykgdGhpcy5fZW1pdEVGdW5jKCdlbmRHYW1lJywgUmVzdWx0Lldpbik7XHJcblx0XHRcdGlmICh0aGlzLmlzTGFzdE1vdmUpIHRoaXMuX2VtaXRFRnVuYygnZW5kR2FtZScsIFJlc3VsdC5Mb3N0KTtcclxuXHRcdFx0dGhpcy5fdGVtcExpc3QgPSB0aGlzLl90ZW1wTGlzdC5zbGljZSgxKTtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0ZGVza1tyb3ddW2NvbF0ucmVzaXplKFJlc2l6ZVR5cGUuU2hyaW5rKTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgaGFuZGxlTW92aW5nKCkge1xyXG5cdFx0aWYgKHRoaXMuX3RlbXBMaXN0Lmxlbmd0aCA+PSB0aGlzLl9saXN0Lmxlbmd0aCkge1xyXG5cdFx0XHR0aGlzLl9zdGFnZSArPSAxO1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHRjb25zdCBsYXlvdXQgPSB0aGlzLl9ncmlkLmJsb2NrTGF5b3V0O1xyXG5cdFx0bGV0IHJvd3MgPSBbXTtcclxuXHRcdGNvbnN0IHZlbG9jaXR5ID0gMTtcclxuXHRcdGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IHRoaXMuX2dyaWQubTsgY29sICs9IDEpIHtcclxuXHRcdFx0cm93cyA9IHRoaXMuX2xpc3QuZmlsdGVyKChbciwgY10pID0+IGMgPT09IGNvbCkubWFwKChbcl0pID0+IHIpO1xyXG5cdFx0XHRmb3IgKGxldCByb3dOdW0gPSByb3dzLmxlbmd0aCAtIDE7IHJvd051bSA+PSAwOyByb3dOdW0gLT0gMSkge1xyXG5cdFx0XHRcdGlmIChyb3dzW3Jvd051bV0gLSAxIDwgMCkge1xyXG5cdFx0XHRcdFx0aWYgKCFjb250YWlucyh0aGlzLl90ZW1wTGlzdCwgW3Jvd3Nbcm93TnVtXSwgY29sXSkpIHRoaXMuX3RlbXBMaXN0LnB1c2goW3Jvd3Nbcm93TnVtXSwgY29sXSk7XHJcblx0XHRcdFx0XHRpZiAodGhpcy5fdGVtcExpc3QubGVuZ3RoID49IHRoaXMuX2xpc3QubGVuZ3RoKSBicmVhaztcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0Zm9yIChsZXQgcm93ID0gcm93c1tyb3dOdW1dIC0gMTsgcm93ID49IDA7IHJvdyAtPSAxKSB7XHJcblx0XHRcdFx0XHRcdGxheW91dFtyb3ddW2NvbF0ubW92ZShEaXJlY3Rpb24uRG93biwgdmVsb2NpdHkpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0aWYgKGxheW91dFtyb3dzW3Jvd051bV0gLSAxXVtjb2xdLnkgPj0gbGF5b3V0W3Jvd3Nbcm93TnVtXV1bY29sXS55KSB7XHJcblx0XHRcdFx0XHRcdGlmICghY29udGFpbnModGhpcy5fdGVtcExpc3QsIFtyb3dzW3Jvd051bV0sIGNvbF0pKSB0aGlzLl90ZW1wTGlzdC5wdXNoKFtyb3dzW3Jvd051bV0sIGNvbF0pO1xyXG5cdFx0XHRcdFx0XHRpZiAodGhpcy5fdGVtcExpc3QubGVuZ3RoID49IHRoaXMuX2xpc3QubGVuZ3RoKSBicmVhaztcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKHRoaXMuX3RlbXBMaXN0Lmxlbmd0aCA+PSB0aGlzLl9saXN0Lmxlbmd0aCkgYnJlYWs7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGhhbmRsZVJlY292ZXJ5KCkge1xyXG5cdFx0aWYgKHRoaXMuYm9udXMuc2VsZWN0ZWQpIHtcclxuXHRcdFx0bGV0IHRlbXAgPSAnJztcclxuXHRcdFx0Y29uc3QgW1tuMSwgbTFdLCBbbjIsIG0yXV0gPSB0aGlzLl9saXN0O1xyXG5cdFx0XHRjb25zdCBibG9jazEgPSB0aGlzLl9ncmlkLmJsb2NrTGF5b3V0W24xXVttMV07XHJcblx0XHRcdGNvbnN0IGJsb2NrMiA9IHRoaXMuX2dyaWQuYmxvY2tMYXlvdXRbbjJdW20yXTtcclxuXHRcdFx0Ly8gW2Jsb2NrMS5jb2xvciwgYmxvY2syLmNvbG9yXSA9IFtibG9jazIuY29sb3IsIGJsb2NrMS5jb2xvcl07XHJcblx0XHRcdHRlbXAgPSBibG9jazEuY29sb3I7XHJcblx0XHRcdGJsb2NrMS5jb2xvciA9IGJsb2NrMi5jb2xvcjtcclxuXHRcdFx0YmxvY2sxLm9sZENvbG9yID0gYmxvY2syLmNvbG9yO1xyXG5cdFx0XHRibG9jazIuY29sb3IgPSB0ZW1wO1xyXG5cdFx0XHRibG9jazIub2xkQ29sb3IgPSB0ZW1wO1xyXG5cdFx0XHRibG9jazEudG9nZ2xlU2VsZWN0KCk7XHJcblx0XHRcdGJsb2NrMi50b2dnbGVTZWxlY3QoKTtcclxuXHRcdFx0YmxvY2sxLnNpemUgPSB0aGlzLmdyaWQuaXRlbVNpemU7XHJcblx0XHRcdGJsb2NrMi5zaXplID0gdGhpcy5ncmlkLml0ZW1TaXplO1xyXG5cdFx0XHR0aGlzLmJvbnVzLnRvZ2dsZVNlbGVjdCgpO1xyXG5cdFx0XHR0aGlzLl9tb25leSAtPSBURUxFUE9SVF9DT1NUO1xyXG5cdFx0XHR0aGlzLl9saXN0ID0gW107XHJcblx0XHRcdHRoaXMuX3RlbXBMaXN0ID0gW107XHJcblx0XHRcdHRoaXMuX3N0YWdlID0gU3RhZ2UuU2VsZWN0aW5nO1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHRjb25zdCB7IGJsb2NrTGF5b3V0OiBsYXlvdXQsIG4sIG0gfSA9IHRoaXMuX2dyaWQ7XHJcblx0XHRmb3IgKGxldCBpID0gbiAtIDE7IGkgPj0gMDsgaSAtPSAxKSB7XHJcblx0XHRcdGZvciAobGV0IGogPSBtIC0gMTsgaiA+PSAwOyBqIC09IDEpIHtcclxuXHRcdFx0XHRpZiAobGF5b3V0W2ldW2pdLnkgIT09IGxheW91dFtpXVtqXS5vbGRZIHx8IGxheW91dFtpXVtqXS5pc1NlbGVjdGVkKCkpIHtcclxuXHRcdFx0XHRcdGxldCBuZXdSb3cgPSAtMTAwMDtcclxuXHRcdFx0XHRcdGlmIChsYXlvdXRbaV1bal0uaXNTZWxlY3RlZCgpKSB7XHJcblx0XHRcdFx0XHRcdGxheW91dFtpXVtqXS50b2dnbGVTZWxlY3QoKTtcclxuXHRcdFx0XHRcdFx0Zm9yIChsZXQgciA9IGkgLSAxOyByID49IDA7IHIgLT0gMSkge1xyXG5cdFx0XHRcdFx0XHRcdGlmIChsYXlvdXRbaV1bal0ub2xkWSAtIGxheW91dFtyXVtqXS55IDwgbGF5b3V0W2ldW2pdLmhlaWdodCAmJiBsYXlvdXRbcl1bal0ud2lkdGggIT09IDAgJiYgIWxheW91dFtyXVtqXS5pc1NlbGVjdGVkKCkgJiYgIWxheW91dFtyXVtqXS5pc09jY3VwaWVkKCkpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGxheW91dFtyXVtqXS5vY2N1cGllZCA9IHRydWU7XHJcblx0XHRcdFx0XHRcdFx0XHRuZXdSb3cgPSByO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0bmV3Um93ID0gaSAtIE1hdGguZmxvb3IoKGxheW91dFtpXVtqXS55IC0gbGF5b3V0W2ldW2pdLm9sZFkpIC8gdGhpcy5ncmlkLml0ZW1IZWlnaHQpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0aWYgKG5ld1JvdyA+PSAwKSB7XHJcblx0XHRcdFx0XHRcdGxheW91dFtpXVtqXS5jb2xvciA9IGxheW91dFtuZXdSb3ddW2pdLm9sZENvbG9yO1xyXG5cdFx0XHRcdFx0XHRsYXlvdXRbaV1bal0ub2xkQ29sb3IgPSBsYXlvdXRbbmV3Um93XVtqXS5vbGRDb2xvcjtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdGNvbnN0IHJhbmRvbUNvbG9yID0gY2hvb3NlQ29sb3IoZ2V0UmFuZG9tVmFsdWUodGhpcy5fZ3JpZC5ncmlkSW5mby5ibG9ja0NvbG9ycykpO1xyXG5cdFx0XHRcdFx0XHRsYXlvdXRbaV1bal0uY29sb3IgPSByYW5kb21Db2xvcjtcclxuXHRcdFx0XHRcdFx0bGF5b3V0W2ldW2pdLm9sZENvbG9yID0gcmFuZG9tQ29sb3I7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRsYXlvdXRbaV1bal0uc2l6ZSA9IHRoaXMuZ3JpZC5pdGVtU2l6ZTtcclxuXHRcdFx0XHRcdGxheW91dFtpXVtqXS5wb3NpdGlvbiA9IHsgeDogbGF5b3V0W2ldW2pdLngsIHk6IGxheW91dFtpXVtqXS5vbGRZIH07XHJcblx0XHRcdFx0XHRpZiAobGF5b3V0W2ldW2pdLmlzT2NjdXBpZWQoKSkgbGF5b3V0W2ldW2pdLm9jY3VwaWVkID0gZmFsc2U7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHR0aGlzLl9saXN0ID0gW107XHJcblx0XHR0aGlzLl90ZW1wTGlzdCA9IFtdO1xyXG5cdFx0dGhpcy5fc3RhZ2UgPSBTdGFnZS5TZWxlY3Rpbmc7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZ2V0IGdyaWQoKTogR3JpZCB7XHJcblx0XHRyZXR1cm4gdGhpcy5fZ3JpZDtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzZXQgZ3JpZChncmlkOiBHcmlkKSB7XHJcblx0XHR0aGlzLl9ncmlkID0gZ3JpZDtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBnZXQgc2NvcmUoKTogU2NvcmUge1xyXG5cdFx0cmV0dXJuIHRoaXMuX3Njb3JlO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHNldCBzY29yZShzY29yZTogU2NvcmUpIHtcclxuXHRcdHRoaXMuX3Njb3JlID0gc2NvcmU7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZ2V0IHByb2dyZXNzQmFyKCk6IFByb2dyZXNzQmFyIHtcclxuXHRcdHJldHVybiB0aGlzLl9wcm9ncmVzc0JhcjtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzZXQgcHJvZ3Jlc3NCYXIocHJCYXI6IFByb2dyZXNzQmFyKSB7XHJcblx0XHR0aGlzLl9wcm9ncmVzc0JhciA9IHByQmFyO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGdldCBib251cygpOiBCb251cyB7XHJcblx0XHRyZXR1cm4gdGhpcy5fYm9udXM7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZ2V0IG1vbmV5KCk6IG51bWJlciB7XHJcblx0XHRyZXR1cm4gdGhpcy5fbW9uZXk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCBJbnB1dCBmcm9tICcuLi9pbnB1dCc7XHJcblxyXG5pbnRlcmZhY2UgSVdvcmxkIHtcclxuXHR1cGRhdGU6ICh1c2VySW5wdXQ6IElucHV0KSA9PiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBXb3JsZCBpbXBsZW1lbnRzIElXb3JsZCB7XHJcblx0YWJzdHJhY3QgdXBkYXRlKHVzZXJJbnB1dDogSW5wdXQpOiB2b2lkO1xyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCAnLi9zdHlsZXMvc3R5bGUuc2Nzcyc7XHJcbmltcG9ydCBHYW1lIGZyb20gJy4vdHMvZ2FtZSc7XHJcblxyXG5jb25zdCBjYW52YXMgPSA8SFRNTENhbnZhc0VsZW1lbnQ+ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignY2FudmFzJyk7XHJcbmNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG5jYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xyXG5cclxuY29uc3QgbiA9IDc7XHJcbmNvbnN0IG0gPSA3O1xyXG5jb25zdCBjID0gNTsgLy8gY29sb3JzXHJcbmNvbnN0IGsgPSAyO1xyXG5jb25zdCBzID0gMzsgLy8gbWl4XHJcbmNvbnN0IHggPSAxMTA7IC8vIHRhcmdldCBwb2ludHNcclxuY29uc3QgeSA9IDIwOyAvLyBtb3Zlc1xyXG5cclxuY29uc3QgZ2FtZSA9IG5ldyBHYW1lKGNhbnZhcyk7XHJcblxyXG5nYW1lLmluaXQobiwgbSwgYywgaywgcywgeCwgeSkudGhlbigoKSA9PiBnYW1lLnN0YXJ0KCkpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=