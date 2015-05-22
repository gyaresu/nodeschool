var http = require('http');
var bl = require('bl');

//get data from url.
function curl(url) {
  console.log(url);
  http.get(url, function (res) {
    res.pipe(bl(function (err, data) {
      if (err) throw err;
        return data;
    }));
  });
}

//convert to string and print
function log(thing) {
  console.log(thing.toString());
}

//map this array of urls to the output of the curl function / then print each.
var thing = [process.argv[2], process.argv[3], process.argv[4]].map(curl);
console.log(thing);


