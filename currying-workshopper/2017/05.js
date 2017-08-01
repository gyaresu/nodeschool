// Currying workshopper
// 05 of 06

var callAndApply = {
    caller: function (object, method, nameArg, ageArg, tShirtSizeArg) {
        method.call(object, nameArg, ageArg, tShirtSizeArg)
    },
    applier: function (object, method, arguementsArr) {
        method.apply(object, arguementsArr)
    }
}

module.exports = callAndApply 
