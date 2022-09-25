/**
 * `apply()` 方法调用一个具有给定this值的函数，以及以一个数组（或类数组对象）的形式提供的参数。
 * - [`Function.prototype.apply()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)
 * @category Function
 * @param thisArg 必选的。在 func 函数运行时使用的 this 值。
 * @param argsArray 可选的。一个数组或者类数组对象，其中的数组元素将作为单独的参数传给 func 函数。
 * @returns 调用有指定this值和参数的函数的结果。
 */
export const apply = (thisArg: any, argsArray: []): any => {
  thisArg = thisArg || window // 判断上下文是否传入，默认window
  const fn: any = this // 保存this
  thisArg.fn = fn // 最重要的一步：改变this指向，通过挂载到thisArg上，实现this的转移
  const res: any = thisArg.fn(...argsArray) // 立即执行
  delete thisArg.fn
  return res
}