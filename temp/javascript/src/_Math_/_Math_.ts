import { _Function_ } from "../_Function_/_Function_";
import { max } from "./static/max/max";
import { min } from "./static/min/min";
import { sum } from "./static/sum/sum";

/**
 * [Math](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math)
 */
export class _Math_ extends _Function_ {
  /**
   * 欧拉常数，也是自然对数的底数，约等于 2.718。
   */
  E = Math.E
  /**
   * 2 的自然对数，约等于 0.693。
   */
  LN2 = Math.LN2
  /**
   * 10 的自然对数，约等于 2.303。
   */
  LN10 = Math.LN10
  /**
   * 以 2 为底的 E 的对数，约等于 1.443。
   */
  LOG2E = Math.LOG2E
  /**
   * 以 10 为底的 E 的对数，约等于 0.434。
   */
  LOG10E = Math.LOG10E
  /**
   * 圆周率，一个圆的周长和直径之比，约等于 3.14159。
   */
  PI = Math.PI
  /**
   * 二分之一 ½ 的平方根，同时也是 2 的平方根的倒数，约等于 0.707。
   */
  SQRT1_2 = Math.SQRT1_2
  /**
   * 2 的平方根，约等于 1.414。
   */
  SQRT2 = Math.SQRT2
  /**
   * 数学计算公式
   */
  static FORMULAS = {}
  /**
   * 最大值
   */
  static max = (a: number, b: number) => a > b ? a : b
  /**
   * 最小值
   */
  static min = (a: number, b: number) => a > b ? b : a
  /**
   * 两数之和
   */
  static sum = (a: number, b: number) => a + b
  static tan = Math.tan
  static cos = Math.cos
}
