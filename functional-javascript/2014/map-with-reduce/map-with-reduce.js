module.exports = function arrayMap(arr, fn) {
    return arr.map(function(each) {
        return fn(each);
    });
};