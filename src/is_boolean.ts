// 检测布尔值
export const is_boolean = (object: any) =>
  Object.prototype.toString.call(object) === "[object Boolean]";
