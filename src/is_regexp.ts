/**
 * 检测正则
 * @param {*} object
 */
export const is_regexp = (object) =>
  Object.prototype.toString.call(object) === "[object RegExp]";
