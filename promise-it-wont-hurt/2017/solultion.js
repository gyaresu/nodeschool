// // 10-an-important-rule.js

// 'use strict'

// // https://www.npmjs.com/package/q
// const Q = require('q')

// let alwaysThrows = () => {
//   // return new Error('OH NOES')
//   throw new Error('OH NOES')
// }

// let iterate = (arg) => {
//   console.log(arg)
//   return arg + 1
// }

// // Saved for comedy reasons - there's a bug in the solution
// // https://github.com/stevekane/promise-it-wont-hurt/issues/127

// Q.fcall(iterate, 1)
//   .then(iterate)
//   .then(iterate)
//   .then(iterate)
//   .then(iterate)
//   .then(alwaysThrows)
//   .then(iterate)
//   .then(iterate)
//   .then(iterate)
//   .then(iterate)
//   .then(iterate)
//   .catch(null, console.log)

function iterate (num) {
  console.log(num)
  return ++num
};

function alwaysThrows () {
  throw new Error('OH NOES')
};

Promise.resolve(iterate(1))
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(alwaysThrows)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(null, console.log)
