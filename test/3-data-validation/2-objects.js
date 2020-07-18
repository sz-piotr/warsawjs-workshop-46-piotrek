import { expect } from 'chai'
import { isA } from '../../src/3-data-validation/1-types'
import { isObject } from '../../src/3-data-validation/2-objects'

describe('2 - (data-validation) objects - isObject', () => {
  it('always fails for non-objects', () => {
    expect(isObject({})(1)).to.equal(false)
  })

  it('always fails for null', () => {
    expect(isObject({})(null)).to.equal(false)
  })

  it('succeeds in the trivial case', () => {
    expect(isObject({})({})).to.equal(true)
  })

  it('fails if a property does not match', () => {
    const isTestObject = isObject({ foo: isA('string') })
    expect(isTestObject({ foo: 1 })).to.equal(false)
  })

  it('succeeds if all properties match', () => {
    const isTestObject = isObject({
      foo: isA('string'),
      baz: isA(Set)
    })
    const test = {
      foo: 'bar',
      baz: new Set()
    }
    expect(isTestObject(test)).to.equal(true)
  })

  it('can be nested', () => {
    const isTestObject = isObject({
      foo: isA('string'),
      baz: isObject({
        a: isA('number'),
        b: isObject({
          42: isA(Map)
        })
      })
    })
    const test = {
      foo: 'bar',
      baz: {
        a: 1,
        b: {
          42: new Map()
        }
      }
    }
    expect(isTestObject(test)).to.equal(true)
  })
})
