// Global Namespace
app = {
    helpers: {},
    models : {},
    views  : {},
    routers: {},
    init: function(){
        mainView = new app.views.GoogleMapView();
        appRouter = new app.routers.Router();
        Backbone.history.start();
    }
}

// Initialize Application Router & Define Routes
app.routers.Router = Backbone.Router.extend({
    routes: {
        "":"mapView"
    },

    mapView: function(){
        new app.views.GoogleMapView();
    }
});
