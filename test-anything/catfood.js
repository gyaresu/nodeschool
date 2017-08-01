module.exports = function (food) {
    if (food === 'chocolate') {
        throw new Error('No, chocolate kills cats')
    } else {
        return "yum"
    }
}
