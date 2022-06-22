/**
 * 
 * @hidden
 * @param array 
 * @param callback 
 * @param initialValue 
 * @returns 
 */
export const arrayReduce = (array: any[], callback: Function, initialValue = array[0]) => {
  for (let key in array) {
    initialValue = callback(initialValue, array[key], key, array);
  }
  return initialValue;
};
