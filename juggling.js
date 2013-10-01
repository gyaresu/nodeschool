<<<<<<< HEAD
module.exports = function (url1, url2, url3, callback) {
  var http = require('http');
  var bl = require('bl');

  var fetch = function (thing) {
    http.get(input, function(err, request) {
      if (err) 
        return console.error('There was an error: ', err);
      request.pipe(bl(function (err, data) {
        if (err)
          return console.error(data);
        return data.toString();
    }));
  });
  var one = fetch(url1)
  var two = fetch(url2)
  var three = fetch(url3)
  callback([one, two, three]);
  }
=======
var http = require('http')

function juggle(err, a, b, c, callback) {
  if (err)
    console.error('There was an error: ', err)

  alpha = gather(a)
  bravo = gather(b)
  charlie = gather(c)

  display(a, b, c)
}

function gather(x) {
  http.get(x, function (request) {
    request.setEncoding('utf8')
  })
>>>>>>> 62d0673a604c5b73513d40874d8d80fdd725e336
}
