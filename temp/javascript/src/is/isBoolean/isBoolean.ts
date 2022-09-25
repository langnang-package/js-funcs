import { type } from "../../type/type"
/**
 * 检测布尔值
 * @param {*} obj
 * @returns {Boolean}
 */
export const isBoolean = (obj: Boolean) => type(obj) === 'boolean'