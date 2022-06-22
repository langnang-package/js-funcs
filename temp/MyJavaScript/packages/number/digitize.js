/**
 * 将数字转换为数字数组
 * @param {Number} num 
 */
export const digitize = num => [...'' + num].map(i => parseInt(i));