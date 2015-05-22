var http = require('http');
var bl = require('bl');
var group = ['http://thing.com', 'http://gareth.com.au', 'http://gyaresu.org'];
var result = [];

function collect (urls) {
  //get each url
  for (var x in urls)
    result[x] = fetch(urls[x]);
    console.log(result[x]);
/*
  var url1 = fetch(urls[0]);
  var url2 = fetch(urls[1]);
  var url3 = fetch(urls[2]);
  */
}

function fetch (item) {
  http.get(item, function callback (res) {
    res.setEncoding('utf8');
    res.pipe(bl(function (err, data) {
      var temp = data.toString();
      return temp;
    }));
  });
}

/*
function show (item) {
  for (var x in item)
    console.log(item[x] + " " + x);
}
*/

collect(group, function (item) {
  console.log(item);
  for (var x in item)
    console.log(item[x] + " " + x);
});

