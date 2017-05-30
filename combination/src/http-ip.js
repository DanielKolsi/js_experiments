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
             var result = JSON.parse(body); // JSON -> object
             console.log('result='+body);
             response.write(body);
             /*response.write('<br>Status: '+ result.data.status);
             response.write('<br>IPv4: '+ result.data.ipv4);
             response.write('<br>Hostname: '+ result.data.hostname);
             response.write('<br>Continent code: '+ result.data.continent_code);
             response.write('<br>Continent name: '+ result.data.continent_name);
             response.write('<br>Country ISO code: '+ result.data.country_iso_code);
             response.write('<br>Country name: '+ result.data.country_name);
             response.write('<br>Subdivision 1 ISO code: '+ result.data.subdivision_1_iso_code);
             response.write('<br>Subdivision 1 name: '+ result.data.subdivision_1_name);
             response.write('<br>Subdivision 2 ISO code: '+ result.data.subdivision_2_iso_code);
             response.write('<br>Subdivision 2 name: '+ result.data.subdivision_2_name);
             response.write('<br>City: '+result.data.city_name);
             response.write('<br>Latitude: '+result.data.latitude);
             response.write('<br>Longitude: '+result.data.longitude);
             response.write('<br>Metro code: '+ result.data.metro_code);
             response.write('<br>Time zone: '+ result.data.time_zone);
             response.write('<br>Postal code: '+ result.data.postal_code);

             response.write('<br>Accuracy radius: '+ result.data.accuracy_radius);*/
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
