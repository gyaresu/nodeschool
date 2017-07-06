var five = require('johnny-five')
var dgram = require('dgram')

var server = dgram.createSocket('udp4')

server.bind(1337, function () {
  console.log('Server Created')
})

var board = new five.Board()

board.on('ready', function () {

  var piezo = new five.Piezo(8)

  server.on('message', function () {
    piezo.play({
      tempo: 100,
      song: [
        ['c4', 1]
      ]
    })
  })
})
