var Hapi = require('hapi');
var Path = require('path');
var Inert = require('inert');
var Assets = require('./assets.js');
var Home = require('./home.js');
var Handlebars = require('handlebars');
var Vision = require('vision');

exports.init = function(port,next){
  var server = new Hapi.Server({
  });

  server.connection({port: port});

//REMEMBER TO ADD  HERE
server.register([Inert, Assets, Home, Vision], function (err) {
      // $lab:coverage:off$
      if (err) {
          return next(err);
      }
      // $lab:coverage:on$

      server.views({
          engines: {
              html: Handlebars
          },
          relativeTo: __dirname + '/../views/',
          path: '.',
          layout: 'default',
          layoutPath: 'layout',
          // helpersPath: 'helpers',
          // partialsPath: 'partials'
      });

      server.start(function (err) {
          return next(err, server);
      });
    });
  module.exports = server;
};
