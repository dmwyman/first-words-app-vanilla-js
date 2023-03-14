/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "card_apple": () => (/* binding */ card_apple),
/* harmony export */   "card_ball": () => (/* binding */ card_ball),
/* harmony export */   "card_banana": () => (/* binding */ card_banana),
/* harmony export */   "card_book": () => (/* binding */ card_book),
/* harmony export */   "card_car": () => (/* binding */ card_car),
/* harmony export */   "card_clock": () => (/* binding */ card_clock),
/* harmony export */   "card_cow": () => (/* binding */ card_cow),
/* harmony export */   "card_dog": () => (/* binding */ card_dog),
/* harmony export */   "card_ear": () => (/* binding */ card_ear),
/* harmony export */   "card_mouth": () => (/* binding */ card_mouth),
/* harmony export */   "card_nose": () => (/* binding */ card_nose),
/* harmony export */   "card_plane": () => (/* binding */ card_plane),
/* harmony export */   "card_table": () => (/* binding */ card_table),
/* harmony export */   "card_train": () => (/* binding */ card_train),
/* harmony export */   "card_window": () => (/* binding */ card_window)
/* harmony export */ });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);

var cardContainer = document.querySelector('.card-container');

// individual cards as objects with 5 properties: word, wordSpanish, image, order, ID
var card_dog = {
  word: 'Dog',
  // wordSpanish: 'Perro',
  src: './imgs/dog_Image.avif',
  position: '001',
  ID: (0,uuid__WEBPACK_IMPORTED_MODULE_0__["default"])()
};
var card_car = {
  word: 'Car',
  // wordSpanish: 'Auto',
  src: './imgs/car_Image.avif',
  position: '002',
  ID: (0,uuid__WEBPACK_IMPORTED_MODULE_0__["default"])()
};
var card_cow = {
  word: 'Cow',
  // wordSpanish: 'Vaca',
  src: './imgs/cow_Image.avif',
  position: '003',
  ID: (0,uuid__WEBPACK_IMPORTED_MODULE_0__["default"])()
};
var card_banana = {
  word: 'Banana',
  // wordSpanish: 'Banana',
  src: './imgs/banana_Image.avif',
  position: '004',
  ID: (0,uuid__WEBPACK_IMPORTED_MODULE_0__["default"])()
};
var card_apple = {
  word: 'Apple',
  // wordSpanish: 'Manzana',
  src: './imgs/apple_Image.avif',
  position: '005',
  ID: (0,uuid__WEBPACK_IMPORTED_MODULE_0__["default"])()
};
var card_table = {
  word: 'Table',
  // wordSpanish: 'Mesa',
  src: './imgs/table_Image.avif',
  position: '006',
  ID: (0,uuid__WEBPACK_IMPORTED_MODULE_0__["default"])()
};
var card_window = {
  word: 'Window',
  // wordSpanish: 'Ventana',
  src: './imgs/window_Image.avif',
  position: '007',
  ID: (0,uuid__WEBPACK_IMPORTED_MODULE_0__["default"])()
};
var card_clock = {
  word: 'Clock',
  // wordSpanish: 'Reloj',
  src: './imgs/clock_Image.avif',
  position: '008',
  ID: (0,uuid__WEBPACK_IMPORTED_MODULE_0__["default"])()
};
var card_ball = {
  word: 'Ball',
  // wordSpanish: 'Balon',
  src: './imgs/ball_Image.avif',
  position: '009',
  ID: (0,uuid__WEBPACK_IMPORTED_MODULE_0__["default"])()
};
var card_book = {
  word: 'Book',
  // wordSpanish: 'Libro',
  src: './imgs/book_Image.avif',
  position: '010',
  ID: (0,uuid__WEBPACK_IMPORTED_MODULE_0__["default"])()
};
var card_train = {
  word: 'Train',
  // wordSpanish: 'Train',
  src: './imgs/train_Image.avif',
  position: '011',
  ID: (0,uuid__WEBPACK_IMPORTED_MODULE_0__["default"])()
};
var card_plane = {
  word: 'Plane',
  // wordSpanish: 'Avión',
  src: './imgs/plane_Image.avif',
  position: '012',
  ID: (0,uuid__WEBPACK_IMPORTED_MODULE_0__["default"])()
};
var card_ear = {
  word: 'Ear',
  // wordSpanish: 'Oreja',
  src: './imgs/ear_Image.avif',
  position: '013',
  ID: (0,uuid__WEBPACK_IMPORTED_MODULE_0__["default"])()
};
var card_nose = {
  word: 'Nose',
  // wordSpanish: 'Nariz',
  src: './imgs/nose_Image.avif',
  position: '014',
  ID: (0,uuid__WEBPACK_IMPORTED_MODULE_0__["default"])()
};
var card_mouth = {
  word: 'Mouth',
  // wordSpanish: 'Boca',
  src: './imgs/mouth_Image.avif',
  position: '015',
  ID: (0,uuid__WEBPACK_IMPORTED_MODULE_0__["default"])()
};

