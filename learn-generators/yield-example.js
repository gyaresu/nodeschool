function *foo () {
  var stop = yield 'woo'
  console.log(stop, 'inside foo')
}
var G = foo()

console.log( G.next() )
// { value: 'woo', done: false }
console.log( G.next('bar') )
// 'bar', 'inside foo'
// { value: undefined, done: true }