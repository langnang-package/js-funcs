/**
 * 随机字符串
 * @category String
 * @category random
 */
export const randomString = (): string => Math.random().toString(36).slice(2);