/**
 * 
 * @hidden
 * @param array 
 * @param callback 
 * @param thisArg 
 * @returns 
 */
export const arraySome = (array: any[], callback: Function, thisArg: Object) => {
  let falsy = false;
  for (let key in array) {
    falsy = callback(array[key], key, array);
    if (falsy) {
      return falsy;
    }
  }
  return falsy;
};
