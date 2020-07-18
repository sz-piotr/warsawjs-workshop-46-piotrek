import { expect } from 'chai'
import { isA } from '../../src/3-data-validation/1-types'
import { isArrayOf, isAnyOf, isExactly } from '../../src/3-data-validation/3-misc'

describe('3 - (data-validation) misc - isArrayOf', () => {
  it('always fails for non-arrays', () => {
    expect(isArrayOf(isA('string'))(42)).to.equal(false)
  })

  it('always succeeds for empty arrays', () => {
    expect(isArrayOf(isA('string'))([])).to.equal(true)
  })

  it('fails if a member does not match', () => {
    const isStringArray = isArrayOf(isA('string'))
    expect(isStringArray(['a', 2, 'c'])).to.equal(false)
  })

  it('succeeds if all members match', () => {
    const isStringArray = isArrayOf(isA('string'))
    expect(isStringArray(['test', 'foo'])).to.equal(true)
  })

  it('can be nested', () => {
    const isMatrix = isArrayOf(isArrayOf(isA('number')))
    expect(isMatrix([[1, 2], [3, 4]])).to.equal(true)
  })
})

describe('3 - (data-validation) misc - isAnyOf', () => {
  it('fails if the value does not match', () => {
    const isPrimitive = isAnyOf(
      isA('string'),
      isA('number'),
      isA('boolean')
    )
    expect(isPrimitive({})).to.equal(false)
  })

  it('succeeds for values matching any of the passed validators', () => {
    const isPrimitive = isAnyOf(
      isA('string'),
      isA('number'),
      isA('boolean')
    )
    expect(isPrimitive(1)).to.equal(true)
    expect(isPrimitive('a')).to.equal(true)
    expect(isPrimitive(false)).to.equal(true)
  })

  it('always fails for 0 arguments', () => {
    expect(isAnyOf()(1)).to.equal(false)
  })

  it('can receive a single argument', () => {
    expect(isAnyOf(isA('number'))(1)).to.equal(true)
  })

  it('can receive two arguments', () => {
    expect(isAnyOf(isA('number'), isA('string'))(1)).to.equal(true)
  })
})

describe('3 - (data-validation) misc - isExactly', () => {
  it('fails if the value does not match', () => {
    const is4 = isExactly(4)
    expect(is4(3)).to.equal(false)
  })

  it('succeeds if the value matches', () => {
    const is4 = isExactly(4)
    expect(is4(4)).to.equal(true)
  })
})
