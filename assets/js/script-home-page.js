'use strict';

class HamburgerHandler {
    handleEvent(event) {
        let method = 'on' + event.type[0].toUpperCase() + event.type.slice(1);
        this[method](event);
    }
    onMouseenter() {
        for (let index = 0; index < hamburgerDecorLines.length; index++) {
            const element = hamburgerDecorLines[index];
            if(index == 0) {
                element.classList.add('header__hamburger-decor-line_active'); 
            }
            else if(index % 2 == 0) {
                element.classList.add('header__hamburger-decor-line_active'); 
            }
        }
    }
  
    onMouseleave() {  
        for (let index = 0; index < hamburgerDecorLines.length; index++) {
            const element = hamburgerDecorLines[index];
            if(index == 0) {
                element.classList.remove('header__hamburger-decor-line_active'); 
            }
            else if(index % 2 == 0) {
                element.classList.remove('header__hamburger-decor-line_active'); 
            }
        }
    }
}

let hamburgerHandler = new HamburgerHandler();

let hamburgerDecorLines = document.querySelectorAll('.header__hamburger-decor-line');
for (let index = 0; index < hamburgerDecorLines.length; index++) {
    const element = hamburgerDecorLines[index];
    element.addEventListener('mouseenter', hamburgerHandler);
    element.addEventListener('mouseleave', hamburgerHandler);
}