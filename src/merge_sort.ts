/**
 * @name mergeSort
 * @desc 归并排序
 * @param {Array} array
 * @return {Array}
 * @date 2019-07-06 
 * @todo Maximum call stack size exceeded,堆栈溢出
 */


export const merge_sort = (array: any[]) => {
  if (array.length < 2) return array;
  const merge = (left: any[], right: any[]) => {
    let result = [];
    while (left.length > 0 && right.length > 0) {
      if (left[0] <= right[0]) {
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }
    }
    while (left.length > 0) {
      result.push(left.shift());
    }
    while (right.length > 0) {
      result.push(right.shift());
    }
    return result;
  }
  let result: any[] = merge(merge_sort(array.slice(0, Math.floor(array.length / 2))), merge_sort(array.slice(Math.floor(array.length / 2))));
  return result;
}

