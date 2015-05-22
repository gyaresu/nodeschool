var http = require('http');

http.get(process.argv[2], function (request) {
  request.setEncoding('utf8');
  request.on("data", function (data) {
    console.log(data);
  });
});
