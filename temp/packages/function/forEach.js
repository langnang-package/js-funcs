/**
 * 遍历
 * @param {*} v 
 * @param {*} fn 
 * @param {*} depth 
 */
export const forEach = (object, callback) => {
    for (let key in v) {
        callback(v[key], key);
    }
}