/**
 * 反转数组
 * @param {Array} array
 */
export const array_reverse = (array: any[]) => {
  let _array = [];
  let index = 0;
  let indexOfSource = array.length - 1;
  while (indexOfSource >= 0) {
    _array[index] = array[indexOfSource];
    index++;
    indexOfSource--;
  }
  return _array;
};
