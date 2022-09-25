/**
 * 校验字符串格式数字
 * @param {String} string
 * @return {Boolean}
 */
export const validNumber = (num: any) => !isNaN(parseFloat(num)) && isFinite(num) && Number(num) == num;