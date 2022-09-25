import { splitByLength } from "../../splitByLength/splitByLength"
/**
 * 十六机制转化为RGB
 * @category String
 * @param hex 
 * @returns 
 */
export const hexToRgb = (hex: string) => 'rgb(' + splitByLength(hex.substr(1), 2).map(v => parseInt(v, 16)).join(', ') + ')'