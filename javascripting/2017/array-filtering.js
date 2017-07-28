// Javascripting 12 of 19

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

var filtered = numbers.filter(function (each) {
    return each % 2 === 0
})

console.log(filtered)
