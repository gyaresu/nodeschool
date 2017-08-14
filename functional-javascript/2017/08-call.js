function duckCount () {
  var args = Array.from(arguments)
  var result = args.filter(function (arg) {
    //console.log(arg)
    return Object.prototype.hasOwnProperty.call(arg, 'quack')
  })
  return result.length
}

module.exports = duckCount
