

This demonsrative application ("combination") maps a given user input IP address
(internet protocol) to a geographical location and provides additional information to a
HTML table from the IP. This service uses Google Maps and
another third party service (ipvigilante.com) to provide IP related data.

Table and/or table headers can be cleaned & removed on will.

User can additionally place a marker to given latitude and longitude values.


* Running the application and testing

1) npm install
2) npm start
Unit testing: 3) npm test

* Used technologies explained

* Server side

In addition to the explained functionality, the purpose of this small application is to
show how different Javascript technics, frameworks and libraries play together. The
application is purportedly build using different JS technics and libraries and those
combinations of technics don't necessary represent the optimal way of building this
kind of small and simple application. That is, some overhead might exist just for learning
and demonstrative purposes.

The server side uses Node framework + Express and Ecstatic Node module to read
and serve static files.

* Client side

The client side uses Javascript (+AJAX), JQuery, ReactJS (+Babel), JSON CSS and HTML5.

* Main folder structure:


 index.html // starting point for http://127.0.0.1:8000/

 index.js // ReactJS UI + rendering functionality for input & table

 package.json

 -- config // constants, server URLs etc.

 -- css    // style sheet

 -- product // client JS for AJAX & mapping IP to geo map etc.

 -- src  // server side

 -- test // unit test suite related code & config


* Unit testing suite

The unit test suite uses Mocha and Chai (+Sinon). Promises is used for testing
asynchronous code.

Some of the technics and libraries used:

* ExpressJS, ReactJS, Babel
* Promises: https://davidwalsh.name/promises
* callbacks (async, JSON)
* try/catch & error handling
* design patterns, especially the module pattern (https://toddmotto.com/mastering-the-module-pattern/)
* third-party API in server & JSON responses based on client parametrization
* test suite (Mocha+Chai+Sinon)
* CSS
* separation of config
   - the config folder itself has two files config.js and a separate sensitive.js
     which should contain sensitive information like passwords (and in normal case
    should be omitted from GitHub)
