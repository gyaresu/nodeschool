var slice = Array.prototype.slice;

module.exports = function(namespace) {
    return function(args) {
        console.log.bind(console, [namespace].concat(slice.call(arguments)));
    };
};