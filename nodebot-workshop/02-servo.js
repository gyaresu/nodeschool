var five = require('johnny-five')
var board = new five.Board()

board.on('ready', function () {
  var servo = new five.Servo(9)

  board.repl.inject({
    servo: servo
  })

  servo.sweep()
  board.wait(3000, function () {
    servo.stop().center()
  })
})
