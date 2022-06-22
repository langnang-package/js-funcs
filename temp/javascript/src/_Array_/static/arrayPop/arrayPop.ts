/**
 * 
 * @hidden
 * @param array 
 * @returns 
 */
export const arrayPop = (array: any[]) => {
  let value = array[array.length - 1];
  array.length = array.length - 1;
  return value;
};
