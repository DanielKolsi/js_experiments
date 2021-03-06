(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Globals = (function() {
  "use strict";
  var module = {};
  module.map = null;
  module.marker = null;
  return module;
}());

// init Google maps used for mapping IP to geographical location
(function() {
  initialize = function() {
    "use strict";
    var mapOptions = {
      zoom: MAP_ZOOM_LEVEL,
      center: new google.maps.LatLng(INIT_LAT, INIT_LNG),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    Globals.map = new google.maps.Map(document.getElementById('ip-map'),
      mapOptions);

    Globals.marker = new google.maps.Marker({
      position: new google.maps.LatLng(INIT_LAT, INIT_LNG),
      label: INITIAL_LOCATION
    });

    Globals.marker.setMap(Globals.map);
    google.maps.event.addDomListener(window, 'load', initialize);
  };
})();

/*
 Maps user given IP address to the geographical world map as a visible marker.
*/
var IPMapper = (function() {
  "use strict";
  var module = {};

  // pans geographical map to correspond correct latitude and longitude values & sets the marker
  module.pan = function() {

    var point = new google.maps.LatLng(document.getElementById(LAT).value, document.getElementById(LNG).value);
    Globals.map.panTo(point);
    Globals.marker.setPosition(point);
    Globals.marker.setLabel("");
    Globals.marker.setDraggable(true);
    Globals.marker.setAnimation(google.maps.Animation.DROP);
  };

  // AJAX call to received and process JSON data corresponding the given IP
  module.getResultDataForIP = function(ip) {

    $.ajax({
      type: "GET",
      dataType: "json",
      url: SERVER_URL + ip,

      success: function(data) {
        showResults(data, ip);
      },
      error: function(err) {
        alert(SERVER_ERROR + SERVER_URL);
      }
    });
  };

  /*
  Shows results of data corresponding the IP both in the map and in the HTML table.
  The table contains three rows of additional data related to the IP address.
  */
  function showResults(result, ip) {

    var lat = result.data.latitude;
    var lng = result.data.longitude;
    var point = new google.maps.LatLng(lat, lng);
    Globals.map.panTo(point);
    Globals.marker.setPosition(point);
    Globals.marker.setLabel(ip);

    var row1 = "<tr><td>" + lat + "</td><td>" + lng + "</td><td>" + result.data.city_name + "</td><td>" + result.data.country_name + "</td></tr>";
    var row2 = "<tr><td>" + result.data.hostname + "</td><td>" + result.data.time_zone + "</td><td>" + result.data.postal_code + "</td><td>" + result.data.country_iso_code + "</td></tr>";
    var row3 = "<tr><td>" + result.data.continent_code + "</td><td>" + result.data.continent_name + "</td><td>" + result.data.metro_code + "</td><td>" + result.data.accuracy_radius + "</td></tr>";
    $(row1).appendTo("[data-table1] tbody");
    $(row2).appendTo("[data-table2] tbody");
    $(row3).appendTo("[data-table3] tbody");
  }

  return module;
}());
//module.exports = IPMapper; // FIXME: requires WebPack / Browserify

},{}]},{},[1]);
