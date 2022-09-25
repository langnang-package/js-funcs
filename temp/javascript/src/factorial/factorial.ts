/**
 * 阶乘
 * @category Math
 * @param {number} number
 * @return {number}
 */
export const factorial = (number: number): number => number > 1 ? number * factorial(number - 1) : 1

