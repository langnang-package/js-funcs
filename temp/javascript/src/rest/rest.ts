/**
 * 返回数组中的所有元素, 除第一个
 * @category Array
 * @param {*} arr
 */
import { slice } from "../slice/slice";

export const rest = (array: any[], n = 1, mode = "prototype") => {
  if (n == 1) return array[array.length - 1];

  let _map = new Map();
  _map.set("prototype", (array: any[], n = 1) => array.slice(array.length - n));
  _map.set("_prototype", (array: any[], n = 1) => slice(array, array.length - n));

  if (!_map.has(mode)) mode = "prototype";

  return _map.get(mode)(array, n);
};

