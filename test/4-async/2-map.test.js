import { expect } from 'chai'
import { map } from '../../src/4-async/2-map'

describe('Async 2 - map', () => {
  it('maps over the async iterable', async () => {
    const input = {
      async * [Symbol.asyncIterator] () {
        yield 1
        yield 2
        yield 3
      }
    }
    const collected = []
    for await (const number of map(input, x => x + 1)) {
      collected.push(number)
    }
    expect(collected).to.deep.equal([2, 3, 4])
  })
})
