'use strict';
function sliderBeginnerLevelWithIndicatorsAndDescriptions() {

  var sliderRoll = document.querySelector('.main__slider-roll'); 
  var sliderSlides = document.querySelectorAll('.main__slide');
  var sliderSlide = document.querySelector('.main__slide');
  var sliderButtonPrev = document.querySelector('.main__slider-button-prev');
  var sliderButtonNext = document.querySelector('.main__slider-button-next');
  var sliderIndicators = document.querySelectorAll('.main__slide-indicator');
  var sliderDescriptions = document.querySelectorAll('.main__slide-description');
  var slideWidth = parseFloat(getComputedStyle(sliderSlide).width);
  var offsetLength = slideWidth;
  var counter = 0;

  sliderButtonPrev.addEventListener('click', offsetPrev);

    function offsetPrev() {
      if(counter == 0) return;
      sliderIndicators[counter].classList.remove('main__slide-indicator_highlighted');
      sliderDescriptions[counter].classList.remove('main__slide-description_offset');

      counter--;
      sliderIndicators[counter].classList.add('main__slide-indicator_highlighted');
      sliderDescriptions[counter].classList.add('main__slide-description_offset');
      sliderRoll.style.transform = "translateX(" + -offsetLength*counter + "px)";
    }

  sliderButtonNext.addEventListener('click', offsetNext);

    function offsetNext() {
      if(counter == sliderSlides.length - 1) return;
      sliderIndicators[counter].classList.remove('main__slide-indicator_highlighted');
      sliderDescriptions[counter].classList.remove('main__slide-description_offset');
      counter++;
      sliderRoll.style.transform = "translateX(" + -offsetLength*counter + "px)";
      sliderIndicators[counter].classList.add('main__slide-indicator_highlighted');
      sliderDescriptions[counter].classList.add('main__slide-description_offset');
    }
}
sliderBeginnerLevelWithIndicatorsAndDescriptions();