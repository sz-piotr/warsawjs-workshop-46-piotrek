import { expect } from 'chai'
import { EventEmitter } from 'events'
import { toEventStream } from '../../src/4-async/3-events'

describe('Async 3 - events', () => {
  it('can turn an EventEmitter to a stream', async () => {
    const emitter = new EventEmitter()

    setTimeout(() => {
      emitter.emit('foo', 123)
      setTimeout(() => {
        emitter.emit('bar', false)
        setTimeout(() => emitter.emit('foo', 'hello'))
      })
    })

    let i = 0
    for await (const value of toEventStream(emitter, 'foo')) {
      if (i++ === 0) {
        expect(value).to.equal(123)
      } else {
        expect(value).to.equal('hello')
        break
      }
    }
  })

  it('can handle multiple events at once', async () => {
    const emitter = new EventEmitter()

    setTimeout(() => {
      emitter.emit('foo', 123)
      emitter.emit('foo', 456)
      emitter.emit('foo', 789)
    })

    let i = 0
    for await (const value of toEventStream(emitter, 'foo')) {
      if (++i === 1) {
        expect(value).to.equal(123)
      } else if (i === 2) {
        expect(value).to.equal(456)
      } else if (i === 3) {
        expect(value).to.equal(789)
        break
      }
    }
  })
})
