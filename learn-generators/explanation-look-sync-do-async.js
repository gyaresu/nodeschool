var fs = require('fs')

function run (generator) {
  var it = generator(go) //[go]
  console.log(1, go, it) // 1 [Function: go] { _invoke: [Function: invoke] }
  function go (err, result) {
    console.log(3, result, '< result') // [3]
    it.next(result) // `result` is an object with a value property
    console.log(5, result, '< result')
  }
  console.log(2)
  go()            // []
  console.log(6, it) // [6]
}

run(function* (done) { // [1]
  console.log(4, done) // `done` is [Function: go]
  var exercises = yield fs.readdir('./', done)// [2]
  console.log(7) // [7]
  console.log(exercises) // [ 'file_names', ..., 'run_stop_run' ]
})

// [1]    Generator function takes function `go` as argument `done` [go]
// [2]    `go` is passed as the callback to fs.readdir, it doesn't fire until the second pass
// [3]    That's why result is empty. It's the data from fs.readdir
//        3 undefined '< result'
// [4]    Just about to yield the `read` of fs.readdir but not the result from the callback
//        4 [Function: go]
// [5]    Importantly after the yield from [4] the result var is undefined
// [6]    So the first pass of `go` finishes and it' not until the fs.readdir completes that it's
//        called again as the callback!
// [3.2]  it.next(result) triggers the continuation to...
// [7]    ...which now has the result in `exercises`
// [5.2]  Which then continues back inside `go` logging the final execution of the programme
