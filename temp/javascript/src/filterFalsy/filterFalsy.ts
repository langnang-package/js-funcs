import { type } from "../type/type"
import { filterArrayFalsy } from "./filterArrayFalsy"
import { filterObjectFalsy } from "./filterObjectFalsy"
/**
 * 过滤虚假值
 * @category Function
 * @param {Array} array
 */
export const filterFalsy = (object: any): any => type(object) === 'array' ? filterArrayFalsy(object) : filterObjectFalsy(object)

