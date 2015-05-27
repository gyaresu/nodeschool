// add this and note how much OVERTHINKING you put into the problem
function *factorial(f) {
  function fact(g) {
    if (g === 0) {
      return 1
    } else {
      yield g * fact(g - 1)
    }
  }
  fact(f)
}

let arr = factorial(5)

for (var n of arr) {
  console.log(n)
}
// 1, 2, 6, 24, 120