/**
 * [`Array.prototype.fill`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/fill)
 * 
 * 用一个固定值填充一个数组中从起始索引到终止索引内的全部元素。不包括终止索引。
 * @hidden
 * @param array 
 * @param value 
 * @param start 
 * @param end 
 * @returns 
 */
export const arrayFill = (array: any[], value: any, start = 0, end = array.length - 1) => {
  for (let i = start; i <= end; i++) {
    array[i] = value;
  }
  return array;
};
