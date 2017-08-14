    // Define a function called toUpperArray and pass it an arguement which will be an array.
function toUpperArray(items) {
    // If the items array is of length 1 or greater then
    // continue. Else return an empty array
    if (!items.length) return []
    // Set a head variable that takes the first item of the (remaining) array
    var head = items[0]
    // console.log(head); => 'first'
    // console.log(head); => 'second'
    // console.log(head); => 'third'
    console.log(head);
    // That first item of the array? Change the whole thing to uppercase
    // console.log(head); => 'FIRST'
    // console.log(head); => 'SECOND'
    // console.log(head); => 'THIRD'
    head = head.toUpperCase()
    // Assign all the items except for the first to the variable tail
    var tail = items.slice(1)
    // console.log(tail); => [ 'second', 'third' ]
    // console.log(tail); => [ 'third' ]
    // console.log(tail); => []
    console.log(tail);
    //
return [head].concat(toUpperArray(tail)) // recursive step
}

console.log(toUpperArray(['first', 'second', 'third'])) // [ 'FIRST', 'SECOND', 'THIRD' ]