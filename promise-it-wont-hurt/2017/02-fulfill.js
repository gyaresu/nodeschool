'use strict'

let promise = new Promise((fulfill, reject) => {
  setTimeout(() => {
    fulfill('FULFILLED!')
  }, 300)
})

// the below code works but apparently we just need to pass a handler
// which will then be passed the value from `fulfill`

// promise.then((msg) => {
//   console.log(msg)
// })

// the solution code

promise.then(console.log)
