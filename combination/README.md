

This demonsrative application ("combination") maps a given user input IP address (internet protocol) to a geographical location and provides additional information to a table from the IP. This service user Google Maps and
another third party service (ipvigilante.com) to provide IP related data. Table can be cleaned & removed on will.

User can also give a latitude and longitude values and add a marker to the map to
correspond that position.


* Running the application and testing

1) npm install
2) npm start
3) npm test


* Used technologies explained *

Server side

In addition to this functionality, the purpose of this small application is to
show how different Javascript technics, frameworks and libraries play together.

The server side uses Node framework + Express and Ecstatic Node module to read
and serve static files.

Client side

The client side uses Javascript (+AJAX), JQuery, ReactJS (+Babel), JSON and CSS.


Main folder structure

 index.html    --  starting point for http://127.0.0.1:8000/
 index.js      --  ReactJS UI + rendering functionality for input & table
 package.json

Directory structure:

 -- config // constants, server URLs etc.
 -- css    // style sheet
 -- product // client JS for AJAX & mapping IP to geo map etc.
 -- src  // server side
 -- test // unit test suite related code & config

Unit testing suite

The unit test suite uses Mocha and Chai. Promises is used for testing
asynchronous code.

Some of the technics and libraries used:

* ExpressJS, ReactJS, Babel
* Promises: https://davidwalsh.name/promises
* callbacks (async, JSON)
* catch & error handling
* design patterns, especially the module pattern (https://toddmotto.com/mastering-the-module-pattern/)
* third-party API in server & JSON responses based on client parametrization
* test suite (Mocha)
* CSS
* separate config 




