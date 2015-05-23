var http = require('http');
var url = process.argv[2];

http.get(url, function callback (response) {
    return response;
}).on('data', function (data) {
    console.log(data.toString());
});