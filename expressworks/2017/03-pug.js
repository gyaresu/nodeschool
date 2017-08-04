var path = require('path')
var express = require('express')
var app = express()
var port = process.argv[2]

app.set('views', process.argv[3] || path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.get('/home', function (req, res) {
    res.render('index', {date: new Date().toDateString()})
})

app.listen(port)
