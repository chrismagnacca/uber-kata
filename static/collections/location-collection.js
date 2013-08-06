app = app || {};

app.collections.LocationList = Backbone.Collection.extend({
  url: '/locations',
  model: app.models.LocationItem,

  initialize: function(){
    this.on('remove', this.hideModel);
  },

  hideModel: function(model){
    model.trigger('hide');
  }

});
