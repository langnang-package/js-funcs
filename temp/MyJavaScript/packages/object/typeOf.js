/**
 * 获取数据类型
 * @param {*} object 
 */
export const typeOf = object => Object.prototype.toString.call(object).substring(8, Object.prototype.toString.call(object).length - 1).toLowerCase()