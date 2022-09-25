/**
 * @name unique
 * @desc 返回数组的所有不同值（去重）
 * @param {Array} arr
 */
export const array_unique = (array: any[]): any[] => [...new Set(array)];
