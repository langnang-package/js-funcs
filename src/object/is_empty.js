import { isNull } from "./is_null";
import { isUndefined } from "./isUndefined";
/**
 * 检测为空
 * @param {*} object
 */
export const is_empty = (object) => isNull(object) || isUndefined(object);
