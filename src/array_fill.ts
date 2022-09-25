export const array_fill = (array: any[], value: any, start: number = 0, end: number = array.length - 1) => {
  for (let i = start; i <= end; i++) {
    array[i] = value;
  }
  return array;
};
