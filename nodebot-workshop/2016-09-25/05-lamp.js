var five = require('johnny-five')

var board = new five.Board()

board.on('ready', function () {

  var sensor = new five.Sensor('A0')
  var led = new five.Led(9)

  sensor.on('data', function () {
    if (this.value > 600) {
      led.on()
    } else {
      led.off()
    }
  })
})
