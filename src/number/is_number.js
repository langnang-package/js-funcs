/**
 * @name isNumber
 * @desc 判断是否是数字
 * @param {*} object
 * @return {Boolean}
 */
export const is_number = (v) =>
  Object.prototype.toString.call(v) === "[object Number]" &&
  Number.isFinite(v) &&
  !Number.isNaN(v) &&
  typeof v === "number";
