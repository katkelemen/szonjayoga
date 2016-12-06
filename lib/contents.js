exports.register = function (server, options, next) {

    server.route([
    {
      method: 'GET',
      path: '/',
      config: {
          description: 'return home page',
          handler: function(request, reply){
            return reply.view('home', {is_home_active: true});
          }
      }
    },
    {
        method: 'GET',
        path: '/classes',
        config: {
            description: 'return classes page',
            handler: function(request, reply){
              return reply.view('classes', {is_classes_active: true});
            }
        }
    },
    {
        method: 'GET',
        path: '/yoga',
        config: {
            description: 'return yoga page',
            handler: function(request, reply){
              return reply.view('yoga', {is_yoga_active: true});
            }
        }
    },
    {
        method: 'GET',
        path: '/aboutme',
        config: {
            description: 'return aboutme page',
            handler: function(request, reply){
              return reply.view('aboutme', {is_aboutme_active: true});
            }
        }
    },
    {
        method: 'GET',
        path: '/contact',
        config: {
            description: 'return contact page',
            handler: function(request, reply){
              return reply.view('contact', {is_contact_active: true});
            }
        }
    },
    {
        method: 'GET',
        path: '/events',
        config: {
            description: 'return events page',
            handler: function(request, reply){
              return reply.view('events', {is_events_active: true});
            }
        }
    },
    ]);
    return next();
};

exports.register.attributes = {
    name: 'Contents'
};
