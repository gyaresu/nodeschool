function noChange (ref) {
  ref = {}

  console.log('Call the noChange() function: ', ref, a)
}

function change (ref) {
  ref.key = 'changed'
  console.log('Call the change() function: ', ref, a)
}

a = { key: 'initial'}
noChange(a)
console.log('What\'s `a` look like now?: ', a)
change(a)
console.log('What\'s `a` look like now?: ', a)

// λ node 12-examples.js
// Call the noChange() function:  {} { key: 'initial' }
// What's `a` look like now?:  { key: 'initial' }
// Call the change() function:  { key: 'changed' } { key: 'changed' }
// What's `a` look like now?:  { key: 'changed' }
