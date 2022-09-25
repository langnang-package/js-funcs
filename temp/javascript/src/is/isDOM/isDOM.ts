import { type } from "../../type/type";
/**
 * 检测DOM
 * @param {*} el
 */

export const isDOM = (obj: any) =>
  type(HTMLElement) === "object"
    ? obj instanceof HTMLElement
    : obj &&
    type(obj) === "object" &&
    obj.nodetype === 1 &&
    type(obj.nodeName) === "string";

