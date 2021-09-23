'use strict';

let languageSwitch = document.querySelector('.header__language-switch-top-surf');
languageSwitch.addEventListener('click', changeLanguage);

function changeLanguage() {
    languageSwitch.classList.toggle('onEn');
    languageSwitch.classList.toggle('onRu');
}