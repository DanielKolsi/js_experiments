var utils = require('./Utils');
var country = "country-x";
var querystring = require('querystring');
var https = require('https');

'use strict';

module.exports = function (request, response) {

var url = request.url;
var POS = 4; // correct IP string starting position from URL
var ip_string = url.substr(POS);

var DATA_FORMAT = "full"; // full or partial (ipvigilante API)

  var options = {
    host: 'ipvigilante.com',
    port : 443,
    method : 'GET',
    headers: {'User-Agent': 'request'}
    }

    options.path = "/"+ip_string+"/"+DATA_FORMAT;

    var req = https.get(options, function(res){
        var body = "";
        res.on('data', function(data) {
            body += data;
        });
        res.on('end', function() {

        if (res.statusCode === 200) {
           try {
             var result = JSON.parse(body);
             response.write(body);
             response.end();
           } catch (e) {
              console.log('Error parsing JSON!');
              }
        } else {
              console.log('Status:', res.statusCode);
          }
        });
      });
    req.on('error', function(e) {
        console.log('Problem with request: ' + e.message);
    });
}
