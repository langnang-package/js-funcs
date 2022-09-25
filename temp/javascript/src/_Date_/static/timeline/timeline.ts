import { format } from "../format/format";
import { timestamp } from "../timestamp/timestamp";
import { isDate } from "../../../is/isDate/isDate";
import { nextYears } from "../nextYears/nextYears";
import { nextMonths } from "../nextMonths/nextMonths";
import { nextWeeks } from "../nextWeeks/nextWeeks";
import { nextDays } from "../nextDays/nextDays";
import { nextHours } from "../nextHours/nextHours";
import { nextMinutes } from "../nextMinutes/nextMinutes";
import { nextSeconds } from "../nextSeconds/nextSeconds";
/**
 * 返回起止时间中单位时间的连续时间数组
 * @param {Date} start
 * @param {Date} end
 * @param {String} unit
 * @param {String} fm
 */
export const timeline = (
  start: any,
  end = new Date(),
  unit = "day",
  fm = "YYYY-MM-DD HH:mm:ss"
) => {
  // 检测起止时间格式
  if (!isDate(start) || !isDate(end)) {
    throw new Error("Incorrect starting and ending datetime format!");
  }
  // 起始时间必须小于截止时间
  let result: Date[] = [];
  if (start > end) return result;
  // 单位时间
  const unitMap: any = {
    year: nextYears,
    month: nextMonths,
    week: nextWeeks,
    day: nextDays,
    halfDay: (time: any) => nextHours(time, 12),
    hour: nextHours,
    minute: nextMinutes,
    second: nextSeconds,
  };
  while (end >= start) {
    result.push(format(start, fm));
    start = timestamp(unitMap[unit](start));
  }
  return result;
};

