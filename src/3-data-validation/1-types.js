/**
 * Write a function that returns a function that checks if the argument is
 * of the type passed to the parent function.
 *
 * Examples:
 * ```
 * isA('string')('foo') // true
 * isA('number')(true) // false
 * isA(Map)(new Map()) // true
 * isA(Array)(1) // false
 * ```
 */
export const isA = type =>
  typeof type === 'string'
    ? x => typeof x === type // eslint-disable-line valid-typeof
    : x => x instanceof type
