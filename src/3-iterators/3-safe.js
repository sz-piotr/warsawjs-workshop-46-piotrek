/**
 * Cracks open the safe by yielding the correct values.
 */
export function * open () {
  const number = yield 'hello'
  let name
  try {
    yield number * 42
  } catch (e) {
    name = e
  }
  yield undefined
  return name.toUpperCase()
}
