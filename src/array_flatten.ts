/**
 * @name flatten
 * @desc 将数组展平到指定的深度。
 * @param {Array} arr
 */

import { is_array } from "./is_array";
export const flatten = (arr, depth = 1) => {
  if (depth >= 1) {
    return arr.reduce(
      (a, v) => a.concat(is_array(v) ? flatten(v, depth - 1) : v),
      []
    );
  }
  if (depth === 0) {
    return arr;
  }
  if (depth === -1) {
    return arr.reduce((a, v) => a.concat(is_array(v) ? flatten(v, -1) : v), []);
  }
};
