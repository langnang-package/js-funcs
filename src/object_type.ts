/**
 * 返回对象的数据类型
 * @param {*} object
 */
export const object_type = (object) =>
  Object.prototype.toString
    .call(object)
    .substring(8, Object.prototype.toString.call(object).length - 1)
    .toLowerCase();
