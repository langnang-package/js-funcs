/**
 * 检测正则
 * @param {*} object 
 */
export const isRegExp = object => Object.prototype.toString.call(object) === '[object RegExp]'