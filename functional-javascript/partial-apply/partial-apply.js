var slice = Array.prototype.slice;

function logger(namespace) {
    return function(args) {
        //console.log(slice.call(arguments).join(' '));
        return console.log(namespace + ' ' + slice.call(arguments).join(' '));
    };
}

module.exports = logger;

// Official Solution:

// var slice = Array.prototype.slice

// function logger(namespace) {
//   return function() {
//     console.log.apply(console, [namespace].concat(slice.call(arguments)))
//   }
// }

// module.exports = logger