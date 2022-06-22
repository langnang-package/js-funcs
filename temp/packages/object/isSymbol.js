/**
 * @name isSymbol
 * @desc 判断是否是Symbol
 * @param {*} object 
 * @return {Boolean}
 */
export const isSymbol = object => Object.prototype.toString.call(object) === '[object Symbol]'