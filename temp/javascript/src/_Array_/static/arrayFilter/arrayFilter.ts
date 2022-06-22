import { arrayPush } from "../arrayPush/arrayPush";
/**
 * [`Array.prototype.filter`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
 * 
 * 创建一个新数组, 其包含通过所提供函数实现的测试的所有元素。 
 * @hidden
 * @param array 
 * @param callback 
 * @param thisArg 
 * @returns 
 */
export const arrayFilter = (array: any[], callback: Function, thisArg: any) => {
  let res: any[] = [];
  for (let key in array) {
    if (callback(array[key], key, array)) {
      arrayPush(res, array[key]);
    }
  }
  return res;
};
