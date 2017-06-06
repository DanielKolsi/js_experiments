console.log('test server');

var mocha = require('mocha');
var expect = require('chai').expect;
var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../src/server');
//var should = chai.should();
chai.use(chaiHttp);

//var Promise = require('es6-promise').Promise
var assert = require('assert');


describe('http-ip', function(done) {
  this.timeout(7000); // FIXME

  it('request for Help page', function(done) {
    chai.request(server)
      .get('/Help')
      .end(function(err, res){
        res.should.have.status(200);
        done();
      });
    });
    it('request for About page', function(done) {
      chai.request(server)
        .get('/About')
        .end(function(err, res){
          res.should.have.status(200);
          done();
        });
    });
    it('request for non-existent page', function(done) { // response: 404
      chai.request(server)
        .get('/Hello')
        .end(function(err, res){
          res.should.have.status(404);
          done();
        });
    });
    it('request for valid IP & data labels', function(done) {
      chai.request(server)
        .get('/ip/172.217.5.174')
        .end(function(err, res){
          res.should.have.status(200);
          //console.log(res);
          res.body.should.be.a('object');
          done();
        });
    });
    it('request for valid IP & data content', function(done) {
      chai.request(server)
        .get('/ip/8.8.8.8')
        .end(function(err, res){
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.should.have.property('text');
          done();
        });
    });

    it('data label: hostname', function(done) {
      chai.request(server)
        .get('/ip/8.8.8.8')
        .end(function(err, res){
          res.text.should.contain("hostname");
          done();
        });
    });
    it('data label: continent_code', function(done) {
      chai.request(server)
        .get('/ip/8.8.8.8')
        .end(function(err, res){
          res.text.should.contain("continent_code");
          done();
        });
    });
    it('data label: continent_name', function(done) {
      chai.request(server)
        .get('/ip/8.8.8.8')
        .end(function(err, res){
          res.text.should.contain("continent_name");
          done();
        });
    });
    it('data label: city_name', function(done) {
      chai.request(server)
        .get('/ip/8.8.8.8')
        .end(function(err, res){
          res.text.should.contain("city_name");
          done();
        });
    });
    it('data label: metro_code', function(done) {
      chai.request(server)
        .get('/ip/8.8.8.8')
        .end(function(err, res){
          res.text.should.contain("metro_code");
          done();
        });
    });
    it('data label: latitude', function(done) {
      chai.request(server)
        .get('/ip/8.8.8.8')
        .end(function(err, res){
          res.text.should.contain("latitude");
          done();
        });
    });
    it('data label: longitude', function(done) {
      chai.request(server)
        .get('/ip/8.8.8.8')
        .end(function(err, res){
          res.text.should.contain("longitude");
          done();
        });
    });
    it('data label: accuracy_radius', function(done) {
      chai.request(server)
        .get('/ip/8.8.8.8')
        .end(function(err, res){
          res.text.should.contain("accuracy_radius");
          done();
        });
    });

    it('data content: multiple checks', function(done) {
      chai.request(server)
        .get('/ip/172.217.5.174')
        .end(function(err, res){
          res.text.should.contain("172.217.5.174");
          res.text.should.contain("94043");
          res.text.should.contain("37.41920");
          res.text.should.contain("-122.05740");
          res.text.should.contain("Mountain View");
          done();
        });
    });
    it('data content: America\\/Los_Angeles', function(done) {
      chai.request(server)
        .get('/ip/172.217.5.174')
        .end(function(err, res){
          res.text.should.contain("America\\/Los_Angeles");
          done();
        });
    });

    it('data content: Mountain View', function(done) {
      chai.request(server)
        .get('/ip/8.8.8.8')
        .end(function(err, res){
          res.text.should.contain("Mountain View");
          done();
        });
    });

    it('data content: California', function(done) {
      chai.request(server)
        .get('/ip/172.217.5.174')
        .end(function(err, res){
          res.text.should.contain("California");
          done();
        });
    });

    it('request for valid IP (Google.com)', function(done) {
      chai.request(server)
        .get('/ip/216.58.193.46')
        .end(function(err, res){
          res.should.have.status(200);
          done();
        });
    });

    it('request for invalid IP', function(done) { // add promise (time-out issue)
      setTimeout(done, 5000);
      chai.request(server)
        .get('/ip/232.1.45')
        .end(function(err, res){
          //res.should.have.status(400);
          done();
        });
    });
    it('request for /', function(done) {
      chai.request(server)
        .get('/')
        .end(function(err, res){
          res.should.have.status(200);
          done();
        });
    });
});
