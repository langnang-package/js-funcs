/**
 * 阶乘
 * @param {number} number
 * @return {number}
 */
export const factorial = (number) => number > 1 ? number * factorial(number - 1, mode) : 1


function factorialByFor(number) {
  if (number <= 1) {
    return 1;
  }
  let result = 1;
  for (let i = 2; i <= number; i++) {
    result *= i;
  }
  return result;
}