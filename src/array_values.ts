import { array_push } from "./array_push";
export const array_values = (array: any[]) => {
  let result: any[] = [];
  for (let key in array) {
    array_push(result, array[key]);
  }
  return result;
};
