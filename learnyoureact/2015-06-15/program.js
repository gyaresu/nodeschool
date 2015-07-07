var React = require('react')
var DOM = React.DOM
var body = DOM.body
var div = DOM.div
var script = DOM.script
var browserify = require('browserify')
var express = require('express')
var app = express()
var path = require('path')
require('node-jsx').install()
var TodoBox = require('./views/index.jsx')

var data = [ /* -- first -- */
  {title: 'Shopping', detail: process.argv[3]},
  {title: 'Hair cut', detail: process.argv[4]}
]

app.set('port', (process.argv[2] || 3000))
app.set('view engine', 'jsx')
app.set('views', path.join(__dirname, '/views'))
app.engine('jsx', require('express-react-views').createEngine())




app.use('/bundle.js', function(req, res) {
  res.setHeader('Content-Type', 'application/javascript')
  browserify('./app.js')
    .transform('reactify')
    .bundle()
    .pipe(res)
})

app.use('/', function(req, res) {
  var initialData = JSON.stringify(data)
  var markup = React.renderToString(React.createElement(TodoBox, {data: data})) /* -- second -- */

  res.setHeader('Content-Type', 'text/html')

  var html = React.renderToStaticMarkup(body(null,
    div({id: 'app', dangerouslySetInnerHTML: {__html: markup}}), /* -- fourth -- */
    script({id: 'initial-data',
            type: 'text/plain',
            'data-json': initialData
          }),
    script({src: '/bundle.js'})
  ))

  res.end(html)
})

app.listen(app.get('port'), function() {})