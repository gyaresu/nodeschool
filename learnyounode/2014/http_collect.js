var http = require('http')
  , bl = require('bl');


http.get(process.argv[2], function callback (res) {
  res.setEncoding('utf8');
  res.pipe(bl(function (err, data) {
    console.log(data.length);
    console.log(data.toString());
  }));
});
