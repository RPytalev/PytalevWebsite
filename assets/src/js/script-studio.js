'use strict'
window.addEventListener('DOMContentLoaded', function() {
    var studio = document.getElementById('studio');
    studio.style.color = '#ff7800';
    var description = document.querySelectorAll('.description');
    var marker = document.querySelectorAll('.marker');
    var image = document.querySelectorAll('.image');

    var blinkerOne = setInterval(() => {

      for (let index = 0; index < description.length; index++) {
        const element = description[index];
        element.style.backgroundColor = 'transparent';
      }

      for (let index = 0; index < marker.length; index++) {
        const element = marker[index];
        element.style.backgroundColor = 'transparent';
      }

      for (let index = 0; index < image.length; index++) {
        const element = image[index];
        element.style.backgroundColor = 'transparent';
      }

    }, 2000);

    var blinkerTwo = setInterval(() => {

      for (let index = 0; index < description.length; index++) {
        const element = description[index];
        element.style.backgroundColor = 'rgba(100, 100, 100, 0.1)';
      }

      for (let index = 0; index < marker.length; index++) {
        const element = marker[index];
        element.style.backgroundColor = 'rgba(100, 100, 100, 0.1)';
      }

      for (let index = 0; index < image.length; index++) {
        const element = image[index];
        element.style.backgroundColor = 'rgba(100, 100, 100, 0.1)';
      }

    }, 4000);

    setTimeout(() => {
      clearInterval(blinkerOne);
      clearInterval(blinkerTwo);
    }, 31000000);

    var markerOne = document.getElementById('marker-1');
    
        if (markerOne.getContext) {
          var ctx = markerOne.getContext('2d');
          ctx.strokeStyle = "#fff";
          ctx.fillStyle = "#fff";
          ctx.beginPath();
          ctx.arc(5,90,3,0,Math.PI*2,true);
          ctx.fill();
          ctx.moveTo(7,90);
          ctx.lineTo(225,33);
          ctx.lineTo(300,33);
          ctx.stroke();
        }

        var markerTwo = document.getElementById('marker-2');
    
        if (markerTwo.getContext) {
          var ctx = markerTwo.getContext('2d');
          ctx.strokeStyle = "#fff";
          ctx.fillStyle = "#fff";
          ctx.beginPath();
          ctx.arc(296,90,3,0,Math.PI*2,true);
          ctx.fill();
          ctx.moveTo(293,90);
          ctx.lineTo(150,33);
          ctx.lineTo(75,33);
          ctx.stroke();
        }

        var markerTree = document.getElementById('marker-3');
    
        if (markerTree.getContext) {
          var ctx = markerTree.getContext('2d');
          ctx.strokeStyle = "#fff";
          ctx.fillStyle = "#fff";
          ctx.beginPath();
          ctx.arc(5,90,3,0,Math.PI*2,true);
          ctx.fill();
          ctx.moveTo(7,90);
          ctx.lineTo(225,33);
          ctx.lineTo(300,33);
          ctx.stroke();
        }

        var markerFour = document.getElementById('marker-4');
    
        if (markerFour.getContext) {
          var ctx = markerFour.getContext('2d');
          ctx.strokeStyle = "#fff";
          ctx.fillStyle = "#fff";
          ctx.beginPath();
          ctx.arc(296,90,3,0,Math.PI*2,true);
          ctx.fill();
          ctx.moveTo(293,90);
          ctx.lineTo(150,33);
          ctx.lineTo(75,33);
          ctx.stroke();
        }

        var markerFive = document.getElementById('marker-5');
    
        if (markerFive.getContext) {
          var ctx = markerFive.getContext('2d');
          ctx.strokeStyle = "#fff";
          ctx.fillStyle = "#fff";
          ctx.beginPath();
          ctx.arc(5,90,3,0,Math.PI*2,true);
          ctx.fill();
          ctx.moveTo(7,90);
          ctx.lineTo(225,33);
          ctx.lineTo(300,33);
          ctx.stroke();
        }

        var markerSix = document.getElementById('marker-6');
    
        if (markerSix.getContext) {
          var ctx = markerSix.getContext('2d');
          ctx.strokeStyle = "#fff";
          ctx.fillStyle = "#fff";
          ctx.beginPath();
          ctx.arc(296,90,3,0,Math.PI*2,true);
          ctx.fill();
          ctx.moveTo(293,90);
          ctx.lineTo(150,33);
          ctx.lineTo(75,33);
          ctx.stroke();
        }

        var markerSeven = document.getElementById('marker-7');
    
        if (markerSeven.getContext) {
          var ctx = markerSeven.getContext('2d');
          ctx.strokeStyle = "#fff";
          ctx.fillStyle = "#fff";
          ctx.beginPath();
          ctx.arc(5,90,3,0,Math.PI*2,true);
          ctx.fill();
          ctx.moveTo(7,90);
          ctx.lineTo(225,33);
          ctx.lineTo(300,33);
          ctx.stroke();
        }

    var spinnerProject = document.getElementById("spinner-project");

        if (spinnerProject.getContext) {
          var ctx = spinnerProject.getContext("2d");
        
          var blades = 3;
          var bladeRadius = 21;
          var innerBladeRadius = bladeRadius/2;
          var centerX = 150;
          var centerY = 150;
          var largeRadius = 45;
          var middleRadius = largeRadius/1.3;
          var smallRadius = largeRadius/2.3;
          var degree = 360/blades;
          var step = 0;
        
          ctx.fillStyle = "#ff7800";
          ctx.beginPath();
          ctx.moveTo(centerX, centerY);
          ctx.arc(centerX, centerY, bladeRadius, 0, Math.PI*2, true);
          ctx.closePath();
          ctx.fill();
    
          ctx.fillStyle = "#000";
          ctx.beginPath();
          ctx.moveTo(centerX, centerY);
          ctx.arc(centerX, centerY, innerBladeRadius, 0, Math.PI*2, true);
          ctx.closePath();
          ctx.fill()

            for(var i = 0; i < blades; i++) {
              ctx.fillStyle = "#ff7800"
              step = i;
              var x = centerX + (largeRadius * Math.cos((Math.PI/180)*degree*step));
              var y = centerY + (largeRadius * Math.sin((Math.PI/180)*degree*step))
              ctx.beginPath();
              ctx.moveTo(x, y);
              ctx.arc(x, y, bladeRadius, 0, Math.PI*2, true);
              ctx.closePath();
              ctx.fill()
              ctx.fillStyle = "#000";
              ctx.beginPath();
              ctx.moveTo(x, y);
              ctx.arc(x, y, innerBladeRadius, 0, Math.PI*2, true);
              ctx.closePath();
              ctx.fill()
              x = centerX + (middleRadius * Math.cos((Math.PI/180)*degree*step));
              y = centerY + (middleRadius * Math.sin((Math.PI/180)*degree*step))
              var xLine = centerX + (smallRadius * Math.cos((Math.PI/180)*degree*step));
              var yLine = centerY + (smallRadius * Math.sin((Math.PI/180)*degree*step))
              ctx.strokeStyle = "#ff7800";
              ctx.lineWidth = 14;
              ctx.beginPath();
              ctx.moveTo(xLine, yLine);
              ctx.lineTo(x, y);
              ctx.closePath();
              ctx.stroke();
            }
        } 
});

