/**
 * 日期所在周的周一
 * @param {*} date 
 */
export const monday = (date: Date) => new Date(date as any - (date.getDay() - 1) * 86400000)

