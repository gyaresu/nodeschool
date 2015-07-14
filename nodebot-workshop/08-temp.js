var five = require('johnny-five')
var dnode = require('dnode')

var server = dnode({})

server.listen(1337)

var board = new five.Board()
var temp = new five.Temperature('A0')
