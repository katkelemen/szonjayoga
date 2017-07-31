var Server = require('./index.js');
var Hoek = require('hoek');

Server.init(process.env.PORT || 3050, function (err,server) {
  Hoek.assert(!err,err);
});
