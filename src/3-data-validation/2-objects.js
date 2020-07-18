/**
 * Write a function that returns a function that checks if the argument matches
 * the provided schema
 *
 * Examples:
 * ```
 * const isPerson = isObjectOf({
 *   name: isA('string'),
 *   age: isA('number'),
 *   address: isObjectOf({
 *     street: isA('string'),
 *     country: isA('string')
 *   })
 * })
 *
 * isPerson({ foo: 'bar' }) // false
 * isPerson({
 *   name: 'Joe',
 *   age: 42,
 *   address: { street: 'Sunny St. 13 A', country: 'US' }
 * }) // true
 * ```
 */
export const isObjectOf = schema => value =>
  typeof value === 'object' &&
  value !== null &&
  Object.keys(schema)
    .every(key => schema[key](value[key]))
