var thing2 = { key: 'start'}
var thing3 = { key: 'start'}

function test () {
  function noChange (ref) {
    ref = {}
    console.log('Call the noChange() function. Now `ref` =', ref, ' and `a` =', a)
  }

  function change (ref) {
    ref.key = 'changed'
    console.log('Call the change() function: Now `ref` =', ref, ' and `a` =', a)
  }

  a = { key: 'initial'}
  noChange(a)
  console.log('What\'s `a` look like after calling noChange()?: ', a)
  change(a)
  console.log('What\'s `a` look like after calling change()?: ', a)

  // λ node 12-examples.js
  // Call the noChange() function. Now ref =  {}  and `a` =  { key: 'initial' }
  // What's `a` look like after calling noChange()?:  { key: 'initial' }
  // Call the change() function: Now ref =  { key: 'changed' }  and `a` =  { key: 'changed' }
  // What's `a` look like after calling change()?:  { key: 'changed' }
}

// test()

// test2
function test2 () {
  thing2.key = 'thing2'
}
test2()
console.log(thing2.key)

// test3
function test3 (obj) {
  obj = { key: 'test3'}
  console.log(obj.key)
}
test3(thing3)
console.log(thing3.key)

