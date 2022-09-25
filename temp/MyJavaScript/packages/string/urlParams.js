/**
 * 返回一个包含当前 URL 参数的对象
 */
export const urlParams = (url = window.location.href) =>
    url.match(/([^?=&]+)(=([^&]*))/g).reduce(
        (a, v) => (a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1), a), {}
    );