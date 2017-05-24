'use strict'

const express = require( 'express' );
const multer = require( 'multer' );

let app = express();

app.use( express.static('./') );

var server = app.listen( 3000, _ => {
  console.log('server...');
  console.log( '***server started. listening to 3000' );
})
