var http = require('http')
var map = require('map-async')
var bl = require('bl')

var obj = { requestOne: process.argv[2],
            requestTwo: process.argv[3]}

function httpGet(value, key, cb) {
//  console.log(url)
  http.get(value, function(res) {
    res.pipe(bl(function (err, data) {
      if (err) {
        cb(err)
      }
      obj[key] = data.tostring()
    }))
  })
}

function show(err, data) {
  if (err) {
    throw err
  }
  console.log(obj)
  // data.forEach(function (e) {
  //   console.log(e)
  // })
}

map(obj, httpGet, show)