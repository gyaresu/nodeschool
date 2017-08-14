function upperCaser(input) {
  return input.split('').map(function(i) {
    return i.toUpperCase()
  }).join('')
}

module.exports = upperCaser
