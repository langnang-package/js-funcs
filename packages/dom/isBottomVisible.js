/**
 * @name bottomVisible
 * @desc 如果页的底部可见, 则返回true, 否则为false
 */
export const isBottomVisible = () =>
    document.documentElement.clientHeight + window.scrollY >= document.documentElement.scrollHeight || document.documentElement.clientHeight