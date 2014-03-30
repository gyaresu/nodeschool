var stuff = [];
process.stdin.on('data', function (data) {
  //console.log(data.toString());
  stuff.push(data);
});

process.stdin.on('end', function () {
  //console.log(stuff);
  var buf = new Buffer.concat(stuff);
  console.log(buf);
});


