/**
 * 根据给定的函数对数组的元素进行分组，并返回每个组中元素的数量
 * @param {Array} array 
 * @param {Function} fn 
 */
export const countBy = (array: any[], fn: any) =>
  array.map(typeof fn === 'function' ? fn : val => val).reduce((acc: any, val: any) => {
    acc[`${val}`] = (acc[`${val}`] || 0) + 1;
    return acc;
  }, {});
