import { type } from "../../type/type"
/**
 * 检测日期
 */
export const isDate = (obj: Date) => type(obj) === 'date'
