import { array_push } from "./array_push";
export const array_filter = (array, callback, thisArg) => {
  let res = [];
  for (let key in array) {
    if (callback(array[key], key, array)) {
      array_push(res, array[key]);
    }
  }
  return res;
};
