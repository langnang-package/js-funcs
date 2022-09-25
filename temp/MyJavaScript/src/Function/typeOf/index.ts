/**
 * @name typeOf
 * @desc 检测数据类型
 * @param obj {*}
 */
export const typeOf = (obj: any) => {
    let type = Object.prototype.toString.call(obj);
    return type.substring(8, type.length - 1).toLowerCase();
}