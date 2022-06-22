/**
 * @name isArrayOfString
 * @desc 判断是否是字符串格式数组
 * @param {String} string
 * @return {Boolean}
 * @date 2019-07-06 
 */
export function isStringforArray(string) {
    if (this.isString(string)) {
        // 清除前后空格
        let start = string.indexOf("\[");
        let end = string.lastIndexOf("\]");
        if (start >= 0 && end > 0) {
            return true;
        }
    }
    return false
}