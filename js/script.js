// Это точка вхождения Webpack: "./js/script.js'
"use strict";

import carousel from "./modules/carousel";
import menu from "./modules/menu";

window.addEventListener('DOMContentLoaded', () => {
    menu('btnHideMenu', '.hamburger', '.header__nav', '.navbar__link', '.navbar__items');
    carousel({
        carouselSelector: '.carousel',
        listSelector: '.carousel__list',
        itemsSelector: '.carousel__item',
        nextArrow: '#carouselBtnRight',
        prevArrow: '#carouselBtnLeft',
        markerWidth: '#markerForWidth',
        indicatorsSelector: 'ol',
    });
});