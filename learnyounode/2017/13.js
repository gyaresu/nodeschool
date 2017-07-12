// HTTP JSON API Server (13 of 13)
var http = require('http')
var url = require('url')

var port = process.argv[2]

var server = http.createServer(function (req, res) {
  var path = url.parse(req.url, true).pathname
  var dateObj = url.parse(req.url, true).query.iso
  var date = new Date(dateObj)
  res.writeHead(200, { 'Content-Type': 'application/json' })

  if (path == "/api/unixtime") {
    // return HMS
    res.end(JSON.stringify({unixtime: date.getTime()}))
    console.log(date.getTime())
    
  }
  else if ( path == "/api/parsetime") {

    res.end(JSON.stringify({"hour":date.getHours(),"minute":parseInt(date.getMinutes(), 10),"second":date.getSeconds()}))
  }
})

server.listen(port)