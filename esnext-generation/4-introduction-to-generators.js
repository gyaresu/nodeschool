module.exports = function * generate(isEven) {

  var value

  if (isEven) {
    value = 0
  } else {
    value = -1
  }

  while (true) {
    yield value += 2
  }
}