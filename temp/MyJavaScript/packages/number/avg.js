import { sum } from "./sum";
/**
 * 求平均值
 * @param  {...any} nums 
 */
export const avg = (...nums) => sum(...nums) / nums.length;