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

// function mouseenterStudioButtonUp() {
//   var studioButtonUpWrapper = document.querySelector('.studio-button-wrapper');
//   var studioButtonUp = document.querySelector('.up');
//   studioButtonUpWrapper.style.backgroundColor = '#ff7800';
//   studioButtonUp.style.borderColor = 'white';
// }
      
// function mouseleaveStudioButtonUp() {
//   var studioButtonUpWrapper = document.querySelector('.studio-button-wrapper');
//   var studioButtonUp = document.querySelector('.up');
//   studioButtonUpWrapper.style.backgroundColor = 'white';
//   studioButtonUp.style.borderColor = '#ff7800';
//   if(pageYOffset < document.documentElement.clientHeight/2) {
//     studioButtonUp.style.borderColor = 'white';
//   }
// }

// function mouseenterPytalevButtonUp() {
//   var pytalevButtonUpWrapper = document.querySelector('.pytalev-button-wrapper');
//   var pytalevButtonUp = document.querySelector('.up');
//   pytalevButtonUpWrapper.style.backgroundColor = '#ff7800';
//   pytalevButtonUp.style.borderColor = 'white';
// }
      
// function mouseleavePytalevButtonUp() {
//   var pytalevButtonUpWrapper = document.querySelector('.pytalev-button-wrapper');
//   var pytalevButtonUp = document.querySelector('.up');
//   pytalevButtonUpWrapper.style.backgroundColor = 'white';
//   pytalevButtonUp.style.borderColor = '#ff7800';
//   if(pageYOffset < document.documentElement.clientHeight/2) {
//     pytalevButtonUp.style.borderColor = 'white';
//   }
// }
