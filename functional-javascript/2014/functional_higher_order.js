function repeat(operation, num) {

  var temp = num - 1
  if (temp !=  0) {
    return (repeat(operation, temp))
  }
  operation()
}

module.exports = repeat
