import { arrayPush } from "./arrayPush";
export const arrayValues = (array) => {
  let res = [];
  for (let key in array) {
    arrayPush(res, array[key]);
  }
  return res;
};
