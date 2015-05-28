// add this and note how much OVERTHINKING you put into the problem
function *factorial(f) {
  let sum = 1
  for (var i = 1; i <= f; ++i) {
    yield sum = sum * i
  }
}


for (var n of factorial(5)) {
  console.log(n)
}
// 1, 2, 6, 24, 120