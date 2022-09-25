/**
 * 
 * @param {Array} array 
 * @returns {Array}
 */
export const quick_sort = (array: any[]) => {
  // 引用传递
  let _array = array.slice(0);
  // 内存溢出
  if (_array.length <= 1) return _array;
  // 初始化基值，左侧（小于基值）数组，右侧（大于基值）数组
  let pivot: any[] = _array.splice(Math.floor(_array.length / 2), 1)[0],
    left: any[] = [],
    right: any[] = [];
  // 遍历比较每个元素值与基值，分类push至左右数组
  for (let i = 0; i < _array.length; i++) {
    _array[i] <= pivot ? left.push(_array[i]) : right.push(_array[i]);
  }
  // 递归
  let result: any[] = quick_sort(left).concat(pivot, ...quick_sort(right));
  return result;
}