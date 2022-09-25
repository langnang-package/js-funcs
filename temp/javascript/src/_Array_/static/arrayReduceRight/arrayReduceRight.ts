/**
 * 
 * @hidden
 * @param array 
 * @param callback 
 * @param initialValue 
 * @returns 
 */
export const arrayReduceRight = (array: any[], callback: Function, initialValue = array[0]) => {
  for (let i = array.length - 1; i >= 0; i--) {
    initialValue = callback(initialValue, array[i], i, array);
  }
  return initialValue;
};
