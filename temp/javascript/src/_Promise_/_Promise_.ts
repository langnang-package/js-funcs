/**
 * Promise
 */
class _Promise_ {
  status: string = 'pending'// 等待状态
  value: any = null // 成功或失败的参数
  fulfilledCallbacks: any = [] // 成功的函数队列
  rejectedCallbacks: any = [] // 失败的函数队列
  constructor(executor: any) { // executor执行器
    const that = this
    function resolve(value: any) { // 成功的方法
      if (that.status === 'pending') {
        that.status = 'resolved'
        that.value = value
        that.fulfilledCallbacks.forEach((myFn: Function) => myFn(that.value)) //执行回调方法
      }
    }
    function reject(value: any) { //失败的方法
      if (that.status === 'pending') {
        that.status = 'rejected'
        that.value = value
        that.rejectedCallbacks.forEach((myFn: Function) => myFn(that.value)) //执行回调方法
      }
    }
    try {
      executor(resolve, reject)
    } catch (err) {
      reject(err)
    }
  }
  then(onFulfilled: any, onRejected: any) {
    if (this.status === 'pending') {
      // 等待状态，添加回调函数到成功的函数队列
      this.fulfilledCallbacks.push(() => {
        onFulfilled(this.value)
      })
      // 等待状态，添加回调函数到失败的函数队列
      this.rejectedCallbacks.push(() => {
        onRejected(this.value)
      })
    }
    if (this.status === 'resolved') { // 支持同步调用
      console.log('this', this)
      onFulfilled(this.value)
    }
    if (this.status === 'rejected') { // 支持同步调用
      onRejected(this.value)
    }
  }
}