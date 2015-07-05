var five = require('johnny-five')
var dnode = require('dnode')
var board = new five.Board()

board.on('ready', function () {

  var t = null

  var server = dnode({
    getTemperature: function (cb) {
      cb(t)
    }
  })

  server.listen(1337)

  var temp = new five.Temperature({
    controller: 'TMP36',
    pin: 'A0'
  })

  temp.on('data', function (err, data) {
    if (err) {
      console.error(err)
    }

    t = data.celsius
  })
})