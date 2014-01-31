
module.exports = function (n, base) {
  var digits = []
  while(n) {
    var modulus = n % base
    digits.push(modulus)
    n = (n - modulus)/base
  }
  return digits
}
