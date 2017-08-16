var thing2 = { key: 'start'}
var thing3 = { key: 'start'}
var thing4 = { key: 'start'}

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
  console.log('inside test2', thing2.key)
}
test2()
console.log('after test2()', thing2.key)

// test3
function test3 (obj) {
  obj = { key: 'test3'}
  console.log('inside test3()', obj.key)
}
test3(thing3)
console.log('after test3()', thing3.key)

function test4 (key) {
  key = 'test4'
  console.log('inside test4', key)
}
test4(thing4.key)
console.log('after test4', thing4.key)
