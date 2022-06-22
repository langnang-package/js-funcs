export const arrayFill = (array, value, start = 0, end = array.length - 1) => {
  for (let i = start; i <= end; i++) {
    array[i] = value;
  }
  return array;
};
