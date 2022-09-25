import { array_push } from "./array_push";
export const array_values = (array) => {
  let res = [];
  for (let key in array) {
    array_push(res, array[key]);
  }
  return res;
};
