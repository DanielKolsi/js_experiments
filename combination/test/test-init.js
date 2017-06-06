// Moacha, CHAI + Sinon setup

console.log('initing tests');
var mocha = require('mocha');
var expect = require('chai').expect;

var chai = require('chai');
var chaiHttp = require('chai-http');
chai.use(require('chai-as-promised'));
require('chai').should();
var sinon = require('sinon')
var sinpro = require('sinon-as-promised');
//var should = chai.should();

var Promise = require('es6-promise').Promise
