import { array_push } from "./array_push";
export const array_keys = (array) => {
  let res = [];
  for (let key in array) {
    array_push(res, key);
  }
  return res;
};
