/**
 * 将指定数量的元素移动到数组的末尾。
 * @param {*} arr
 * @param {*} offset
 */
export const array_offset = (array: any[], offset: number = 1) => [
  ...array.slice(offset),
  ...array.slice(0, offset),
];
