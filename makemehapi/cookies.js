var Hapi = require('hapi');

var options = {
  state: {
    cookies: {
      parse: true,
      failAction: 'log'
    }
  }
};

var server = Hapi.createServer('localhost', Number(process.argv[2] || 8080), options);

var set_handler = function (req, res) {
  res({message: 'success'}).state('session', {key: 'makemehapi'});
}; 

var get_handler = function (req, res) {
  if (req.state.session)
    res({user: 'hapi'});
  else
    res(err, 'unauthorized');
};
    
server.route({
  method: 'GET',
  path: '/set-cookie',
  config: {
    handler: set_handler,
  }
});

server.route({
  method: 'GET',
  path: '/check-cookie',
  config: {
    handler: get_handler,
  }
});

server.state('session', {
  path: '/{path*}',
  ttl: 10,
  encoding: 'base64json',
  domain: 'localhost'
});


server.start();

