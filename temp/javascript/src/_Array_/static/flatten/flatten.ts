import { isArray } from "../../../is/isArray/isArray";
/**
 * 将数组展平到指定的深度。
 * @param {Array} array 被展平的数组
 * @param depth 展平的深度。默认为1。
 */

export const flatten = (array: any[], depth = 1): any => depth === 0 ? array : array.reduce((a, v) => a.concat(isArray(v) ? flatten(v, depth === -1 ? depth : depth - 1) : v), []);
