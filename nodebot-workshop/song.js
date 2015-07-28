var five = require('johnny-five')

var board = new five.Board()

board.on('ready', function () {
  var button = new five.Button(13)
  var led = new five.Led(2)
  var piezo = new five.Piezo(3)

  board.repl.inject({
    piezo: piezo,
    led: led
  })

  button.on('press', function () {
    led.strobe(30)
    piezo.play({
      song: 'C D A B E F C G C A A F C',
      tempo: 200,
      beats: 1/4
    })
    board.wait(1000, function () {
      led.stop().off()
    })
  })

  // button.on('release', function () {
  //   board.wait(500, function () {
  //     led.off()
  //     piezo.noTone()
  //   })
  // })
})
