const express = require('express');
const app = express();
const config = require('./config.js');
const routes = require('./src/router.js');

//  Set view engine as Embedded Java Script
app.set('view engine', 'ejs');

//  Set our statics to use CSS and JS
app.use(express.static("public"));

//  Using all routes
app.use('/', routes);

//  Listen to the port specified in config.js
app.listen(config.port, () => {
  console.log('App listening on port ' + config.port);
});