'use strict'
window.onload = function () {
  var spinner = document.querySelector('.spinner__container');
  spinner.style.visibility = 'visible';
  document.body.classList.add('hide');
  window.setTimeout(function () {
    spinner.style.visibility = 'hidden';
    document.body.classList.add('show');
    document.body.classList.remove('hide');
  }, 1000);
};

window.addEventListener('scroll', function() {
  document.querySelector('.hamburger').style.position = 'absolute';
    var buttonUp = document.querySelector('.main__buttonUp');
    var scrolled = window.pageYOffset;
    var height = document.documentElement.clientHeight;
    if (scrolled > height / 4) {
      buttonUp.classList.add('showButtonUp');
    }
    if (scrolled < height / 4) {
      buttonUp.classList.remove('showButtonUp');
    }
});

document.querySelector('.hamburger').addEventListener('click', function() {
  document.querySelector('.hamburger-menu').classList.toggle('firstChange');
  document.querySelector('.hamburger-menu__list').classList.toggle('secondChange');
});

function mouseenterButtonPrev() {
  var buttonPrevWrapper = document.querySelector('.main__slider-button-prev');
  var buttonPrev = document.querySelector('.main__slider-button-marker-arrow-left');
  buttonPrevWrapper.style.backgroundColor = '#ff7800';
  buttonPrev.style.borderColor = 'white';
  }
  
function mouseleaveButtonPrev() {
  var buttonPrevWrapper = document.querySelector('.main__slider-button-prev');
  var buttonPrev = document.querySelector('.main__slider-button-marker-arrow-left');
  buttonPrevWrapper.style.backgroundColor = 'white';
  buttonPrev.style.borderColor = '#ff7800';
}

function mouseenterButtonNext() {
  var buttonNextWrapper = document.querySelector('.main__slider-button-next');
  var buttonNext = document.querySelector('.main__slider-button-marker-arrow-right');
  buttonNextWrapper.style.backgroundColor = '#ff7800';
  buttonNext.style.borderColor = 'white';
}
    
function mouseleaveButtonNext() {
  var buttonNextWrapper = document.querySelector('.main__slider-button-next');
  var buttonNext = document.querySelector('.main__slider-button-marker-arrow-right');
  buttonNextWrapper.style.backgroundColor = 'white';
  buttonNext.style.borderColor = '#ff7800';
}

function mouseenterButtonUp() {
  var buttonUp = document.querySelector('.main__buttonUp');
  var buttonMarkerArrowUp = document.querySelector('.main__button-marker-arrow-up');
    buttonUp.style.backgroundColor = '#ff7800';
    buttonMarkerArrowUp.style.borderColor = 'white';
}

function mouseleaveButtonUp() {
  var buttonUp = document.querySelector('.main__buttonUp');
  var buttonMarkerArrowUp = document.querySelector('.main__button-marker-arrow-up');
    buttonUp.style.backgroundColor = 'transparent';
    buttonUp.style.borderColor = '#ff7800';
    buttonMarkerArrowUp.style.borderColor = '#ff7800';
}

function offsetButtonSubscribeForm() {
  var buttonSubscribeForm = document.querySelector('.main__subscribe-form-button');
  buttonSubscribeForm.style.transform = 'translateZ(-2px)';
}