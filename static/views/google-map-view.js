app = app || {};

app.views.GoogleMapView = Backbone.View.extend({
  id: 'map',

  googleMap: null,

  events: {
    "click #map":"addLocation"
  },

  mapOptions: {
    zoom: 12,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    center: new google.maps.LatLng(39.961201,-82.999491) // Columbus, OH Default
  },

  initialize: function() {
    var self = this;
    this.googleMap = new google.maps.Map(document.getElementById('map'), this.mapOptions);

    // utilize Geolocation for initial map center
    if(navigator.geolocation) {
      browserSupportFlag = true;
      navigator.geolocation.getCurrentPosition(function(position) {
        initialLocation = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
        self.googleMap.setCenter(initialLocation);
      }, function() {
        this.handleNoGeolocation(browserSupportFlag);
      });
    } else {
      browserSupportFlag = false;
      this.handleNoGeolocation(browserSupportFlag);
    }
    google.maps.event.addListener(this.googleMap, "click", this.addLocation(event));

    this.render();
  },

  handleNoGeolocation: function(errorFlag) {
    if (errorFlag == true) {
      alert("Geolocation service failed!");
    } else {
      alert("Your browser doesn't support Geolocation!");
    }
    this.googleMap.setCenter(this.MapOptions.center);
  },

  placeMarker: function(location) {
    var marker = new google.maps.Marker({ position: location, map: this.googleMap });
  },

  addLocation: function(event) {
    var self = this;
    google.maps.event.addListener(this.googleMap, 'click', function(event) {
      var lat = event.latLng.lat();
      var lng = event.latLng.lng();
      var marker = new google.maps.LatLng(lat, lng);
      $('#modal-latitude').val(lat);
      $('#modal-longitude').val(lng);
      $('#add-location').modal('show');
      self.placeMarker(marker);
    });
  },

  render: function() {
    return this;
  }
});

