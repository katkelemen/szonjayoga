var Hapi = require('hapi');
var Path = require('path');
var Inert = require('inert');

exports.init = function(port,next){
  var server = new Hapi.Server({
  });

  server.connection({port: port});

  server.state('data', {
    ttl: null,
    isSecure: false,
    isHttpOnly: true,
    encoding: 'none',
    clearInvalid: false, // remove invalid cookies
    strictHeader: true // don't allow violations of RFC 6265
  });

//REMEMBER TO ADD  HERE
  server.register([Inert], function(err){
    if (err) {
      return next(err);
    }
  });

  server.route({
      method: 'GET',
      path: '/{param*}',
      handler: {
          directory: {
              path: 'public',
              defaultExtension: 'html',
              redirectToSlash: true,
              index: "/index.html"
          }
      }
  });

  server.start(function (err) {
    console.log('Server running at:', server.info.uri);
    return next(err,server);
  });

module.exports = server;
};
