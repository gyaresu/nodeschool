function askFoo () {
  return new Promise(function (resolve, reject) {
    resolve('foo')
  })
}

function run (generator) {
  var it = generator(go)
  function go (err, result) {
    if (err) {
      return it.throw(err)
    }
    it.next(result)
  }
  go()
}

run(function* () {
  // improve: errors?
  var foo = yield askFoo()
  console.log(foo)
})