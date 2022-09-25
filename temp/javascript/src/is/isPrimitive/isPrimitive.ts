/**
 *
 * 检测原始数据类型
 */


export const isPrimitive = (object: any) =>
  typeof object === 'string' ||
  typeof object === 'number' ||
  typeof object === 'symbol' ||
  typeof object === 'boolean'