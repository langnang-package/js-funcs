import { arrayPush } from "../arrayPush/arrayPush";
/**
 * 
 * @hidden
 * @param array 
 * @param callback 
 * @param thisArg 
 * @returns 
 */
export const arrayMap = (array: any[], callback: Function, thisArg: Object) => {
  let res: any[] = [];
  for (let key in array) {
    arrayPush(res, callback(array[key], key, array));
  }
  return res;
};
