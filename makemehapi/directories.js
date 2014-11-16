var Hapi = require('hapi');
var server = Hapi.createServer('localhost', Number(process.argv[2] || 8080));

/*var handler = function (request, reply) {
  reply('Hello ' + encodeURIComponent(request.params.name));
}
*/

server.route({
  method: 'GET',
  path: '/foo/bar/baz/{name}',
  handler: {
    directory: {path: './public'}
  }
});

server.start();

