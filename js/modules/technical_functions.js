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

export {addClassesToArrayElements, deleteNotDigits};
