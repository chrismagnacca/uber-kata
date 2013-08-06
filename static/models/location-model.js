app = app || {};

app.models.LocationItem = Backbone.Model.extend({
  defaults: function() {
    return {
      lat: -1,
      lng: -1,
      address: 'empty',
      nickname: 'empty'
    };
  },

  url: '/locations'
});

