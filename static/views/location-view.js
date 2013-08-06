app = app || {};

app.views.LocationView = Backbone.View.extend({
  template: _.template("<h3 class='location'><i class='icon-remove'></i> <%= nickname %></h3>"),

  events: {
    "click .icon-remove" : "remove"
  },

  initialize: function() {
    this.model.on('all', this.render, this);
    this.model.on('destroy hide', this.remove, this);
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },

  remove: function() {
    this.$el.remove();
  }
});

