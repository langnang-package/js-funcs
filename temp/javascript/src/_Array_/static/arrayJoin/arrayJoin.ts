/**
 * 
 * @hidden
 * @param array 
 * @param separator 
 * @returns 
 */
export const arrayJoin = (array: any[], separator = ",") => {
  let prefix = "[",
    suffix = "]";
  for (let i = 0; i <= array.length - 1; i++) {
    prefix += array[i];
    if (i < array.length - 1) {
      prefix += separator;
    }
  }
  return prefix + suffix;
};