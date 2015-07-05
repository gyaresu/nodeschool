var Barcli = require("barcli");

var hours = new Barcli({ label: "Hour", range: [0, 23]});
var minutes = new Barcli({ label: "Minute", range: [0, 59]});
var seconds = new Barcli({ label: "Second", range: [0, 59]});
var milliseconds = new Barcli({ label: "Millisecond", range: [0, 999]});

var intervalID = GLOBAL.setInterval(function() {

  var now = new Date();

  hours.update(now.getHours());
  minutes.update(now.getMinutes());
  seconds.update(now.getSeconds());
  milliseconds.update(now.getMilliseconds());

}, 12);