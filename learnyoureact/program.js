var express = require('express')
var app = express()
var path = require('path')

app.set('port', (process.argv[2] || 3000))
app.set('view engine', 'jsx')
app.set('views', path.join('.', '/views'))
app.engine('jsx', require('express-react-views').createEngine())

require('node-jsx').install()

app.use('/', function(req, res) {
  res.render('index', '')
})

app.listen(app.get('port'), function() {})