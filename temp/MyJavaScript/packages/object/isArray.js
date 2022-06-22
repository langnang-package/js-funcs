/**
 * @name isArray
 * @desc 检测是否为数组
 * @param {*} arr 
 */
export const isArray = object => Object.prototype.toString.call(object) === '[object Array]'