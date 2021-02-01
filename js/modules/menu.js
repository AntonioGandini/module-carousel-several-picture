import {addClassesToArrayElements} from './technical_functions';

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
     addClassesToArrayElements(navLincks, 'competenceLinks');
     addClassesToArrayElements(hamburger, 'competenceHamburger');
 }

 export default menu;