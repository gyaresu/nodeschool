function *foo() {
  yield 2
  yield 3
}

function *main() {
  yield 1
  yield *foo() // delegate foo
  yield 4
}

for (var v of main()) {
  console.log( v )
}
// 1 2 3 4