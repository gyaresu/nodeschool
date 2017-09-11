// TODO - not working
var q = require('q')
var def = q.defer()

function attachTitle (arg) {
  return 'DR ' + arg
}

def.promise.then(attachTitle)
  .then(function(a) {
    console.log(a)
  })