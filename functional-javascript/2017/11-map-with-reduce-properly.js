// m'kay, so this is the official solution but not loving it...
module.exports = function arrayMap (arr, fn, thisArg) {
  return arr.reduce(function (accumulator, current, index, arr) {
    accumulator.push(fn.call(thisArg, current, index, arr))
    return accumulator
  }, [])
}
