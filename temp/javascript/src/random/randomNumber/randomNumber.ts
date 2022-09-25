/**
 * 返回指定范围内的随机数
 * @category Number
 * @category random
 */
export const randomNumber = (min: number, max = min + 1): number => Math.random() * (max - min) + min;
