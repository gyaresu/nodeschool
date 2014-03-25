var http = require('http');
var bl = require('bl');

var sites = {first: "http://thing.com", second: "http://gareth.com.au", third: "http://gyaresu.org"};
var content = {first: 'x', second: 'x', third: 'x' };

function parallel(callbacks, callback) {
  for (var x in callbacks) {
    http.get(callbacks[x], function (res) {
      res.setEncoding('utf8');
      res.pipe(bl(function (err, data) {
        if (err) throw err;
        console.log(x);
        return (content[x] = data.toString());
        //console.log("callback on bl " + x);
      }));
    });
  }
}

parallel(sites, function (data) {
  for (var x in content) {
    console.log("content: " + content + " " + x);
  }
});
