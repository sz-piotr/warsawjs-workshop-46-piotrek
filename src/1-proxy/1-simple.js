/**
 * Returns a new object that behaves like the original, but for numerical
 * properties returns the value +1.
 *
 * Example: `{ foo: 3, bar: 'bla bla' }`
 * Returns: `Proxy<{ foo: 4, bar: 'bla bla' }>`
 *
 * @param target original object
 * @returns a proxy that always returns +1
 */
export function alwaysPlusOne (target) {
  return new Proxy(target, {
    get (target, property) {
      const value = Reflect.get(target, property)
      if (typeof value === 'number') {
        return value + 1
      }
      return value
    }
  })
}
