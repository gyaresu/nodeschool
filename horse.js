//console.log(Date.toISOString())
module.exports = function (db, date, callback) {
  //var cd = date.getFullYear()+ "-" + date.getMonth() + 1 + "-" +  date.getDate() // cd stands for 'cropped date'
  //console.log(date)
  callback(date)
}

function callback(d) {
  console.log(d)
}


