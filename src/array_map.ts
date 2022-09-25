import { array_push } from "./array_push";
export const array_map = (array, callback, thisArg) => {
  let res = [];
  for (let key in array) {
    array_push(res, callback(array[key], key, array));
  }
  return res;
};
