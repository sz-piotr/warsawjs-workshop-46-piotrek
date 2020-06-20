import { expect } from 'chai'
import { addUndo } from '../../src/1-proxy/4-undo'

describe.skip('Proxy 4 - undo', () => {
  it('can undo a simple set', () => {
    const x = { a: 1 }
    const { result, undo } = addUndo(x)
    result.a = 2
    expect(result.a).to.equal(2)
    undo()
    expect(result.a).to.equal(1)
  })

  it('can undo multiple times', () => {
    const x = { a: 1 }
    const { result, undo } = addUndo(x)
    result.a = 2
    expect(result.a).to.equal(2)
    result.a = 3
    expect(result.a).to.equal(3)
    undo()
    expect(result.a).to.equal(2)
    undo()
    expect(result.a).to.equal(1)
  })

  it('calling undo when there is nothing to undo does nothing', () => {
    const x = { a: 1 }
    const { result, undo } = addUndo(x)
    undo()
    expect(result.a).to.equal(1)
  })

  it('can revert property definition', () => {
    const x = { a: 1 }
    const { result, undo } = addUndo(x)
    result.b = 2
    expect(result.a).to.equal(1)
    expect(result.b).to.equal(2)
    undo()
    expect(result.a).to.equal(1)
    expect(result.b).to.equal(undefined)
    expect('b' in result).to.equal(false)
  })

  it('works for self-referencing objects', () => {
    const x = { a: 1 }
    const { result, undo } = addUndo(x)
    result.b = result
    result.b.a = 2
    expect(result.b).to.equal(result)
    expect(result.b.a).to.equal(2)
    expect(result.a).to.equal(2)
    undo()
    expect(result.b).to.equal(result)
    expect(result.a).to.equal(1)
    undo()
    expect(result.b).to.equal(undefined)
  })
})
