import { type } from "../../type/type"
/**
 * 检测对象
 * @param {*} obj
 * @returns {Boolean}
 */
export const isObject = (obj: any) => type(obj) === 'object'