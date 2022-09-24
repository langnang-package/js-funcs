/**
 * @name isDate
 * @desc 检测Date
 * @param {*} obj
 */
export const is_date = (object) =>
  Object.prototype.toString.call(object) === "[object Date]";
