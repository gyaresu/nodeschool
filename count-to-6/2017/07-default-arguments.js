let midpoint = (lower = 0, upper = 1) => {
  var mid = lower < upper ? (upper + lower) / 2 : 'lower bound is > upper bound'
  return mid
}

module.exports = midpoint
