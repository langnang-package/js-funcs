/**
 * 检测正则
 * @param {*} object
 */
export const is_regexp = (object: any) =>
  Object.prototype.toString.call(object) === "[object RegExp]";
