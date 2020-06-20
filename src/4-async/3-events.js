/**
 *
 * @param {EventEmitter} emitter
 * @param {string} eventName name of the event to listen to
 */
export function toEventStream (emitter, eventName) {
  return {
    async * [Symbol.asyncIterator] () {
      const buffer = []
      emitter.on(eventName, value => buffer.push(value))
      while (true) {
        if (buffer.length === 0) {
          await new Promise(resolve => emitter.once(eventName, resolve))
        }
        yield buffer.shift()
      }
    }
  }
}
