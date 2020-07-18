import { expect } from 'chai'
import { Result } from '../../src/4-monads/2-result'

describe.skip('2 - (monads) result - Result', () => {
  it('can be constructed as ok', () => {
    const ok = Result.ok(1)
    expect(ok.value).to.equal(1)
    expect(ok.error).to.equal(undefined)
    expect(ok.bind).to.be.a('function')
  })

  it('can be constructed as error', () => {
    const ok = Result.error('foo')
    expect(ok.value).to.equal(undefined)
    expect(ok.error).to.equal('foo')
    expect(ok.bind).to.be.a('function')
  })

  it('bind has an effect when run on ok', () => {
    const { value, error } = Result.ok(1).bind(x => Result.ok(x + 1))
    expect(value).to.equal(2)
    expect(error).to.equal(undefined)
  })

  it('bind has no effect when run on error', () => {
    const { value, error } = Result.error(1).bind(x => Result.ok(x + 1))
    expect(value).to.equal(undefined)
    expect(error).to.equal(1)
  })
})
