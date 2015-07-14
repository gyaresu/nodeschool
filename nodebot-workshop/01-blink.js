var five = require('johnny-five')
var board = five.Board()

board.on('ready', function () {
  var led = new five.Led(13)
  led.strobe(1000)
})