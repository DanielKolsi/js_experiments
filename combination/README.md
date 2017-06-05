

This application maps a given user input IP address (internet protocol) to a geographical location
and provides additional information to a table from the IP. This service user Google Maps and
another third party service (ipvigilante.com) to provide IP related data.

User can also give a latitude and longitude values and add a marker to the map to
correspond that position.


* Used technologies explained *

Server side

In addition to this functionality, the purpose of this small application is to
show how different Javascript technics, frameworks and libraries play together.

The server side uses Node framework + Express and Ecstatic Node module to read
and serve static files.

Client side

The client side uses Javascript (+AJAX), JQuery, ReactJS (+Babel), JSON and CSS.


Main folder structure

 index.html
 index.js
 package.json
 -- config // constants, server URLs etc.
 -- css
 -- src  // server side
 -- test // unit test suite related code & config

Unit testing suite

The unit test suite uses Mocha and Chai. Promises is used for testing
asynchronous code.


-----------------
Combines multiple Javascript libraries + technics, e.g.
ReactJS, Express, Node, Babel..

* ExpressJS, ReactJS
* Promises: https://davidwalsh.name/promises
* callbacks (async)
* catch & error handling
* map() + reduce() + filter()
* IIFE "iffy"
* mix-ins
* design patterns, especially the module pattern (https://toddmotto.com/mastering-the-module-pattern/)
* third-party API in server & JSON responses based on client parametrization
* test suite (Mocha)
----
TODO
* Unicode symbols
* CSS
* table + 2 headers
* code modularization, function closures
* config ++
* directory structure check
* tests
* check error handling (try/catch etc.)
* comments
* UI fixes, hide table headers etc.
* remove hard coding (IPs etc.)
* server side config?!
* Mocha + Chai: https://github.com/DanielKolsi/node-mocha-chai-tutorial/blob/master/test/test-server.js
* check package.json & correct dependencies (versions)
* Babel (production version)
* arrow functions (to tests?)

http://eloquentjavascript.net/
https://medium.com/javascript-scene/reduce-composing-software-fe22f0c39a1d
