app = app || {};

app.views.LocationView = Backbone.View.extend({
  template: _.template("<h3 class='location'><i class='icon-remove'></i> <%= nickname %></h3>"),

  events: {
    "click .icon-remove" : "removeModel"
  },

  initialize: function() {
    this.model.on('all', this.render, this);
    this.model.on(' hide', this.remove, this);
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },

  remove: function() {
    this.$el.remove();
  },

  // Remove Model from Database & Remove Map Marker
  removeModel: function() {
    var deleted_lat = this.model.attributes.lat;
    var deleted_lng = this.model.attributes.lng;
    console.log('pre each');
    app.d = this.model;
    app.mapView.markers.forEach(function(marker) {
      if(marker.position.lb == deleted_lat && marker.position.mb == deleted_lng)
        marker.setMap(null);
    });

    this.model.destroy();
  }
});

