var http = require('http');

http.get(process.argv[2], function callback (res) {
  res.setEncoding('utf8');
  res.on('data', function (x) {
    console.log(x);
  });
});

