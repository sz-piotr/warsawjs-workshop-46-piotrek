import { expect } from 'chai'
import { scan } from '../../src/3-iterators/2-scan'

describe('Iterators 2 - scan', () => {
  it('works like in the example', () => {
    const sum = (a, b) => a + b
    const collected = []
    for (const value of scan([1, 2, 3], sum, 0)) {
      collected.push(value)
    }
    expect(collected).to.deep.equal([1, 3, 6])
  })

  it('can iterate over iterables', () => {
    const mul = (a, b) => a * b
    const input = {
      * [Symbol.iterator] () {
        yield 1
        yield 2
        yield 42
      }
    }
    const collected = []
    for (const value of scan(input, mul, 1)) {
      collected.push(value)
    }
    expect(collected).to.deep.equal([1, 2, 84])
  })

  it('can be iterated over multiple times', () => {
    const mul = (a, b) => a * b
    const scanned = scan([2, 3, 4], mul, 1)
    for (let i = 0; i < 3; i++) {
      const collected = []
      for (const value of scanned) {
        collected.push(value)
      }
      expect(collected).to.deep.equal([2, 6, 24])
    }
  })

  it('does not return an array', () => {
    const mul = (a, b) => a * b
    const scanned = scan([1, 2], mul, 1)
    expect(Array.isArray(scanned)).to.equal(false)
  })
})
