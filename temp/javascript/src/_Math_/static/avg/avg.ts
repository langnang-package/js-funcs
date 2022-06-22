import { sum } from "../sum/sum";
/**
 * 平均值
 * @category Math
 * @param  {...any} nums 
 */
export const avg = (...nums: number[]) => sum(...nums) / nums.length;
