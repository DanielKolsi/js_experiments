
module.exports = function (req, res) {

  // parse parametres here (IP etc.)
  console.log("module.export, exporting!!!");

    res.writeHead(200, {
        'Content-Type': 'application/x-json-stream'
    });
    res.write('test-123abc');
    res.end();

};
