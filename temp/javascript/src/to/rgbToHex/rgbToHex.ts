/**
 * RGB转化为十六机制
 * @param r 
 * @param g 
 * @param b 
 * @returns 
 */
export function rgbToHex(r: number, g: number, b: number) {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
}