var Server = require('./index.js');
var Hoek = require('hoek');

Server.init(process.env.PORT || 3050, function (err,server) {
	console.log("Go to http://localhost:3050/");
  Hoek.assert(!err,err);
});
