/**
 * [`Array.prototype.findIndex`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)
 * 
 * 返回数组中满足提供的测试函数的第一个元素的索引。若没有找到对应元素则返回-1。
 * @hidden
 * @param array 
 * @param callback 
 * @param thisArg 
 * @returns 
 */
export const arrayFindIndex = (array: any[], callback: Function, thisArg: Object) => {
  for (let key in array) {
    if (callback(array[key], key, array)) {
      return key;
    }
  }
  return -1;
};