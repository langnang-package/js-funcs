export const array_find = (array, callback, thisArg) => {
  for (let key in array) {
    if (callback(array[key], key, array)) {
      return array[key];
    }
  }
  return undefined;
};
