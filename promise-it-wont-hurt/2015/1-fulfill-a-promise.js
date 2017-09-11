var q = require('q')

var defer = q.defer()
defer.promise.then(setTimeout(function () {
  console.log('RESOLVED!')
}, 300), function (reason) {
  console.log(reason)
})

// Offical Answer:

// var q = require('q');
// var def = q.defer();

// def.promise.then(console.log);
// setTimeout(def.resolve, 300, "RESOLVED!");