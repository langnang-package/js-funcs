/**
 * 欧几里得算法
 * @param {number} originalA
 * @param {number} originalB
 * @return {number}
 */
export const euclidean = (originalA: number, originalB: number): number => {
  const a = Math.abs(originalA);
  const b = Math.abs(originalB);
  return (b === 0) ? a : euclidean(b, a % b);
}