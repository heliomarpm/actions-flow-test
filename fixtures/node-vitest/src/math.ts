
/**
 * Returns the sum of two numbers.
 * @param {number} a The first addend.
 * @param {number} b The second addend.
 * @returns {number} The sum of the two given numbers.
 */
export function sum(a: number, b: number): number {
  return a + b
}

/**
 * Returns the difference of two numbers.
 * @param {number} a The minuend.
 * @param {number} b The subtrahend.
 * @returns {number} The difference of the two given numbers.
 */
export function subtract(a: number, b: number): number {
  return a - b
}

/**
 * Returns the product of two numbers.
 * @param {number} a The first factor.
 * @param {number} b The second factor.
 * @returns {number} The product of the two given numbers.
 */
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
  if (b === 0) {
    throw new Error('Division by zero is not allowed')
  }
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

/**
 * Returns the square root of a given number.
 * @param {number} a The number to take the square root of.
 * @returns {number} The square root of the given number.
 */
export function sqrt(a: number): number {
  return Math.sqrt(a)
}

/**
 * Returns the absolute value of a given number.
 * @param {number} a The number to get the absolute value of.
 * @returns {number} The absolute value of the given number.
 */
export function abs(a: number): number {
  return Math.abs(a)
}

/**
 * Returns the minimum of two numbers.
 * @param {number} a The first number.
 * @param {number} b The second number.
 * @returns {number} The minimum of the two given numbers.
 */
export function min(a: number, b: number): number {
  return Math.min(a, b);
} 