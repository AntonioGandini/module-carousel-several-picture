/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/carousel.js":
/*!********************************!*\
  !*** ./js/modules/carousel.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _technical_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./technical_functions */ "./js/modules/technical_functions.js");


function carousel({carouselSelector, listSelector, itemsSelector, nextArrow, prevArrow, markerWidth, indicatorsSelector}) {
    let carouselIndex = 1;
    let carouselOffset = 0;
    let slideTo = 0;
    const carousel = document.querySelector(carouselSelector),
        carouseList = document.querySelector(listSelector),
        carouselItems = document.querySelectorAll(itemsSelector),
        next = document.querySelector(nextArrow),
        prev = document.querySelector(prevArrow),
        markerForWidth = document.querySelector(markerWidth),
        indicators = document.createElement(indicatorsSelector), // Создаем элементы ТОЧКИ
        dots = []; // Создаём массив

    // Добавляем список с точками
    carousel.append(indicators);

    // Стилизуем и добавляем точки
    for (let i = 0; i < (carouselItems.length - 4); i++) {
        const dot = document.createElement('li');
        dot.setAttribute('data-slide-to', i + 1);
        dot.style.cssText = `
         box-sizing: content-box;
         flex: 0 1 auto;
         width: 30px;
         height: 6px;
         margin: 0 .3rem;
         cursor: pointer;
         background-color: #e05926;
         background-clip: padding-box;
         border-top: 1.5rem solid transparent;
         border-bottom: 10px solid transparent;
         opacity: .5;
         transition: opacity .6s ease;
      `;
        if (i == 0) {
            dot.style.opacity = "1";
        }
        dots.push(dot);
        indicators.append(dot);
    }

    indicators.style.cssText = `
      position: absolute;
      width: auto;
      top: 0;
      display: flex;
      justify-content: center;
      list-style: none;
      z-index: 15;
    `;

    // Кликкер вправо
    next.addEventListener('click', () => {
        if (carouselOffset  >= (0,_technical_functions__WEBPACK_IMPORTED_MODULE_0__.deleteNotDigits)(widthCategoryCard) * (carouselItems.length - 4)) {
            carouselOffset = 0;
        } else {
            carouselOffset += (0,_technical_functions__WEBPACK_IMPORTED_MODULE_0__.deleteNotDigits)(widthCategoryCard);
        }

        if (carouselOffset == 0) {
            carouselOffset = 0;
        } else {
            carouselOffset = carouselOffset + 30; //30px marginRight
        }

        moveSlides();

        if (carouselIndex == (carouselItems.length) - 4) {
            carouselIndex = 1;
        } else {
            carouselIndex++;
        }

        paintingDots();
    });

    // Кликкер влево
    prev.addEventListener('click', () => {
        if (carouselOffset == 0) {
            carouselOffset  = (0,_technical_functions__WEBPACK_IMPORTED_MODULE_0__.deleteNotDigits)(widthCategoryCard) * (carouselItems.length - 5) + ((carouselItems.length - 4) * 30); // 30px - margin left
        } else {
            carouselOffset -= (0,_technical_functions__WEBPACK_IMPORTED_MODULE_0__.deleteNotDigits)(widthCategoryCard);
        }

        if (carouselOffset == 0) {
            carouselOffset = 0;
        } else {
            carouselOffset = carouselOffset - 30;
        }

        moveSlides();

        if (carouselIndex == 1) {
            carouselIndex = carouselItems.length - 4;
        } else {
            carouselIndex--;
        }

        paintingDots();
    });

    //   Кликкер по точкам
    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            slideTo = e.target.getAttribute('data-slide-to');
            carouselIndex = slideTo;

            carouselOffset = ((0,_technical_functions__WEBPACK_IMPORTED_MODULE_0__.deleteNotDigits)(widthCategoryCard) * (slideTo - 1));

            dotMoveRight();
            paintingDots();
            moveSlides();
        });
    });

    //------------------------------------------------------
    // Стили
    carouseList.style.width = 100 * carouselItems.length + "%";
    carouseList.style.display = "flex";
    carouseList.style.transition = "0.5s all";

    // Вычисляем ширину indicators чтобы центровать внитри блока
    let widthDots = window.getComputedStyle(indicators).width;
    // Центруем кнопки
    indicators.style.right = `calc(50% - ${(0,_technical_functions__WEBPACK_IMPORTED_MODULE_0__.deleteNotDigits)(widthDots) / 2}px)`;
    // Вычисляем ширину окна просмотра
    const widthCategoryCard = window.getComputedStyle(markerForWidth).width;


    //------------------------------------------------------
    // Технические функции
    // Движение слайдов по стрелкам
    function moveSlides() {
        carouseList.style.transform = `translateX(-${carouselOffset}px)`;
    }

    // Движение слайдов по точкам
    function dotMoveRight () {
        if (carouselOffset == 0) {
            carouselOffset = 0;
        } else {
            carouselOffset = carouselOffset + ((slideTo - 1) * 30);
        }
    }

    // Красим точки слайдов
    function paintingDots() {
        dots.forEach(dot => dot.style.opacity = '0.5');
        dots[carouselIndex - 1].style.opacity = '1';
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (carousel);

/***/ }),

