// Stream Adventure
// duplexer.js

var duplexer = require('duplexer2')
var cp = require('child_process')



// function with command string and args array 
module.exports = function (cmd, args) {
  // duplex the streams
  var proc = cp.spawn(cmd, args)
  var streams = duplexer(proc.stdin, proc.stdout)
  return streams
}