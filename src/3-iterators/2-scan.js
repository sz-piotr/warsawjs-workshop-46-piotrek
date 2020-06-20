/**
 * This function returns an iterable that processes incoming values. It works
 * similarity to `Array.prototype.reduce`, but yields a new value at every step.
 *
 * Example:
 * ```
 * const sum = (a, b) => a + b
 * for (const value of scan([1, 2, 3], sum, 0)) {
 *   console.log(value) // 1, 3 then 6
 * }
 * ```
 *
 * @param {Iterable} iterable the input iterable
 * @param {(previousValue: any, currentValue: any) => any} accumulator
 * function that computes the next value
 * @param {any} initialValue passed as previousValue to accumulator on the
 * first call
 */
export function scan (iterable, accumulator, initialValue) {
  return {
    * [Symbol.iterator] () {
      let value = initialValue
      for (const currentValue of iterable) {
        value = accumulator(value, currentValue)
        yield value
      }
    }
  }
}
