export const array_unshift = (array: any[], ...values: any) => {
  let _arr = [];
  for (let i = 0; i <= values.length + array.length - 1; i++) {
    if (i >= values.length) {
      _arr[i] = array[i - values.length];
    } else {
      _arr[i] = values[i];
    }
  }
  array = _arr;
  return array.length;
};
