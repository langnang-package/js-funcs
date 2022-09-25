/**
 * @name isFunction
 * @desc 判断是否是函数
 * @param {*} object
 * @return {Boolean}
 * @date 2019-07-06
 */
export const is_function = (object: any) =>
  Object.prototype.toString.call(object) === "[object Function]";
