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
  led.stop().off()
  piezo.noTone()
  var buttonState = false

  button.on('press', function () {
    buttonState = true
    led.stop().off()
    piezo.noTone()
  })

  temp.on('data', function () {

    if (buttonState === false && this.celsius > 50) {
      piezo.frequency(587, 500)
      led.strobe(1000)
    } else {
      led.stop().off()
      piezo.noTone()
    }
  })
})