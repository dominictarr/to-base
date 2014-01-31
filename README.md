# to-base

Convert a number to an array of units in a base.

This supports more bases than `Number#toString`,
I am implementing this to check I understand the algorithm.

## Example

``` js
var toBase = require('to-base')

console.log(toBase(345234234, 11))
// ==> [ 4, 5, 6, 10, 6, 9, 7, 6, 1 ]
```

> Note, the digits are in little endian order
> which is less intuitive to the human reader
> but easier to work with from code, since
> arrays are indexed from the left - this
> means that the magnitude of a digit is Math.pow(base, i)
> (where i is the index of the digit)

## License

MIT
