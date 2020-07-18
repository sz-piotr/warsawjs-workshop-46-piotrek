import { expect } from 'chai'
import { getSentences } from '../../src/1-intro/1-map'

describe('1 - map - getSentences', () => {
  it('returns [] given []', () => {
    const employees = []
    const result = getSentences(employees)
    expect(result).to.deep.equal([])
  })

  it('returns sentences about the employees', () => {
    const employees = [
      { firstName: 'Johnny', lastName: 'Depp', salary: 15000 },
      { firstName: 'Marylin', lastName: 'Monroe', salary: 20000 },
      { firstName: 'Danny', lastName: 'DeVito', salary: 1000 }
    ]
    const result = getSentences(employees)
    expect(result).to.deep.equal([
      'Johnny Depp earns 15000 dollars.',
      'Marylin Monroe earns 20000 dollars.',
      'Danny DeVito earns 1000 dollars.'
    ])
  })
})
