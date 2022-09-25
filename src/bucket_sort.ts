/**
 * @name bucketSort
 * @desc 桶排序
 */
export const bucketSort = (array: any[]) => {
  // 声明一个空桶, 将数据压入桶中
  const bucket = new Array(Math.max(...array) + 1);
  bucket.fill(0);
  array.forEach((one) => {
    bucket[one]++
  });
  // 声明一个新数组, 当做排序后的数组
  const newArr: any[] = []
  bucket.forEach((one, index) => {
    for (let i = 0; i < one; i++) {
      newArr.push(index)
    }
  })

  return newArr;
}