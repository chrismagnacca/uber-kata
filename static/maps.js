$(function() {
  InitializeMap();
});

function InitializeMap() {
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
    }, function() {
      handleNoGeolocation(browserSupportFlag);
    });
  } else {
    // browser does not support Geolocation
    browserSupportFlag = false;
    handleNoGeolocation(browserSupportFlag);
  }

  // without Geolocation, set initial map marker
  function handleNoGeolocation(errorFlag) {
    if (errorFlag == true) {
      alert("Geolocation service failed.");
      initialLocation = siberia;
    } else {
      alert("Your browser doesn't support Geolocation. Welcome to Columbus!");
      initialLocation = columbus;
    }
    map.setCenter(initialLocation);
  }

  // place map marker
  function placeMarker(location) {
    var marker = new google.maps.Marker({ position: location, map: map });
    google.maps.event.addListener(marker, 'click', function () {
      infowindow.open(map, marker);
    });
  }

  // add map click listener, display modal
  google.maps.event.addListener(map, 'click', function(event) {
    var lat = event.latLng.lat();
    var lng = event.latLng.lng();
    var marker = new google.maps.LatLng(lat, lng);
    $('#modal-latitude').val(lat);
    $('#modal-longitude').val(lng);
    $('#add-location').modal('show');
  });
}