/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);



function v4(options, buf, offset) {
  options = options || {};
  var rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__["default"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_1__["default"])(rnds);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);

/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rng)
/* harmony export */ });
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
    // find the complete implementation of crypto (msCrypto) on IE11.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

var byteToHex = [];

for (var i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).substr(1));
}

function stringify(arr) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);

/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);


function validate(uuid) {
  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__["default"].test(uuid);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);

/***/ }),
/* 6 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);

/***/ })
/******/ 	]);
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cards_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
//Imported card objects

// array of cards = the card stack
var cardStack = [_cards_js__WEBPACK_IMPORTED_MODULE_0__.card_dog, _cards_js__WEBPACK_IMPORTED_MODULE_0__.card_car, _cards_js__WEBPACK_IMPORTED_MODULE_0__.card_cow, _cards_js__WEBPACK_IMPORTED_MODULE_0__.card_banana, _cards_js__WEBPACK_IMPORTED_MODULE_0__.card_apple, _cards_js__WEBPACK_IMPORTED_MODULE_0__.card_table, _cards_js__WEBPACK_IMPORTED_MODULE_0__.card_window, _cards_js__WEBPACK_IMPORTED_MODULE_0__.card_clock, _cards_js__WEBPACK_IMPORTED_MODULE_0__.card_ball, _cards_js__WEBPACK_IMPORTED_MODULE_0__.card_book, _cards_js__WEBPACK_IMPORTED_MODULE_0__.card_train, _cards_js__WEBPACK_IMPORTED_MODULE_0__.card_plane, _cards_js__WEBPACK_IMPORTED_MODULE_0__.card_ear, _cards_js__WEBPACK_IMPORTED_MODULE_0__.card_nose, _cards_js__WEBPACK_IMPORTED_MODULE_0__.card_mouth];
// TODO: use document.queryselector for all the cards

// **********************
// Landing Page Start Button

var startBtn = document.querySelector('.start-btn');
startBtn.addEventListener('click', function () {
  // TODO: display card_dog
  console.log('Clicked');
});

// **********************
// CARD TEMPLATE PAGE
// **********************
// let currentCardCount = 0
var cardContainer = document.querySelector('.card-container');
var cardWordHeading = document.querySelector('.card-word-heading');
var cardImg = document.querySelector('.card-img');
cardWordHeading.textContent = _cards_js__WEBPACK_IMPORTED_MODULE_0__.card_dog.word;
// cardImg.classList.add = card_dog.src

// **********************
// Previous button
var previousBtn = document.querySelector('.previous-btn');
previousBtn.addEventListener('click', function () {
  console.log("clicked");
});

// **********************
// Next button

// startBtn.addEventListener('click', () => {
//   // TODO: display card_dog
//   // TODO: display: none for start-btn
//   console.log('Clicked')
// })

// **********************
// current card template
var currentCard = document.querySelector('.card-container');

// **********************
// Skip Link JS
var skipLink = document.querySelector('.skip-link');
skipLink.addEventListener('click', function (e) {
  document.querySelector(skipLink.getAttribute('href')).focus();
});
})();

/******/ })()
;