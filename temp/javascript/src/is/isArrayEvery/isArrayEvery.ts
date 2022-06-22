/**
 * 检测所有元素符合
 * @param {*} arr 
 * @param {*} fn 
 */

export const isArrayEvery = (array: [], fn = Boolean) => array.every(fn);

