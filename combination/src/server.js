var http = require('http');
var ecstatic = require('ecstatic');
var port = 8000;
var serveStaticFiles = require('ecstatic')({ root: './'});


http.createServer(function (req, res) {

   if (req.url.indexOf('/ip') === 0) {
        return require('./http-ip')(req, res); // returns EXPORT
    }

    serveStaticFiles(req, res);
}).listen(port);


console.log('Listening on http://127.0.0.1:%d', port);
