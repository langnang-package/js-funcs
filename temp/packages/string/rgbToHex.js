/**
 * rgb颜色转hex十六进制颜色
 * @param r
 * @param g
 * @param b
 * @returns {string}
 */
export const rgbToHex = (r, g, b) => "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);