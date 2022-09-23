export const array_pop = (array) => {
  let value = array[array.length - 1];
  array.length = array.length - 1;
  return value;
};
