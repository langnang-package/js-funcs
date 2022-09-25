/**
 * @name head
 * @description 数组的前n个元素
 * @param {Array} arr
 */
import { array_slice } from "./array_slice";
export const array_head = (array: any[], n = 1, mode = "prototype") => {
  if (n == 1) return array[0];

  let _map = new Map();
  _map.set("prototype", (array: any[], n = 1) => array.slice(0, n));
  _map.set("_prototype", (array: any[], n = 1) => array_slice(array, 0, n));
  _map.set("for", (array: any[], n = 1) => {
    let _head = [];
    for (let i = 0; i <= n - 1; i++) {
      _head[i] = array[i];
    }
    return _head;
  });

  if (!_map.has(mode)) mode = "prototype";

  return _map.get(mode)(array, n);
};
