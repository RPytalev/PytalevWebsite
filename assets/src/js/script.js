'use strict'
window.addEventListener('DOMContentLoaded', function() {
    var planetOrange = document.getElementById('planet-orange');
    var spacemanZero = document.getElementById('spaceman-0');
    var hello = document.getElementById('hello');
    var ringOne = document.getElementById('ring-one');
    var logo = document.getElementById('logo');
    var width = document.documentElement.clientWidth;
    var height = document.documentElement.clientHeight;

    setTimeout(function () {
        spacemanZero.style.transform = 'rotate(360deg)';
        spacemanZero.style.opacity = '1';
        spacemanZero.style.transition = '1s';
        planetOrange.style.visibility = 'visible';
        planetOrange.style.opacity = '1';
        hello.style.visibility = 'visible';
        hello.style.transform = 'translateX(-120%)';
        ringOne.style.visibility = 'visible';
        ringOne.style.opacity = '1';
        ringOne.style.transform = 'rotate(225deg)';
        if(width <= 768) {
          hello.style.transform = 'translateX(-60%)';
          logo.style.position = 'absolute';
          logo.style.top = '4.3rem';
          logo.style.left = '4.5rem';
        }
        // if(width > 768 && width <= 1024) {
        //   hello.style.transform = 'translateX(-200%)';
        // }
        // if(height < 700) {
        //   hello.style.transform = 'translateX(-160%)';
        // }
        if(width < 400) {
          hello.style.transform = 'translateX(-60%)';
        }
    }, 300);   
});

