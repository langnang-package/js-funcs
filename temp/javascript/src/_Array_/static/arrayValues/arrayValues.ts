import { arrayPush } from "../arrayPush/arrayPush";
/**
 * 
 * @hidden
 * @param array 
 * @returns 
 */
export const arrayValues = (array: any[]) => {
  let res: any[] = [];
  for (let key in array) {
    arrayPush(res, array[key]);
  }
  return res;
};
