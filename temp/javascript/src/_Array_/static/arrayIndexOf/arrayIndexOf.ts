/**
 * 
 * @hidden
 * @param array 
 * @param searchElement 
 * @param fromIndex 
 * @returns 
 */
export const arrayIndexOf = (array: any[], searchElement: any, fromIndex: number = 0) => {
  for (let i = fromIndex; i <= array.length - 1; i++) {
    if (array[i] === searchElement) {
      return i;
    }
  }
  return -1;
};
