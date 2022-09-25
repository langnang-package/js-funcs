import { is_null } from "./is_null";
import { is_undefined } from "./is_undefined";
/**
 * 检测为空
 * @param {*} object
 */
export const is_empty = (object: any) => is_null(object) || is_undefined(object);
