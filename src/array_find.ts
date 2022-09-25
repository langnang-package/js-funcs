export const array_find = (array: any[], callback: any, thisArg: any) => {
  for (let key in array) {
    if (callback(array[key], key, array)) {
      return array[key];
    }
  }
  return undefined;
};
