
console.log('test promise');

const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = new JSDOM(`<!DOCTYPE html>`);
global.window = window;
const $ = require('jQuery')(window);

window.$ = require('jquery')(window);
global.$ = require('jquery');
global.$.ajax = require('jquery');

var expect = require('chai').expect;
var server = require('../src/server');
var mapper = require('../product/IPMapper');


describe('Promises test suite', function() {
	before(function() {
		//example of resolving a Promise
		return Promise.resolve('resolve').then(function() {
			console.log("Promise resolved...");
		});
	});


  it('IPMapper test latitude', function() {
    var IP = "http://127.0.0.1:8000/ip/8.8.8.8"; // https://ipinfo.io/8.8.8.8
    var result = mapper.getResultDataForIP(IP);

    var lat = "37.38600";
    var lng = "-122.08380";
    var p1 = Promise.resolve(result.data.latitude);
    var p2 = Promise.resolve(result.data.longitude);
    return Promise.all([
			expect(p1).to.become(lat),
			expect(p2).to.become(lng)
		]);
	});


	it('comparing promises (lat & lng)', function() {
		var p1 = Promise.resolve('latitude');
		var p2 = Promise.resolve('longitude');

		return Promise.all([p1, p2]).then(function(values) {
			expect(values[0]).to.not.equal(values[1]);
		});
	});
});

	describe('Test Promise rejection', function() {
		it('with a rejection message', function() {
			var message = 'This Promise was rejected.';
      var message2 = 'And also this Promise was rejected with error.';
			var p = Promise.reject(message);
      var p2 = Promise.reject(new TypeError(message2));
      return Promise.all([
  			expect(p).to.be.rejectedWith(message),
  			expect(p2).to.be.rejectedWith(TypeError)
  		]);
		});
	});

		/*it('return a rejected promise', function() {
			var message = "I'm the party pooper";
			var stub = sinon.stub();
			stub.rejects(message);

			var a = arnold(stub);
			var quote = a.talkToTheHand();

			return expect(quote).to.be.rejectedWith(message);
		});
	});
});*/


/*
afterEach(function () {
  this.sandbox.restore()
})

it('should complete this test', function (done) {
  return new Promise(function (resolve) {
    assert.ok(true);
    resolve();
  })
    .then(done);
});

*/

/* for testing hooks
describe('hooks', function() {

  before(function() {
    // runs before all tests in this block
  });

  after(function() {
    // runs after all tests in this block
  });

  beforeEach(function() {
    // runs before each test in this block
  });

  afterEach(function() {
    // runs after each test in this block
  });
});
// testing different time-outs
describe('test suite for time-outs', function() {
  this.timeout(200);

  it('takes always less than 500ms', function(done){
    setTimeout(done, 500);
  });

  it('will take more than 1500ms', function(done){
    setTimeout(done, 2000);
  });
})

// promises: http://eloquentjavascript.net/17_http.html
function get(url) {
  return new Promise(function(succeed, fail) {
    var req = new XMLHttpRequest();
    req.open("GET", url, true);
    req.addEventListener("load", function() {
      if (req.status < 400)
        succeed(req.responseText);
      else
        fail(new Error("Request failed: " + req.statusText));
    });
    req.addEventListener("error", function() {
      fail(new Error("Network error"));
    });
    req.send(null);
  });
}

var readFile = Promise.denodeify(require('fs').readFile);
// now `readFile` will return a promise rather than
// expecting a callback

function readJSON(filename, callback){
  // If a callback is provided, call it with error as the
  // first argument and result as the second argument,
  // then return `undefined`. If no callback is provided,
  // just return the promise.
  return readFile(filename, 'utf8')
    .then(JSON.parse)
    .nodeify(callback);
}

function readFile(file) {
  return new Promise(function(succeed, fail) {
    var reader = new FileReader();
    reader.addEventListener("load", function() {
      succeed(reader.result);
    });
    reader.addEventListener("error", function() {
      fail(reader.error);
    });
    reader.readAsText(file);
  });
}*/
