/**
 *
 * 检测原始数据类型
 */

export const is_primitive = (object: any) =>
  typeof object === "string" ||
  typeof object === "number" ||
  typeof object === "symbol" ||
  typeof object === "boolean";
