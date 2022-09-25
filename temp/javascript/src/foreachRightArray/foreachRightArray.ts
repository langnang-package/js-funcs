/**
 * 反向遍历数组
 * @category Array
 * @param array 
 * @param callback 
 */
export function foreachRightArray(array: any[], callback: any) {
  return array
    .slice(0)
    .reverse()
    .forEach(callback);
} 