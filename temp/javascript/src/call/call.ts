/**
 * [`Function.prototype.call()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/call)
 * 
 * `call()` 方法使用一个指定的 `this` 值和单独给出的一个或多个参数来调用一个函数。
 * @category Function
 * @param thisArg 可选的。在 function 函数运行时使用的 this 值。
 * @param args 指定的参数列表。
 * @returns 使用调用者提供的 this 值和参数调用该函数的返回值。若该方法没有返回值，则返回 undefined。
 */
export const call = (thisArg: any, ...args: []): any => {
  thisArg = thisArg || window // 判断上下文是否传入，默认window
  const fn: any = this // 保存this
  thisArg.fn = fn // 最重要的一步：改变this指向，通过挂载到context上，实现this的转移
  const res: any = thisArg.fn(...args) // 立即执行
  delete thisArg.fn
  return res // 返回结果
}