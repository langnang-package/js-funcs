import { type } from "../../type/type"
/**
 * 校验数据类型
 */
export const isType = (obj: any, objType: String): boolean => type(obj) === objType.toLowerCase()