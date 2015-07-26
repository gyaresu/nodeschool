var five = require('johnny-five')

var board = new five.Board()

var val = 1000
var speed = 1

board.on('ready', function () {
  var motor = new five.Motor({pin: 9})

  motor.on('start', function () {
    board.wait(val, function () {
      motor.stop()
    })
  })

  motor.on('stop', function () {
    board.wait(val, function () {
      if (speed === 100) {
        speed = 1
        motor.start(speed)
      } else {
        speed = 100
        motor.start(speed)
      }
    })
  })

  motor.start(speed)
})
