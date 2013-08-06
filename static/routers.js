// Establish Application Namespace
app = {
    models : {},
    views  : {},
    routers: {},
    collections: {},
    init: function(){
        appRouter = new app.routers.Router();
        Backbone.history.start();
    }
}

// Initialize Application Router & Define Routes
app.routers.Router = Backbone.Router.extend({
    routes: {
        "": "index"
    },

    initialize: function(){
      this.map = new app.views.GoogleMapView();
      this.locationItems = new app.collections.LocationList();
      this.locationsListView = new app.views.LocationListView({collection:this.locationItems});
      this.locationsListView.render();
    },

    index: function(){
      $('#uber-app').html(this.locationsListView.el);
      this.locationItems.fetch();
    }
});

