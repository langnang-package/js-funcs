import { array_index } from "./array_index";
export const array_includes = (array: any[], valueToFind: any, fromIndex: number = 0): boolean =>
  array_index(array, valueToFind, fromIndex) > -1;
