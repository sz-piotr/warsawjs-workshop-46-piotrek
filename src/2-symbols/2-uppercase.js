/**
 * Instances of this class can be used as arguments to
 * `String.prototype.replace`. This results in a string where all occurrences
 * of a particular letter are replaced by the uppercase of a given letter.
 *
 * Example:
 * ```
 * const x = 'abracadabra'.replace(new UppercaseLetter('a'))
 * x === 'AbrAcAdAbrA' // true
 * ```
 */
export class UppercaseLetter {
}
