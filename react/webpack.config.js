var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'client/src/public');
var APP_DIR = path.resolve(__dirname, 'client/src/app');

var config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  }
};

module.exports = config;
