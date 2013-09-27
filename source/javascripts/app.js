define('app', [
  'jquery'
], function (
  $
) {

  var App = function () {
    this.initialize();
  };

  App.prototype.initialize = function () {
    var self = this;

    self.getGeoCoords(function (coords) {
      self.getNeighborhood(coords);
    });
  };

  App.prototype.getNeighborhood = function (coords) {
    $.ajax({
      url: 'http://api.phillyhoods.net/v1/locations/' + coords.latitude + ',' + coords.longitude,
      success: this.reportHood
    });
  };

  App.prototype.reportHood = function (data) {
    $('h1').html(data.results.features[0].properties.name);
  };

  App.prototype.getGeoCoords = function (callback) {
    navigator.geolocation.getCurrentPosition(function (pos) {
      callback({
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude
      })
    });
  };

  return App;
});
