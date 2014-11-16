var Hapi = require('hapi');
var server = Hapi.createServer('localhost', Number(process.argv[2] || 8080));
var Joi = require('joi');

var my_handler = function (request, reply){
  reply('hello');
};

server.route({
  method: 'GET',
  path: '/chickens/{breed}',
  handler: my_handler,
  config: { 
    validate: {
      params: {
        breed: Joi.string().required()
      }
    }
  }
});

server.start();

