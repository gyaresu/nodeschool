var http = require('http')
var url = require('url')

var server = http.createServer(function (req, res) {
  var q = url.parse(req.url, true)
  var iso = new Date(q.query.iso).toLocaleTimeString()
  var time = {}
  if (q.pathname === '/api/parsetime') {
    time.hour = +iso.slice(1, 2)
    time.minute = +iso.slice(3, 5)
    time.second = +iso.slice(6, 8)
    return res.end(JSON.stringify(time))
  } else if (q.pathname === '/api/unixtime') {
    time.unixtime = Date.parse((q.query.iso))
    return res.end(JSON.stringify(time))
  }
})

server.listen(process.argv[2])