var http = require('http');
var ecstatic = require('ecstatic');
var port = 8000;
var serveStaticFiles = require('ecstatic')({ root: './'});

/*http.createServer(ecstatic({ root: __dirname + '/public' }), function (req, res) {

    console.log('req='+req.url);
    if (req.url.indexOf('/ip') === 0) {
        return require('http-ip')(req, res); // returns EXPORT
    }

    // default: handle the request as a static file
    //serveStaticFiles(req, res);
}).listen(port);*/

http.createServer(function (req, res) {

 // parse params
    console.log('req='+req.url);
   if (req.url.indexOf('/ip') === 0) {
        console.log('was IP');
        return require('./http-ip')(req, res); // returns EXPORT
    }

    // default: handle the request as a static file
    serveStaticFiles(req, res);
}).listen(port);


console.log('Listening on http://localhost:%d', port);
