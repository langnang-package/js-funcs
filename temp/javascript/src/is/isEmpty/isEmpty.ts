import { isNull } from "../isNull/isNull"
import { isUndefined } from "../isUndefined/isUndefined"
/**
 * 检测为空
 */
export const isEmpty = (obj: any) => isNull(obj) || isUndefined(obj)

