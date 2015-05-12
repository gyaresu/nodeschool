module.exports = function duckCount(argv) {


    var args = Array.prototype.slice.call(arguments),
        result = 0;

    args.forEach(function(each) {

        if (!each || typeof(each.quack) === 'undefined' ) {
            return;
        } else if (Object.prototype.hasOwnProperty.call(each,'quack')) {
            ++result;
        }
    });
    return result;
};