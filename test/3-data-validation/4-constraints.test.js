import { expect } from 'chai'
import { isPerson } from '../../src/3-data-validation/4-constraints'

describe.skip('4 - (data-validation) constraints - isPerson', () => {
  it('fails for non objects', () => {
    expect(isPerson(null)).to.equal(false)
    expect(isPerson(1)).to.equal(false)
  })

  it('fails for missing properties', () => {
    expect(isPerson({})).to.equal(false)
  })

  it('fails for empty first name', () => {
    expect(isPerson({
      firstName: '',
      lastName: 'Doe',
      age: 42
    })).to.equal(false)
  })

  it('fails for empty last name', () => {
    expect(isPerson({
      firstName: 'John',
      lastName: '',
      age: 42
    })).to.equal(false)
  })

  it('fails for negative age', () => {
    expect(isPerson({
      firstName: 'John',
      lastName: 'Doe',
      age: -42
    })).to.equal(false)
  })

  it('fails for fractional age', () => {
    expect(isPerson({
      firstName: 'John',
      lastName: 'Doe',
      age: 4.2
    })).to.equal(false)
  })

  it('succeeds for a valid person', () => {
    expect(isPerson({
      firstName: 'John',
      lastName: 'Doe',
      age: 42
    })).to.equal(true)
  })
})
