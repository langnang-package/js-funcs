import { slice } from "../slice/slice";
/**
 * @category Array
 * @param array 
 * @returns 
 */
export function shift(array: any[]) {
  const value = array[0];
  array = slice(array, 1 - array.length);
  return value;
};
