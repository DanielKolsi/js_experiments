var http = require('http');
var ecstatic = require('ecstatic');
var port = 8000;
var serveStaticFiles = require('ecstatic')({ root: './'});

var express = require('express');
var app = express();
var position = 0;
var DEBUG = false;


if (DEBUG) { // for logging & tracing requests
  app.use(function(request, response, next) {
    console.log("Request: " + request.method + " to URL: " + request.url);
    next();
  });
}


app.get("/About", function(request, response) {
  response.end("(C) Daniel Kolsi - All rights reversed.");
});

app.get("/Help", function(request, response) {
  response.redirect("http://www.faceop.com");
});

// Express middleware
app.use(function(request, response) {

  if (request.url.indexOf('/ip') === position) {
       return require('./http-ip')(request, response); // returns EXPORT
   }
   serveStaticFiles(request, response);
});

http.createServer(app).listen(port);
console.log('Listening on http://127.0.0.1:%d', port);
