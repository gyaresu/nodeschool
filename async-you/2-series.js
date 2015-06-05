var http = require('http')
var map = require('map-async')
var bl = require('bl')
//var fs = require('fs')
var obj = { requestOne: process.argv[2],
            requestTwo: process.argv[3]}
var count = Object.keys(obj)

function httpGet(url, cb) {
//  console.log(url)
  http.get(url, function(res) {
    res.pipe(bl(function (err, data) {
      if (err) {
        cb(err)
      }
      cb(data.toString())
    }))
  })
}

function show(err, data) {
  if (err) {
    console.error(err)
  }
  console.log(data)
  // data.forEach(function (each) {
  //   if (err) {
  //     throw err
  //   }
  //   console.log(each)
  // })
}

map(obj, httpGet, show)