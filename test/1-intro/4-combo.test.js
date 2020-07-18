import { expect } from 'chai'
import { getHighEarnersByPosition } from '../../src/1-intro/4-combo'

describe.skip('4 - (intro) combo - getHighEarners', () => {
  it('returns [] given []', () => {
    const employees = []
    const result = getHighEarnersByPosition(employees)
    expect(result).to.deep.equal([])
  })

  it('works for the example', () => {
    const employees = [
      { firstName: 'Tom', lastName: 'Poor', position: 'Accountant', salary: 1000 },
      { firstName: 'Lilly', lastName: 'Rich', position: 'Accountant', salary: 3000 },
      { firstName: 'Jane', lastName: 'Wealthy', position: 'Accountant', salary: 4000 },
      { firstName: 'James', lastName: 'Fair', position: 'Boss', salary: 4000 },
      { firstName: 'Dick', lastName: 'Greedy', position: 'Boss', salary: 5000 }
    ]
    const result = getHighEarnersByPosition(employees)
    expect(result).to.deep.equal([
      { position: 'Accountant', employees: ['Lilly Rich', 'Jane Wealthy'] },
      { position: 'Boss', employees: ['Dick Greedy'] }
    ])
  })
})
