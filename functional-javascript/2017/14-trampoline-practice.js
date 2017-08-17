function f (n) {
  return n ? n * f(n - 1) : 1
}

console.log(f(4))
console.log(f(3))
console.log(f(32768)) // RangeError: Maximum call stack size exceeded
