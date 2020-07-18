import { expect } from 'chai'
import { isA } from '../../src/3-data-validation/1-types'

describe.skip('1 - (data-validation) types - isA', () => {
  it('can succeed for primitives', () => {
    expect(isA('string')('foo')).to.equal(true)
  })

  it('can fail for primitives', () => {
    expect(isA('number')(true)).to.equal(false)
  })

  it('can succeed for class instances', () => {
    expect(isA(Map)(new Map())).to.equal(true)
  })

  it('can fail for class instances', () => {
    expect(isA(Array)(1)).to.equal(false)
  })
})
