const assert = require('assert')
const spawn = require('child_process').spawn
const duplexer = require('duplexer2')

module.exports = (cmdString, argsArr) => {
  let spawned = spawn(cmdString, argsArr)
  // assert(spawned.stdout)
  return duplexer(spawned.stdin, spawned.stdout)
}
