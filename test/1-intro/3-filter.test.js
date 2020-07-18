import { expect } from 'chai'
import { getHighEarners } from '../../src/1-intro/3-filter'

describe('3 - filter - getSentences', () => {
  it('returns [] given []', () => {
    const employees = []
    const result = getHighEarners(employees)
    expect(result).to.deep.equal([])
  })

  it('works for the example', () => {
    const employees = [
      { firstName: 'Tom', lastName: 'Poor', salary: 2000 },
      { firstName: 'Lilly', lastName: 'Beggar', salary: 3000 },
      { firstName: 'Jane', lastName: 'Wealthy', salary: 4000 },
      { firstName: 'Dick', lastName: 'Rich', salary: 5000 }
    ]
    const result = getHighEarners(employees)
    expect(result).to.deep.equal([
      'Jane Wealthy',
      'Dick Rich'
    ])
  })

  it('excludes people who earn the average salary', () => {
    const employees = [
      { firstName: 'Tom', lastName: 'Poor', salary: 2000 },
      { firstName: 'Lilly', lastName: 'Beggar', salary: 3000 },
      { firstName: 'Jane', lastName: 'Wealthy', salary: 4000 }
    ]
    const result = getHighEarners(employees)
    expect(result).to.deep.equal([
      'Jane Wealthy'
    ])
  })
})
