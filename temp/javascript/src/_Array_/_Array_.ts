import { _Function_ } from "../_Function_/_Function_"
import { type } from "../type/type"
import { flatten } from "./static/flatten/flatten"
/**
 * # Array
 * `JavaScript` 的 `Array` 对象是用于构造数组的全局对象，数组是类似于列表的高阶对象。
 * - [Array - JavaScript | MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array)
 * @mermaid
 *  classDiagram
      Animal <|-- Duck
      Animal <|-- Fish
      Animal <|-- Zebra
      Animal : +int age
      Animal : +String gender
      Animal: +isMammal()
      Animal: +mate()
      class Duck{
          +String beakColor
          +swim()
          +quack()
      }
      class Fish{
          -int sizeInFeet
          -canEat()
      }
      class Zebra{
          +bool is_wild
          +run()
      }
 */
export class _Array_ extends _Function_ {
  /**
   * 数组数据
   * @category 属性
   */
  value: any[] = []
  /**
   * 数组长度
   * @category 属性
   */
  length: number = this.value.length
  /**
   * 创建一个新的 Array 对象
   * @category 构造器
   */
  constructor(...args: any) {
    super()
    this.value = args
    this.length = args.length
  }
  /**
   * 从类数组对象或者可迭代对象中创建一个新的数组实例
   * - [`Array.from()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/from)
   * @hidden
   * @category 静态方法
   * @category ES2015
   */
  static from() { }
  /**
   * 用来判断某个变量是否是一个数组对象
   * - [`Array.isArray()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray)
   * @category 静态方法
   */
  static isArray = (obj: any): boolean => obj instanceof Array
  /**
   * 根据一组参数来创建新的数组实例，支持任意的参数数量和类型
   * - [`Array.of()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/of)
   * @hidden
   * @category 静态方法
   * @category ES2015
   */
  static of() { }
  /**
   * 用于合并两个或多个数组。此方法不会更改现有数组，而是返回一个新数组
   * - [`Array.prototype.concat()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)
   * @category 实例方法
   */
  concat(...args: any[]): any[] {
    return [...this.value, ...args]
  }
  /**
   * 浅复制数组的一部分到同一数组中的另一个位置，并返回它，不会改变原数组的长度
   * - [`Array.prototype.copyWithin()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin)
   * @hidden
   * @category 实例方法
   * @category ES2015
   */
  copyWithin() { }
  /**
   * 返回一个新的 Array Iterator 对象，该对象包含数组中每个索引的键/值对
   * - [`Array.prototype.entries()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/entries)
   * @hidden
   * @category 实例方法
   * @category ES2015
   */
  entries() { }
  /**
   * 测试一个数组内的所有元素是否都能通过某个指定函数的测试。它返回一个布尔值
   * - [`Array.prototype.every()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/every)
   * @category 实例方法
   */
  every(fn: Function) {
    let truth: Boolean = true;
    for (let key in this.value) {
      truth = fn(this.value[key], key, this.value);
      if (!truth) {
        return truth;
      }
    }
    return truth;
  }

