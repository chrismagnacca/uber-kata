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

app.routers.Router = Backbone.Router.extend({
    routes: {
        "":"mapView"
    },

    mapView: function(){
        new app.views.GoogleMapView();
    }
});
