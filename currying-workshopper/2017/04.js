// Currying workshopper
// 04 of 06

var total = 0

function thing(arg) {
    if (!arg) {
        return total
    } else {
        total += arg
        return thing
    }
}

module.exports = thing