  /**
   * 用一个固定值填充一个数组中从起始索引到终止索引内的全部元素
   * - [`Array.prototype.fill()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/fill)
   * @category 实例方法
   * @category ES2015
   * @param value 用来填充数组元素的值。
   * @param start 可选。起始索引，默认值为0。
   * @param end 可选。终止索引，默认值为 `this.length`。
   * @returns 修改后的数组。 
   */
  fill = (value: any, start: number = 0, end: number = this.length) => {
    for (let i = start; i < end; i++) {
      this.value[i] = value;
    }
    return this.value;
  }
  /**
   * 创建一个新数组, 其包含通过所提供函数实现的测试的所有元素
   * - [`Array.prototype.filter()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
   * @hidden
   * @category 实例方法
   */
  filter = () => { }
  /**
   * 返回数组中满足提供的测试函数的第一个元素的值。否则返回 `undefined`
   * - [`Array.prototype.find()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
   * @category 实例方法
   * @category ES2015
   */
  find(fn: Function) {
    for (let key in this.value) {
      if (fn(this.value[key], key, this.value)) {
        return this.value[key];
      }
    }
    return undefined;
  };
  /**
   * 返回数组中满足提供的测试函数的第一个元素的索引。若没有找到对应元素则返回 -1
   * - [`Array.prototype.findIndex()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)
   * @hidden
   * @category 实例方法
   * @category ES2015
   */
  findIndex() { }
  /**
   * 按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回
   * - [`Array.prototype.flat()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/flat)
   * @hidden
   * @category 实例方法
   * @category ES2015
   */
  flat() { }
  /**
   * 使用映射函数映射每个元素，然后将结果压缩成一个新数组
   * - [`Array.prototype.flatMap()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap)
   * @hidden
   * @category 实例方法
   * @category ES2015
   */
  flatMap() { }
  /**
   * 对数组的每个元素执行一次给定的函数
   * - [`Array.prototype.forEach()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
   * @category 实例方法
   * @param callback 为数组中每个元素执行的函数
   */
  forEach(callback: Function) {
    for (let key in this.value) {
      callback(this.value[key], key, this.value);
    }
  }
  /**
   * 判断一个数组是否包含一个指定的值，如果包含则返回 true，否则返回 false
   * - [`Array.prototype.includes()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)
   * @hidden
   * @category 实例方法
   * @category ES2015
   */
  includes() { }
  /**
   * 返回在数组中可以找到一个给定元素的第一个索引，如果不存在，则返回 - 1
   * - [`Array.prototype.indexOf()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)
   * @category 实例方法
   * @param searchElement 要查找的元素
   * @param fromIndex 开始查找的位置。
   * @returns 首个被找到的元素在数组中的索引位置; 若没有找到则返回 -1
   */
  indexOf(searchElement: any, fromIndex: number = 0): number {
    for (let i = fromIndex; i <= this.length - 1; i++) {
      if (this.value[i] === searchElement) {
        return i;
      }
    }
    return -1;
  }
  /**
   * 将一个数组的所有元素连接成一个字符串并返回这个字符串
   * - [`Array.prototype.join()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/join)
   * @hidden
   * @category 实例方法
   */
  join(separator: string = ",") {
    let prefix = "[",
      suffix = "]";
    for (let i = 0; i <= this.length - 1; i++) {
      prefix += this.value[i];
      if (i < this.value.length - 1) {
        prefix += separator;
      }
    }
    return prefix + suffix;
  }
  /**
   * 返回一个包含数组中每个索引键的 Array Iterator 对象
   * - [`Array.prototype.keys()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/keys)
   * @hidden
   * @category 实例方法
   * @category ES2015
   */
  keys() { }
  /**
   * 返回指定元素在数组中的最后一个的索引，如果不存在则返回 - 1
   * - [`Array.prototype.lastIndexOf()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf)
   * @hidden
   * @category 实例方法
   */
  lastIndexOf() { }
  /**
   * 返回一个新数组，其结果是该数组中的每个元素是调用一次提供的函数后的返回值
   * - [`Array.prototype.map()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
   * @hidden
   * @category 实例方法
   */
  map() { }
  /**
   * 从数组中删除最后一个元素，并返回该元素的值
   * - [`Array.prototype.pop()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)
   * @category 实例方法
   */
  pop() {
    const value = this.value[this.length - 1];
    this.value.length = this.value.length - 1;
    return value;
  }
  /**
   * 将一个或多个元素添加到数组的末尾，并返回该数组的新长度
   * - [`Array.prototype.push()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
   * @category 实例方法
   * @param elements 被添加到数组末尾的元素。
   */
  push(...elements: []) {
    this.value = [...this.value, ...elements]
  }
  /**
   * 对数组中的每个元素执行一个由您提供的reducer函数（升序执行），将其结果汇总为单个返回值
   * - [`Array.prototype.reduce()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
   * @hidden
   * @category 实例方法
   */
  reduce() { }
  /**
   * 接受一个函数作为累加器（accumulator）和数组的每个值（从右到左）将其减少为单个值
   * - [`Array.prototype.reduceRight()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight)
   * @hidden
   * @category 实例方法
   */
  reduceRight() { }
  /**
   * 将数组中元素的位置颠倒，并返回该数组。该方法会改变原数组
   * - [`Array.prototype.reverse()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse)
   * @hidden
   * @category 实例方法
   */
  reverse() { }
  /**
   * 从数组中删除第一个元素，并返回该元素的值
   * - [`Array.prototype.shift()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/shift)
   * @hidden
   * @category 实例方法
   */
  shift() { }
  /**
   * 提取源数组的一部分并返回一个新数组
   * - [`Array.prototype.slice()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
   * @hidden
   * @category 实例方法
   */
  slice() { }
  /**
   * 测试数组中是不是至少有一个元素通过了被提供的函数测试
   * - [`Array.prototype.some()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/some)
   * @hidden
   * @category 实例方法
   */
  some() { }
  /**
   * 对数组元素进行原地排序并返回此数组
   * - [`Array.prototype.sort()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
   * @hidden
   * @category 实例方法
   */
  sort() { }
  /**
   * 通过删除或替换现有元素或者原地添加新的元素来修改数组, 并以数组形式返回被修改的内容
   * - [`Array.prototype.splice()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)
   * @hidden
   * @category 实例方法
   */
  splice() { }
  /**
   * 返回一个字符串表示数组中的元素。数组中的元素将使用各自的 Object.prototype.toLocaleString() 方法转成字符串
   * - [`Array.prototype.toLocaleString()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/toLocaleString)
   * @hidden
   * @category 实例方法
   */
  toLocaleString() {
    return ''
  }
  /**
   * 返回一个字符串表示指定的数组及其元素。数组中的元素将使用各自的 Object.prototype.toString() 方法转成字符串
   * - [`Array.prototype.toString()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/toString)
   * @hidden
   * @category 实例方法
   */
  toString() { return '' }
  /**
   * 将一个或多个元素添加到数组的头部，并返回该数组的新长度
   * - [`Array.prototype.unshift()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift)
   * @category 实例方法
   * @param elements 要添加到数组开头的元素或多个元素。
   * @returns 数组的新长度
   */
  unshift(...elements: []): number {
    this.value = [...elements, this.value]
    return this.length
  }
  /**
   * 返回一个新的 Array Iterator 对象，该对象包含数组每个索引的值
   * - [`Array.prototype.values()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/values)
   * @hidden
   * @category 实例方法
   * @category ES2015
   */
  values() { }

}
