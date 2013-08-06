// Initialize App
$(function() {
  app.init();

  // On Modal Save, Save Location & Close Modal
  $('#save-btn').on('click', function() {
    var lat = $('#modal-latitude').val();
    var lng = $('#modal-longitude').val();
    var address = $('#address').val();
    var nickname = $('#nickname').val();
    var location = new app.models.LocationItem();
    location.set({
      lat: lat,
      lng: lng,
      address: address,
      nickname: nickname
    });
    location.save();
    $('#add-location').modal('hide');
    $('#address').val('');
    $('#nickname').val('');
    app.locationsListView.render();
    app.locationItems.fetch();
  });
});
