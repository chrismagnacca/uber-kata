// Initialize App
$(function() {
  app.init();

  // On Modal Save, Save Location & Close Modal
  $('#save-btn').on('click', function() {
    var lat = $('#modal-latitude').val();
    var lng = $('#modal-longitude').val();
    var address = $('#address').val();
    var nickname = $('#nickname').val();

    if(nickname == "") {
      $('#error').html('Name cannot be empty. ');
      $('#error').removeClass('hide');
      return;
    }

    if(address == "") {
      $('#error').html('Address cannot be empty. ');
      $('#error').removeClass('hide');
      return;
    }

    var location = new app.models.LocationItem();
    location.set({
      lat: lat,
      lng: lng,
      address: address,
      nickname: nickname
    });
    location.save();
    $('#add-location').modal('hide');
    $('#error').addClass('hide');
    $('#address').val('');
    $('#nickname').val('');
    app.locationsListView.render();
    app.locationItems.fetch();
  });

  $('#close-btn').on('click', function() {
    app.mapView.markers[app.mapView.markers.length - 1].setMap(null);
  });

  $('#modal-close-x').on('click', function() {
    app.mapView.markers[app.mapView.markers.length - 1].setMap(null);
  });
});
