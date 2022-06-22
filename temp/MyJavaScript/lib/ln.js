
/*!
 * Ln.js v0.1.0
 * (c) 2020-2021 langnang
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.ln = {}));
}(this, (function (exports) { 'use strict';

  /**
   * @name bubbleSort
   * @desc 冒泡排序
   */
  const bubbleSort = (array) => {
    // 冒泡：将比较数组内的最大值移至末尾
    const bubble = (array, length) => {
      for (let i = 0; i < length - 1; i++) {
        // 比较相邻元素，检测是否需要交换位置
        if (array[i] > array[i + 1]) {
          // 交换元素位置
          [array[i], array[i + 1]] = [array[i + 1], array[i]];
        }
      }
    };
    let i = array.length;
    // 由于每次遍历将最大值移至末尾，因此逐渐减少比较长度
    while (i > 0) {
      bubble(array, i);
      i--;
    }
    return array;
  };

  /**
   * @name bucketSort
   * @desc 桶排序
   */
  const bucketSort = array => {
      // 声明一个空桶, 将数据压入桶中
      const bucket = new Array(Math.max(...array) + 1);
      bucket.fill(0);
      array.forEach((one) => {
          bucket[one]++;
      });
      // 声明一个新数组, 当做排序后的数组
      const newArr = [];
      bucket.forEach((one, index) => {
          for (let i = 0; i < one; i++) {
              newArr.push(index);
          }
      });

      return newArr;
  };

  /**
   * @name countingSort
   * @desc 计数排序
   */
  const countingSort = array => {
      let min = Math.min(...array);
      let max = Math.max(...array);
      let B = Array();
      let countArray = Array();
      for (let i = 0; i < array.length; i++) {
          countArray[array[i]] = countArray[array[i]] ? countArray[array[i]] + 1 : 1;
      }
      for (var j = min; j < max; j++) {
          countArray[j + 1] = (countArray[j + 1] || 0) + (countArray[j] || 0);
      }
      for (var k = array.length - 1; k >= 0; k--) {
          B[countArray[array[k]] - 1] = array[k];
          countArray[array[k]]--;
      }
      return B;
  };

  /**
   * 欧几里得算法
   * @param {number} originalA
   * @param {number} originalB
   * @return {number}
   */
  const euclideanAlgorithm = (originalA, originalB) => {
    const a = Math.abs(originalA);
    const b = Math.abs(originalB);
    return (b === 0) ? a : euclideanAlgorithm(b, a % b);
  };

  /**
   * 阶乘
   * @param {number} number
   * @return {number}
   */
  const factorial = (number) => number > 1 ? number * factorial(number - 1, mode) : 1;

  const heapSort = array => {
      function maxHeapify(array, index, heapSize) {
          var iMax,
              iLeft,
              iRight;
          while (true) {
              iMax = index;
              iLeft = 2 * index + 1;
              iRight = 2 * (index + 1);
              // 如果有左子树,且左子树大于父节点,则将最大指针指向左子树
              if (iLeft < heapSize && array[index] < array[iLeft]) {
                  iMax = iLeft;
              }
              // 如果有右子树,且右子树大于父节点,则将最大指针指向右子树
              if (iRight < heapSize && array[iMax] < array[iRight]) {
                  iMax = iRight;
              }
              // 如果父节点不是最大值,则将父节点与最大值交换,并且递归调整与父节点交换的位置
              if (iMax != index) {
                  [array[iMax], array[index]] = [array[index], array[iMax]];
                  index = iMax;
              } else {
                  break;
              }
          }
      }

      function buildMaxHeap(array) {
          // 从最后一个非叶子节点开始向上构造最大堆
          for (let i = Math.floor(array.length / 2) - 1; i >= 0; i--) {
              maxHeapify(array, i, array.length);
          }
      }
      buildMaxHeap(array);
      for (var i = array.length - 1; i > 0; i--) {
          // 堆顶元素与最后一项元素交换位置
          [array[0], array[i]] = [array[i], array[0]];
          // 调整新堆
          maxHeapify(array, 0, i);
      }
      return array;

  };

  /**
   * @name insertionSort
   * @desc 插入排序
   * @param {Array} array
   * @return {Array}
   * @date 2019-07-06 
   */

  const insertionSort = (array) => {
      const insertion = (array, index) => {
          // 从后向前遍历
          for (let i = index - 1; i >= 0; i--) {
              // 如果后一个元素小于前一个元素
              if (array[i] > array[i + 1]) {
                  // 交换元素位置
                  [array[i], array[i + 1]] = [array[i + 1], array[i]];
              } else {
                  // 停止循环
                  break;
              }
          }
      };
      for (let i = 1; i < array.length; i++) {
          insertion(array, i);
      }
      return array;
  };

  /**
   * @name mergeSort
   * @desc 归并排序
   * @param {Array} array
   * @return {Array}
   * @date 2019-07-06 
   * @todo Maximum call stack size exceeded,堆栈溢出
   */


  const mergeSort = array => {
      if (array.length < 2) return array;
      const merge = (left, right) => {
          let result = [];
          while (left.length > 0 && right.length > 0) {
              if (left[0] <= right[0]) {
                  result.push(left.shift());
              } else {
                  result.push(right.shift());
              }
          }
          while (left.length > 0) {
              result.push(left.shift());
          }
          while (right.length > 0) {
              result.push(right.shift());
          }
          return result;
      };
      return merge(mergeSort(array.slice(0, Math.floor(array.length / 2))), mergeSort(array.slice(Math.floor(array.length / 2))));
  };

  const quickSort = array => {
      // 引用传递
      let _array = array.slice(0);
      // 内存溢出
      if (_array.length <= 1) return _array;
      // 初始化基值，左侧（小于基值）数组，右侧（大于基值）数组
      let [pivot, left, right] = [
          _array.splice(Math.floor(_array.length / 2), 1)[0],
          [],
          []
      ];
      // 遍历比较每个元素值与基值，分类push至左右数组
      for (let i = 0; i < _array.length; i++) {
          _array[i] <= pivot ? left.push(_array[i]) : right.push(_array[i]);
      }
      // 递归
      return quickSort(left).concat(pivot, ...quickSort(right));
  };

  /**
   * 基数排序适用于：
   *  (1)数据范围较小，建议在小于1000
   *  (2)每个数值都要大于等于0
   * @author xiazdong
   * @param  array 待排序数组
   * @param  maxDigit 最大位数
   */
  const radixSort = array => {
      const maxDigit = (num, digit = 1) => {
          if (num <= -10 || num >= 10) {
              digit = maxDigit(num / 10, ++digit);
          }
          return digit;
      };
      let digit = maxDigit(Math.max(...array));
      var mod = 10;
      var dev = 1;
      var counter = [];
      for (var i = 0; i < digit; i++ , dev *= 10, mod *= 10) {
          for (var j = 0; j < array.length; j++) {
              var bucket = parseInt((array[j] % mod) / dev);
              if (counter[bucket] == null) {
                  counter[bucket] = [];
              }
              counter[bucket].push(array[j]);
          }
          var pos = 0;
          for (var j = 0; j < counter.length; j++) {
              var value = null;
              if (counter[j] != null) {
                  while ((value = counter[j].shift()) != null) {
                      array[pos++] = value;
                  }
              }
          }
      }
      return array;
  };

  /**
   * @name selectionSort
   * @desc 选择排序
   * @param {Array} array
   * @return {Array}
   * @date 2019-07-06 
   */


  const selectionSort = (array) => {
      // 选择:将未排序部分中最小值移至已排序部分末尾
      const selection = (array, start) => {
          // 取未排序首个元素位置
          let minIndex = start;
          // 遍历未排序部分
          for (let i = start + 1; i < array.length; i++) {
              // 寻找最小的数

              if (array[minIndex] > array[i]) {
                  //将最小数的索引保存
                  minIndex = i;
              }
          }
          // 交换元素位置
          [array[start], array[minIndex]] = [array[minIndex], array[start]];
      };
      for (let i = 0; i < array.length - 1; i++) {
          selection(array, i);
      }
      return array;
  };

  /**
   * 希尔排序
   * @param {Array} array
   * @return {Array}
   * @date 2019-07-06 
   */


  const shellSort = array => {
      const shell = (array, gap) => {
          // 插入排序默认第一个元素为已排序,因此跳过gap长度
          for (let i = gap; i < array.length; i++) {
              // 从后向前插入排序
              for (var j = i - gap; j >= 0; j -= gap) {
                  // 检测是否需要交换位置
                  if (array[j] > array[j + gap]) {
                      [array[j], array[j + gap]] = [array[j + gap], array[j]];
                  } else {
                      // 停止循环
                      break;
                  }
              }
          }
      };
      for (let gap = array.length / 2; gap > 0; gap = Math.floor(gap / 2)) {
          shell(array, gap);
      }
      return array;
  };

  /**
   * Array.from(arrayLike[, mapFn[, thisArg]])
   */
  const ArrayFrom = (arrayLike, mapFn, thisArg) => {};

  /**
   * 获取数据类型
   * @param {*} object 
   */
  const typeOf = object => Object.prototype.toString.call(object).substring(8, Object.prototype.toString.call(object).length - 1).toLowerCase();

  /**
   * Array.isArray(obj)
   */
  const ArrayIs = (obj) => typeOf(obj) === "array";

  /**
   * Array.of(...elsments)
   * @param  {...any} elements
   */

  const ArrayOf = (...elements) => elements;

  const arrayConcat = (array, ...arrays) => {
    for (let i = 0; i <= arrays.length - 1; i++) {
      array = [...array, ...arrays[i]];
    }
    return array;
  };

  const arrayEvery = (array, callback, thisArg) => {
    let truth = true;
    for (let key in array) {
      truth = callback(array[key], key, array);
      if (!truth) {
        return truth;
      }
    }
    return truth;
  };

  const arrayFill = (array, value, start = 0, end = array.length - 1) => {
    for (let i = start; i <= end; i++) {
      array[i] = value;
    }
    return array;
  };

  const arrayPush = (array, ...values) => {
    for (let i in values) {
      array[array.length] = values[i];
    }
    return array.length;
  };

  const arrayFilter = (array, callback, thisArg) => {
    let res = [];
    for (let key in array) {
      if (callback(array[key], key, array)) {
        arrayPush(res, array[key]);
      }
    }
    return res;
  };

  const arrayFind = (array, callback, thisArg) => {
    for (let key in array) {
      if (callback(array[key], key, array)) {
        return array[key];
      }
    }
    return undefined;
  };

  const arrayFindIndex = (array, callback, thisArg) => {
    for (let key in array) {
      if (callback(array[key], key, array)) {
        return key;
      }
    }
    return -1;
  };

  /**
   * Array.prototype.foreach()
   * @param {*} array
   * @param {*} callback
   * @param {*} thisArg
   */
  const arrayForEach = (array, callback, thisArg) => {
    for (let key in array) {
      callback(array[key], key, array);
    }
  };

  const arrayIndexOf = (array, searchElement, fromIndex = 0) => {
    for (let i = fromIndex; i <= array.length - 1; i++) {
      if (array[i] === searchElement) {
        return i;
      }
    }
    return -1;
  };

  const arrayIncludes = (array, valueToFind, fromIndex = 0) =>
    arrayIndexOf(array, valueToFind, fromIndex) > -1;

  const arrayJoin = (array, separator = ",") => {
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

  const arrayKeys = (array) => {
    let res = [];
    for (let key in array) {
      arrayPush(res, key);
    }
    return res;
  };

  const arrayLastIndexOf = (
    array,
    searchElement,
    fromIndex = array.length - 1
  ) => {
    for (let i = fromIndex; i >= 0; i--) {
      if (array[i] === searchElement) {
        return i;
      }
    }
    return -1;
  };

  const arrayMap = (array, callback, thisArg) => {
    let res = [];
    for (let key in array) {
      arrayPush(res, callback(array[key], key, array));
    }
    return res;
  };

  const arrayPop = (array) => {
    let value = array[array.length - 1];
    array.length = array.length - 1;
    return value;
  };

  const arrayReduce = (array, callback, initialValue = array[0]) => {
    for (let key in array) {
      initialValue = callback(initialValue, array[key], key, array);
    }
    return initialValue;
  };

  const arrayReduceRight = (array, callback, initialValue = array[0]) => {
    for (let i = array.length - 1; i >= 0; i--) {
      initialValue = callback(initialValue, array[i], i, array);
    }
    return initialValue;
  };

  const arrayReverse = (array) => {
    let _array = [];
    let index = 0;
    let indexOfSource = array.length - 1;
    while (indexOfSource >= 0) {
      _array[index] = array[indexOfSource];
      index++;
      indexOfSource--;
    }
    return _array;
  };

  const arraySlice = (array, begin = 0, end = array.length) => {
    // 如果提取起始处索引为负数，则表示从原数组中倒数第几个元素开始提起
    if (begin < 0) {
      begin = array.length + begin;
    }
    // 如果 begin 大于原数组的长度，则会返回空数组
    if (begin > array.length - 1) {
      return [];
    }
    // 如果提取终止处索引为负数， 则它表示在原数组中的倒数第几个元素结束抽取。
    if (end < 0) {
      end = array.length + end;
    }
    // 如果 end 大于数组的长度，slice 也会一直提取到原数组末尾。
    if (end > array.length) {
      end = array.length;
    }
    let _arr = [];
    let index = 0;
    while (end - begin > 0) {
      _arr[index] = array[begin];
      index++;
      begin++;
    }
    return _arr;
  };

  const arrayShift = (array) => {
    const shift = array[0];
    array = arraySlice(array, 1 - array.length);
    return shift;
  };

  const arraySome = (array, callback, thisArg) => {
    let falsy = false;
    for (let key in array) {
      falsy = callback(array[key], key, array);
      if (falsy) {
        return falsy;
      }
    }
    return falsy;
  };

  const arraySort = (array, compareFunction = (a, b) => a - b) => {
    // in-place 原地算法
    let index = 0;
    while (index < array.length) {
      for (let i = index; i <= array.length - 1; i++) {
        let compare = compareFunction(array[index], array[i]);
        if (compare > 0) {
          [array[index], array[i]] = [array[i], array[index]];
        }
      }
      index++;
    }
    return array;
  };

  const arraySplice = (array, start = 0, deleteCount = 0, ...items) => {
    /**
     * array =
     *      [0, start - 1]
     *      + [start, start + deleteCount)
     *      + [start + deleteCount, array.length - 1]
     * return =
     *      [0, start)
     *      + [start, start + items.length - 1)
     *      + [start + deleteCount, array.length - 1]
     */
    let _array = [];
    let index = 0;
    let delArray = [];
    let delIndex = 0;
    for (let i = 0; i <= array.length - 1; i++) {
      // 提取索引小于start的元素
      if (i <= start - 1) {
        _array[index] = array[i];
        index++;
      }
      // 插入元素
      else if (i == start) {
        for (let j = 0; j <= items.length - 1; j++) {
          _array[index] = items[j];
          index++;
        }
        // 当删除的元素数为0时，将索引为start的值插入数组
        if (deleteCount == 0) {
          _array[index] = array[start];
          index++;
        }
        // 当删除的元素数不为0时，将索引为start的值插入删除元素的数组
        else {
          delArray[delIndex] = array[start];
          delIndex++;
        }
      } else if (i <= start + deleteCount) {
        delArray[delIndex] = array[i];
        delIndex++;
      }
      // 过滤掉索引介于start与start+deleteCount之间的元素
      // 提取索引大于start+deleteCount的元素
      else if (i > start + deleteCount) {
        _array[index] = array[i];
        index++;
      }
    }
    array = _array;
    return delArray;
  };

  const arrayUnshift = (array, ...values) => {
    let _arr = [];
    for (let i = 0; i <= values.length + array.length - 1; i++) {
      if (i >= values.length) {
        _arr[i] = array[i - values.length];
      } else {
        _arr[i] = values[i];
      }
    }
    array = _arr;
    return array.length;
  };

  const arrayValues = (array) => {
    let res = [];
    for (let key in array) {
      arrayPush(res, array[key]);
    }
    return res;
  };

  /**
   * @name count
   * @desc 统计值的出现次数
   * @param {*} arr 
   * @param {*} value 
   */
  const count = (array, val = array[0]) => array.reduce((a, v) => (v === val ? a + 1 : a), 0);

  /**
   * @name countBy
   * @desc 根据给定的函数对数组的元素进行分组，并返回每个组中元素的数量
   * @param {Array} array 
   * @param {Function} fn 
   */
  const countBy = (array, fn) =>
      array.map(typeof fn === 'function' ? fn : val => val).reduce((acc, val) => {
          acc[`${val}`] = (acc[`${val}`] || 0) + 1;
          return acc;
      }, {});

  /**
   * 深拷贝数组
   * @param {*} array
   * @param {*} mode
   */

  const deepCopyArrayBySlice = (array) => array.slice(0);

  const deepCopyArray = deepCopyArrayBySlice;

  /**
   * @description 取重复值
   * @param {*} arr 
   */

  const duplicate = arr => [...new Set(arr.reduce((acc, val, index) => arr.indexOf(val, index + 1) >= 0 ? acc.concat(val) : acc, []))];

  /**
   * 过滤数组中的虚假值
   * @param {Array} array
   */
  const filterFalsy = (array) => array.filter(Boolean);

  /**
   * @name isArray
   * @desc 检测是否为数组
   * @param {*} arr 
   */
  const isArray = object => Object.prototype.toString.call(object) === '[object Array]';

  /**
   * @name flatten
   * @desc 将数组展平到指定的深度。
   * @param {Array} arr
   */
  const flatten = (arr, depth = 1) => {
    if (depth >= 1) {
      return arr.reduce(
        (a, v) => a.concat(isArray(v) ? flatten(v, depth - 1) : v),
        []
      );
    }
    if (depth === 0) {
      return arr;
    }
    if (depth === -1) {
      return arr.reduce((a, v) => a.concat(isArray(v) ? flatten(v, -1) : v), []);
    }
  };

  /**
   * @name head
   * @description 数组的前n个元素
   * @param {Array} arr
   */
  const head = (array, n = 1, mode = "prototype") => {
    if (n == 1) return array[0];

    let _map = new Map();
    _map.set("prototype", (array, n) => array.slice(0, n));
    _map.set("_prototype", (array, n) => arraySlice(array, 0, n));
    _map.set("for", (array, n) => {
      let _head = [];
      for (let i = 0; i <= n - 1; i++) {
        _head[i] = array[i];
      }
      return _head;
    });

    if (!_map.has(mode)) mode = "prototype";

    return _map.get(mode)(array, n);
  };

  /**
   * @description 检测所有元素符合
   * @param {*} arr 
   * @param {*} fn 
   */

  const isArrayEvery = (array, fn = Boolean) => array.every(fn);

  const isEveryEqual = array => array.every(val => val === arr[0]);

  /**
   * @name none
   * @desc 如果提供的谓词函数对集合中的所有元素返回false，则返回true，否则返回false
   * @param {*} arr 
   * @param {*} fn 
   */

  const isNone = (array, fn = Boolean) => !array.every(fn);

  /**
   * @name isSome
   * @desc 如果提供的谓词函数对集合中的至少一个元素返回true，则返回true，否则返回false。
   * @param {*} arr 
   * @param {*} fn 
   */
  const isSome = (array, fn = Boolean) => array.some(fn);

  /**
   * @name isSorted
   * @desc 如果数组按升序排序，则返回1;如果按降序排序，则返回-1;如果未排序，则返回0。
   * @param {*} arr 
   */

  // module.exports = arr => arr.reduce((acc, val) => acc > val, arr[0])
  const isSorted = arr => {
      let direction = -(arr[0] - arr[1]);
      for (let [i, val] of arr.entries()) {
          direction = !direction ? -(arr[i - 1] - arr[i]) : direction;
          if (i === arr.length - 1) return !direction ? 0 : direction;
          else if ((val - arr[i + 1]) * direction > 0) return 0;
      }
  };

  /**
   * 将指定数量的元素移动到数组的末尾。
   * @param {*} arr 
   * @param {*} offset 
   */
  const offset = (array, offset) => [...array.slice(offset), ...array.slice(0, offset)];

  /**
   * @name rest
   * @desc 返回数组中的所有元素, 除第一个
   * @param {*} arr
   */

  const rest = (array, n = 1, mode = "prototype") => {
    if (n == 1) return array[array.length - 1];

    let _map = new Map();
    _map.set("prototype", (array, n) => array.slice(array.length - n));
    _map.set("_prototype", (array, n) => arraySlice(array, array.length - n));

    if (!_map.has(mode)) mode = "prototype";

    return _map.get(mode)(array, n);
  };

  /**
   * 反转数组
   * @param {Array} array 
   */
  const reverse = array => array.reverse();

  /**
   * @name unique
   * @desc 返回数组的所有不同值（去重）
   * @param {Array} arr 
   */
  const unique = arr => [...new Set(arr)];

  // 检测false
  const isFalse = boolean => boolean === false;

  // 检测true
  const isTrue = boolean => boolean === true;

  /**
   * 创建 Date 对象
   * @param {*} args
   */
  const date = (...args) => new Date(...args);

  /**
   * 月份中的第几天
   * @param {*} date 
   */
  const day = date => date.getDate();

  /**
   * 星期中的第几天
   * @param {*} date 
   */
  const dayofWeek = date => date.getDay();

  /**
   * 日期的23:59:59
   * @param {*} date 
   */
  const endofDay = date => new Date(new Date(date.toLocaleDateString()).getTime() + 24 * 60 * 60 * 1000 - 1);

  /**
   * 日期所在月的第一天
   * @param {*} date 
   */
  const firstDayofMonth = date => new Date(date.getFullYear(), date.getMonth());

  /**
   * @name
   * @description 获取时间所在年份的周次：取当前时间所在年份的第一天的下周的周一，当前日期减去所取时间，再除以86400000毫秒数
   * @param {*} date 
   * @param {*} firstDayOfWeek 
   */
  const weekofYear = (date = new Date()) => {
      // 取当前年份的第一天
      const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
      // 取第一天是周几
      const firstDayOfWeekForYear = firstDayOfYear.getDay();
      // 取第二周的周一
      const fridayOfSecondWeek = new Date(date.getFullYear(), 0, 7 + 2 - firstDayOfWeekForYear);
      // （当前日期与第二周周一的毫秒差/一周的毫秒）/7
      const w = Math.ceil(Math.ceil((date.valueOf() - fridayOfSecondWeek.valueOf()) / 86400000) / 7) + 1;
      return w;
  };

  /**
   * 格式化时间
   * @param {*} date 
   * @param {*} fm 
   */
  const format = (date, fm) => {
  	date = new Date(date);
  	if (!fm) { return date; }
  	fm = fm.replace("YYYY", date.getFullYear());
  	fm = fm.replace("YY", ('' + date.getFullYear()).slice(-2));

  	fm = fm.replace("MM", ('0' + (date.getMonth() + 1)).slice(-2));
  	fm = fm.replace("M", date.getMonth() + 1);

  	fm = fm.replace("WW", ('0' + weekofYear(date)).slice(-2));
  	fm = fm.replace("W", weekofYear(date));

  	fm = fm.replace("DD", ('0' + date.getDate()).slice(-2));
  	fm = fm.replace("D", date.getDate());

  	fm = fm.replace("dd", '0' + (date.getDay() == 0 ? 7 : date.getDay()));
  	fm = fm.replace("d", date.getDay() == 0 ? 7 : date.getDay());

  	fm = fm.replace("HH", ('0' + date.getHours()).slice(-2));
  	fm = fm.replace("H", date.getHours());

  	fm = fm.replace("hh", date.getHours() < 12 ? ('0' + date.getHours()).slice(-2) : ('0' + (date.getHours() - 12)).slice(-2));
  	fm = fm.replace("h", date.getHours() < 11 ? date.getHours() : date.getHours() - 12);

  	fm = fm.replace("mm", ('0' + date.getMinutes()).slice(-2));
  	fm = fm.replace("m", date.getMinutes());

  	fm = fm.replace("ss", ('0' + date.getSeconds()).slice(-2));
  	fm = fm.replace("s", date.getSeconds());

  	return fm;
  };

  /**
   * 日期的小时
   * @param {*} date 
   */
  const hour = date => date.getHours();

  /**
   * 日期所在月的最后一天
   * @param {*} date 
   */
  const lastDayofMonth = date => new Date(new Date(date.getFullYear(), date.getMonth() + 1) - 1);

  /**
   * 日期前的n天
   * @param {*} date 
   * @param {*} n 
   */
  const lastNDay = (date, n = 1) => new Date(date.getTime() - n * 24 * 60 * 60 * 1000);

  /**
   * 日期的毫秒
   * @param {*} date 
   */
  const millisecond = date => date.getMilliseconds();

  /**
   * 日期的分钟
   * @param {*} date 
   */
  const minute = date => date.getMinutes();

  /**
   * 日期所在周的周一
   * @param {*} date 
   */
  const monday = date => new Date(date - (date.getDay() - 1) * 86400000);

  /**
   * 日期的月份
   * @param {*} date 
   */
  const month = date => date.getMonth();

  /**
   * 获取指定时间的时间戳
   * @param {*} date 
   */
  const timestamp = date => new Date(date).getTime();

  /**
   * 指定日期的N天后
   * @param {*} date 
   * @param {*} n 
   */
  const nextDays = (date, n = 1) => new Date(timestamp(date) + n * 24 * 60 * 60 * 1000);

  /**
   * 指定日期的N时后
   * @param {*} date 
   * @param {*} n 
   */
  const nextHours = (date, n = 1) => new Date(timestamp(date) + n * 60 * 60 * 1000);

  /**
   * 指定日期的N分后
   * @param {*} date 
   * @param {*} n 
   */
  const nextMinutes = (date, n = 1) => new Date(timestamp(date) + n * 60 * 1000);

  /**
   * 指定日期的N月后
   * @param {*} date 
   * @param {*} n 
   */
  const nextMonths = (date = new Date(), n = 1) => {
      date = new Date(date);
      let year = date.getFullYear();
      let month = date.getMonth();
      month += n;
      if (month > 11) {
          year += parseInt(month / 12);
          date.setFullYear(year);
          month = month % 12;
      }
      date.setMonth(month);
      return date;
  };

  /**
   * 指定日期的N秒后
   * @param {*} date 
   * @param {*} n 
   */
  const nextSeconds = (date, n = 1) => new Date(timestamp(date) + n * 1000);

  /**
   * 指定日期的N周后
   * @param {*} date 
   * @param {*} n 
   */
  const nextWeeks = (date, n = 1) => new Date(timestamp(date) + n * 7 * 24 * 60 * 60 * 1000);

  /**
   * 指定日期的N年后
   * @param {*} date 
   * @param {*} n 
   */
  const nextYears = (date, n = 1) => {
      date = new Date(date);
      let year = date.getFullYear();
      year += n;
      date.setFullYear(year);
      return date;
  };

  /**
   * 日期的零点
   * @param {*} date 
   */
  const startofDay = date => new Date(date.toLocaleDateString());

  /**
   * 日期所在周的周日
   * @param {*} date 
   */
  const sunday = date => new Date(date - (date.getDay() - 7) * 86400000);

  /**
   * 日期的年份
   * @param {*} date 
   */
  const year = date => date.getFullYear();

  /**
   * 时间区段
   * @param {*} date
   * @param {*} type
   */
  const range = (date, type, opts) => {
    // TODO type:year,month,week,day,hour,minute
    // TODO opts.start: if(type===year){(0,11)}
    // TODO opts.end:if(type==year){(0,11)}
    if (type === "year") {
      return [
        new Date(year(date), 0),
        new Date(new Date(year(date) + 1, 0).getTime() - 1),
      ];
    }
    if (type === "month") {
      return [firstDayofMonth(date), lastDayofMonth(date)];
    }
    if (type === "week") {
      return [startofDay(monday(date)), endofDay(sunday(date))];
    }
    if (type === "day") {
      return [startofDay(date), endofDay(date)];
    }
    return [];
  };

  /**
   * 日期的秒数
   * @param {*} date 
   */
  const second = date => date.getSeconds();

  /**
   * @name isDate
   * @desc 检测Date
   * @param {*} obj 
   */
  const isDate = object => Object.prototype.toString.call(object) === "[object Date]";

  /**
   * 返回起止时间中单位时间的连续时间数组
   * @param {Date} start
   * @param {Date} end
   * @param {String} unit
   * @param {String} fm
   */
  const timeline = (
    start,
    end = new Date(),
    unit = "day",
    fm = "YYYY-MM-DD HH:mm:ss"
  ) => {
    // 检测起止时间格式
    if (!isDate(start) || !isDate(end)) {
      throw new Error("Incorrect starting and ending datetime format!");
    }
    // 起始时间必须小于截止时间
    let result = [];
    if (start > end) return result;
    // 单位时间
    const unitMap = {
      year: nextYears,
      month: nextMonths,
      week: nextWeeks,
      day: nextDays,
      halfDay: (time) => nextHours(time, 12),
      hour: nextHours,
      minute: nextMinutes,
      second: nextSeconds,
    };
    while (end >= start) {
      result.push(format(start, fm));
      start = timestamp(unitMap[unit](start));
    }
    return result;
  };

  /**
   * 明天
   * @param {*} date 
   */
  const tomorrow = date => new Date(date.getTime() + 24 * 60 * 60 * 1000);

  /**
   * 昨天
   * @param {*} date 
   */
  const yesterday = date => new Date(date.getTime() - 24 * 60 * 60 * 1000);

  /**
   * @name bottomVisible
   * @desc 如果页的底部可见, 则返回true, 否则为false
   */
  const isBottomVisible = () =>
      document.documentElement.clientHeight + window.scrollY >= document.documentElement.scrollHeight || document.documentElement.clientHeight;

  /**
   * 检测根目录
   */
  const isRoot = el => el === document.body || el === document.documentElement;

  /**
   * @name elementIsVisibleInViewport
   * @desc 如果指定的元素在视区中可见, 则返回true, 否则为false。
   * @param {*} el 
   * @param {*} partiallyVisible 
   */
  const isVisibleinViewport = (el, partiallyVisible = false) => {
      const {
          top,
          left,
          bottom,
          right
      } = el.getBoundingClientRect();
      return partiallyVisible ?
          ((top > 0 && top < innerHeight) || (bottom > 0 && bottom < innerHeight)) &&
          ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth)) :
          top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;
  };

  /**
   * @name redirect
   * @desc 重定向到指定的 URL
   * @param {*} url 
   * @param {*} asLink 
   */
  const redirect = (url, asLink = true) => asLink ? window.location.href = url : window.location.replace(url);

  /**
   * @name getScrollPosition
   * @desc 返回当前页的滚动位置
   * @param {*} el 
   */
  const scrollPosition = (el = window) =>
      ({
          x: (el.pageXOffset !== undefined) ? el.pageXOffset : el.scrollLeft,
          y: (el.pageYOffset !== undefined) ? el.pageYOffset : el.scrollTop
      });

  /**
   * @desc 滚动至页面顶部
   */
  const scrollToTop = () => {
      const c = document.documentElement.scrollTop || document.body.scrollTop;
      if (c > 0) {
          window.requestAnimationFrame(scrollToTop);
          window.scrollTo(0, c - c / 8);
      }
  };

  /**
   * @name currentURL
   * @desc 返回当前 URL
   */
  const url = () => window.location.href;

  /**
   * Ajax的封装
   * @param {Object} option 配置参数
   * @return {Function} 回调函数
   */
  const ajax = (option) => {
      /**
       * 配置参数
       * @param {string} option.mode 请求的实现方式：native,promise
       * @param {string} option.url 发送请求的url
       * @param {string} option.method http连接的方式，包括POST和GET两种方式
       * @param {boolean} option.async 是否为异步，true为异步，false为同步
       * @param {object} option.data 发送的参数，格式为对象类型
       * @param {function} option.success ajax成功的回调函数
       * @param {function} option.error ajax失败的回调函数
       */
      let mode = option.mode || "native";
      // 初始化参数
      option.url = option.url || "";
      option.method = option.method || "GET";
      option.async = option.async || true;
      option.data = option.data || {};
      // 整理参数
      let params = [];
      for (let key in option.data) {
          params.push(key + "=" + option.data[key]);
      }
      const postData = params.join("&");

      // 创建XMLHttpRequest对象
      let xmlHttp = null;
      if (XMLHttpRequest) {
          xmlHttp = new XMLHttpRequest();
      } else {
          xmlHttp = new ActiveXObject('Microsoft.XMLHTTP');
      }
      // 发送请求
      if (option.method.toUpperCase() === "POST") {
          xmlHttp.open("POST", option.url, option.async);
          xmlHttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
          xmlHttp.send(postData);
      } else if (option.method.toUpperCase() === "GET") {
          xmlHttp.open("GET", option.url + '?' + postData, option.async);
          xmlHttp.send(null);
      }
      let map = new Map();
      map.set("native", function (option) {
          // 初始化参数
          option.success = option.success || function (res) { };
          option.error = option.error || function (err) { };
          // 服务器响应
          xmlHttp.onreadystatechange = () => {
              // 请求未初始化 xmlHttp.readyState==0
              // 服务器连接已建立 xmlHttp.readyState==1
              // 请求已连接 xmlHttp.readyState==2
              // 请求处理中 xmlHttp.readyState==3
              // 请求已完成且响应已就绪
              if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
                  option.success(xmlHttp.responseText);
              }
              // 未找到页面
              else if (xmlHttp.readyState == 4 && xmlHttp.status == 404) {
                  option.error(xmlHttp.responseText);
              }

          };
      });
      map.set("promise", function (option) {
          return new Promise(function (resolve, reject) {
              xmlHttp.onreadystatechange = function () {
                  if (xmlHttp.readyState !== 4) {
                      return;
                  }
                  if (xmlHttp.status === 200) {
                      resolve(xmlHttp.responseText);
                  } else {
                      reject(new Error(xmlHttp.statusText));
                  }
              };
          });
      });
      if (!map.has(mode)) mode = "native";
      return map.get(mode)(option);
  };

  /**
   * 防抖：触发高频事件后n秒内函数只会执行一次，如果n秒内高频事件再次被触发，则重新计算时间
   * 每次触发事件时都取消之前的延时调用方法
   */
  const debounce = (fn) => {
    let timeout = null; // 创建一个标记用来存放定时器的返回值
    return function () {
      clearTimeout(timeout); // 每当用户输入的时候把前一个 setTimeout clear 掉
      timeout = setTimeout(() => {
        // 然后又创建一个新的 setTimeout, 这样就能保证输入字符后的 interval 间隔内如果还有字符输入的话，就不会执行 fn 函数
        fn.apply(this, arguments);
      }, 500);
    };
  };

  /**
   * 遍历
   * @param {*} v 
   * @param {*} fn 
   * @param {*} depth 
   */
  const forEach = (object, callback) => {
      for (let key in v) {
          callback(v[key], key);
      }
  };

  /**
   * @description 反向遍历
   */

  const forEachRight = (object, callback) => {
      let array = [];
      for (let k in object) {
          array.unshift(k);
      }
      for (let k in array) {
          callback(object[array[k]], array[k]);
      }
  };

  /**
   * @name forEachRight
   * @desc 从数组的最后一个元素开始，为每个数组元素执行一次提供的函数。
   * @param {*} array 
   * @param {*} callback 
   */
  const forEachRightArray = (array, callback) =>
      array
          .slice(0)
          .reverse()
          .forEach(callback);

  const query = el => document.querySelector(el);

  // export const $ = jQuery;

  /**
   * DOM 选择器
   * @param {*} el 
   */
  const queryAll = el => document.querySelectorAll(el);

  /**
   * @name swap
   * @description 交换元素位置
   * @param {Array} arr 
   * @param {Number} i 
   * @param {Number} j 
   */

  const swap = (a, b) => [a, b] = [b, a];

  /**
   * 节流：高频事件触发，但在 n 秒内只会执行一次，所以节流会稀释函数的执行频率
   * 每次触发事件时都判断当前是否有等待执行的延时函数
   */
  const throttle = (fn) => {
    let canRun = true; // 通过闭包保存一个标记
    return function () {
      if (!canRun) return; // 在函数开头判断标记是否为true，不为true则return
      canRun = false; // 立即设置为false
      setTimeout(() => {
        // 将外部传入的函数的执行放在setTimeout中
        fn.apply(this, arguments);
        // 最后在setTimeout执行完毕后再把标记设置为true(关键)表示可以执行下一次循环了。当定时器没有执行的时候标记永远是false，在开头被return掉
        canRun = true;
      }, 500);
    };
  };

  /**
   * @name timeTaken
   * @desc 测量执行函数所用的时间
   * @param {*} fn 
   * @param  {...any} args 
   */
  const timeTaken = (fn, ...args) => {
  	console.time('timeTaken');
  	const result = fn(...args);
  	console.timeEnd('timeTaken');
  	return result;
  };

  const mobileType = () => {
      var u = navigator.userAgent;
      var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; // g
      var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); // ios终端
      if (isAndroid) {
          return 'Android'
      }
      if (isIOS) {
          return 'IOS'
      }

      return 'No Mobile';
  };

  /**
   * @name areaOfCircle
   * @desc 返回圆的面积
   * @param {*} radius 
   * @param {*} pi 
   */
  const areaofCircle = (radius, pi = Math.PI) => radius * radius * pi;

  /**
   * 求总和
   * @param  {...any} nums 
   */

  const sum = (...nums) => nums.reduce((acc, val) => acc + val, 0);

  /**
   * 求平均值
   * @param  {...any} nums 
   */
  const avg = (...nums) => sum(...nums) / nums.length;

  /**
   * @name collatz
   * @desc 应用 Collatz 算法
   * @param {*} n 
   */
  const collatz = n => (n % 2 === 0) ? (n / 2) : (3 * n + 1);

  /**
   * 将数字转换为数字数组
   * @param {Number} num 
   */
  const digitize = num => [...'' + num].map(i => parseInt(i));

  /**
   * @name distance
   * @desc 返回两点之间的距离
   */
  const distance = (x0, y0, x1, y1) => Math.hypot(x1 - x0, y1 - y0);

  /**
   * 计算两个数字之间最大的公共除数
   * @param {*} x 
   * @param {*} y 
   */
  const gcd = (x, y) => !y ? x : gcd(y, x % y);

  /**
   * @name isDivisible
   * @desc 检查第一个数值参数是否可被另一个数字变量整除
   * @param {*} dividend 
   * @param {*} divisor 
   */
  const isDivisible = (dividend, divisor) => dividend % divisor === 0;

  /**
   * @name isEven
   * @desc 如果给定的数字为偶数, 则返回true, 否则为false
   * @param {*} num 
   */
  const isEven = num => num % 2 === 0;

  const isFinite$1 = v => Number.isFinite(v);

  const isInteger = v => Number.isInteger(v);

  /**
   * 检测是否为闰年
   * @param {*} year 
   */
  const isLeapYear = year => !(year % (year % 100 ? 4 : 400));

  const isNaN$1 = v => Number.isNaN(v);

  /**
   * @name isOdd
   * @desc 如果给定的数字为奇数, 则返回true, 否则为false
   * @param {*} num 
   */
  const isOdd = num => num % 2 === 1;

  const isSafeInteger = v => Number.isSafeInteger(v);

  /**
   * 年份间的闰年
   * @param {Number} start 
   * @param {Number} end 
   */
  const leapYears = (start, end) => {
      if (start > end) { return []; }
      let array = [];
      for (var i = start; i <= end; i++) {
          if (isLeapYear(i)) {
              array.push(i);
          }
      }
      return array;
  };

  /**
   * 最大值
   * @param  {...any} nums 
   */
  const max = (...nums) => nums.slice((acc, val) => (acc > val ? acc : val), 0);

  /**
   * 最小值
   * @param  {...any} nums 
   */
  const min = (...nums) => nums.slice((acc, val) => (acc < val ? acc : val), 0);

  const PI = (mode = "api") => {
      let map = new Map();
      map.set("api", () => Math.PI);
      if (!map.has(mode)) mode = "api";
      return map.get(mode)();
  };

  /**
   * @name randomIntegerInRange
   * @desc 返回指定范围内的随机整数
   * @param {*} min 
   * @param {*} max 
   */
  const randomInteger = (min, max = min + 1) => Math.floor(Math.random() * (max - min + 1)) + min;

  /**
   * @name randomNumberInRange
   * @desc 返回指定范围内的随机数
   * @param {*} min 
   * @param {*} max 
   */
  const randomNumber = (min, max = min + 1) => Math.random() * (max - min) + min;

  /**
   * 千位分隔符
   * @param {*} num
   */
  const thousandsSeparator = (num) => num.toLocaleString("en");

  /**
   * @desc 混合属性到目标对象
   */
  const extend = (to, _from) => {
  	for (var key in _from) {
  		to[key] = _from[key];
  	}
  	return to
  };

  // 检测布尔值
  const isBoolean = object => Object.prototype.toString.call(object) === '[object Boolean]';

  /**
   * @desc 检测浏览器环境
   */
  const isBrowser = () => ![typeof window, typeof document].includes('undefined');

  const isDefined = v => v !== undefined && v !== null;

  /**
   * 检测DOM
   * @param {*} el
   */
  const isDOM = (object) =>
    typeOf(HTMLElement) === "object"
      ? object instanceof HTMLElement
      : object &&
        typeOf(object) === "object" &&
        object.nodetypeOf === 1 &&
        typeOf(object.nodeName) === "string";

  /**
   * @name isNull
   * @desc 判断是否是Null
   * @param {*} object 
   * @return {Boolean}
   */
  const isNull = object => Object.prototype.toString.call(object) === '[object Null]';

  /**
   * @name isUndefined
   * @desc 判断是否是Undefined
   * @param {*} object 
   * @return {Boolean}
   */

  const isUndefined = object => Object.prototype.toString.call(object) === '[object Undefined]';

  /**
   * 检测为空
   * @param {*} object 
   */
  const isEmpty = object => isNull(object) || isUndefined(object);

  /**
   * @name isFunction
   * @desc 判断是否是函数
   * @param {*} object 
   * @return {Boolean}
   * @date 2019-07-06
   */
  const isFunction = object => Object.prototype.toString.call(object) === '[object Function]';

  /**
   * @name isNumber
   * @desc 判断是否是数字
   * @param {*} object 
   * @return {Boolean}
   */
  const isNumber = v => Object.prototype.toString.call(v) === '[object Number]'
    && Number.isFinite(v)
    && !Number.isNaN(v)
    && typeof (v) === 'number';

  /**
   * @name isObject
   * @desc 判断是否是Object
   * @param {*} object 
   * @return {Boolean}
   */

  const isObject = object => Object.prototype.toString.call(object) === '[object Object]';

  /**
   *
   * 检测原始数据类型
   */


  const isPrimitive = object =>
  	typeof object === 'string' ||
  	typeof object === 'number' ||
  	typeof object === 'symbol' ||
  	typeof object === 'boolean';

  /**
   * 检测正则
   * @param {*} object 
   */
  const isRegExp = object => Object.prototype.toString.call(object) === '[object RegExp]';

  /**
   * @name isString
   * @desc 检测是否为字符串
   * @param {*} object 
   * @return {Boolean}
   */

  const isString = object => Object.prototype.toString.call(object) === '[object String]';

  /**
   * @name isSymbol
   * @desc 判断是否是Symbol
   * @param {*} object 
   * @return {Boolean}
   */
  const isSymbol = object => Object.prototype.toString.call(object) === '[object Symbol]';

  /**
   * json转字符串
   * @param {*} object 
   */
  const stringify = object => JSON.stringify(object);

  /**
   * 常用正则表达式
   */
  const regs = () => {
      return {
          // 密码强度正则，最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符
          passwordStrength: /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/,
          // 正整数
          positiveInteger: /^\d+$/,
          // 负浮点数
          negativeFloate: /^\d*\.?\d+$/,
          // 正数
          positiveNumber: /^\d*\.?\d+$/,
          // 数字
          number: /^-?\d*\.?\d+$/,
          // 通用日期
          generalDate: /^\d{4}-\d{1,2}-\d{1,2}$/,
          // 基本Email正则
          Email: /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
          // 手机号码
          phoneNumber: /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\d{8}$/,
          // 身份证号（15位）
          idNumber_15: /^[1-9]\\d{7}((0\\d)|(1[0-2]))(([0|1|2]\\d)|3[0-1])\\d{3}$/,
          // 身份证号（18位）
          idNumber_18: /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/,
          // URL正则
          URL: /^((https?|ftp|file):\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,
          // IPv4地址正则
          IPv4: /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,
          // IPv6地址正则
          IPv6: /(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))/,
          "十六进制颜色/RGB Hex颜色": /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/,
          // QQ号正则，5至11位
          QQ: /^[1-9][0-9]{4,10}$/,
          // 微信号正则，6至20位，以字母开头，字母，数字，减号，下划线
          WeChat: /^[a-zA-Z]([-_a-zA-Z0-9]{5,19})+$/,
          "车牌号": /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/,
          "包含中文": /[\u4E00-\u9FA5]/,
          // 中国邮政编码为6位数字
          "中国邮编": /^[1-9]\d{5}(?!\d)$/,
          // 空白行
          blankLine: /\n\s*\r/,
          // 迅雷链接
          Thunder: /^thunder:\/\/[a-zA-Z0-9]+=$/,
          // ed2k链接(宽松匹配)
          ed2k: /^ed2k:\/\/|file|.+|\/$/,
          // 磁力链接(宽松匹配)
          magnet: /^magnet:\?xt=urn:btih:[0-9a-fA-F]{40,}.*$/,
          // 子网掩码
          subnetMask: /^(?:\d{1,2}|1\d\d|2[0-4]\d|25[0-5])(?:\.(?:\d{1,2}|1\d\d|2[0-4]\d|25[0-5])){3}$/
      }

  };

  /**
   * @name validateEmail
   * @desc 检测是否为有效的电子邮箱
   * @param {*} str
   */
  const verifyEmail = (string) =>
    string
      ? /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          string
        )
      : /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  /**
   * @name validateNumber
   * @desc 判断时字符串格式数字
   * @param {String} string
   * @return {Boolean}
   * @date 2019-07-06
   */
  const verifyNumber = (num) =>
    !isNaN(parseFloat(num)) && isFinite(num) && Number(num) == num;

  /**
   * @name capitalize
   * @desc 将字符串的第一个字母大写
   * @param {*} param0 
   * @param {*} lowerRest 
   */
  const capitalize = ([first, ...rest], lowerRest = false) =>
      first.toUpperCase() + (lowerRest ? rest.join('').toLowerCase() : rest.join(''));

  /**
   * @name capitalizeEveryWord
   * @desc 将字符串中每个单词的首字母大写
   * @param {*} string 
   */
  const capitalizeEveryWord = string => string.replace(/\b[a-z]/g, char => char.toUpperCase());

  /**
   * hex十六进制颜色转rgb颜色
   * @param hex
   * @param opacity
   * @returns {string}
   */
  const hexToRgba = (hex, opacity = 1) =>
      "rgba(" + parseInt("0x" + hex.slice(1, 3)) + "," + parseInt("0x" + hex.slice(3, 5)) + "," + parseInt("0x" + hex.slice(5, 7)) + "," + opacity + ")";

  /**
   * @desc 检测JSON字符串
   * @param str {String}
   */
  const isJSONString = (str) => {
      try {
          if (typeOf(JSON.parse(str)) == "object") {
              return true;
          }
      } catch (e) {
          return false;
      }
      return false;
  };

  /**
   * 检测回文字符串
   * @param {*} obj 
   */
  const isPalindrome = (obj, mode = "api") => {
      let _map = new Map();
      _map.set("api", obj => typeof (obj) === 'string' && obj === obj.split('').reverse().join(''));
      _map.set("while", obj => {
          if (typeof obj !== 'string') return false;
          let i = 0, j = obj.length - 1;
          while (i < j) {
              if (obj.charAt(i) !== obj.charAt(j)) return false
              i++;
              j--;
          }
          return true
      });
      if (!_map.has(mode)) mode = 'api';

      return _map.get(mode)(obj);
  };

  /**
   * @name isArrayOfString
   * @desc 判断是否是字符串格式数组
   * @param {String} string
   * @return {Boolean}
   * @date 2019-07-06 
   */
  function isStringforArray(string) {
      if (this.isString(string)) {
          // 清除前后空格
          let start = string.indexOf("\[");
          let end = string.lastIndexOf("\]");
          if (start >= 0 && end > 0) {
              return true;
          }
      }
      return false
  }

  /**
   * @name isBooleanOfString
   * @desc 判断是否是字符串格式布尔值
   * @param {String} string 
   * @return {Boolean}
   * @date 2019-07-06
   */
  const isStringforBoolean = v => v === "true" || v === "false";

  /**
   * @name isNumberOfString
   * @desc 判断是否是字符串格式数字
   * @param {String} string 
   * @return {Boolean}
   * @date 2019-07-06
   */
  const isStringforNumber = v =>
      !isNaN(v);

  /**
   * 检测是否是有效的括号
   * {},[],()
   * @param {*} string 
   */
  const isValidParenthess = (string) => {
      // 确定括号对应关系
      let map = {
          '{': '}',
          '[': ']',
          '(': ')',
      };
      let stack = [];
      for (let i = 0; i <= string.length - 1; i++) {
          if (map[s[i]]) {
              stack.push(s[i]);
          } else if (s[i] !== map[stack.pop()]) {
              return false;
          }
      }
      return stack.length === 0;
  };

  // 找出最长单词
  const longestWord = text =>
      text.split(" ").reduce((acc, val) =>
          acc.length > val.length ? acc : val,
          "");

  /**
   * 
   */
  const nb = () => ([][[]] + [])[+!![]] + ([] + {})[!+[] + !![]];

  /**
   * @name randomString
   * @desc 指定长度的随机字符串
   * @param {Number} length 
   * @param {Number} array 
   */


  const randomString = (length = 1, array = 0) => {
      if (array > 0) {
          return randomString_2(length, array);
      }
      return randomString_1(length);

      function randomString_1(length) {
          const _a = "abcdefghijklmnopqrstuvwxyz";
          const _A = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
          const _0 = "0123456789";
          let str = `${_a + _A + _0}`;
          let result = "",
              l = str.length;
          for (let i = 0; i < length; i++) {
              result += str.charAt(Math.floor(Math.random() * l));
          }
          return result;
      }

      function randomString_2(length, array) {
          let result = [];
          while (array > 0) {
              result.push(randomString_1(length));
              array--;
          }
          return result;
      }
  };

  /**
   *
   * @param {*} num
   */
  const rate = (num = 0) => "★★★★★☆☆☆☆☆".slice(5 - num, 10 - num);

  /**
   * 移除字符串中所有相邻重复项
   * @param {*} string 
   */
  const removeDuplicates = (string) => {
      let stack = [];
      for (let c of string) {
          let prev = stack.pop();
          if (prev !== c) {
              stack.push(prev);
              stack.push(c);
          }
      }
      return stack.join('')
  };

  /* 
   * @name reverseString
   * @desc 反转字符串
   * @param {*} str 
   */
  const reverseString = string => [...string].reverse().join('');

  /**
   * rgb颜色转hex十六进制颜色
   * @param r
   * @param g
   * @param b
   * @returns {string}
   */
  const rgbToHex = (r, g, b) => "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);

  const sb = () => (!(~+[]) + {})[--[~+""][+[]] * [~+[]] + ~~!+[]] + ({} + [])[[~!+[]] * ~+[]];

  /**
   * 字符串转json
   * @param {*} string
   */
  const toJson = (string) => JSON.parse(string);

  /**
   * 返回一个包含当前 URL 参数的对象
   */
  const urlParams = (url = window.location.href) =>
      url.match(/([^?=&]+)(=([^&]*))/g).reduce(
          (a, v) => (a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1), a), {}
      );

  const uuid = () =>
      'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c =>
          (c == 'x' ? Math.random() * 16 | 0 : (Math.random() * 16 | 0 & 0x3 | 0x8)).toString(16)
      );

  exports.ArrayFrom = ArrayFrom;
  exports.ArrayIs = ArrayIs;
  exports.ArrayOf = ArrayOf;
  exports.PI = PI;
  exports.ajax = ajax;
  exports.areaofCircle = areaofCircle;
  exports.arrayConcat = arrayConcat;
  exports.arrayEvery = arrayEvery;
  exports.arrayFill = arrayFill;
  exports.arrayFilter = arrayFilter;
  exports.arrayFind = arrayFind;
  exports.arrayFindIndex = arrayFindIndex;
  exports.arrayForEach = arrayForEach;
  exports.arrayIncludes = arrayIncludes;
  exports.arrayIndexOf = arrayIndexOf;
  exports.arrayJoin = arrayJoin;
  exports.arrayKeys = arrayKeys;
  exports.arrayLastIndexOf = arrayLastIndexOf;
  exports.arrayMap = arrayMap;
  exports.arrayPop = arrayPop;
  exports.arrayPush = arrayPush;
  exports.arrayReduce = arrayReduce;
  exports.arrayReduceRight = arrayReduceRight;
  exports.arrayReverse = arrayReverse;
  exports.arrayShift = arrayShift;
  exports.arraySlice = arraySlice;
  exports.arraySome = arraySome;
  exports.arraySort = arraySort;
  exports.arraySplice = arraySplice;
  exports.arrayUnshift = arrayUnshift;
  exports.arrayValues = arrayValues;
  exports.avg = avg;
  exports.bubbleSort = bubbleSort;
  exports.bucketSort = bucketSort;
  exports.capitalize = capitalize;
  exports.capitalizeEveryWord = capitalizeEveryWord;
  exports.collatz = collatz;
  exports.count = count;
  exports.countBy = countBy;
  exports.countingSort = countingSort;
  exports.date = date;
  exports.day = day;
  exports.dayofWeek = dayofWeek;
  exports.debounce = debounce;
  exports.deepCopyArray = deepCopyArray;
  exports.digitize = digitize;
  exports.distance = distance;
  exports.duplicate = duplicate;
  exports.endofDay = endofDay;
  exports.euclideanAlgorithm = euclideanAlgorithm;
  exports.extend = extend;
  exports.factorial = factorial;
  exports.filterFalsy = filterFalsy;
  exports.firstDayofMonth = firstDayofMonth;
  exports.flatten = flatten;
  exports.forEach = forEach;
  exports.forEachRight = forEachRight;
  exports.forEachRightArray = forEachRightArray;
  exports.format = format;
  exports.gcd = gcd;
  exports.head = head;
  exports.heapSort = heapSort;
  exports.hexToRgba = hexToRgba;
  exports.hour = hour;
  exports.insertionSort = insertionSort;
  exports.isArray = isArray;
  exports.isArrayEvery = isArrayEvery;
  exports.isBoolean = isBoolean;
  exports.isBottomVisible = isBottomVisible;
  exports.isBrowser = isBrowser;
  exports.isDOM = isDOM;
  exports.isDate = isDate;
  exports.isDefined = isDefined;
  exports.isDivisible = isDivisible;
  exports.isEmpty = isEmpty;
  exports.isEven = isEven;
  exports.isEveryEqual = isEveryEqual;
  exports.isFalse = isFalse;
  exports.isFinite = isFinite$1;
  exports.isFunction = isFunction;
  exports.isInteger = isInteger;
  exports.isJSONString = isJSONString;
  exports.isLeapYear = isLeapYear;
  exports.isNaN = isNaN$1;
  exports.isNone = isNone;
  exports.isNull = isNull;
  exports.isNumber = isNumber;
  exports.isObject = isObject;
  exports.isOdd = isOdd;
  exports.isPalindrome = isPalindrome;
  exports.isPrimitive = isPrimitive;
  exports.isRegExp = isRegExp;
  exports.isRoot = isRoot;
  exports.isSafeInteger = isSafeInteger;
  exports.isSome = isSome;
  exports.isSorted = isSorted;
  exports.isString = isString;
  exports.isStringforArray = isStringforArray;
  exports.isStringforBoolean = isStringforBoolean;
  exports.isStringforNumber = isStringforNumber;
  exports.isSymbol = isSymbol;
  exports.isTrue = isTrue;
  exports.isUndefined = isUndefined;
  exports.isValidParenthess = isValidParenthess;
  exports.isVisibleinViewport = isVisibleinViewport;
  exports.lastDayofMonth = lastDayofMonth;
  exports.lastNDay = lastNDay;
  exports.leapYears = leapYears;
  exports.longestWord = longestWord;
  exports.max = max;
  exports.mergeSort = mergeSort;
  exports.millisecond = millisecond;
  exports.min = min;
  exports.minute = minute;
  exports.mobileType = mobileType;
  exports.monday = monday;
  exports.month = month;
  exports.nb = nb;
  exports.nextDays = nextDays;
  exports.nextHours = nextHours;
  exports.nextMinutes = nextMinutes;
  exports.nextMonths = nextMonths;
  exports.nextSeconds = nextSeconds;
  exports.nextWeeks = nextWeeks;
  exports.nextYears = nextYears;
  exports.offset = offset;
  exports.query = query;
  exports.queryAll = queryAll;
  exports.quickSort = quickSort;
  exports.radixSort = radixSort;
  exports.randomInteger = randomInteger;
  exports.randomNumber = randomNumber;
  exports.randomString = randomString;
  exports.range = range;
  exports.rate = rate;
  exports.redirect = redirect;
  exports.regs = regs;
  exports.removeDuplicates = removeDuplicates;
  exports.rest = rest;
  exports.reverse = reverse;
  exports.reverseString = reverseString;
  exports.rgbToHex = rgbToHex;
  exports.sb = sb;
  exports.scrollPosition = scrollPosition;
  exports.scrollToTop = scrollToTop;
  exports.second = second;
  exports.selectionSort = selectionSort;
  exports.shellSort = shellSort;
  exports.startofDay = startofDay;
  exports.stringify = stringify;
  exports.sum = sum;
  exports.sunday = sunday;
  exports.swap = swap;
  exports.thousandsSeparator = thousandsSeparator;
  exports.throttle = throttle;
  exports.timeTaken = timeTaken;
  exports.timeline = timeline;
  exports.timestamp = timestamp;
  exports.toJson = toJson;
  exports.tomorrow = tomorrow;
  exports.typeOf = typeOf;
  exports.unique = unique;
  exports.url = url;
  exports.urlParams = urlParams;
  exports.uuid = uuid;
  exports.verifyEmail = verifyEmail;
  exports.verifyNumber = verifyNumber;
  exports.weekofYear = weekofYear;
  exports.year = year;
  exports.yesterday = yesterday;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
