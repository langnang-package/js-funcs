/**
 * [`Function.prototype.bind()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)
 * 
 * `bind()` 方法创建一个新的函数，在 `bind()` 被调用时，这个新函数的 `this` 被指定为 `bind()` 的第一个参数，而其余参数将作为新函数的参数，供调用时使用。
 * @category Function
 * @param thisArg 调用绑定函数时作为 this 参数传递给目标函数的值。 
 * @param args 当目标函数被调用时，被预置入绑定函数的参数列表中的参数。
 * @returns 返回一个原函数的拷贝，并拥有指定的 this 值和初始参数。
 */
export const bind = (thisArg: any, ...args: []): any => {
  thisArg = thisArg || window // 判断上下文是否传入，默认window
  const fn: any = this // 保存this
  thisArg.fn = fn // 最重要的一步：改变this指向，通过挂载到context上，实现this的转移
  // 返回闭包
  return function () {
    const res: any = thisArg.fn(...args) // 立即执行
    delete thisArg.fn
    return res // 返回结果
  }
}