window.addEventListener('scroll', function() {
    var buttonUp = document.querySelector('.button-up');
    var stars = document.getElementById('stars');
    var spacemanZero = document.getElementById('spaceman-0');
    var spaceman1 = document.getElementById('spaceman-1');
    var spaceman2 = document.getElementById('spaceman-2');
    var spaceman3 = document.getElementById('spaceman-3');
    var hello = document.getElementById('hello');
    var ringOne = document.getElementById('ring-one');
    var ringTwo = document.getElementById('ring-two');
    var ringThree = document.getElementById('ring-three');
    var ringFour = document.getElementById('ring-four');
    var planetOrange = document.getElementById('planet-orange');
    var planetOrange = document.getElementById('planet-orange');
    var planetOrange2 = document.getElementById('planet-orange-2');
    var planetOlive = document.getElementById('planet-olive');
    var planetGit = document.getElementById('planet-git');
    var planetGulp = document.getElementById('planet-gulp');
    var planetPug = document.getElementById('planet-pug');
    var planetSass = document.getElementById('planet-sass');
    var planetBem = document.getElementById('planet-bem');
    var planetVsc = document.getElementById('planet-vsc');
    var planetFigma = document.getElementById('planet-figma');
    var i = document.getElementById('i');
    var am = document.getElementById('am');
    var web = document.getElementById('web');
    var developer = document.getElementById('developer');
    var can = document.getElementById('can');
    var some = document.getElementById('some');
    var design = document.getElementById('design');
    var contact = document.getElementById('contact');
    var me = document.getElementById('me');
    var sectionFirstTextBlock = document.querySelector('.sectionFirstTextBlock');
    var sectionSecondTextBlock = document.querySelector('.sectionSecondTextBlock');
    var sectionThirdTextBlock = document.querySelector('.sectionThirdTextBlock');
    var sectionFourthTextBlock = document.querySelector('.sectionFourthTextBlock');
    var value = window.scrollY;
    var height = document.documentElement.clientHeight;
    var width = document.documentElement.clientWidth;
      if(value > 0 && width > 760) {
        stars.style.top = value + 'px';
        spacemanZero.style.opacity = '0';
        spacemanZero.style.transition = '0s';
        spaceman1.style.opacity = '1';
        spaceman1.style.top = value + 'px';
        spaceman1.style.left = value * .2 + 'px';
        buttonUp.style.top = value + 'px';
        buttonUp.style.left = value * .2 + 'px';
        }
      if(value > 0 && width <= 1024) {
        spacemanZero.style.opacity = '0';
        spacemanZero.style.transition = '0s';
        spaceman1.style.opacity = '1';
        spaceman1.style.top = value + 'px';
        spaceman1.style.left = '1%';
        buttonUp.style.top = value + 'px';
        buttonUp.style.left = '1%';
      }
      if(value > height / 4 && width > 1024) {
        planetOrange.style.opacity = '.3';
        ringOne.style.transform = 'rotate(-225deg)';
        ringOne.style.opacity = '0';
        hello.style.transform = 'translateX(120%)';
        }
      if(value > height / 4 && width <= 1024) {
        hello.style.transform = 'translateX(130%)';
      }
      if(value < height / 4 && width > 1024) {
        spacemanZero.style.opacity = '1';
        spacemanZero.style.transition = '1s';
        spaceman1.style.opacity = '0';
        planetOrange.style.opacity = '1';
        ringOne.style.transform = 'rotate(225deg)';
        ringOne.style.opacity = '1';
        hello.style.transform = 'translateX(-130%)';
      }
      if(value < height / 4 && width <= 1024) {
        hello.style.transform = 'translateX(-60%)';
      }
      // if(value < height / 4 && width > 768 && width <= 1024) {
      //   hello.style.transform = 'translateX(-200%)';
      // }
      if(value > height / 2) {
        sectionFirstTextBlock.style.opacity = '1';
      }
      if(value < height / 2) {
        sectionFirstTextBlock.style.opacity = '0';
      }
      if(value > height) {
        sectionFirstTextBlock.style.opacity = '0';
        planetOlive.style.opacity = '1';
        ringTwo.style.opacity = '1';
        ringTwo.style.transform = 'rotate(-130deg)';
        i.style.opacity = '1';
        i.style.transition = '1s ease';
        am.style.opacity = '1';
        am.style.transition = '1s .3s ease';
        web.style.opacity = '1';
        web.style.transition = '1s .6s ease';
        developer.style.opacity = '1';
        developer.style.transition = '1s .9s ease';
        }
      if(value < height) {
        planetOlive.style.opacity = '.3';
        ringTwo.style.transform = 'rotate(130deg)';
        ringTwo.style.opacity = '0';
        i.style.opacity = '0';
        i.style.transition = '1s .9s ease';
        am.style.opacity = '0';
        am.style.transition = '1s .6s ease';
        web.style.opacity = '0';
        web.style.transition = '1s .3s ease';
        developer.style.opacity = '0';
        developer.style.transition = '1s ease';
      } 
      if(value < height * 1.5 && value > height * 1.2) {
        i.style.opacity = '1';
        i.style.transition = '1s .9s ease';
        am.style.opacity = '1';
        am.style.transition = '1s .6s ease';
        web.style.opacity = '1';
        web.style.transition = '1s .3s ease';
        developer.style.opacity = '1';
        developer.style.transition = '1s ease';
        sectionSecondTextBlock.style.opacity = '0';
      } 

      if(value > height * 1.7) {
        sectionSecondTextBlock.style.opacity = '1';
        planetOlive.style.opacity = '.3';
        ringTwo.style.transform = 'rotate(130deg)';
        ringTwo.style.opacity = '0';
        i.style.opacity = '0';
        i.style.transition = '1s ease';
        am.style.opacity = '0';
        am.style.transition = '1s .3s ease';
        web.style.opacity = '0';
        web.style.transition = '1s .6s ease';
        developer.style.opacity = '0';
        developer.style.transition = '1s .9s ease';
      }
      if(value > height * 2) {
        sectionSecondTextBlock.style.opacity = '0';
        can.style.transform = 'rotateX(0deg)';
        planetGit.style.left = '15%';
        planetBem.style.left = '15%';
        planetGulp.style.left = '15%';
        planetSass.style.left = '15%';
        planetPug.style.left = '15%';
        planetVsc.style.left = '15%';
        planetGit.style.opacity = '1';
        planetBem.style.opacity = '1';
        planetGulp.style.opacity = '1';
        planetSass.style.opacity = '1';
        planetPug.style.opacity = '1';
        planetVsc.style.opacity = '1';
      }
      if(value < height * 2.2) {
        can.style.transform = 'rotateX(-180deg)';
        planetGit.style.left = '20%';
        planetBem.style.left = '10%';
        planetGulp.style.left = '20%';
        planetSass.style.left = '10%';
        planetPug.style.left = '20%';
        planetVsc.style.left = '10%';
        planetGit.style.opacity = '.3';
        planetBem.style.opacity = '.3';
        planetGulp.style.opacity = '.3';
        planetSass.style.opacity = '.3';
        planetPug.style.opacity = '.3';
        planetVsc.style.opacity = '.3';
      }
      if(value < height * 2.8) {
        sectionThirdTextBlock.style.opacity = '0';
      }
      if(value > height * 2.8) {
        sectionThirdTextBlock.style.opacity = '1';
        can.style.transform = 'rotateX(-180deg)';
        planetGit.style.left = '20%';
        planetBem.style.left = '10%';
        planetGulp.style.left = '20%';
        planetSass.style.left = '10%';
        planetPug.style.left = '20%';
        planetVsc.style.left = '10%';
        planetGit.style.opacity = '.3';
        planetBem.style.opacity = '.3';
        planetGulp.style.opacity = '.3';
        planetSass.style.opacity = '.3';
        planetPug.style.opacity = '.3';
        planetVsc.style.opacity = '.3';
      }
      if(value > height * 3.4) {
        sectionThirdTextBlock.style.opacity = '0';
        spaceman1.style.opacity = '0';
        ringThree.style.opacity = '1';
        ringThree.style.transform = 'rotate(225deg)';
        spaceman2.style.opacity = '.8';
        planetFigma.style.opacity = '1';
        design.style.top = '60%';
        some.style.opacity = '1';
      }
      if(value < height * 3.4) {
        ringThree.style.opacity = '0';
        ringThree.style.transform = 'rotate(-225deg)';
        spaceman2.style.opacity = '0';
        planetFigma.style.opacity = '.3';
        design.style.top = '24%';
        some.style.opacity = '0';
      }
      if(value < height * 4) {
        sectionFourthTextBlock.style.opacity = '0';
      }
      if(value > height * 4) {
        sectionFourthTextBlock.style.opacity = '1';
        spaceman2.style.opacity = '0';
        planetFigma.style.opacity = '.3';
        ringThree.style.opacity = '0';
        spaceman3.style.opacity = '1';
        ringFour.style.opacity = '1';
        ringFour.style.transform = 'rotate(-360deg)';
        ringFour.style.transition = '1s ease';
        planetOrange2.style.opacity = '1';
        contact.style.transform = 'translateX(-120%)';
      }
      if(value > height * 4.5) {
        me.style.transform = 'translateX(150%)';
      }
      if(value > height * 4.5 && width > 768) {
        me.style.transform = 'translateX(190%)';
      }
      if(value < height * 4.5) {
        sectionFourthTextBlock.style.opacity = '0';
        spaceman3.style.opacity = '0';
        ringFour.style.opacity = '0';
        ringFour.style.transform = 'rotate(0)';
        ringFour.style.transition = '1s ease';
        planetOrange2.style.opacity = '.3';
        contact.style.transform = 'translateX(120%)';
        me.style.transform = 'translateX(-150%)';
      }
      if(value > height * 3.9) {
        buttonUp.style.top = value + 200 + 'px';
        buttonUp.style.left = '1%';
      }
});

