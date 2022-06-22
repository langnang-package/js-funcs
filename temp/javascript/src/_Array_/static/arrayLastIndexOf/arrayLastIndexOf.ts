/**
 * 
 * @hidden
 * @param array 
 * @param searchElement 
 * @param fromIndex 
 * @returns 
 */
export const arrayLastIndexOf = (array: any[], searchElement: any, fromIndex = array.length - 1) => {
  for (let i = fromIndex; i >= 0; i--) {
    if (array[i] === searchElement) {
      return i;
    }
  }
  return -1;
};
