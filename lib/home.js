exports.register = function (server, options, next) {

    server.route([
    {
        method: 'GET',
        path: '/',
        config: {
            description: 'return home page',
            handler: function(request, reply){
              return reply.view('home');
            }
        }
    },
    // {
    //     method: 'GET',
    //     path: '/myReviews',
    //     config: {
    //         description: 'return home page',
    //         handler: function(request, reply){
    //           return reply.view('myReviews');
    //         }
    //     }
    // }
    ]);
    return next();
};

exports.register.attributes = {
    name: 'Home'
};
