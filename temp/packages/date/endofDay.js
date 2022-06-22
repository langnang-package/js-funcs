/**
 * 日期的23:59:59
 * @param {*} date 
 */
export const endofDay = date => new Date(new Date(date.toLocaleDateString()).getTime() + 24 * 60 * 60 * 1000 - 1)