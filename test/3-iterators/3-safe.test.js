import { expect } from 'chai'
import { open } from '../../src/3-iterators/3-safe'

describe('Iterators 3 - safe', () => {
  const randInt = (max) => Math.floor(Math.random() * max)

  it('cracks open the safe', () => {
    const iterator = open()
    const greeting = iterator.next().value
    expect(greeting).to.equal('hello')
    const number = randInt(10)
    const multiplied = iterator.next(number).value
    expect(multiplied).to.equal(number * 42)
    const name = ['asia', 'kasia', 'basia'][randInt(3)]
    iterator.throw(name)
    const { value: uppercase, done } = iterator.next()
    expect(uppercase).to.equal(name.toUpperCase())
    expect(done).to.equal(true)
  })
})
