/**
 * @name redirect
 * @desc 重定向到指定的 URL
 * @param {*} url 
 * @param {*} asLink 
 */
export const redirect = (url, asLink = true) => asLink ? window.location.href = url : window.location.replace(url);