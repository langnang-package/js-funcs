/**
 * 指定日期的N月后
 * @param {*} date 
 * @param {*} n 
 */
export const nextMonths = (date = new Date(), n = 1) => {
    date = new Date(date);
    let year = date.getFullYear();
    let month = date.getMonth();
    month += n;
    if (month > 11) {
        year += parseInt(month / 12);
        date.setFullYear(year);
        month = month % 12;
    }
    date.setMonth(month);
    return date;
}