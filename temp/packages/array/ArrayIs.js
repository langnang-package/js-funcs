/**
 * Array.isArray(obj)
 */
import { typeOf } from "./../object/typeOf";
export const ArrayIs = (obj) => typeOf(obj) === "array";
