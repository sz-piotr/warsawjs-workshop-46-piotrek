import { expect } from 'chai'
import { safeGetProp } from '../../src/4-monads/1-maybe'

describe('1 - (monads) maybe - safeGetProp', () => {
  it('returns just when prop is on the object', () => {
    const maybe = safeGetProp({ foo: 'bar' }, 'foo')
    expect(maybe.value).to.equal('bar')
  })

  it('returns nothing when prop is not on the object', () => {
    const maybe = safeGetProp({ foo: 'bar' }, 'bar')
    expect('value' in maybe).to.equal(false)
  })

  it('returns nothing when value is null', () => {
    const maybe = safeGetProp(null, 'bar')
    expect('value' in maybe).to.equal(false)
  })

  it('returns nothing when value is not an object', () => {
    const maybe = safeGetProp(42, 'bar')
    expect('value' in maybe).to.equal(false)
  })
})
