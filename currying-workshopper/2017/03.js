// Currying workshopper
// 03 of 06

function thing(arg1) {
    function stuff(arg2) {
        return arg1 + arg2
    }

    return stuff
}

module.exports = thing
