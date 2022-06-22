import { timestamp } from '../timestamp/timestamp'
/**
 * 指定日期的N时后
 * @param {*} date 
 * @param {*} n 
 */
export const nextHours = (date: Date, n = 1) => new Date(timestamp(date) + n * 60 * 60 * 1000);

