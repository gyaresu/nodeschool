var Hapi = require('hapi');
var server = Hapi.createServer('localhost', Number(process.argv[2] || 8080));
var fs = require('fs');
var Path = require('path');
var rot13 = require('rot13-stream')(); // WTF double brackets? todo: look that shit up

// todo: Read up on 'hoisting' and named functions
// http://www.kenneth-truyers.net/2013/04/20/javascript-hoisting-explained/
// https://kangax.github.io/nfe/

server.route({
  method: 'GET',
  path: '/',
  config: { 
    // seriously? config?
    // todo: lookup API docs on server.route.config
    handler: function (request, reply) { // this doesn't currently work.
      var public_file = fs.createReadStream(Path.join(__dirname, '/public/pursuit.txt'));
      reply(public_file.pipe(rot13));
    }
  }
});

server.start();

