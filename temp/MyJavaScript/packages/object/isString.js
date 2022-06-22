/**
 * @name isString
 * @desc 检测是否为字符串
 * @param {*} object 
 * @return {Boolean}
 */

export const isString = object => Object.prototype.toString.call(object) === '[object String]'