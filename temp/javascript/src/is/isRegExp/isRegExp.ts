import { type } from "../../type/type"
/**
 * 检测正则
 */
export const isRegExp = (obj: RegExp) => type(obj) === 'regexp'