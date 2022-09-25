/**
 * @name rest
 * @desc 返回数组中的所有元素, 除第一个
 * @param {*} arr
 */
import { array_slice } from "./array_slice";

export const array_rest = (array: any[], n: number = 1, mode = "prototype") => {
  if (n == 1) return array[array.length - 1];

  let _map = new Map();
  _map.set("prototype", (array: any[], n: number) => array.slice(array.length - n));
  _map.set("_prototype", (array: any[], n: number) => array_slice(array, array.length - n));

  if (!_map.has(mode)) mode = "prototype";

  return _map.get(mode)(array, n);
};
