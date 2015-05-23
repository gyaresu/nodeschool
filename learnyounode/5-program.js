var fs = require('fs'),
    path = require('path');

fs.readdir(process.argv[2], function (err, files) {
    if (err) {
        throw err;
    }

    files.forEach(function (each) {
        if (path.extname(each).slice(1) === process.argv[3]) {
            console.log(each);
        }
    });
});