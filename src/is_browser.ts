/**
 * @desc 检测浏览器环境
 */
export const is_browser = () =>
  ![typeof window, typeof document].includes("undefined");
