/**
 * 将数字转换为数字数组
 * @category Math
 * @category Array
 */
export const digitize = (num: number): any[] => [...'' + num].map(i => parseInt(i));
