/**
 * @name isObject
 * @desc 判断是否是Object
 * @param {*} object 
 * @return {Boolean}
 */

export const isObject = object => Object.prototype.toString.call(object) === '[object Object]';