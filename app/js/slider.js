'use strict';
function sliderBeginnerLevelWithIndicatorsAndDescriptions() {

  var sliderRoll = document.querySelector('.slider__slider-roll'); 
  var sliderSlides = document.querySelectorAll('.slider-roll__slide');
  var sliderSlide = document.querySelector('.slider-roll__slide');
  var sliderButtonPrev = document.querySelector('.slider__button-prev');
  var sliderButtonNext = document.querySelector('.slider__button-next');
  var sliderIndicators = document.querySelectorAll('.slider-console__slide-indicator');
  var sliderDescriptions = document.querySelectorAll('.slider-console__slide-description');
  var slideWidth = parseFloat(getComputedStyle(sliderSlide).width);
  var offsetLength = slideWidth;
  var counter = 0;

  sliderButtonPrev.addEventListener('click', offsetPrev);

    function offsetPrev() {
      if(counter == 0) return;
      sliderIndicators[counter].classList.remove('slider-console__slide-indicator_highlighted');
      sliderDescriptions[counter].classList.remove('slider-console__slide-description_visible');

      counter--;
      sliderIndicators[counter].classList.add('slider-console__slide-indicator_highlighted');
      sliderDescriptions[counter].classList.add('slider-console__slide-description_visible');
      sliderRoll.style.transform = "translateX(" + -offsetLength*counter + "px)";
    }

  sliderButtonNext.addEventListener('click', offsetNext);

    function offsetNext() {
      if(counter == sliderSlides.length - 1) return;
      sliderIndicators[counter].classList.remove('slider-console__slide-indicator_highlighted');
      sliderDescriptions[counter].classList.remove('slider-console__slide-description_visible');
      counter++;
      sliderRoll.style.transform = "translateX(" + -offsetLength*counter + "px)";
      sliderIndicators[counter].classList.add('slider-console__slide-indicator_highlighted');
      sliderDescriptions[counter].classList.add('slider-console__slide-description_visible');
    }
}
sliderBeginnerLevelWithIndicatorsAndDescriptions();