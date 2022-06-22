/**
 * hex十六进制颜色转rgb颜色
 * @param hex
 * @param opacity
 * @returns {string}
 */
export const hexToRgba = (hex, opacity = 1) =>
    "rgba(" + parseInt("0x" + hex.slice(1, 3)) + "," + parseInt("0x" + hex.slice(3, 5)) + "," + parseInt("0x" + hex.slice(5, 7)) + "," + opacity + ")";