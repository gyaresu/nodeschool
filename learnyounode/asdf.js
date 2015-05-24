var func = function (err, data) {
    console.log(data.toString())
}


fs.readFile(file, func)