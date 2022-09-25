/**
 * 交换元素位置
 * @category Function
 * @param {Array} arr 
 * @param {Number} i 
 * @param {Number} j 
 * @mermaid
 * flowchart LR
 *  A <--> B
 */

export function swap(a: any, b: any) {
  [a, b] = [b, a]
}

