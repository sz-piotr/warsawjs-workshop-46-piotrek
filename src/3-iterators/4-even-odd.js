const it = Array.prototype[Symbol.iterator]

/**
 * After calling this function arrays will iterate in `for..of` by walking over
 * even indices first and later over odd.
 */
export function applyEvenOdd () {
  // eslint-disable-next-line
  Array.prototype[Symbol.iterator] = function * () {
    for (let i = 0; i < this.length; i += 2) {
      yield this[i]
    }
    for (let i = 1; i < this.length; i += 2) {
      yield this[i]
    }
  }
}

/**
 * After calling this function arrays will iterate in normal order
 */
export function removeEvenOdd () {
  // eslint-disable-next-line
  Array.prototype[Symbol.iterator] = it
}
