/*
Write a function that safely accesses a prop of an object and wraps the result
in the Maybe monad.
*/

const Maybe = {
  just (value) {
    return {
      value,
      bind: fn => fn(value)
    }
  },
  nothing () {
    return {
      bind: Maybe.nothing
    }
  }
}

export function safeGetProp (object, prop) {
}
