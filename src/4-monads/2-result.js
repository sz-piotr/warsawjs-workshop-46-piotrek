/*
Create the Result monad (normally named Either but it is more confusing). It has
two constructors:

Result.ok(value)
Result.error(error)

Binding on ok allows us to manipulate the value, but binding on error preserves
the error.

Example:

function safeDiv (a, b) {
  if (b === 0) {
    return Result.error('cannot divide by 0')
  }
  return Result.ok(a / b)
}

safeDiv(1, 2).bind(x => Result.ok(x + 1)) // Result.ok(1.5)
safeDiv(1, 0).bind(x => Result.ok(x + 1)) // Result.error('cannot divide by 0')
*/

export const Result = {
  ok (value) {
    return {
      value,
      bind: fn => fn(value)
    }
  },
  error (error) {
    return {
      error,
      bind: () => Result.error(error)
    }
  }
}
