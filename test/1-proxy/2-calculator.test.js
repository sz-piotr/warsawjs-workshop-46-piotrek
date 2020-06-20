import { expect } from 'chai'
import { createCalculator } from '../../src/1-proxy/2-calculator'

describe('Proxy 2 - calculator', () => {
  const testCases = [
    { expression: '1 + 2', result: 3 },
    { expression: '1234 + 456', result: 1690 },
    { expression: '5.5 + 2.45', result: 7.95 },
    { expression: '1 - 2', result: -1 },
    { expression: '1234 - 456', result: 778 },
    { expression: '5.5 - 2.45', result: 3.05 }
  ]

  for (const { expression, result } of testCases) {
    it(`${expression} = ${result}`, () => {
      const calculator = createCalculator()
      expect(calculator[expression]).to.equal(result)
    })
  }
})
