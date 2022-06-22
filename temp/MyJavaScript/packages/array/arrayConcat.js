export const arrayConcat = (array, ...arrays) => {
  for (let i = 0; i <= arrays.length - 1; i++) {
    array = [...array, ...arrays[i]];
  }
  return array;
};
