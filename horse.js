//console.log(Date.toISOString())
module.exports = function (db, date, callback) {
  //var cd = date.getFullYear()+ "-" + date.getMonth() + 1 + "-" +  date.getDate() // cd stands for 'cropped date'
  var fs = require('fs')
  var count = 0
  fs.createReadStream({ start: date }, db)
  console.log(x)
}

function callback(err, tweets) {
  if (err) throw error
  return tweets
}


