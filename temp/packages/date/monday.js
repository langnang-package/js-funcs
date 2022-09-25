/**
 * 日期所在周的周一
 * @param {*} date 
 */
export const monday = date => new Date(date - (date.getDay() - 1) * 86400000)