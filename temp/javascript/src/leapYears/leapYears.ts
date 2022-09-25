import { isLeapYear } from "../is/isLeapYear/isLeapYear";
/**
 * 年份间的闰年
 * @param {Number} start 
 * @param {Number} end 
 */
export const leapYears = (start: number, end: number) => {
  if (start > end) { return []; }
  let array = [];
  for (var i = start; i <= end; i++) {
    if (isLeapYear(i)) {
      array.push(i)
    }
  }
  return array;
}

