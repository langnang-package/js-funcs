/**
 * @name count
 * @desc 统计值的出现次数
 * @param {*} arr
 * @param {*} value
 */
export const array_count = (array: any[], val: any = array[0]): any =>
  array.reduce((a, v) => (v === val ? a + 1 : a), 0);
