'use strict'
window.addEventListener('DOMContentLoaded', function() {
    var about = document.getElementById('about');
    about.style.color = '#ff7800';
});

var buttonUp2 = document.querySelector('.button-up-2');
buttonUp2.addEventListener('mouseenter', function() {
    var buttonUpOrange2 = document.querySelector('.button-up-orange-2');
    var buttonUpWhite2 = document.querySelector('.button-up-white-2');
    buttonUpWhite2.style.display = 'none';
    buttonUpOrange2.style.display = 'flex';
});
buttonUp2.addEventListener('mouseleave', function() {
    var buttonUpOrange2 = document.querySelector('.button-up-orange-2');
    var buttonUpWhite2 = document.querySelector('.button-up-white-2');
    buttonUpWhite2.style.display = 'flex';
    buttonUpOrange2.style.display = 'none';
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

const arr = [
    'I’m junior front-end developer looking for a projects. ',
    'I focus on writing accessible clear code using modern practices. ',
    'And create design with various style for example like this. ',
    'I’m based in Minsk, Belarus, but I’m happy working remotely and have experience in remote teams. ',
    'I love life and when i don’t write code I enjoy its magic.'
];

function typeWriter() {

    var string = 0;
    var count = 0;
    var sentence = '';
    var text = document.querySelector('.text');
    var time = 100;
    var timer = Math.floor(Math.random() * Math.floor(time));

    function handler() {

            var id = setTimeout(() => {
        
                sentence += arr[string][count];
                text.innerHTML = sentence + ' |';
                count++;
        
                if(count >= arr[string].length) {
                    count = 0;
                    string++;
        
                    if(string == arr.length) {
                        clearTimeout(id);
                        text.innerHTML = sentence;
                        return true;
                     }
                }
                handler();
            }, timer);        
    }
    handler();
}

typeWriter();

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

function initMap() {
    var coordinates = {lat: 53.897351, lng: 27.555742};

    var map = new google.maps.Map(document.getElementById('map'), {
        mapId: 'eda0aac7d7a5ae65',
        center: coordinates,
        zoom: 15,
        disableDefaultUI: true
    });

    var marker = new google.maps.Marker({
        position: coordinates,
        map: map,
        animation: google.maps.Animation.BOUNCE,
        icon: {
            url: 'src/img/src-img/map-marker.svg',
            scaledSize: new google.maps.Size(50, 50),
        }
    });
}