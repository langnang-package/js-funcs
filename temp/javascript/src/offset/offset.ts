/**
 * 将指定数量的元素移动到数组的末尾。
 * @category Array
 * @param {*} arr 
 * @param {*} offset 
 */
export const offset = (array: any[], offset: number) => [...array.slice(offset), ...array.slice(0, offset)];

