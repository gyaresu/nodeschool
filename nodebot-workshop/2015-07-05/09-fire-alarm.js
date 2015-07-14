var five = require('johnny-five')
var board = five.Board()

board.on('ready', function () {
  var temp = new five.Temperature({
    controller: 'TMP36',
    pin: 'A0'
  })
  var piezo = new five.Piezo(9)
  var led = new five.Led(13)
  var button = new five.Button(5)
  var buttonState = false

  button.on('press', function () {
    buttonState = true
    led.stop().off()
    piezo.noTone()
  })

  function trigger () {
    console.log('Triggered')
    piezo.frequency(587, 500)
    led.on()
  }

  temp.on('data', function (err, data) {
    if (err) {
      throw err
    }
    console.log(data.celsius)
    if (buttonState === false && data.celsius > 50) {
      trigger()
    } else if (buttonState === true && data.celsius < 50) {
      buttonState = false
      console.log('Reset')
    } else {
      led.stop().off()
      piezo.noTone()
    }
  })
})