window.addEventListener('scroll', function() {
  var shotOne = document.querySelectorAll('.pathOne');
  var shotTwo = document.querySelectorAll('.pathTwo');
  var shotThree = document.querySelectorAll('.pathThree');
  var value = window.scrollY;
  var height = document.documentElement.clientHeight;
  
  if(value > height * 2) {

      shotOne.forEach(element => {
        element.style.animation = 'move 1.2s 3 ease-out reverse';
      });
      shotTwo.forEach(element => {
        element.style.animation = 'move 1s .4s 3 ease-out reverse';
      });
      shotThree.forEach(element => {
        element.style.animation = 'move 1.3s .7s 3 ease-out reverse';
      });
  }
  if(value < height * 2) {

    shotOne.forEach(element => {
      element.style.animation = 'none';
    });
    shotTwo.forEach(element => {
      element.style.animation = 'none';
    });
    shotThree.forEach(element => {
      element.style.animation = 'none';
    });
}
});

var buttonUp3 = document.querySelector('.button-up-3');
buttonUp3.addEventListener('mouseenter', function() {
    var buttonUpOrange3 = document.querySelector('.button-up-orange-3');
    var buttonUpWhite3 = document.querySelector('.button-up-white-3');
    buttonUpWhite3.style.display = 'none';
    buttonUpOrange3.style.display = 'flex';
});

buttonUp3.addEventListener('mouseleave', function() {
    var buttonUpOrange3 = document.querySelector('.button-up-orange-3');
    var buttonUpWhite3 = document.querySelector('.button-up-white-3');
    buttonUpWhite3.style.display = 'flex';
    buttonUpOrange3.style.display = 'none';
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

var hamburger = document.querySelector('.hamburger');
var hamburgerMenu = document.querySelector('.hamburger-menu');
var lineOne = document.querySelector('.line-1');
var lineTwo = document.querySelector('.line-2');
hamburger.addEventListener('click', function() {
  hamburgerMenu.classList.toggle('active');
  lineOne.classList.toggle('active');
  lineTwo.classList.toggle('active');
});