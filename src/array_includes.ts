import { array_index } from "./array_index";
export const array_includes = (array, valueToFind, fromIndex = 0) =>
  array_index(array, valueToFind, fromIndex) > -1;
