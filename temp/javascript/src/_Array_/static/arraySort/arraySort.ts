/**
 * 
 * @hidden
 * @param array 
 * @param compareFunction 
 * @returns 
 */
export const arraySort = (array: any[], compareFunction = (a: any, b: any) => a - b) => {
  // in-place 原地算法
  let index = 0;
  while (index < array.length) {
    for (let i = index; i <= array.length - 1; i++) {
      let compare = compareFunction(array[index], array[i]);
      if (compare > 0) {
        [array[index], array[i]] = [array[i], array[index]];
      }
    }
    index++;
  }
  return array;
};
