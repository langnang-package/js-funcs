import { timestamp } from "../timestamp/timestamp";
/**
 * 指定日期的N天后
 * @param {*} date 
 * @param {*} n 
 */
export const nextDays = (date: Date, n = 1) => new Date(timestamp(date) + n * 24 * 60 * 60 * 1000);

