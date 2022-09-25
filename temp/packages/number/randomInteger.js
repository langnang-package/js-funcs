/**
 * @name randomIntegerInRange
 * @desc 返回指定范围内的随机整数
 * @param {*} min 
 * @param {*} max 
 */
export const randomInteger = (min, max = min + 1) => Math.floor(Math.random() * (max - min + 1)) + min;