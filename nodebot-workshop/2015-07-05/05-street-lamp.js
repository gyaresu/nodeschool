var five = require('johnny-five')
var board = new five.Board()

board.on('ready', function () {

  var photoresistor = new five.Sensor('A0')
  var led = new five.Led(9)

  photoresistor.on('data', function () {
    this.value >= 600 ? led.on() : led.off()
  })
})