import { timestamp } from '../timestamp/timestamp'
/**
 * 指定日期的N秒后
 * @param {*} date 
 * @param {*} n 
 */
export const nextSeconds = (date: Date, n = 1) => new Date(timestamp(date) + n * 1000);

