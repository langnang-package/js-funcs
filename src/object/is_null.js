/**
 * @name isNull
 * @desc 判断是否是Null
 * @param {*} object
 * @return {Boolean}
 */
export const is_null = (object) =>
  Object.prototype.toString.call(object) === "[object Null]";