window.addEventListener('scroll', function() {
      var buttonUp = document.querySelector('.button-up');
      var value = window.pageYOffset;
      var height = document.documentElement.clientHeight;
      if (value > height / 4) {
        buttonUp.classList.add('showButtonUp');
      }
      if (value < height / 4) {
        buttonUp.classList.remove('showButtonUp');
      }
  });

  var buttonUp = document.querySelector('.button-up');
  buttonUp.addEventListener('mouseenter', function() {
    var buttonUpOrange = document.querySelector('.button-up-orange');
    var buttonUpWhite = document.querySelector('.button-up-white');
    buttonUpWhite.style.display = 'flex';
    buttonUpOrange.style.display = 'none';
  });

  buttonUp.addEventListener('mouseleave', function() {
    var buttonUpOrange = document.querySelector('.button-up-orange');
    var buttonUpWhite = document.querySelector('.button-up-white');
    buttonUpWhite.style.display = 'none';
    buttonUpOrange.style.display = 'flex';
});

var logo = document.getElementById('logo');
logo.addEventListener('mouseenter', function() {
  var logoOrange = document.getElementById('logo-orange');
  var logoWhite = document.getElementById('logo-white');
  logoWhite.style.visibility = 'hidden';
  logoOrange.style.visibility = 'visible';
});

logo.addEventListener('mouseleave', function() {
  var logoOrange = document.getElementById('logo-orange');
  var logoWhite = document.getElementById('logo-white');
  logoWhite.style.visibility = 'visible';
  logoOrange.style.visibility = 'hidden';
});

var roman = document.getElementById('roman');
roman.addEventListener('mouseenter', function() {
  var ringFour = document.getElementById('ring-four');
  var width = document.documentElement.clientWidth;
  ringFour.style.transform = 'rotate(50deg)';
  if(width <= 1024) {
    ringFour.style.transform = 'rotate(30deg)';
  }
});

roman.addEventListener('mouseleave', function() {
  var ringFour = document.getElementById('ring-four');
  ringFour.style.transform = 'rotate(0deg)';
});

var collaboration = document.getElementById('collaboration');
collaboration.addEventListener('mouseenter', function() {
  var ringFour = document.getElementById('ring-four');
  var width = document.documentElement.clientWidth;
  ringFour.style.transform = 'rotate(-60deg)';
  if(width <= 1024) {
    ringFour.style.transform = 'rotate(-30deg)';
  }
});

collaboration.addEventListener('mouseleave', function() {
  var ringFour = document.getElementById('ring-four');
  ringFour.style.transform = 'rotate(0deg)';
});

var training = document.getElementById('training');
training.addEventListener('mouseenter', function() {
  var ringFour = document.getElementById('ring-four');
  var width = document.documentElement.clientWidth;
  ringFour.style.transform = 'rotate(-120deg)';
  if(width <= 1024) {
    ringFour.style.transform = 'rotate(-150deg)';
  }
});

training.addEventListener('mouseleave', function() {
  var ringFour = document.getElementById('ring-four');
  ringFour.style.transform = 'rotate(0deg)';
});

var hamburger = document.querySelector('.hamburger');
var hamburgerMenu = document.querySelector('.hamburger-menu');
var lineOne = document.querySelector('.line-1');
var lineTwo = document.querySelector('.line-2');
hamburger.addEventListener('click', function() {
  hamburgerMenu.classList.toggle('active');
  hamburgerMenu.classList.toggle('active-2');
  lineOne.classList.toggle('active');
  lineTwo.classList.toggle('active');
});