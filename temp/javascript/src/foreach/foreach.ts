/**
 * 遍历
 * - [`Array.prototype.foreach()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/foreach)
 * @category Function
 * @param obj 被遍历的对象
 * @param callback 回调函数
 * @param reverse 反向。默认为FALSE。
 */
export function foreach(obj: any, callback: Function, reverse: boolean = false): void {
  for (let key in obj) {
    callback(obj[key], key, obj)
  }
}


