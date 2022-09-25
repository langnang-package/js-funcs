/**
 * 取重复值
 * @category Array
 */

export const duplicate = (arr: []) => [...new Set(arr.reduce((acc, val, index) => arr.indexOf(val, index + 1) >= 0 ? acc.concat(val) : acc, []))]

