var arr = []

var closure = (arg) => {
    if (!arg) {
        return arr.reduce( (a, b) => a + b )
    } else {
        arr.push(arg)
        return closure
    }
}

module.exports = closure
