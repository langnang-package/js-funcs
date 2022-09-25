/**
 * @name capitalize
 * @desc 将字符串的第一个字母大写
 * @param {*} param0 
 * @param {*} lowerRest 
 */
export const capitalize = ([first, ...rest], lowerRest = false) =>
    first.toUpperCase() + (lowerRest ? rest.join('').toLowerCase() : rest.join(''));