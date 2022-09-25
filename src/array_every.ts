export const array_every = (array: any[], callback: any, thisArg: any) => {
  let truth = true;
  for (let key in array) {
    truth = callback(array[key], key, array);
    if (!truth) {
      return truth;
    }
  }
  return truth;
};
