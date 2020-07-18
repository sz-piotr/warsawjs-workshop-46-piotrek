import { expect } from 'chai'
import { getShortNamedAnimals } from '../../src/2-point-free/1-filter'

describe('1 - (point-free) filter - getShortNamedAnimals', () => {
  it('returns [] given []', () => {
    const animals = []
    const result = getShortNamedAnimals(animals)
    expect(result).to.deep.equal([])
  })

  it('works for the example', () => {
    const animals = [
      { name: 'Fifi', kind: 'dog', age: 4 },
      { name: 'Pancake', kind: 'cat', age: 2 },
      { name: 'Lo', kind: 'parrot', age: 5 }
    ]
    const result = getShortNamedAnimals(animals)
    expect(result).to.deep.equal([
      { name: 'Fifi', kind: 'dog', age: 4 },
      { name: 'Lo', kind: 'parrot', age: 5 }
    ])
  })
})
