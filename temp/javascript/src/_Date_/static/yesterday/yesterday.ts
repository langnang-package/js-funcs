/**
 * 昨天
 * @param {*} date 
 */
export const yesterday = (date: Date) => new Date(date.getTime() - 24 * 60 * 60 * 1000)

