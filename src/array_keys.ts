import { array_push } from "./array_push";
export const array_keys = (array: any[]) => {
  let res: any[] = [];
  for (let key in array) {
    array_push(res, key);
  }
  return res;
};
