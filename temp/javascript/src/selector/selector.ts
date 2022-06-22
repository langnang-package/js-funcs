/**
 * 元素选择器
 * @param {String} el
 */
export const selector = (el: string) => document.querySelector(el)


/**
 * @name jQuery
 * @desc 封装jQuery的选择器，若使用document.querySelector即可实现
 * @param {String} el 
 * @todo 实现了单一选择器部分功能，需要继续完善
 */
const jQuery = (el: string) => {
  const selector = {
    id: /^#/,
    class: /^\./,
    tag: /^[a-zA-Z]/,
    attr: /^\[[a-zA-Z0-9]+=/,

  }
  if (selector.id.test(el)) return jQueryById(el.replace(selector.id, ""));
  if (selector.class.test(el)) return jQueryByClassName(el.replace(selector.class, ""));
  if (selector.tag.test(el)) return jQueryByTagName(el);
  if (selector.attr.test(el)) {
    el = el.replace(selector.attr, "");
    el = el.replace(/\]$/, "");
    return jQueryByName(el);
  };

}

/**
 * @name jQueryById
 * @desc ID选择器
 * @param {String} el 
 */
const jQueryById = (el: string) => {
  return document.getElementById(el);

}
/**
 * @name jQueryByName
 * @desc name属性选择器
 * @param {String} el 
 */
const jQueryByName = (el: string) => {
  console.log(el);
  return document.getElementsByName(el);
}
/**
 * @name jQueryByClassName
 * @desc 类选择器
 * @param {String} el 
 */
const jQueryByClassName = (el: string) => {
  return document.getElementsByClassName(el);
}
/**
 * @name jQueryByTagName
 * @desc 标签选择器
 * @param {*} el 
 */
const jQueryByTagName = (el: string) => {
  return document.getElementsByTagName(el);
}

 // export const $ = jQuery;