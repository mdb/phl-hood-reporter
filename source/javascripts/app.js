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

    self.drawMap();

    self.getGeoCoords(function (coords) {
      self.getNeighborhood(coords);
    });
  };

  App.prototype.drawMap = function () {
    var opts = {
          center: new L.LatLng(39.952335,-75.163789),
          zoom: 13,
          maxZoom: 15,
          minZoom: 13,
          attributionControl: false,
          touchZoom: true,
          dragging: true,
          maxBounds: new L.LatLngBounds([39.849719,-75.308533], [40.123346,-74.904785])
        };

    this.baseMap = new L.TileLayer('http://services.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}.png');
    this.hoodLayer = new L.geoJson();
    this.map = L.map('map', opts);
    this.baseMap.addTo(this.map);
  };

  App.prototype.getNeighborhood = function (coords) {
    var self = this;

    $.ajax({
      url: 'http://api.phillyhoods.net/v1/locations/' + coords.latitude + ',' + coords.longitude,
      success: function (data) {
        self.reportHood(data);
        self.renderHoodMap(data);
      },
      error: this.reportError
    });
  };

  App.prototype.reportError = function (data) {
    $('h1').html("Whoops&mdash;there was a problem. You sure you're in Philly?");
  };

  App.prototype.reportHood = function (data) {
    $('h1').html(data.results.features[0].properties.name);
  };

  App.prototype.renderHoodMap = function (response) {
    this.hoodLayer.clearLayers();
    this.hoodLayer.addData(response.results);
    L.marker([response.request.y, response.request.x]).addTo(this.hoodLayer);
    this.map.fitBounds(this.hoodLayer.getBounds());
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
