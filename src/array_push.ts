export const array_push = (array: any[], ...values: any) => {
  for (let i in values) {
    array[array.length] = values[i];
  }
  return array.length;
};
