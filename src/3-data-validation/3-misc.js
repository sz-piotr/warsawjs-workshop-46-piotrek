/*
Write the following functions:

isArrayOf
isAnyOf
isExactly

Examples

const isStringArray = isArrayOf(isA('string'))
isStringArray(['a', 'b']) // true
isStringArray([1, 'c']) // false

const isStringOrNumber = isAnyOf(isA('string'), isA('number'))
isStringOrNumber('a') // true
isStringOrNumber(1) // true
isStringOrNumber(null) // false

const is4 = isExactly(4)
is4(4) // true
is4(3) // false
*/

export const isArrayOf = f => value =>
  Array.isArray(value) && value.every(f)

export const isAnyOf = (...fs) => value =>
  fs.some(f => f(value))

export const isExactly = x => value => value === x
