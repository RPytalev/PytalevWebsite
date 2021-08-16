'use strict'

function initMap() {

    return function() {
        var coordinates = {lat: 53.897351, lng: 27.555742},
        markerImage = 'images/logo.svg',
        zoom = 15,
    
        map = new google.maps.Map(document.getElementById('map'), {
            center: coordinates,
            zoom: zoom,
            disableDefaultUI: true
        }),
    
        marker = new google.maps.Marker({
            position: coordinates,
            map: map,
            icon: markerImage
        });
    }
} 

