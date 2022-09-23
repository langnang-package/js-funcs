import { arrayPush } from "./arrayPush";
export const array_values = (array) => {
  let res = [];
  for (let key in array) {
    arrayPush(res, array[key]);
  }
  return res;
};
