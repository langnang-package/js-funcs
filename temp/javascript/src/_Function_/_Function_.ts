import { _Object_ } from "../_Object_/_Object_"


export class _Function_ extends _Object_ {
  /**
   * length 属性指明函数的形参个数。
   */
  length: number
  /**
   * function.name 属性返回函数实例的名称。
   */
  name: string = "_Function_"
  setter(name: string, value: any) {
    if (!this.hasOwnProperty(name)) {
      return false;
    }
  }
  getter(name: string) { }
  /**
   * [`Function.prototype.toString`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/toString)
   * 
   * `toString()` 方法返回一个表示当前函数源代码的字符串。
   * @returns 表示函数源代码的一个字符串
   */
  toString(): string {
    return ''
  }
}