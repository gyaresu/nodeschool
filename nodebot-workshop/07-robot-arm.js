var five = require('johnny-five')
var board = new five.Board()

board.on('ready', function () {

  var pot = new five.Sensor('A2')
  var servo = new five.Servo(9)

  pot.on('read', function (err, value) {
    if (err) {
      throw err
    }

    servo.to(five.Fn.map(value, 0, 1023, 0, 179))
  })
})