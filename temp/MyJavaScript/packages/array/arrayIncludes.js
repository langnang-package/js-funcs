import { arrayIndexOf } from "./arrayIndexOf";
export const arrayIncludes = (array, valueToFind, fromIndex = 0) =>
  arrayIndexOf(array, valueToFind, fromIndex) > -1;
