import { expect } from 'chai'
import { getTotalSalary } from '../../src/1-intro/2-reduce'

describe('2 - reduce - getSentences', () => {
  it('returns 0 given []', () => {
    const employees = []
    const result = getTotalSalary(employees)
    expect(result).to.equal(0)
  })

  it('returns total salary of the employees', () => {
    const employees = [
      { firstName: 'Johnny', lastName: 'Depp', salary: 15000 },
      { firstName: 'Marylin', lastName: 'Monroe', salary: 20000 },
      { firstName: 'Danny', lastName: 'DeVito', salary: 1000 }
    ]
    const result = getTotalSalary(employees)
    expect(result).to.equal(36000)
  })
})
