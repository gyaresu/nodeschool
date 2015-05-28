
// https://stackoverflow.com/questions/30498103/why-wont-yield-return-from-within-a-map-callback/30498924#30498924

// WARNING: UNTESTED!
function *mapGen (arr,callback) {
    for (var i=0; i<arr.length; i++) {
        yield callback(arr[i])
    }
}

Array.prototype.mapGen = mapGen;

function *upper (items) {
  yield* items.mapGen(function (item) {
    try {
      yield item.toUpperCase()
    } catch (e) {
      yield 'null'
    }
  }
}