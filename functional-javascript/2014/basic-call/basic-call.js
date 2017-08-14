module.exports = function duckCount() {
    return Array.prototype.slice.call(arguments).filter(function(each) {
        return Object.prototype.hasOwnProperty.call(each, 'quack');
    }).length;
};