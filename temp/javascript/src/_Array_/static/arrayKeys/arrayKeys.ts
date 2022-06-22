import { arrayPush } from "../arrayPush/arrayPush";
/**
 * 
 * @hidden
 * @param array 
 * @returns 
 */
export const arrayKeys = (array: any[]) => {
  let res: any[] = [];
  for (let key in array) {
    arrayPush(res, key);
  }
  return res;
};
