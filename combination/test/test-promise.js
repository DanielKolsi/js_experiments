console.log('test promise');

var expect = require('chai').expect;
var server = require('../src/server');


describe('Promises', function() {
	before(function() {
		//example of resolving a Promise
		return Promise.resolve('resolve').then(function() {
			console.log("Promise resolved...");
		});
	});

	it('object comparison', function() {
		var user = { first: 'John', last: 'Matrix' };
		var p = Promise.resolve(user);
		return expect(p).to.become(user);
	});

	it('property comparison', function() {
		var name = 'Kindergarten Cop';
		var movie = { name: name, year: 1990 };
		var p = Promise.resolve(movie);

		return expect(p.then(function(o) { return o.name; })).to.become(name);
	});

	it('multiple promise assertions', function() {
		var msg1 = 'You are not you';
		var msg2 = 'You are me';

		var p1 = Promise.resolve(msg1);
		var p2 = Promise.resolve(msg2);

		return Promise.all([
			expect(p1).to.become(msg1),
			expect(p2).to.become(msg2)
		]);
	});

	it('comparing multiple promises', function() {
		var p1 = Promise.resolve('Get up');
		var p2 = Promise.resolve('Get down');

		return Promise.all([p1, p2]).then(function(values) {
			expect(values[0]).to.not.equal(values[1]);
		});
	});

	describe('rejected promises', function() {
		it('with a message', function() {
			var message = 'Rubber baby buggy bumpers';
			var p = Promise.reject(message);
			return expect(p).to.be.rejectedWith(message);
		});

		it('with a specific error type', function() {
			var p = Promise.reject(new TypeError('Hey, christmas tree!'));
			return expect(p).to.be.rejectedWith(TypeError);
		});
	});

	describe('with stubs', function() {
	/*	it('return a resolved promise', function() {
			var message = 'Who is your daddy, and what does he do?';
			var stub = sinon.stub();
			stub.resolves(message);

      //var a = server.regresp(stub, message);
			//var a = server(stub);
      //var a = IPMapper.mapIP(5, 5);
			var quote = a.talkToTheHand();

			return expect(quote).to.become(message);
		});*/

		/*it('return a rejected promise', function() {
			var message = "I'm the party pooper";
			var stub = sinon.stub();
			stub.rejects(message);

			var a = arnold(stub);
			var quote = a.talkToTheHand();

			return expect(quote).to.be.rejectedWith(message);
		});*/
	});
});


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

/*
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

  // test cases
});

describe('a suite of tests', function() {
  this.timeout(500);

  it('should take less than 500ms', function(done){
    setTimeout(done, 300);
  });

  it('should take less than 500ms as well', function(done){
    setTimeout(done, 250);
  });
})

// promises: http://eloquentjavascript.net/17_http.html
function get(url) {
  return new Osdfhkjhk(function(succeed, fail) {
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
