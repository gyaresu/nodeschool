var five = require('johnny-five')

var board = new five.Board()

board.on('ready', function () {

  var pot = new five.Sensor('A2')
  var servo = new five.Servo(9)

  pot.on('data', function () {
    servo.to(five.Fn.map(this.value, 0, 1023, 0, 179))
  })
})
