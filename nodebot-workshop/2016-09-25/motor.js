var exec = require('child_process').exec
var five = require('johnny-five')

var board = new five.Board()

var val = 3000
var speed = 128
var saySpeed = null

board.on('ready', function () {
  var motor = new five.Motor({pin: 9})
  var button = new five.Button(2)

  motor.on('start', function () {
    board.wait(val, function () {
      motor.stop()
    })
  })

  motor.on('stop', function () {
    board.wait(val, function () {
      if (speed !== 128) {
        speed = 128
        motor.start(speed)
        saySpeed = 'say This motors speed is ' + speed
        exec(saySpeed)
      } else {
        speed = 255
        motor.start(speed)
        saySpeed = 'say Whereas this motors speed is ' + speed
        exec(saySpeed)
      }
    })
  })

  button.on('press', function () {
    // motor.start(speed)
    saySpeed = 'say Initializing motor. Starting speed is ' + speed
    exec(saySpeed)
  })

})
