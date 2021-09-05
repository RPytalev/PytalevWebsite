'use strict'
document.querySelector('.hamburger').addEventListener('click', function() {

  document.querySelector('.hamburger-menu').classList.toggle('firstChange');
  document.querySelector('.hamburger-menu__list').classList.toggle('secondChange');
});

window.addEventListener('scroll', function() {
  document.querySelector('.hamburger').style.position = 'absolute';
});

function mouseenterButtonPrev() {
  var buttonPrevWrapper = document.querySelector('.slider__button-prev');
  var buttonPrev = document.querySelector('.slider__button-marker-arrow-left');
  buttonPrevWrapper.style.backgroundColor = '#ff7800';
  buttonPrev.style.borderColor = 'white';
  }
  
function mouseleaveButtonPrev() {
  var buttonPrevWrapper = document.querySelector('.slider__button-prev');
  var buttonPrev = document.querySelector('.slider__button-marker-arrow-left');
  buttonPrevWrapper.style.backgroundColor = 'white';
  buttonPrev.style.borderColor = '#ff7800';
}

function mouseenterButtonNext() {
  var buttonNextWrapper = document.querySelector('.slider__button-next');
  var buttonNext = document.querySelector('.slider__button-marker-arrow-right');
  buttonNextWrapper.style.backgroundColor = '#ff7800';
  buttonNext.style.borderColor = 'white';
}
    
function mouseleaveButtonNext() {
  var buttonNextWrapper = document.querySelector('.slider__button-next');
  var buttonNext = document.querySelector('.slider__button-marker-arrow-right');
  buttonNextWrapper.style.backgroundColor = 'white';
  buttonNext.style.borderColor = '#ff7800';
}

function clickButtonUp() {
  window.scrollTo(scrollY, 0);
}

function mouseenterButtonUp() {
  var buttonUpWrapper = document.querySelector('.buttonUp-wrapper');
  var arrowUp = document.querySelector('.buttonUp-marker-arrow-up');

    buttonUpWrapper.style.backgroundColor = '#ff7800';
    arrowUp.style.borderColor = 'white';
}

function mouseleaveButtonUp() {
  var buttonUpWrapper = document.querySelector('.buttonUp-wrapper');
  var arrowUp = document.querySelector('.buttonUp-marker-arrow-up');
  
    buttonUpWrapper.style.backgroundColor = 'transparent';
    buttonUpWrapper.style.borderColor = '#ff7800';
    arrowUp.style.borderColor = '#ff7800';
}

function offsetButtonSubscribeForm() {
  var buttonSubscribeForm = document.querySelector('.subscribe-form__form-button');
  buttonSubscribeForm.style.transform = 'translateZ(-2px)';
}