var five = require('johnny-five')
var board = new five.Board()

board.on('ready', function () {
  var led1 = new five.Led(13)
  //var led2 = new five.Led(12)
  //var led3 = new five.Led(14)
  led1.strobe(1000)

  board.repl.inject({
    led1: led1,
    //led2: led2,
    //led3: led3
  })

})
