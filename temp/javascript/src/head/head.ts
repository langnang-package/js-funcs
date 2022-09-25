/**
 * 数组的前n个元素
 * @category Array
 * @param {Array} arr
 */
import { slice } from "../slice/slice";
export const head = (array: any[], n = 1, mode = "prototype") => {
  if (n == 1) return array[0];

  let _map = new Map();
  _map.set("prototype", (array: any[], n: number) => array.slice(0, n));
  _map.set("_prototype", (array: any[], n: number) => slice(array, 0, n));
  _map.set("for", (array: any[], n: number) => {
    let _head = [];
    for (let i = 0; i <= n - 1; i++) {
      _head[i] = array[i];
    }
    return _head;
  });

  if (!_map.has(mode)) mode = "prototype";

  return _map.get(mode)(array, n);
};


