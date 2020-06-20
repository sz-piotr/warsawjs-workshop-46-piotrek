/**
 * Adds an undo option for setting property on the target.
 *
 * @param target original object
 * @returns {{ result: any, undo: () => void }} an object that has the wrapped
 * target under the `result` key and the undo function under the `undo` key.
 */
export function addUndo (target) {
  const undoStack = []
  return {
    result: new Proxy(target, {
      set (target, property, value, receiver) {
        if (Reflect.has(target, property)) {
          const current = Reflect.get(target, property, receiver)
          undoStack.push(() => Reflect.set(target, property, current, receiver))
        } else {
          undoStack.push(() => Reflect.deleteProperty(target, property))
        }
        return Reflect.set(target, property, value, receiver)
      }
    }),
    undo () {
      const operation = undoStack.pop()
      if (operation) {
        operation()
      }
    }
  }
}
