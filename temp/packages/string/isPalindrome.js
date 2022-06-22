/**
 * 检测回文字符串
 * @param {*} obj 
 */
export const isPalindrome = (obj, mode = "api") => {
    let _map = new Map();
    _map.set("api", obj => typeof (obj) === 'string' && obj === obj.split('').reverse().join(''));
    _map.set("while", obj => {
        if (typeof obj !== 'string') return false;
        let i = 0, j = obj.length - 1
        while (i < j) {
            if (obj.charAt(i) !== obj.charAt(j)) return false
            i++
            j--
        }
        return true
    })
    if (!_map.has(mode)) mode = 'api';

    return _map.get(mode)(obj);
};