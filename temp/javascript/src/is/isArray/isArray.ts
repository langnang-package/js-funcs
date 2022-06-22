import { type } from "../../type/type"
/**
 * 检测数组
 * @category Object
 */
export const isArray = (obj: any) => type(obj) === 'array'