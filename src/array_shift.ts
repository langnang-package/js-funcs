import { array_slice } from "./array_slice";
export const array_shift = (array: any[]) => {
  const shift = array[0];
  array = array_slice(array, 1 - array.length);
  return shift;
};
