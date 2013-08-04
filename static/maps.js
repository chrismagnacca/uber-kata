$(function(){
  initialize();
});

function initialize() {
  var initialLocaiton;
  var siberia = new google.maps.LatLng(60, 105);
  var columbus = new google.maps.LatLng(39.961201,-82.999491);

  var mapOptions = {
    zoom: 12,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

  // utilize Geolocation for initial map center
  if(navigator.geolocation) {
    browserSupportFlag = true;
    navigator.geolocation.getCurrentPosition(function(position) {
      initialLocation = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
      map.setCenter(initialLocation);
      placeInitialLocationMarker(initialLocation);
    }, function() {
      handleNoGeolocation(browserSupportFlag);
    });
  } else {
    // browser does not support Geolocation
    browserSupportFlag = false;
    handleNoGeolocation(browserSupportFlag);
  }

  function handleNoGeolocation(errorFlag) {
    if (errorFlag == true) {
      alert("Geolocation service failed.");
      initialLocation = siberia;
    } else {
      alert("Your browser doesn't support geolocation. Welcome to Columbus!");
      initialLocation = columbus;
    }
    map.setCenter(initialLocation);
    placeInitialLocationMarker(initialLocation);
  }

  function placeInitialLocationMarker(initialLocation) {
    var marker = new google.maps.Marker({ position: initialLocation, map: map });
    google.maps.event.addListener(marker, 'click', function () {
      infowindow.open(map, marker);
    });
  }

}

google.maps.event.addDomListener(window, 'load', initialize);
