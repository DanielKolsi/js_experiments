var mocha = require('mocha');
var expect = require('chai').expect;
var sinon = require('sinon');
var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../src/server');
var should = chai.should();
chai.use(chaiHttp);

//var Promise = require('es6-promise').Promise
var assert = require('assert');



describe('http-ip', function(done) {

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
    it('request for valid IP', function(done) {
      chai.request(server)
        .get('/ip/8.8.8.8')
        .end(function(err, res){
          res.should.have.status(200);
          //console.log(res);
          res.body.should.be.a('object');
          //res.body.should.have.property('SUCCESS');
          res.should.have.property('text');
          //console.log(res.text.should.have("city_name"));
          //res.should.have.text(); // text/plain
          //res.should.be.json;
          //res.body.should.be.a('array');
          //res.body.SUCCESS.city_name.should.equal('Helsinki');
          //res.data.city_name.should.have("jooop");
          //result.data.city_name
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
      chai.request(server)
        .get('/ip/232.1.45')
        .end(function(err, res){
          res.should.have.status(400);
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
