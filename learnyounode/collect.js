var http = require('http')
var bl = require('bl')

http.get(process.argv[2], function (request) {
  //request.setEncoding('utf8');
  request.pipe(bl(function (err, data) {
    if (err)
      return console.error(data)
    console.log(data.toString().length);
    console.log(data.toString());
  }));
});

