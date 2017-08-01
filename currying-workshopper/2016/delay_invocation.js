var curried = (arg1) => {
    return (arg2) => {
        return arg1 + arg2
    }
}

module.exports = curried
