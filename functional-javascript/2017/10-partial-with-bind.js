// "Print the output to the console directly"
// This is what confused me originally

/* module.exports = function (namespace) {
  return function partial () {
    console.log.bind(console, namespace)
  }
} */

module.exports = function (namespace) {
  return console.log.bind(console, namespace)
}
