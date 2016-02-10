exports.register = function (server, options, next) {

    server.route([
        {
          method: 'GET',
          path: '/assets/{params*}',
          config: {
              description: 'load assests',
              handler: {
                  directory: {
                      path: 'assets'
                  }
              }
          }
        },
        {
          method: 'GET',
          path: '/favicon.jpg',
          config: {
              description: 'load favicon',
              handler: function(request, reply) {
                reply.file('favicon.jpg');
              }
          }
        }
  ]);
    return next();
};

exports.register.attributes = {
    name: 'Assets'
};
