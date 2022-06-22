/**
 * 返回当前页的滚动位置
 * @param {*} el 
 */

declare interface Window {
  scrollTop: any,
  scrollLeft: any,
  pageXOffset: any,
  pageYOffset: any
}

export const scrollPosition = (el: Window = (window as any)) =>
({
  x: (el.pageXOffset !== undefined) ? el.pageXOffset : el.scrollLeft,
  y: (el.pageYOffset !== undefined) ? el.pageYOffset : el.scrollTop
});
