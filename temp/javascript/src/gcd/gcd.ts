/**
 * 计算两个数字之间最大的公共除数
 * @category Math
 * @param {*} x 
 * @param {*} y 
 */
export const gcd = (x: number, y: number): number => !y ? x : gcd(y, x % y);

