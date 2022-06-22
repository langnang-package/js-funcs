/**
 * @name isDate
 * @desc 检测Date
 * @param {*} obj 
 */
export const isDate = object => Object.prototype.toString.call(object) === "[object Date]";