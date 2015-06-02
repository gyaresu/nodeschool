var http = require('http')
var map = require('map-async')
var bl = require('bl')
var fs = require('fs')
var obj = { file: process.argv[2]}

function httpGet(url) {
  http.get(url, function(res) {
    res.pipe(bl(function (err, data) {
      if (err) {
        throw err
      }
      console.log(data.toString())
    }))
  })
}

function readFile(file, cb) {
  fs.readFile(file, function (err, f) {
    if (err) {
      cb(err)
    }
    cb(f.toString())
  })
}

map(obj, readFile, httpGet)