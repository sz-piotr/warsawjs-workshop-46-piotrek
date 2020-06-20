import { expect } from 'chai'
import { makeTypeSafe } from '../../src/1-proxy/3-type-safe'

describe('Proxy 3 - type safe', () => {
  it('is transparent for a correct 0-argument call', () => {
    const fn = () => 1
    const result = makeTypeSafe(fn, [])
    expect(result()).to.equal(1)
  })

  it('is transparent for a correct multi argument call', () => {
    const fn = (name, age) => `${name} is ${age} years old.`
    const result = makeTypeSafe(fn, ['string', 'number'])
    expect(result('Piotr', 23)).to.equal('Piotr is 23 years old.')
  })

  it('throws for too many arguments', () => {
    const fn = (name, age) => `${name} is ${age} years old.`
    const result = makeTypeSafe(fn, ['string', 'number'])
    expect(() => result('Piotr', 23, true)).to.throw(TypeError, 'Incorrect number of arguments')
  })

  it('throws for too few arguments', () => {
    const fn = (name, age) => `${name} is ${age} years old.`
    const result = makeTypeSafe(fn, ['string', 'number'])
    expect(() => result('Piotr')).to.throw(TypeError, 'Incorrect number of arguments')
  })

  it('throws for incorrect argument type', () => {
    const fn = (name, age) => `${name} is ${age} years old.`
    const result = makeTypeSafe(fn, ['string', 'number'])
    expect(() => result('Piotr', true)).to.throw(TypeError, 'Incorrect argument type')
  })

  it('preserves identity and properties', () => {
    const fn = () => 1
    fn.a = 2
    const result = makeTypeSafe(fn)
    expect(result === fn)
    expect(result.a).to.equal(2)
  })
})
