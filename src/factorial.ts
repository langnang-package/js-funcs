/**
 * 阶乘
 * @param {number} number
 * @return {number}
 */
export const factorial = (num: number): number => num > 1 ? num * factorial(num - 1) : 1


function factorialByFor(num: number) {
  if (num <= 1) {
    return 1;
  }
  let result = 1;
  for (let i = 2; i <= num; i++) {
    result *= i;
  }
  return result;
}