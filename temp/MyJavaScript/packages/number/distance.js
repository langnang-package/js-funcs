/**
 * @name distance
 * @desc 返回两点之间的距离
 */
export const distance = (x0, y0, x1, y1) => Math.hypot(x1 - x0, y1 - y0);