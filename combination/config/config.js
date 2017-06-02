
// server URLs etc.
var SERVER_URL = 'http://127.0.0.1:8000/ip/';
var IPVIGILANTE_URL = 'https://ipvigilante.com/json/8.8.8.8';

// table constants
var LAT = 'Latitude';
var LNG = 'Longitude';
var CITY = 'City';
var COUNTRY = 'Country';
var INITIAL_LOCATION = '[INITIAL LOCATION]';

// map constants
var MAP_ZOOM_LEVEL = 9;
var INIT_LAT = 40;
var INIT_LNG = 40;

// error messages

var INVALID_IP = 'Invalid IP = ';
var SERVER_ERROR = 'Server error, server URL was: ';

// other
var PATTERN = /^(?!0)(?!.*\.$)((1?\d?\d|25[0-5]|2[0-4]\d)(\.|$)){4}$/;
