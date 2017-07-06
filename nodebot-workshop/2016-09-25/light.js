var five = require('johnny-five')

var board = five.Board()

board.on('ready', function () {

  var sound = new five.Piezo(3)

  var led = new five.Led.RGB({
    pins: {
      red: 9,
      green: 10,
      blue: 11
    }
  })

  var light = new five.Sensor({
    pin: 'A0',
    freq: 500
  })

  var getRGB = function (hue) {
    var colors = []
    var r = five.Fn.constrain(five.Fn.map(hue, 0, 512, 255, 0), 0, 255)
    var g = five.Fn.constrain(
          five.Fn.map(hue, 0, 512, 0, 255), 0, 255) -
        five.Fn.constrain(five.Fn.map(hue, 512, 1023, 0, 255), 0, 255)
    var b = five.Fn.constrain(five.Fn.map(hue, 512, 1023, 0, 255), 0, 255)
    colors[0] = r
    colors[1] = g
    colors[2] = b
    return colors
  }

  light.on('data', function (err, value) {
    if (err) {
      console.error(err)
    }

    var noise = 255 - five.Fn.constrain(five.Fn.map(value, 0, 1023, 0, 255), 0, 255)
    console.log(noise)
    sound.play(noise)
    led.color(getRGB(noise))
  })
})
