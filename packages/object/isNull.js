/**
 * @name isNull
 * @desc 判断是否是Null
 * @param {*} object 
 * @return {Boolean}
 */
export const isNull = object => Object.prototype.toString.call(object) === '[object Null]'