var fs = require('fs'),
    path = require('path'),
    result;

module.exports = function (dir, ext, callback) {
    fs.readdir(dir, function (err, files) {
        if (err) {
            return callback(err);
        }
        result = files.filter(function (each) {
            return path.extname(each).slice(1) === ext;
        });
        return callback(err, result);
    });
};