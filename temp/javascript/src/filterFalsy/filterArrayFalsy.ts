/**
 * 过滤数组中的虚假值
 * @category Array
 * @param array 
 * @returns 
 */
export const filterArrayFalsy = (array: []): any[] => array.filter(Boolean)