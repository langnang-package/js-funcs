import { _Function_ } from "../_Function_/_Function_"

/**
 * [`Date`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date)
 * 时间日期
 */
export class _Date_ extends _Function_ {
  value: any = new Date()
  timestamp: number
  format: string
  name: string = "_Date_"
  /**
   * 
   * @param date 
   */
  constructor(date: any = null) {
    super()
    this.value = new Date(date);
  }
}