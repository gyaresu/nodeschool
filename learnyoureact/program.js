import express from 'express'
let path = require('path')
let app = express()

app.set('port', (process.argv[2] || 3000))
app.set('view engine', 'jsx')
app.set('views', path.join( __dirname, '/views'))
app.engine('jsx', require('express-react-views').createEngine())

require('node-jsx').install()

app.use('/', function (req, res) {
  res.render('index', '')
})

app.listen(app.get('port'), function () {})