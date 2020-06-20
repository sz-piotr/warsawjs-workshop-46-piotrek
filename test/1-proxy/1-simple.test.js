import { expect } from 'chai'
import { alwaysPlusOne } from '../../src/1-proxy/1-simple'

describe.skip('Proxy 1 - simple', () => {
  it('single numerical property', () => {
    const object = { a: 1 }
    const proxy = alwaysPlusOne(object)
    expect(proxy.a).to.equal(2)
  })

  it('multiple numerical properties', () => {
    const object = { a: 1, b: 2, c: 3 }
    const proxy = alwaysPlusOne(object)
    expect(proxy.a).to.equal(2)
    expect(proxy.b).to.equal(3)
    expect(proxy.c).to.equal(4)
  })

  it('non-existant properties', () => {
    const object = {}
    const proxy = alwaysPlusOne(object)
    expect(proxy.other).to.equal(undefined)
  })

  it('works for the example case', () => {
    const object = { foo: 3, bar: 'bla bla' }
    const proxy = alwaysPlusOne(object)
    expect(proxy.foo).to.equal(4)
    expect(proxy.bar).to.equal('bla bla')
  })

  it('computed properties', () => {
    let counter = 0
    const object = { get x () { return counter++ } }
    const proxy = alwaysPlusOne(object)
    expect(proxy.x).to.equal(1)
    expect(proxy.x).to.equal(2)
    expect(proxy.x).to.equal(3)
  })

  it('properties from prototype', () => {
    const prototype = { foo: 1 }
    const object = Object.create(prototype)
    const proxy = alwaysPlusOne(object)
    expect(proxy.foo).to.equal(2)
  })
})
