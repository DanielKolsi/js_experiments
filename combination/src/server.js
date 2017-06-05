var http = require('http');
var serveStaticFiles = require('ecstatic')({ root: './'});

var express = require('express');
var app = express();

var port = 8000;
var IP = '/ip'; // '/ip' path from URL
var position = 0;
var DEBUG = false;

if (DEBUG) { // for logging & tracing requests
  app.use(function(request, response, next) {
    console.log("Request: " + request.method + " to URL: " + request.url);
    next();
  });
}

// just for testing Express routing & response text
app.get("/About", function(request, response) {
  response.end("(C) Daniel Kolsi - All rights reversed.");
});

// just for testing Express routing & redirect to a new page
app.get("/Help", function(request, response) {
  response.redirect("http://www.faceop.com");
});

// Express middleware
app.use(function(request, response) {

  if (request.url.indexOf(IP) === position) {
       return require('./http-ip')(request, response); // returns EXPORT
   }
   serveStaticFiles(request, response);
});


http.createServer(app).listen(port);
console.log('Listening on http://127.0.0.1:%d', port);
module.exports = app;
