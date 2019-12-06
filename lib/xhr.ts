import { AxiosResponse } from './types/index';
import { AxiosRequestConfig, AxiosPromise } from './types';
import { parseHeaders } from './helpers/headers';


export default function xhr(config: AxiosRequestConfig): AxiosPromise {
  return new Promise(resolve => {
    // XMLHttpRequest.send() 方法接受一个可选的参数，其作为请求主体,
    // 如果请求方法是 GET 或者 HEAD，则应将请求主体设置为 null
    const { data = null, url, method = 'get', headers, responseType } = config;

    const request = new XMLHttpRequest();
    
    // responseType 属性指定了响应数据的类型，合理设置后可以从请求实例的响应中拿到合理解析后的数据
    // 默认会被当做 'text' 文本来解析收到的响应数据
    if (responseType) {
      request.responseType = responseType;
    }

    request.onreadystatechange = function () {
      if (request.readyState !== 4) {
        return;
      }
      const responseHeaders = parseHeaders(request.getAllResponseHeaders());
      const responseData = responseType !== 'text'
        ? request.response
        : request.responseText;
      const response: AxiosResponse = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config,
        request
      };
      resolve(response);
    }

    request.open(method.toUpperCase(), url, true);

    Object.keys(headers).forEach(name => {
      // 传入的 data 为空时，为请求 header 设置 Content-Type 没意义
      if (data === null && name.toLowerCase() === 'content-type') {
        delete headers[name];
      }
      request.setRequestHeader(name, headers[name]);
    });

    request.send(data);
  });
}
