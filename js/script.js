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

function mouseenterStudioButtonUp() {
  var studioButtonUpWrapper = document.querySelector('.studio-button-wrapper');
  var studioButtonUp = document.querySelector('.up');
  studioButtonUpWrapper.style.backgroundColor = '#ff7800';
  studioButtonUp.style.borderColor = 'white';
}
      
function mouseleaveStudioButtonUp() {
  var studioButtonUpWrapper = document.querySelector('.studio-button-wrapper');
  var studioButtonUp = document.querySelector('.up');
  studioButtonUpWrapper.style.backgroundColor = 'white';
  studioButtonUp.style.borderColor = '#ff7800';
  if(pageYOffset < document.documentElement.clientHeight/2) {
    studioButtonUp.style.borderColor = 'white';
  }
}

function mouseenterPytalevButtonUp() {
  var pytalevButtonUpWrapper = document.querySelector('.pytalev-button-wrapper');
  var pytalevButtonUp = document.querySelector('.up');
  pytalevButtonUpWrapper.style.backgroundColor = '#ff7800';
  pytalevButtonUp.style.borderColor = 'white';
}
      
function mouseleavePytalevButtonUp() {
  var pytalevButtonUpWrapper = document.querySelector('.pytalev-button-wrapper');
  var pytalevButtonUp = document.querySelector('.up');
  pytalevButtonUpWrapper.style.backgroundColor = 'white';
  pytalevButtonUp.style.borderColor = '#ff7800';
  if(pageYOffset < document.documentElement.clientHeight/2) {
    pytalevButtonUp.style.borderColor = 'white';
  }
}

function clickStudioButtonUp() {
  window.scrollTo(pageXOffset, 0);
  };
  window.addEventListener('scroll', function() {
    var studioPageButtonUp = document.querySelector('.up');
    if(pageYOffset > document.documentElement.clientHeight/2) {
      studioPageButtonUp.style.borderColor = '#ff7800';
    } else {
      studioPageButtonUp.style.borderColor = 'white';
    }
  var logo = document.querySelector('.logo'); 
  var menu = document.querySelector('.menu'); 
  // var front = document.querySelector('.logo-cube__cube-side-front');
  // var back = document.querySelector('.logo-cube__cube-side-back');
  // var right = document.querySelector('.logo-cube__cube-side-right');
  // var left = document.querySelector('.logo-cube__cube-side-left');
  // var top = document.querySelector('.logo-cube__cube-side-top');
  // var bottom = document.querySelector('.logo-cube__cube-side-bottom');
  // var logoWhite = document.querySelector('#img-logo-color-white');
  // var logoOrange = document.querySelector('#img-logo-color-orange')
  var header = document.querySelector('.header__wrapper');
  var coordsHeader = header.getBoundingClientRect();
  var coordsLogo = logoWhite.getBoundingClientRect();
  
    if(coordsLogo.bottom < coordsHeader.bottom) {
      // front.style.borderColor = '#ff7800';
      // back.style.borderColor = '#ff7800';
      // right.style.borderColor = '#ff7800';
      // left.style.borderColor = '#ff7800';
      // top.style.borderColor = '#ff7800';
      // bottom.style.borderColor = '#ff7800';
      // logoOrange.hidden = false;
      // logoWhite.style.visibility = 'hidden';
      logo.style.transform = 'translateX(300px)';
    } else {
        // front.style.borderColor = 'white';
        // back.style.borderColor = 'white';
        // right.style.borderColor = 'white';
        // left.style.borderColor = 'white';
        // top.style.borderColor = 'white';
        // bottom.style.borderColor = 'white';
        // logoWhite.style.visibility = 'visible';
        // logoOrange.hidden = true;
        logo.style.transform = 'translateX(0px)';
        }
});