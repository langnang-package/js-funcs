export const arrayReduce = (array: any[], callback: any, initialValue: any = array[0]) => {
  for (let key in array) {
    initialValue = callback(initialValue, array[key], key, array);
  }
  return initialValue;
};
