function *upper (items) {
  for (var i = 0; i < items.length; ++i) {
    try {
      yield items[i].toUpperCase()
    } catch (e) {
      yield 'null'
    }
  }
}

var badItems = ['a', 'B', 1, 'c']

for (var item of upper(badItems)) {
  console.log(item)
}
// want to log: A, B, null, C


// Figure out why a nested `map` function doesn't work
// function *upper (items) {
//   items.map(function (item) {
//     try {
//       yield item.toUpperCase() // error below
//     } catch (e) {
//       yield 'null'
//     }
//   }
// }

// var badItems = ['a', 'B', 1, 'c']

// for (var item of upper(badItems)) {
//   console.log(item)
// }

// ERROR:
// ⇒  learn-generators run 4-catch-error.js
// /Users/gyaresu/programming/projects/nodeschool/learn-generators/4-catch-error.js:4
//       yield item.toUpperCase()
//             ^^^^
// SyntaxError: Unexpected identifier
//     at exports.runInThisContext (vm.js:73:16)
//     at Module._compile (module.js:443:25)
//     at Object.Module._extensions..js (module.js:478:10)
//     at Module.load (module.js:355:32)
//     at Function.Module._load (module.js:310:12)
//     at Function.Module.runMain (module.js:501:10)
//     at startup (node.js:129:16)
//     at node.js:814:3