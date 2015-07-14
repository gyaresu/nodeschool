var five = require('johnny-five')
var dgram = require('dgram')
var board = new five.Board()
var socket = dgram.createSocket('udp4')

socket.bind(1337)

board.on('ready', function () {
  var piezo = new five.Piezo(8)

  socket.on('message', function () {
    piezo.play({
      // song is composed by a string of notes
      // a default beat is set, and the default octave is used
      // any invalid note is read as "no note"
      song: 'C D F D A - A A A A G G G G - - C D F D G - G G G G F F F F - -',
      beats: 1 / 4,
      tempo: 100
    })
  })
})