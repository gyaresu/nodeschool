var http = require('http')
var url = require('url')

var server = http.createServer(function (req, res) {
  if (req.url.parse == '/api/parsetime')
    res.writeHead(200, { 'Content-Type': 'application:json' })
    res.end(req.url.pathname)

  if (req.url.toString() == '/api/unixtime')
    console.log('unixtime')
    
  res.end("end")

})

server.listen(8000)
