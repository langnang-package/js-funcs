/**
 * 应用 Collatz 算法
 * @category Math
 */
export const collatz = (n: number) => (n % 2 === 0) ? (n / 2) : (3 * n + 1);
