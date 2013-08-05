// Location View
// --------------
var LocationView = Backbone.View.extend({
  tagName: 'li',

  template: "",

  events: {
    "click .icon-remove" : "removeLocationItem"
  },

  initialize: function() {
    this.model.fetch();
    this.template = _.template($('#location-item-template').html());
    this.listenTo(this.model, 'change', this.render);
    this.listenTo(this.model, 'destroy', this.remove);
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },

  clear: function() {
    this.model.destroy();
  }
});

