/**
 * 判断对象数据类型
 * @category Function
 * @returns 数据类型
 */
export function type(obj: any): string {
  return Object.prototype.toString.call(obj).substring(8, Object.prototype.toString.call(obj).length - 1).toLowerCase()
}