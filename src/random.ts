/**
 * 返回随机值
 * @param {Number} num 随机值范围，默认为1
 * @returns {Number}
 */
export const random = (max = 1, min = 0) => Math.random() * max + (max - min);
