var mymodule = require('./6-mymodule');

var dirname = process.argv[2],
    ext = process.argv[3];

mymodule(dirname, ext, function (err, results) {
    if (err) {
        console.log('There was an error: ' + err);
    }

    results.forEach(function (each) {
        console.log(each);
    });
});