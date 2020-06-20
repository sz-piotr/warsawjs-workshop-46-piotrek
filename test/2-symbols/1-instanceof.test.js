import { expect } from 'chai'
import { FakeSuperclass } from '../../src/2-symbols/1-instanceof'

describe('Symbols 1 - instanceof', () => {
  it('is not Object', () => {
    expect(FakeSuperclass).not.to.equal(Object)
  })

  it('objects are instances of it', () => {
    expect({} instanceof FakeSuperclass).to.equal(true)
  })

  it('arrays are instances of it', () => {
    expect([] instanceof FakeSuperclass).to.equal(true)
  })

  it('numbers are instances of it', () => {
    expect(123 instanceof FakeSuperclass).to.equal(true)
  })

  it('strings are instances of it', () => {
    expect('hey' instanceof FakeSuperclass).to.equal(true)
  })

  it('"banana" is not instance of it', () => {
    expect('banana' instanceof FakeSuperclass).to.equal(false)
  })
})
