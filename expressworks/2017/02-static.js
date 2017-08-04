var express = require('express')
var path = require('path')

var app = express()

var port = process.argv[2]
var file = process.argv[3]

app.use(express.static(file ||  path.join(__dirname, 'public')))

app.listen(port)

