/**
 * @param {any[]} array the input array
 * @returns {Iterable} iterable that goes through the array in reverse.
 */
export function reverse (array) {
  return {
    * [Symbol.iterator] () {
      for (let i = array.length - 1; i >= 0; i--) {
        yield array[i]
      }
    }
  }
}
