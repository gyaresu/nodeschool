var http = require('http');
var bl = require('bl');

var content = [];
var sites = {first: "http://thing.com", second: "http://gareth.com.au", third: "http://gyaresu.org"};

function parallel(callbacks, callback) {
  var temp = 0;
  for (var x in callbacks) {
    http.get(callbacks[x], function (res) {
      //console.log(callbacks[x]);
      res.setEncoding('utf8');
      res.pipe(bl(function (err, data) {
        if (err) throw err;
        content.append[data];
        //return (content[x] = data.toString());
        //console.log("callback on bl " + x);
      }));
    });
  }
  return content;
}

parallel(sites, function (data) {
  //var content = {first: 'x', second: 'x', third: 'x' };
  for (var x in data) {
    //console.log("results: " + data + " " + x);
    console.log(data.toString());
  }
});
