/**
 * Array.prototype.foreach()
 * 
 * @hidden
 * @param {*} array
 * @param {*} callback
 * @param {*} thisArg
 */
export const arrayForEach = (array: any[], callback: Function, thisArg: Object) => {
  for (let key in array) {
    callback(array[key], key, array);
  }
};
