import { expect } from 'chai'
import { countdown } from '../../src/4-async/1-countdown'

describe('Async 1 - countdown', () => {
  it('counts down from 10 to 0', async () => {
    let lastTime
    let i = 10
    for await (const number of countdown(10)) {
      if (!lastTime) {
        lastTime = Date.now()
      } else {
        const now = Date.now()
        expect(now - lastTime >= 10).to.equal(true)
        lastTime = now
      }
      expect(number).to.equal(i--)
    }
  })
})
