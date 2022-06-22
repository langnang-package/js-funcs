/**
 * 
 * @hidden
 * @param array 
 * @param values 
 * @returns 
 */
export const arrayPush = (array: any[], ...values: any) => {
  for (let i in values) {
    array[array.length] = values[i];
  }
  return array.length;
};
