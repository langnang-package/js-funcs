/**
 * 深拷贝数组
 * @param {*} array
 * @param {*} mode
 */

const deepCopyArrayBySlice = (array: any[]) => array.slice(0);
const deepCopyArrayByConcat = (array: any[]) => [].concat(array);
const deepCopyArrayByString = (array: any[]) => JSON.parse(JSON.stringify(array));

export const deepCopyArray = deepCopyArrayBySlice;