/**
 * Ajax的封装
 * @category Function
 * @param {Object} option 配置参数
 * @return {Function} 回调函数
 */
class RequestOptions {
  mode: String = 'native';// 请求的实现方式：native, promise
  url: String = '';// 发送请求的url
  method: String = 'GET';// http连接的方式，包括但不限于POST和GET两种方式
  async: Boolean = true;// 是否为异步，true为异步，false为同步
  data: any;// 发送的参数，格式为对象类型
  success: Function;// ajax成功的回调函数
  error: Function;// ajax失败的回调函数
};
export const ajax = (option: RequestOptions) => {
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
  let xmlHttp: any = null;
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
  map.set("native", function (option: RequestOptions) {
    // 初始化参数
    option.success = option.success || function (res: any) { };
    option.error = option.error || function (err: any) { };
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

    }
  })
  map.set("promise", function () {
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
  })
  if (!map.has(mode)) mode = "native";
  return map.get(mode)(option);
};
