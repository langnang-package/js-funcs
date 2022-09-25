/**
 * 检测DOM
 * @param {*} el
 */

import { object_type } from "./object_type";
export const is_dom = (object) =>
  object_type(HTMLElement) === "object"
    ? object instanceof HTMLElement
    : object &&
    object_type(object) === "object" &&
    object.nodetypeOf === 1 &&
    object_type(object.nodeName) === "string";
