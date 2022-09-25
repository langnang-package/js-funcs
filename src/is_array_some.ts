/**
 * @name isSome
 * @desc 如果提供的谓词函数对集合中的至少一个元素返回true，则返回true，否则返回false。
 * @param {*} arr
 * @param {*} fn
 */
export const is_array_some = (array: any, fn: Function = Boolean) => array.some(fn);
