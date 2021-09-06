'use strict'

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
            url: 'img/logo-orange.png',
            scaledSize: new google.maps.Size(50, 50),
        }
        
    });
}



