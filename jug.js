var http = require('http');
var bl = require('bl');

function gather(url1, url2, url3, callback) {
  // do stuff
  var first = collect(url1);
  var second = collect(url2);
  var third = collect(url3);
  var results = [first, second, third];
  callback(results);

}

function collect()
