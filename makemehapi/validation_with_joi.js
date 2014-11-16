var Hapi = require('hapi');
var server = Hapi.createServer('localhost', Number(process.argv[2] || 8080));
var Joi = require('joi');

var my_handler = function (request, reply) {
  reply('login successful');
};

server.route({
  method: 'POST',
  path: '/login',
  config: { 
    handler: my_handler,
    validate: {
        payload: Joi.object({
        isGuest: Joi.boolean().required(),
        username: Joi.when('isGuest', {is: false, then: Joi.required() }),
        password: Joi.string().alphanum(),
        accessToken: Joi.string().alphanum(),
      }).options({allowUnknown: true}).without('password', 'accessToken')
    }
  }
});


server.start();

