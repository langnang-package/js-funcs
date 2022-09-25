import { isArray } from "../is/isArray/isArray";
/**
 * 反转数组
 * @param {Array,String} array 
 */
export const reverse = (obj: any) => isArray(obj) ? obj.reverse() : obj.split('').reverse().join('');

