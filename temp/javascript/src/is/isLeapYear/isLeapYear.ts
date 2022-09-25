/**
 * 检测是否为闰年
 * @param {*} year 
 */
export const isLeapYear = (year: number) => !(year % (year % 100 ? 4 : 400))

