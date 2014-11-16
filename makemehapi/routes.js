var Hapi = require('hapi')
var server = Hapi.createServer('localhost', Number(process.argv[2] || 8080));

var handler = function (request, reply) {
  reply('Hello ' + encodeURIComponent(request.params.name));
}

server.route({method: 'GET', path: '/{name}', handler: handler});

server.start();

