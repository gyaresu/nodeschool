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
}
