export const array_some = (array: any[], callback: Function, thisArg: any) => {
  let falsy = false;
  for (let key in array) {
    falsy = callback(array[key], key, array);
    if (falsy) {
      return falsy;
    }
  }
  return falsy;
};
