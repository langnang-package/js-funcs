import { arrayPush } from "./arrayPush";
export const array_map = (array, callback, thisArg) => {
  let res = [];
  for (let key in array) {
    arrayPush(res, callback(array[key], key, array));
  }
  return res;
};
