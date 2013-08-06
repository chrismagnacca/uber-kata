app = app || {};

// Generate Google Map & Attach Events
app.views.GoogleMapView = Backbone.View.extend({
  id: 'map',

  markers: [],

  googleMap: null,

  events: {
    "click #map":"addLocation"
  },

  // Default MapOptions
  mapOptions: {
    zoom: 12,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    center: new google.maps.LatLng(39.961201,-82.999491) // Columbus, OH Default
  },

  // Setup Google Map & utilize Geolocation to center the map if possible
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
    // Add Click Handler for Modal Dialog, Assign GoogleMap to GlobalNamespace
    this.googleMap.addListener(this.googleMap, "click", this.addLocation(event));
    app.googleMap = this.googleMap;
    this.render();
  },

  // Alert the user that Geolocation is disabled or not supported
  handleNoGeolocation: function(errorFlag) {
    if (errorFlag == true) {
      alert("Geolocation service failed!");
    } else {
      alert("Your browser doesn't support Geolocation!");
    }
    this.googleMap.setCenter(this.MapOptions.center);
  },

  // place a map marker on the Google Map by passing in a google.maps.LatLng(lat,lng) object
  placeMarker: function(location) {
    var marker = new google.maps.Marker({ position: location, map: this.googleMap });
    this.markers.push(marker);
  },

  // adds a Location from a click on the google map
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

