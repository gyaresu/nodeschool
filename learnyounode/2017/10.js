// Time Server (10 of 19)
const net = require('net')
var strftime = require('strftime')
var strftimeEDT = strftime.timezone('-0400')

const port = process.argv[2]

var server = net.createServer(function (socket) {
  // date stuff
  socket.end(strftimeEDT('%F %H:%M%n', new Date()))
})

server.listen(port)