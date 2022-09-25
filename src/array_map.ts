import { array_push } from "./array_push";
export const array_map = (array: any[], callback: any, thisArg: any) => {
  let result: any[] = [];
  for (let key in array) {
    array_push(result, callback(array[key], key, array));
  }
  return result;
};
