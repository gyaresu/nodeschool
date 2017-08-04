var path = require('path')
var express = require('express')
var stylus = require('stylus')

var app = express()
var port = process.argv[2]

app.use(stylus.middleware(process.argv[3] || path.join(__dirname, 'public')))

app.use(express.static(process.argv[3] ||  path.join(__dirname, 'public')))

//app.get('/', function (req, res) {
//    res.render
//})

app.listen(port)

