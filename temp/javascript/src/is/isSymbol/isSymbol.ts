import { type } from "../../type/type"
/**
 * 检测Symbol
 * @param {*} object 
 * @return {Boolean}
 */
export const isSymbol = (obj: any) => type(obj) === 'symbol'