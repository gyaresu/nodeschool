function reduce(arr, fn, initial) {
  if (!arr.length) return initial;
  return fn(arr.pop(-1), initial);  
}
//var a = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian'];
module.exports = reduce;
