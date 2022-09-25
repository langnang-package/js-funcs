/**
 * @description 取重复值
 * @param {*} arr
 */

export const array_duplicate = (arr: any[]): any[] => [
  ...new Set(
    arr.reduce(
      (acc, val, index) =>
        arr.indexOf(val, index + 1) >= 0 ? acc.concat(val) : acc,
      []
    )
  ),
];
