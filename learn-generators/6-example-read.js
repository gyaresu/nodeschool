var fs = require('fs')

function readDir(dir) {
  return new Promise(function (resolve, reject) {
    fs.readdir(dir, function (err, res) {
      if (err) {
        reject(err)
      } else {
        resolve(res)
      }
    }) // end of fs.readdir
  }) // end of Promise
}

function run(function* () {
  // almost the same generator as in the callback exercise
  var exercises = yield readDir('./')
  console.log(exercises) // [ 'look_sync_do_async', ..., 'run_stop_run' ]
})

run()