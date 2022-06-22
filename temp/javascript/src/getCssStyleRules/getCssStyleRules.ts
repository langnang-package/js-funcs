/**
 * 获取样式表规则
 * @category DOM
 * @param {*} styleSheet 样式表
 * @param {String} selectorText 选择器
 * @param {String} ignore 过滤：伪类，子类
 * @return {Array}
 */
export const getCssStyleRules = (styleSheet: any = {}, selectorText: string = "", ignore: string = ":| ") => [...styleSheet?.cssRules].filter(rule => new RegExp(selectorText).test(rule.selectorText) && !new RegExp(ignore).test(rule.selectorText))