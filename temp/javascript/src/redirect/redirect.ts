/**
 * 重定向到指定的 URL
 * @param {*} url 
 * @param {*} asLink 
 */
export const redirect = (url: string, asLink = true) => asLink ? window.location.href = url : window.location.replace(url);

