/**
 * 检测DOM
 * @param {*} el
 */

import { typeOf } from "./typeOf";
export const isDOM = (object) =>
  typeOf(HTMLElement) === "object"
    ? object instanceof HTMLElement
    : object &&
      typeOf(object) === "object" &&
      object.nodetypeOf === 1 &&
      typeOf(object.nodeName) === "string";
