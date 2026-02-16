export function sum(a: number, b: number): number {
  return a + b
}

export function subtract(a: number, b: number): number {
  return a - b
}

export function multiply(a: number, b: number): number {
  return a * b
}

/**
 * Returns the result of dividing a by b.
 * @param {number} a The dividend.
 * @param {number} b The divisor.
 * @returns {number} The result of dividing a by b.
 */
export function divide(a: number, b: number): number {
  return a / b
}

/**
 * Returns a to the power of b.
 * @param {number} a The base.
 * @param {number} b The exponent.
 * @returns {number} The result of a to the power of b.
 */
export function power(a: number, b: number): number {
  return a ** b
}

/**
 * Returns the square of a given number.
 * @param {number} a The number to be squared.
 * @returns {number} The square of the given number.
 */
export function square(a: number): number {
  return a * a
}

/**
 * Returns the cube of a given number.
 * @param {number} a The number to be cubed.
 * @returns {number} The cube of the given number.
 */
export function cube(a: number): number {
  return a * a * a
}