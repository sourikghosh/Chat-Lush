'use strict';

// Chat application dependencies
var express = require('express');
var app = express();
var path = require('path');
var flash = require('connect-flash');

// Chat application components
var routes = require('./app/routes');
var session = require('./app/session');
var passport = require('./app/auth');
var ioServer = require('./app/socket')(app);
var logger = require('./app/logger');

// Set the port number
var port = process.env.PORT;

// View engine setup
app.set('views', path.join(__dirname, 'app/views'));
app.set('view engine', 'ejs');

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

app.use(session);
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.use('/', routes);

// Middleware to catch 404 errors
app.use(function (req, res, next) {
  res.status(404).sendFile(process.cwd() + '/app/views/404.html');
});

ioServer.listen(port);
