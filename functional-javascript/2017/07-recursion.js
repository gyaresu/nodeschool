function reduce(arr, fn, initial) {
  if (!arr.length) return initial
  fn(initial, arr[0], 0, arr)
  return reduce(arr.slice(1), fn, initial)
}

module.exports = reduce
