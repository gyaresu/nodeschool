module.exports = function generate(isTrue) {

  var value

  if (isTrue) {
    value = 0
  } else {
    value = -1
  }

  var obj = {
    next: function(swap) {

      value += (swap ? 1 : 2)

      return {
        value: value
      }
    }
  }

  return obj
}