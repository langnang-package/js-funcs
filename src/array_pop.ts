export const array_pop = (array: any[]) => {
  let value = array[array.length - 1];
  array.length = array.length - 1;
  return value;
};
