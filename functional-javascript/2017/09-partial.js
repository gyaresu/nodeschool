var slice = Array.prototype.slice

function logger (namespace) {
  return function partial () {
    var args = slice.apply(arguments)
    var a = args.reduce(function (prev, curr) {
      return prev + ' ' + curr
    })
    console.log(namespace, a)
  }
}

module.exports = logger
