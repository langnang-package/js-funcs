/**
 * 返回指定范围内的随机整数
 * @category Number
 * @category random
 */
export const randomInteger = (min: number, max = min + 1): number => Math.floor(Math.random() * (max - min + 1)) + min;