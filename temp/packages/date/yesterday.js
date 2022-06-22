/**
 * 昨天
 * @param {*} date 
 */
export const yesterday = date => new Date(date.getTime() - 24 * 60 * 60 * 1000)