/**
 * 日期所在月的最后一天
 * @param {*} date 
 */
export const lastDayofMonth = (date: Date) => new Date(new Date(date.getFullYear(), date.getMonth() + 1) as any - 1)

