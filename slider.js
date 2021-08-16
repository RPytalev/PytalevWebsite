'use strict';

var slider = (function () {

	return function (slider, customConfig) {

	  var
		slider = document.querySelector(slider),
		sliderRoll = slider.querySelector('.slider-roll'),
		slides = slider.querySelectorAll('.slide'),
		sliderButtons = slider.querySelectorAll('.slider-buttons'),
		// sliderButtonNext = slider.querySelector('.next'),
		// sliderButtonPrev = slider.querySelector('.prev'),
		sliderIndicators = slider.querySelectorAll('.slider-indicator'),
		// slideDescription = slider.querySelector('.slide-description'),
		// slideDescriptions = slider.querySelectorAll('.slide-description'),
		// firstSliderIndicator = slider.querySelector('.slider-indicator'),
		rollWidth = parseFloat(getComputedStyle(sliderRoll).width),
		slideWidth = parseFloat(getComputedStyle(slides[0]).width),   
		
		leftSlidePosition = 0,
		slideNumber = 0,
		transform = 0,
		interval = 0,
		step = slideWidth / rollWidth * 100,
		arrOfSlides = [],
		// firstSliderIndicator = firstSliderIndicator.style.backgroundColor = 'lightgray',
		
		config = {
		  loop: true,
		  direction: 'right',
		  interval: 5000,
		  pause: true
		};
console.log(sliderRoll);
console.log(slides);
console.log(rollWidth);
console.log(slideWidth);
console.log(step);

	  for (var key in customConfig) {
		if (key in config) {
		  config[key] = customConfig[key];
		}
	  }

	  slides.forEach(function (item, index) {

		arrOfSlides.push({ 
			item: item, position: index, transform: 0 
		});
	  });



	  var position = {

		getItemMin: function () {

		  var indexItem = 0;

		  arrOfSlides.forEach(function (item, index) {

			if (item.position < arrOfSlides[indexItem].position) {
			  indexItem = index;
			}
		  });
		  
		  return indexItem;
		},

		getItemMax: function () {

		  var indexItem = 0;

		  arrOfSlides.forEach(function (item, index) {

			if (item.position > arrOfSlides[indexItem].position) {
			  indexItem = index;
			}
		  });

		  return indexItem;
		},

		getMin: function () {

		  return arrOfSlides[position.getItemMin()].position;
		},

		getMax: function () {

		  return arrOfSlides[position.getItemMax()].position;
		}
	  };



	  var transformItem = function (direction) {

		var nextItem;

		if (direction === 'left') {
			
		  leftSlidePosition++;
		//   sliderIndicators[slideNumber].style.backgroundColor = "lightgrey";
		//   slider.querySelectorAll('.slide-description')[slideNumber].hidden = true;

		  if (slideNumber < sliderIndicators.length-1) {
			
			slideNumber++;
			
		  } else if (slideNumber == 0) {
			// slideDescription.hidden = false;
		  } else {
			  slideNumber = 0;
		  }
		
		//   sliderIndicators[slideNumber].style.backgroundColor = "black";
		//   setTimeout(() => {slider.querySelectorAll('.slide-description')[slideNumber].hidden = false;}, 1000);
		  if ((leftSlidePosition + rollWidth / slideWidth - 1) > position.getMax()) {
			nextItem = position.getItemMin();
			arrOfSlides[nextItem].position = position.getMax() + 1;
			arrOfSlides[nextItem].transform += arrOfSlides.length * 100;
			arrOfSlides[nextItem].item.style.transform = 'translateX(' + arrOfSlides[nextItem].transform + '%)';
		  }
		  
		  transform -= step;
		}

		if (direction === 'right') {

		  leftSlidePosition--;
		//   sliderIndicators[slideNumber].style.backgroundColor = "lightgrey";
		//   slider.querySelectorAll('.slide-description')[slideNumber].hidden = true;

		  if (slideNumber > 0) {
			slideNumber--;
		  } else if (slideNumber == 0) {
			slideNumber = sliderIndicators.length-1;
		  } 

		//   sliderIndicators[slideNumber].style.backgroundColor = "black";
		//   setTimeout(() => {slider.querySelectorAll('.slide-description')[slideNumber].hidden = false;}, 1000);
		  if (leftSlidePosition < position.getMin()) {
			nextItem = position.getItemMax();
			arrOfSlides[nextItem].position = position.getMin() - 1;
			arrOfSlides[nextItem].transform -= arrOfSlides.length * 100;
			arrOfSlides[nextItem].item.style.transform = 'translateX(' + arrOfSlides[nextItem].transform + '%)';
		  }

		  transform += step;
		}

		sliderRoll.style.transform = 'translateX(' + transform + '%)';
	  };



	  var cycle = function (direction) {
		if (!config.loop) {
		  return;
		}
		interval = setInterval(function () {
		  transformItem(direction);
		}, config.interval);
	  };



	  var controlClick = function (e) {

		if (e.target.classList.contains('slider-buttons')) {
		  e.preventDefault();
		  var direction = e.target.classList.contains('next') ? 'left' : 'right';
		  transformItem(direction);
		  clearInterval(interval);
		  cycle(config.direction);
		}
	  };



	  var setUpListeners = function () {

		sliderButtons.forEach(function (item) {
		  item.addEventListener('click', controlClick);
		});
		
		if (config.pause && config.loop) {
			slider.addEventListener('mouseenter', function () {
			clearInterval(interval);
		  });
		  	slider.addEventListener('mouseleave', function () {
			clearInterval(interval);
			cycle(config.direction);
		  });
		}
	  };

	  

	  setUpListeners();
	  cycle(config.direction);



	  return {
		right: function () {
		  transformItem('right');
		},
		left: function () {
		  transformItem('left');
		},
		stop: function () {
		  config.loop = false;
		  clearInterval(interval);
		},
		cycle: function () {
		  config.loop = true;
		  clearInterval(interval);
		  cycle();
		}
	  }

	}
  }());

  slider('.slider', {
	loop: false,
	pause: false,
	direction: 'left',
	interval: 2000
  });
