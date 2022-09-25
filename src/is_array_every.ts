/**
 * @description 检测所有元素符合
 * @param {*} arr
 * @param {*} fn
 */

export const is_array_every = (array, fn = Boolean) => array.every(fn);
