'use strict'
window.addEventListener('DOMContentLoaded', function() {
    var school = document.getElementById('school');
    var comingTop = document.getElementById('coming-top');
    var comingBottom = document.getElementById('coming-bottom');
    var soonTop = document.getElementById('soon-top');
    var soonBottom = document.getElementById('soon-bottom');
    school.style.color = '#ff7800';
    setTimeout(() => {
      comingTop.style.visibility = 'hidden';
      comingBottom.style.visibility = 'hidden';
      soonTop.style.visibility = 'hidden';
      soonBottom.style.visibility = 'hidden';
    }, 200);
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

function getTime(end) {
    var time = Date.parse(end) - Date.parse(new Date());
    var seconds = Math.floor((time / 1000) % 60);
    var minutes = Math.floor((time / 1000 / 60) % 60);
    var hours = Math.floor((time / (1000 * 60 * 60)) % 24);
    var days = Math.floor(time / (1000 * 60 * 60 * 24));
    return {
      'total': time,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }
  
function initTimer(timer, end) {
  var timer = document.getElementById(timer);
  var d = timer.querySelector('.days');
  var h = timer.querySelector('.hours');
  var m = timer.querySelector('.minutes');
  var s = timer.querySelector('.seconds');

  function updateTimer() {
    var t = getTime(end);

    d.innerHTML = t.days;
    h.innerHTML = ('0' + t.hours).slice(-2);
    m.innerHTML = ('0' + t.minutes).slice(-2);
    s.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeR);
    }
  }

  updateTimer();
  var timeR = setInterval(updateTimer, 1000);
}
  
var deadline="September 29 2022 00:00:00 GMT+0300";
initTimer('timer', deadline);

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