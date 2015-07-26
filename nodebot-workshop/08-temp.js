var five = require('johnny-five')
var dnode = require('dnode')

var board = new five.Board()

board.on('ready', function () {

  var thermo = new five.Temperature({
    controller: 'TMP36',
    pin: 'A0'
  })

  var temp = 0

  thermo.on('data', function () {
    temp = thermo.celsius
  })

  var server = dnode({
    getTemperature: function (cb) {
      cb(temp)
    }
  })

  server.listen(1337)
})
