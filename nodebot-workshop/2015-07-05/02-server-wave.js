var five = require('johnny-five')
var board = new five.Board()

board.on('ready', function () {

  var servo = new five.Servo(9)

  servo.sweep()

  function reset () {
    servo.stop()
    servo.center()
  }

  this.wait(3000, reset)
})