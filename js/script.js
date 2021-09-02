'use strict'
document.querySelector('.hamburger').addEventListener('click', function() {

  document.querySelector('.hamburger-menu').classList.toggle('firstChange');
  document.querySelector('.hamburger-menu__list').classList.toggle('secondChange');
});

window.addEventListener('scroll', function() {
  document.querySelector('.hamburger').style.position = 'absolute';
  var buttonUpWrapper = document.querySelector('.buttonUp-wrapper');
  var buttonUp = document.querySelector('.buttonUp');
  if(pageYOffset >= document.documentElement.clientHeight / 2) {
    buttonUpWrapper.style.visibility = "visible";
    buttonUp.style.visibility = "visible";
    document.querySelector('.buttonUp').addEventListener('mouseenter', function() {
        buttonUpWrapper.style.backgroundColor = '#ff7800';
        buttonUp.style.borderColor = 'white';
    });
    document.querySelector('.buttonUp').addEventListener('mouseleave', function() {
        buttonUpWrapper.style.backgroundColor = 'white';
        buttonUp.style.borderColor = '#ff7800';
    });
    document.querySelector('.buttonUp').addEventListener('click', function() {
      window.scrollTo(pageXOffset, 0);
      buttonUpWrapper.style.visibility = "hidden";
      buttonUp.style.visibility = "hidden";
    });
  } else {
    buttonUpWrapper.style.visibility = "hidden";
    buttonUp.style.visibility = "hidden";
  }
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