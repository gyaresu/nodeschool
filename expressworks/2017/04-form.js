var path = require('path')
var bodyparser = require('body-parser')
var express = require('express')

var app = express()

var port = process.argv[2]

app.use(bodyparser.urlencoded({extended: false}))
app.use(bodyparser.json())

app.post('/form', function (req, res) {
    res.setHeader('Content-Type', 'text/plain')
    // res.send calls res.end automatically
    res.end(req.body.str.split('').reverse().join(''))
})

app.listen(port)
