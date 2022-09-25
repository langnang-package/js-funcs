import { type } from "../../type/type"
/**
 * 检测Null
 * @param {*} obj 
 * @return {Boolean}
 */

export const isNull = (obj: any) => type(obj) === 'null'