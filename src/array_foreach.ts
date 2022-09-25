/**
 * Array.prototype.foreach()
 * @param {*} array
 * @param {*} callback
 * @param {*} thisArg
 */
export const array_foreach = (array: any[], callback: any, thisArg: any) => {
  for (let key in array) {
    callback(array[key], key, array);
  }
};
