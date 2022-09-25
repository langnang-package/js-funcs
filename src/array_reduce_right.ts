export const arrayReduceRight = (array: any[], callback: any, initialValue: any = array[0]) => {
  for (let i = array.length - 1; i >= 0; i--) {
    initialValue = callback(initialValue, array[i], i, array);
  }
  return initialValue;
};
