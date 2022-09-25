import { timestamp } from '../timestamp/timestamp'
/**
 * 指定日期的N周后
 * @param {*} date 
 * @param {*} n 
 */
export const nextWeeks = (date: Date, n = 1) => new Date(timestamp(date) + n * 7 * 24 * 60 * 60 * 1000);

