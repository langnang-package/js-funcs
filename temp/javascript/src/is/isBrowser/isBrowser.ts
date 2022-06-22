/**
 * @desc 检测浏览器环境
 */
export const isBrowser = () => ![typeof window, typeof document].includes('undefined')

