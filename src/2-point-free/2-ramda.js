import { compose, lt, prop, filter, __ } from 'ramda'

/**
 * Write the same function from exercise 1, but this time use Ramda.
 */
export const getShortNamedAnimals = filter(
  compose(
    lt(__, 5),
    prop('length'),
    prop('name')
  )
)
