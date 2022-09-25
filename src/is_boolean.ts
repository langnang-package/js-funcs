// 检测布尔值
export const is_boolean = (object) =>
  Object.prototype.toString.call(object) === "[object Boolean]";
