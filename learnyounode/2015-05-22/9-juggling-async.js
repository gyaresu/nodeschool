var http = require('http')
var bl = require('bl')
var map = require('map-async')
var args = process.argv.slice(2)

function printResults (error, results) {
  if (error) {
    console.log(error)
  }
  results.forEach(function (result) {
    console.log(result)
  })
}

function httpGet (url, cb) {
  http.get(url, function (res) {
    res.pipe(bl(function (e, data) {
      if (e) {
        return cb(e)
      }
      cb(e, data.toString())
    }))
  }).on('error', function(e) {
    console.log('Error:' + e.message)
  })
}

map(args, httpGet, printResults)