/**
 * 千位分隔符
 * @param {*} num
 */
export const thousandsSeparator = (num: Number) => num.toLocaleString("en");
const thousandsSeparator_1 = (num: number) => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
const thousandsSeparator_2 = (num: number) => num.toString().replace(/(\d)(?=(\d{3})+\b)/g, "$1.");