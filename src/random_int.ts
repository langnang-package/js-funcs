/**
 * 返回随机整数
 * @param {Number} num 随机值范围，默认为1
 * @returns {Number}
 */
export const random_int = (max: number = 1, min: number = 0) => Math.floor(Math.random() * max + (max - min));
