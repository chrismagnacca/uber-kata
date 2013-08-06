app = app || {};

app.views.LocationView = Backbone.View.extend({
  template: _.template("<li class='location'><i class='icon-remove'></i> <%= nickname %></li>"),

  events: {
    "click .icon-remove" : "remove"
  },

  initialize: function() {
    this.model.on('all', this.render, this);
    this.model.on('destroy hide', this.remove, this);
  },

  render: function(){
    this.$el.html(_.template(this.template(this.model.toJSON())));
    return this;
  },

  remove: function() {
    this.$el.remove();
  }
});

