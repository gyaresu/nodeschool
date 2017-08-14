function reduce(arr, fn, initial) {
  if (!arr.length) return initial

  // Callback passed to this function looks like
  // cb(accumulator, currentValue, currentIndex, array) 
  fn(initial, arr[0], 0, arr)

  return reduce(arr.slice(1), fn, initial)
}

module.exports = reduce
