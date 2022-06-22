/**
 * @name unique
 * @desc 返回数组的所有不同值（去重）
 * @param {Array} arr 
 */
export const unique = arr => [...new Set(arr)];