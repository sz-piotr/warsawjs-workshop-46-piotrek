/**
 * Maps over an asyncIterable
 */
export function map (asyncIterable, fn) {
  return {
    async * [Symbol.asyncIterator] () {
      for await (const item of asyncIterable) {
        yield fn(item)
      }
    }
  }
}
