import { isDefined } from "../is/isDefined/isDefined"
/**
 * 过滤对象中的虚假值
 * @category Object
 * @param object 
 * @returns 
 */
export const filterObjectFalsy = (object: Object): Object => Object.keys(object)
  .reduce((total: Object, key: any) =>
    isDefined(object[key]) ? Object.assign(total, { [key]: object[key] }) : total,
    {}
  )