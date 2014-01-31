var assert = require('assert')
var toBase = require('./')

function test(n, base) {
  var actual = toBase(n, base)
  var expected = n
        .toString(base)
        .split('')
        .map(function (v) { return parseInt(v, base) })
        .reverse()

  assert.deepEqual(actual, expected)
  console.log(''+n, base, '==>', actual)
}

test(15, 2)
test(17, 3)
test(12317, 11)
test(1231345132457, 36)



