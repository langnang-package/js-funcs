export const array_find_index = (array: any[], callback: any, thisArg: any) => {
  for (let key in array) {
    if (callback(array[key], key, array)) {
      return key;
    }
  }
  return -1;
};
