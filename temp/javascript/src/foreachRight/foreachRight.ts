/**
 * 反向遍历
 * @category Function
 * @param obj 被遍历的对象
 * @param callback 回调函数
 */
export function foreachRight(obj: any, callback: Function): void {
  let array = [];
  for (let k in obj) {
    array.unshift(k);
  }
  for (let k in array) {
    callback(obj[array[k]], array[k], obj);
  }
}