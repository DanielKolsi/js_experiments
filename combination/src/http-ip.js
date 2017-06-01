
var request = require("request");
var url = 'https://ipvigilante.com/json/8.8.8.8'; // TODO, remove?!
var country = "country-x";
var querystring = require('querystring');
var https = require('https');

'use strict';

module.exports = function (request, response) {

var url = request.url;
var ip_string = url.substr(4);

  var options = {
    host: 'ipvigilante.com',
    path: '',
    port : 443,
    method : 'GET',
    headers: {'User-Agent': 'request'}
    }

    options.path = "/"+ip_string+"/full";

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
