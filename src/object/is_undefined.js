/**
 * @name isUndefined
 * @desc 判断是否是Undefined
 * @param {*} object
 * @return {Boolean}
 */

export const is_undefined = (object) =>
  Object.prototype.toString.call(object) === "[object Undefined]";
