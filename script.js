'use strict'
document.querySelector('.hamburger-menu').addEventListener('click', function() {

  document.querySelector('.topbar').classList.toggle('change');

});

window.addEventListener('scroll', function() {
  document.querySelector('.hamburger-menu').style.position = 'absolute';
});

function mouseenterPrevButton() {
  var prevWrapper = document.querySelector('.slider-buttons-prev-wrapper');
  var prevButton = document.querySelector('.prev');
  prevWrapper.style.backgroundColor = '#ff7800';
  prevButton.style.borderColor = 'white';
  }
  
function mouseleavePrevButton() {
  var prevWrapper = document.querySelector('.slider-buttons-prev-wrapper');
  var prevButton = document.querySelector('.prev');
  prevWrapper.style.backgroundColor = 'white';
  prevButton.style.borderColor = '#ff7800';
}

function mouseenterNextButton() {
  var nextWrapper = document.querySelector('.slider-buttons-next-wrapper');
  var nextButton = document.querySelector('.next');
  nextWrapper.style.backgroundColor = '#ff7800';
  nextButton.style.borderColor = 'white';
}
    
function mouseleaveNextButton() {
  var nextWrapper = document.querySelector('.slider-buttons-next-wrapper');
  var nextButton = document.querySelector('.next');
  nextWrapper.style.backgroundColor = 'white';
  nextButton.style.borderColor = '#ff7800';
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
