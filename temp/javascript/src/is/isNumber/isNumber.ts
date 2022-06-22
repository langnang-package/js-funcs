import { type } from "../../type/type"
/**
 * 检测数值
 * @param {*} obj
 * @returns {Boolean}
 */
export const isNumber = (obj: any) => type(obj) === 'number'