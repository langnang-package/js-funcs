import { timestamp } from '../timestamp/timestamp'
/**
 * 指定日期的N分后
 * @param {*} date 
 * @param {*} n 
 */
export const nextMinutes = (date: Date, n = 1) => new Date(timestamp(date) + n * 60 * 1000);

