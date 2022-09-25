export const arraySome = (array, callback, thisArg) => {
  let falsy = false;
  for (let key in array) {
    falsy = callback(array[key], key, array);
    if (falsy) {
      return falsy;
    }
  }
  return falsy;
};
