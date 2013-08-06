app = app || {};

app.views.LocationListView = Backbone.View.extend({
  initialize: function(){
    this.collection.on('add', this.addOne, this);
    this.collection.on('reset', this.addAll, this);
  },

  render: function(){
    this.addAll();
    return this;
  },

  addAll: function(){
    this.$el.empty();
    this.collection.forEach(this.addOne, this);
  },

  addOne: function(locationItem){
    var locationView = new app.views.LocationView({model:locationItem});
    this.$el.append(locationView.render().el);
  }

});
