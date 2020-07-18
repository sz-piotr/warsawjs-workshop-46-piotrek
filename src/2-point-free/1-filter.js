const compose = (...fs) => x => fs.reduceRight((x, f) => f(x), x)
const filter = f => array => array.filter(f)
const getProperty = prop => x => x[prop]
const isLessThan = value => x => x < value

/**
 * Write a point-free function that returns all animals which names are shorter
 * than 5. Each animal is an object with the following shape:
 * ```
 * {
 *   name: string,
 *   kind: string,
 *   age: number,
 * }
 * ```
 * Example:
 * ```
 * Input = [
 *   { name: 'Fifi', kind: 'dog', age: 4 },
 *   { name: 'Pancake', kind: 'cat', age: 2 },
 *   { name: 'Lo', kind: 'parrot', age: 5 },
 * ]
 * Output = [
 *   { name: 'Fifi', kind: 'dog', age: 4 },
 *   { name: 'Lo', kind: 'parrot', age: 5 },
 * ]
 * ```
 */
export const getShortNamedAnimals = filter(
  compose(
    isLessThan(5),
    getProperty('length'),
    getProperty('name')
  )
)
