import { expect } from 'chai'
import { UppercaseLetter } from '../../src/2-symbols/2-uppercase'

describe('Symbols 2 - uppercase', () => {
  it('works for the example case', () => {
    const x = 'abracadabra'.replace(new UppercaseLetter('a'))
    expect(x).to.equal('AbrAcAdAbrA')
  })

  it('can be used multiple times', () => {
    const bToB = new UppercaseLetter('b')
    const x = 'baba'.replace(bToB)
    const y = 'zombie'.replace(bToB)
    expect(x).to.equal('BaBa')
    expect(y).to.equal('zomBie')
  })

  it('works on strings without that letter', () => {
    const x = 'without'.replace(new UppercaseLetter('a'))
    expect(x).to.equal('without')
  })
})
