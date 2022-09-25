/**
 * 指定日期的N月后
 * @param {*} date 
 * @param {*} n 
 */
export const nextMonths = (date: Date = new Date(), n: number = 1) => {
  date = new Date(date);
  let year: number = date.getFullYear();
  let month: number = date.getMonth();
  month += n;
  if (month > 11) {
    year = month / 12;
    date.setFullYear(year);
    month = month % 12;
  }
  date.setMonth(month);
  return date;
}

