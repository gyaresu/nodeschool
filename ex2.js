module.exports = directoryReader;

function directoryReader(directoryName, filterString, callbackFunction){

    var fs = require('fs');

    fs.readdir(directoryName, function (err, list) {

        if (err) return callbackFunction(err);

        for (var i = 0; i < list.length; i++){
            if(list[i].split('.')[1] === filterString)
                console.log(list[i]);
        }

    });

};
