var http = require('http');
var request = require("request");
var url = "https://ipvigilante.com/json/8.8.8.8";
var country = "country-x";
var querystring = require('querystring');


'use strict';
var https = require('https');
/*
var options = {
    host: 'ipvigilante.com',
    path: '/8.8.8.8/full',
    port : 443,
    method : 'GET',
    headers: {'User-Agent': 'request'}
};

https.get(options, function (res) {
    var json = '';
    res.on('data', function (chunk) {
        json += chunk;
    });
    res.on('end', function () {
        if (res.statusCode === 200) {
            try {
                var result = JSON.parse(json);
                console.log('-----------');
                console.log('Status: ', result.status);
                console.log('-----------');
                console.log('IPv4: ', result.data.ipv4);
                console.log('Hostname: ', result.data.hostname);
                console.log('Continent code: ', result.data.continent_code);
                console.log('Continent name: ', result.data.continent_name);
                country = result.data.country_iso_code;
                console.log('Country name: ', result.data.country_name);
                console.log('Subdivision 1 ISO code: ', result.data.subdivision_1_iso_code);
                console.log('Subdivision 1 name: ', result.data.subdivision_1_name);
                console.log('Subdivision 2 ISO code: ', result.data.subdivision_2_iso_code);
                console.log('Subdivision 2 name: ', result.data.subdivision_2_name);
                console.log('City name: ', result.data.city_name);
                console.log('Metro code: ', result.data.metro_code);
                console.log('Time zone: ', result.data.time_zone);
                console.log('Postal code: ', result.data.postal_code);
                console.log('Latitude: ', result.data.latitude);
                console.log('Longitude: ', result.data.longitude);
                console.log('Accuracy radius: ', result.data.accuracy_radius);
            } catch (e) {
                console.log('Error parsing JSON!');
            }
        } else {
            console.log('Status:', res.statusCode);
        }
    });
}).on('error', function (err) {
    console.log('Error:', err);
});

*/
module.exports = function (request, response) {

var url = request.url;
var ip_string = url.substr(4);
console.log('server_url='+url);
console.log('ip_string='+ip_string);
//console.log('REQUEST-FOR-PARAMS='+querystring.parse(request.url.substr(0)));

  var options = {
    host: 'ipvigilante.com',
    path: '',
    port : 443,
    method : 'GET',
    headers: {'User-Agent': 'request'}
    }
    //options.path = '/8.8.8.8/full';
    options.path = "/"+ip_string;

    var maybe = '';
    console.log('till here')
    //var ip_string = querystring.parse(options.host.substr(10));
    console.log('IP_STRING='+options.host.substr(10));

    var req = https.get(options, function(ress){
        var body = "";
        ress.on('data', function(data) {
            console.log('data came');
            body += data;
        });
        ress.on('end', function() {
            console.log('ended too');
            //maybe = JSON.parse(body);
            var result = JSON.parse(body);
            console.log('result='+result.data.city_name);
            response.write(result.data.city_name);
            response.end();
        });
    });
    console.log('here too man');
    req.on('error', function(e) {
        console.log('Problem with request: ' + e.message);
    });


}


function testi () {
  console.log('function-ASCII');
  var tmp = "ops";
  request({
      url: url,
      json: true
  }, function (error, response, body) {

      if (!error && response.statusCode === 200) {
        console.log("***BODY***"+body);
        country = body.data.country_name;
        console.log('COUNTRY: ', body.data.country_name);
        tmp = "HOO"; //body.data.country_name;
        return tmp; // body.data.country_name;
        //var result = JSON.parse(body);
          //console.log("JSON="+result.data.ipv4); // Print the json response
      } else {
        return "error";
      }
  })
  return tmp;
}
