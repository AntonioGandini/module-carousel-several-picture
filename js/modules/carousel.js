import {deleteNotDigits} from './technical_functions';

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
        if (carouselOffset  >= deleteNotDigits(widthCategoryCard) * (carouselItems.length - 4)) {
            carouselOffset = 0;
        } else {
            carouselOffset += deleteNotDigits(widthCategoryCard);
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
            carouselOffset  = deleteNotDigits(widthCategoryCard) * (carouselItems.length - 5) + ((carouselItems.length - 4) * 30); // 30px - margin left
        } else {
            carouselOffset -= deleteNotDigits(widthCategoryCard);
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

            carouselOffset = (deleteNotDigits(widthCategoryCard) * (slideTo - 1));

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
    indicators.style.right = `calc(50% - ${deleteNotDigits(widthDots) / 2}px)`;
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

export default carousel;