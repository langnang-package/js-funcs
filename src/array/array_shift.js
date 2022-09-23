import { arraySlice } from "./array_slice";
export const array_shift = (array) => {
  const shift = array[0];
  array = arraySlice(array, 1 - array.length);
  return shift;
};
