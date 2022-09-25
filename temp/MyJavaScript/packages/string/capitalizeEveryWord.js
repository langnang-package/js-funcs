/**
 * @name capitalizeEveryWord
 * @desc 将字符串中每个单词的首字母大写
 * @param {*} string 
 */
export const capitalizeEveryWord = string => string.replace(/\b[a-z]/g, char => char.toUpperCase());