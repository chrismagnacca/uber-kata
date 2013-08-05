app = app || {}

app.views.AddModal = Backbone.View.extend({
  template: _.template($('#add-location')),

  events: {
    "click #save-btn":"saveLocation"
  },

  saveLocation: function(){
    alert('clicked');
  }
})
