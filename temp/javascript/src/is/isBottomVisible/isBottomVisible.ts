/**
 * 检测页面的底部是否可见, 则返回true, 否则为false
 */
export const isBottomVisible = () =>
  document.documentElement.clientHeight + window.scrollY >= document.documentElement.scrollHeight || document.documentElement.clientHeight

