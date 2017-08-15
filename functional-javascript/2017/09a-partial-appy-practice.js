function add (a, b) {
  // console.log(a, b)
  return a + b
}

// function partialApply(fn, num) {
//  return add(num)
// }

var addTen = add.bind(null, 10)

console.log(addTen(20), addTen(30), addTen(100))