/***/ "./js/modules/menu.js":
/*!****************************!*\
  !*** ./js/modules/menu.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _technical_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./technical_functions */ "./js/modules/technical_functions.js");


// Основное Меню
function menu(btnHideMenuSelector, hamburgerSelector, navBarSelector, navLincksSelector, opacitiNavbarItemSelector) {
     const btnHideMenu = document.getElementById(btnHideMenuSelector),
         hamburger = document.querySelectorAll(hamburgerSelector),
         navBar = document.querySelector(navBarSelector),
         navLincks = document.querySelectorAll(navLincksSelector),
         opacitiNavbarItem = document.querySelector(opacitiNavbarItemSelector);

     btnHideMenu.addEventListener('click', () => {
         navBar.classList.remove('hideMenu');
         if (!navBar.classList.contains('showMenu')) {
             navBar.classList.add('showMenu');
         } else {
             navBar.classList.remove('showMenu');
             navBar.classList.add('hideMenu');
         }

         navBar.style.display = 'flex';
         navBar.classList.add('competenceBorder');
         btnHideMenu.classList.toggle('change');
         btnHideMenu.classList.toggle('hideBtnCloseMenu');
         opacitiNavbarItem.classList.toggle('opacityShow');
     });

     // Красим ссылки главного меню  и гамбургер
     (0,_technical_functions__WEBPACK_IMPORTED_MODULE_0__.addClassesToArrayElements)(navLincks, 'competenceLinks');
     (0,_technical_functions__WEBPACK_IMPORTED_MODULE_0__.addClassesToArrayElements)(hamburger, 'competenceHamburger');
 }

 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);

/***/ }),

/***/ "./js/modules/technical_functions.js":
/*!*******************************************!*\
  !*** ./js/modules/technical_functions.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addClassesToArrayElements": () => (/* binding */ addClassesToArrayElements),
/* harmony export */   "deleteNotDigits": () => (/* binding */ deleteNotDigits)
/* harmony export */ });
// Красим ссылки главного меню  и гамбургер
function addClassesToArrayElements(arr, classElem) {
    arr.forEach(i => {
        i.classList.add(classElem);
    });
}

// Проверяем строки и оставляет в них только цифры
function deleteNotDigits (str) {
    return +str.replace(/\D/g, '');
}




/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_carousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/carousel */ "./js/modules/carousel.js");
/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ "./js/modules/menu.js");
// Это точка вхождения Webpack: "./js/script.js'





window.addEventListener('DOMContentLoaded', () => {
    (0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__.default)('btnHideMenu', '.hamburger', '.header__nav', '.navbar__link', '.navbar__items');
    (0,_modules_carousel__WEBPACK_IMPORTED_MODULE_0__.default)({
        carouselSelector: '.carousel',
        listSelector: '.carousel__list',
        itemsSelector: '.carousel__item',
        nextArrow: '#carouselBtnRight',
        prevArrow: '#carouselBtnLeft',
        markerWidth: '#markerForWidth',
        indicatorsSelector: 'ol',
    });
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./js/script.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=bundle.js.map