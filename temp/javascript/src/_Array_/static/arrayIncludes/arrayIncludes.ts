import { arrayIndexOf } from "../arrayIndexOf/arrayIndexOf";
/**
 * 
 * @hidden
 * @param array 
 * @param valueToFind 
 * @param fromIndex 
 * @returns 
 */
export const arrayIncludes = (array: any[], valueToFind: any, fromIndex: number = 0) =>
  arrayIndexOf(array, valueToFind, fromIndex) > -1;
