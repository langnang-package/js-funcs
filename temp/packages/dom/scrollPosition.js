/**
 * @name getScrollPosition
 * @desc 返回当前页的滚动位置
 * @param {*} el 
 */
export const scrollPosition = (el = window) =>
    ({
        x: (el.pageXOffset !== undefined) ? el.pageXOffset : el.scrollLeft,
        y: (el.pageYOffset !== undefined) ? el.pageYOffset : el.scrollTop
    });