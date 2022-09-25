/**
 * @name is_array
 * @desc 检测是否为数组
 * @param {*} object 需要检测的对象
 */
export const is_array = (object: any) =>
  Object.prototype.toString.call(object) === "[object Array]";
