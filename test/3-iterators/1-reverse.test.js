import { expect } from 'chai'
import { reverse } from '../../src/3-iterators/1-reverse'

describe('Iterators 1 - reverse', () => {
  it('goes through the array in reverse', () => {
    const array = [1, 2, 3]
    const collected = []
    for (const item of reverse(array)) {
      collected.push(item)
    }
    expect(collected).to.deep.equal([3, 2, 1])
  })

  it('can be iterated over multiple times', () => {
    const array = [1, 2, 3]
    const reversed = reverse(array)
    for (let i = 0; i < 3; i++) {
      const collected = []
      for (const item of reversed) {
        collected.push(item)
      }
      expect(collected).to.deep.equal([3, 2, 1])
    }
  })

  it('preserves the reference to the original array', () => {
    const array = [1, 2, 3]
    const reversed = reverse(array)
    array.push(4, 5)
    const collected = []
    for (const item of reversed) {
      collected.push(item)
    }
    expect(collected).to.deep.equal([5, 4, 3, 2, 1])
  })

  it('does not return an array', () => {
    const reversed = reverse([1, 2, 3])
    expect(Array.isArray(reversed)).to.equal(false)
  })
})
