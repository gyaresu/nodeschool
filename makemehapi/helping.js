var Hapi = require('hapi');
var server = Hapi.createServer('localhost', Number(process.argv[2] || 8080));
var Path = require('path');

/*var handler = function (request, reply) {
  reply('Hello ' + encodeURIComponent(request.params.name));
}
*/

server.views({
  engines: {
             html: require('handlebars')
           },
  path: Path.join(__dirname, 'templates'),
  helpersPath: Path.join(__dirname, 'helpers'),
});

server.route({
  method: 'GET',
  path: '/',
  handler: {
    view: "index.html"
  }
});

server.start();

