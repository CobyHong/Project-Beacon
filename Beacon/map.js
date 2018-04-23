var infoWindow;

//map is created and takes in options of center.
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {
      lat: 35.6895,
      lng: 139.6917
    },
    zoom: 13
  });
  infoWindow = new google.maps.InfoWindow;

  //creation of marker
  var marker = new google.maps.Marker({
    position: {
      lat: 35.6895,
      lng: 139.6917
    },
    //value adding to our map
    map: map,
    icon: 'img/critical.png'
  });

  //geolocation
  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      //Set marker new position
      marker.setPosition(pos);
      //set new geo position;
      infoWindow.setPosition(pos);
      infoWindow.setContent('Current Location.');
      infoWindow.open(map);
      map.setCenter(pos);
    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
    'Error: The Geolocation service failed.' :
    'Error: Your browser doesn\'t support geolocation.');
  infoWindow.open(map);
}
