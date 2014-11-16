var Hapi = require('hapi');
var server = Hapi.createServer('localhost', Number(process.argv[2] || 8080));
var Joi = require('joi');

var my_handler = function (request, reply) {
  console.log(request.payload);
  var body = '';

  request.payload.file.on('data', function (data){
    body += data;
  });

  
  request.payload.file.on('end', function (){
    {
      var result = {
        description: request.payload.description,
        file: {
          data: body,
          filename: request.payload.file.hapi.filename,
          headers: request.payload.file.hapi.headers
        }
      };
    reply(JSON.stringify(result));
    }
  });
};

server.route({
  method: 'POST',
  path: '/upload',
  config: { 
    payload: {
      output: 'stream',
      parse: true
    },
    handler: my_handler,
  }
});


server.start();

