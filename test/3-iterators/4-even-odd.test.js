import { expect } from 'chai'
import { applyEvenOdd, removeEvenOdd } from '../../src/3-iterators/4-even-odd'

describe('Iterators 4 - even odd', () => {
  it('makes all arrays iterate through even indices first and then odd', () => {
    applyEvenOdd()

    const a = [0, 1, 2, 3, 4, 5]
    const order = []
    for (const element of a) {
      order.push(element)
    }

    expect(order).to.deep.equal([0, 2, 4, 1, 3, 5])
  })

  it('does not have an effect after remove is called', () => {
    removeEvenOdd()

    const a = [0, 1, 2, 3, 4, 5]
    const order = []
    for (const element of a) {
      order.push(element)
    }

    expect(order).to.deep.equal([0, 1, 2, 3, 4, 5])
  })
})
