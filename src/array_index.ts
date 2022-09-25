export const array_index = (array: any[], searchElement: any, fromIndex: number = 0) => {
  for (let i = fromIndex; i <= array.length - 1; i++) {
    if (array[i] === searchElement) {
      return i;
    }
  }
  return -1;
};
