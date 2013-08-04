// Location Model
// --------------
// Attributes: lat: latitude, lng: longitude, address: location, nickname: friendly name
var Location = Backbone.Model.extend({
  defaults: function() {
    return {
      lat: -1,
      lng: -1,
      address: '',
      nickname: ''
    };
  },

  urlRoot: '/locations',
});

