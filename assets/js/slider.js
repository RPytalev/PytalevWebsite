'use strict';
function sliderBeginnerLevelWithIndicators() {

  let sliderRoll = document.querySelector('.slider__roll'); 
  let sliderSlides = document.querySelectorAll('.slider__slide');
  let sliderSlide = document.querySelector('.slider__slide');
  let sliderButtonPrev = document.querySelector('.slider__button-prev');
  let sliderButtonNext = document.querySelector('.slider__button-next');
  let sliderIndicators = document.querySelectorAll('.slider-console__highlight');
  let slideWidth = parseFloat(getComputedStyle(sliderSlide).width);
  let offsetLength = slideWidth;
  let counter = 0;
  let backgroundOne = document.getElementById('background-1');
  let starsOne = document.getElementById('stars-1');
  let spacemanOne = document.getElementById('spaceman-1-xs');
  let planetOrangeOne = document.getElementById('planet-orange-1');
  let letterI = document.getElementById('letter-I-1');
  let wordAm = document.getElementById('word-am-1');
  let wordWeb = document.getElementById('word-web-1');
  let wordDev = document.getElementById('word-dev-1');
  let backgroundTwo = document.getElementById('background-2');
  let starsTwo = document.getElementById('stars-2');
  let spacemanTwo = document.getElementById('spaceman-2');
  let planetVSC = document.getElementById('planet-vsc-2');
  let planetSass = document.getElementById('planet-sass-2');
  let planetFigma = document.getElementById('planet-figma-2');
  let planetGulp = document.getElementById('planet-gulp-2');
  let planetBEM = document.getElementById('planet-bem-2');
  let planetGit = document.getElementById('planet-git-2');
  let planetJSCSSHTML = document.getElementById('planet-js-css-html-2');
  let letterITwo = document.getElementById('letter-I-2');
  let wordCan = document.getElementById('word-can-2');
  let wordDo = document.getElementById('word-do-2');
  let wordWebTwo = document.getElementById('word-web-2');
  let wordDevTwo = document.getElementById('word-dev-2'); 
  let backgroundThree = document.getElementById('background-3');
  let starsThree = document.getElementById('stars-3');
  let spacemanThree = document.getElementById('spaceman-3-xs');
  let letterIThree = document.getElementById('letter-I-3');
  let wordTeach = document.getElementById('word-teach-3');
  let wordWebThree = document.getElementById('word-web-3');
  let wordDevThree = document.getElementById('word-dev-3');
  let wordWith = document.getElementById('word-with-3');
  let hart = document.getElementById('hart-3');

  sliderButtonPrev.addEventListener('click', offsetPrev);

    function offsetPrev() {
      if(counter == 0) return;
      sliderIndicators[counter].classList.remove('slider-console__highlight_active');
      counter--;
      sliderIndicators[counter].classList.add('slider-console__highlight_active');
      sliderRoll.style.transform = "translateX(" + -offsetLength*counter + "px)";
      //Animation
      backgroundTwo.style.transform = "rotate(180deg)";
      spacemanOne.style.transform = "scale(100) rotate(-180deg)";
      planetOrangeOne.style.transform = "scale(1)";
      letterI.style.transform = "translateX(300px)";
      wordAm.style.transform = "translateY(300px)";
      wordWeb.style.transform = "translateY(-200px)";
      wordDev.style.transform = "translateY(-200px)";

      if(counter >= 1) {
        starsTwo.style.transform = "translateY(-10px)";
        planetJSCSSHTML.style.transform = "translateX(-300px)";
        spacemanTwo.style.transform = "translateY(-355px)";
        planetVSC.style.opacity = "1";
        planetVSC.style.transition = ".3s .5s ease-out";
        planetSass.style.opacity = "1";
        planetSass.style.transition = ".3s 1s ease-out";
        planetFigma.style.opacity = "1";
        planetFigma.style.transition = ".3s 1.5s ease-out";
        planetGulp.style.opacity = "1";
        planetGulp.style.transition = ".3s 2s ease-out";
        planetBEM.style.opacity = "1";
        planetBEM.style.transition = ".3s 2.5s ease-out";
        planetGit.style.opacity = "1";
        planetGit.style.transition = ".3s 3s ease-out";
        letterITwo.style.transform = "translateY(140px)";
        wordCan.style.transform = "translateY(200px)";
        wordDo.style.transform = "translateY(310px)";
        wordWebTwo.style.transform = "translateY(-200px)";
        wordDevTwo.style.transform = "translateY(-200px)";
        spacemanThree.style.transform = "scale(-60) rotate(180deg)";
        letterIThree.style.transform = "translateX(400px)";
        wordTeach.style.transform = "translateX(400px)";
        wordWebThree.style.transform = "translateX(400px)";
        wordDevThree.style.transform = "translateX(400px)";
        wordWith.style.transform = "translateY(300px)";
        hart.style.opacity = "0";
      } 
      else if(counter < 1) {
        starsOne.style.transform = "translateY(-10px)";
        starsTwo.style.transform = "translateY(-10px)";
        starsThree.style.transform = "translateY(-10px)";
        spacemanTwo.style.transform = "translateY(355px)";
        planetVSC.style.opacity = "0";
        planetVSC.style.transition = ".1s .7s ease-out";
        planetSass.style.opacity = "0";
        planetSass.style.transition = ".1s .6s ease-out";
        planetFigma.style.opacity = "0";
        planetFigma.style.transition = ".1s .5s ease-out";
        planetGulp.style.opacity = "0";
        planetGulp.style.transition = ".1s .4s ease-out";
        planetBEM.style.opacity = "0";
        planetBEM.style.transition = ".1s .3s ease-out";
        planetGit.style.opacity = "0";
        planetGit.style.transition = ".1s .2s ease-out";
        letterITwo.style.transform = "translateY(-140px)";
        wordCan.style.transform = "translateY(-200px)";
        wordDo.style.transform = "translateY(-310px)";
        wordWebTwo.style.transform = "translateY(200px)";
        wordDevTwo.style.transform = "translateY(200px)";
        spacemanThree.style.transform = "scale(-60) rotate(180deg)";
        letterIThree.style.transform = "translateX(400px)";
        wordTeach.style.transform = "translateX(400px)";
        wordWebThree.style.transform = "translateX(400px)";
        wordDevThree.style.transform = "translateX(400px)";
        wordWith.style.transform = "translateY(300px)";
        hart.style.opacity = "0";
      }
    }

  sliderButtonNext.addEventListener('click', offsetNext);

    function offsetNext() {
      if(counter == sliderSlides.length - 1) return;
      sliderIndicators[counter].classList.remove('slider-console__highlight_active');
      counter++;
      sliderRoll.style.transform = "translateX(" + -offsetLength*counter + "px)";
      sliderIndicators[counter].classList.add('slider-console__highlight_active');
      //Animation
      backgroundTwo.style.transform = "rotate(-180deg)";
      backgroundThree.style.transform = "rotate(-180deg)";
      spacemanOne.style.transform = "scale(-100) rotate(180deg)";
      planetOrangeOne.style.transform = "scale(.6)";
      letterI.style.transform = "translateX(-300px)";
      wordAm.style.transform = "translateY(-300px)";
      wordWeb.style.transform = "translateY(200px)";
      wordDev.style.transform = "translateY(200px)";

      if(counter <= 1) {
        backgroundOne.style.transform = "rotate(-180deg)";
        starsTwo.style.transform = "translateY(10px)";
        planetJSCSSHTML.style.transform = "translateX(-300px)";
        spacemanTwo.style.transform = "translateY(-355px)";
        planetVSC.style.opacity = "1";
        planetVSC.style.transition = ".3s .5s ease-out";
        planetSass.style.opacity = "1";
        planetSass.style.transition = ".3s 1s ease-out";
        planetFigma.style.opacity = "1";
        planetFigma.style.transition = ".3s 1.5s ease-out";
        planetGulp.style.opacity = "1";
        planetGulp.style.transition = ".3s 2s ease-out";
        planetBEM.style.opacity = "1";
        planetBEM.style.transition = ".3s 2.5s ease-out";
        planetGit.style.opacity = "1";
        planetGit.style.transition = ".3s 3s ease-out";
        letterITwo.style.transform = "translateY(140px)";
        wordCan.style.transform = "translateY(200px)";
        wordDo.style.transform = "translateY(310px)";
        wordWebTwo.style.transform = "translateY(-200px)";
        wordDevTwo.style.transform = "translateY(-200px)";
        spacemanThree.style.transform = "scale(-60) rotate(180deg)";
      } 
      else if(counter > 1) {
        starsOne.style.transform = "translateY(10px)";
        starsTwo.style.transform = "translateY(10px)";
        starsThree.style.transform = "translateY(10px)";
        planetJSCSSHTML.style.transform = "translateX(60px)";
        planetJSCSSHTML.style.transitionDelay = "0s";
        spacemanTwo.style.transform = "translateY(355px)";
        planetVSC.style.opacity = "0";
        planetVSC.style.transitionDelay = ".5s";
        planetSass.style.opacity = "0";
        planetSass.style.transitionDelay = ".4s";
        planetFigma.style.opacity = "0";
        planetFigma.style.transitionDelay = ".3s";
        planetGulp.style.opacity = "0";
        planetGulp.style.transitionDelay = ".2s";
        planetBEM.style.opacity = "0";
        planetBEM.style.transitionDelay = ".1s";
        planetGit.style.opacity = "0";
        planetGit.style.transitionDelay = "0s";
        letterITwo.style.transform = "translateY(-140px)";
        wordCan.style.transform = "translateY(-200px)";
        wordDo.style.transform = "translateY(-310px)";
        wordWebTwo.style.transform = "translateY(200px)";
        wordDevTwo.style.transform = "translateY(200px)";
        spacemanThree.style.transform = "scale(60) rotate(-180deg)";
        letterIThree.style.transform = "translateX(-400px)";
        wordTeach.style.transform = "translateX(-400px)";
        wordWebThree.style.transform = "translateX(-400px)";
        wordDevThree.style.transform = "translateX(-400px)";
        wordWith.style.transform = "translateY(-300px)";
        hart.style.opacity = "1";
        let blinkerOne = setInterval(() => {
          let hart = document.getElementById('hart-3');
          hart.style.opacity = "0";
        }, 1000);
        
        let blinkerTwo = setInterval(() => {
          let hart = document.getElementById('hart-3');
          hart.style.opacity = "1";
        }, 2000);
        
        setTimeout(() => {
          clearInterval(blinkerOne);
          clearInterval(blinkerTwo);
        }, 6000);
      }      
    }
}
sliderBeginnerLevelWithIndicators();

document.addEventListener("DOMContentLoaded", function() {
  //Animation
  let backgroundOne = document.getElementById('background-1');
  let starsOne = document.getElementById('stars-1');
  let spacemanOne = document.getElementById('spaceman-1-xs');
  let letterI = document.getElementById('letter-I-1');
  let wordAm = document.getElementById('word-am-1');
  let wordWeb = document.getElementById('word-web-1');
  let wordDev = document.getElementById('word-dev-1');
  starsOne.style.transform = "translateY(10px)";
  spacemanOne.style.transform = "scale(100) rotate(-180deg)";
  letterI.style.transform = "translateX(300px)";
  wordAm.style.transform = "translateY(300px)";
  wordWeb.style.transform = "translateY(-200px)";
  wordDev.style.transform = "translateY(-200px)";
});