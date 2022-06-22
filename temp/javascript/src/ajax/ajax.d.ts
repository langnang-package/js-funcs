export declare class ajaxOption {
  // 请求的实现方式：native, promise
  mode: String
  // 发送请求的url
  url: String
  // http连接的方式，包括但不限于POST和GET两种方式
  method: String
  // 是否为异步，true为异步，false为同步
  async: Boolean
  // 发送的参数，格式为对象类型
  data: any
  // ajax成功的回调函数
  success: Function
  // ajax失败的回调函数
  error: Function
}