/**
 * @name isNumber
 * @desc 判断是否是数字
 * @param {*} object
 * @return {Boolean}
 */
export const is_number = (object: any) =>
  Object.prototype.toString.call(object) === "[object Number]" &&
  Number.isFinite(object) &&
  !Number.isNaN(object) &&
  typeof object === "number";
