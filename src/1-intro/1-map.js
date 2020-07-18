/**
 * Write a function that takes an array of employees and returns sentences about
 * their salary. Use Array.prototype.map.
 *
 * Each employee is an object in the following form:
 * ```
 * {
 *   firstName: string,
 *   lastName: string,
 *   salary: number,
 * }
 * ```
 *
 * Example:
 * ```
 * Input = [{ firstName: 'John', lastName: 'Doe', salary: 2000 }]
 * Output = 'John Doe earns 2000 dollars.'
 * ```
 */
export function getSentences (employees) {
  return employees.map(employee => (
    employee.firstName +
    ' ' +
    employee.lastName +
    ' earns ' +
    employee.salary +
    ' dollars.'
  ))
}
