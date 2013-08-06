// Establish Application Namespace
app = {
    models : {},
    views  : {},
    routers: {},
    collections: {},
    init: function(){
        appRouter = new app.routers.Router();
        Backbone.history.start();
        this.mapView = new app.views.GoogleMapView();
        this.locationItems = new app.collections.LocationList();
        this.locationsListView = new app.views.LocationListView({collection:this.locationItems});
        this.locationsListView.render();
        $('#uber-app').html(this.locationsListView.el);

        // fetch all saved locations, place markers on map
        this.locationItems.fetch({
          success: function(response){
            app.locationItems.models.forEach(function(location){
              var position = new google.maps.LatLng(location.attributes.lat,
                                                    location.attributes.lng);
              app.mapView.placeMarker(position);
            });
          }
        });
    }
}

// Initialize Application Router & Define Routes
app.routers.Router = Backbone.Router.extend({
    routes: {
        "": "index"
    },
});

