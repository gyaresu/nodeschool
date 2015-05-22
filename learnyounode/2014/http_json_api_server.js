var http = require('http');
var url = require('url');

function parsetime (item) {
  return {
    hour: item.getHours(),
    minute: item.getMinutes(),
    second: item.getSeconds()
  };
}

function unixtime (item) {
  return { unixtime: item.getTime() };
}

http.createServer(function (req, res) {
  //console.log(req.url);
  var x = url.parse(req.url, true);
  var time = new Date(x.query.iso);
  var data;

  if (x.pathname == '/api/parsetime')
    data = parsetime(time);
    //data = { "hour": ("0"  + time.getHours()).slice(-2), "minute": ("0" + time.getMinutes()).slice(-2), "second": ("0" + time.getSeconds()).slice(-2)}; 

  else if (x.pathname == '/api/unixtime')
    data = unixtime(time);
    
  //console.log(data);
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(data));
    
}).listen(process.argv[2]);



