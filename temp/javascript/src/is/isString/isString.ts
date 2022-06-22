import { type } from "../../type/type"
/**
 * 检测字符串
 * @param {*} obj
 * @returns {Boolean}
 */
export const isString = (obj: any) => type(obj) === 'string'