/**
 * 获取随机十六进制颜色
 * @category String
 * @category random
 */
export function randomHex(): string {
  return `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}`
}