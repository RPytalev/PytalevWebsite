'use strict';
let themeSwitch = document.querySelector('.header__theme-switch-top-surf');
themeSwitch.addEventListener('click', changeTheme);

function changeTheme() {
    themeSwitch.classList.toggle('onLight-theme');
    themeSwitch.classList.toggle('onDark-theme');
}