import { AxiosResponse } from '../types';
import { AxiosRequestConfig, AxiosPromise } from '../types';
import { parseHeaders } from '../helpers/headers';
import { createError } from '../helpers/error';


export default function xhr(config: AxiosRequestConfig): AxiosPromise {
  return new Promise((resolve, reject) => {
    // XMLHttpRequest.send() 方法接受一个可选的参数，其作为请求主体,
    // 如果请求方法是 GET 或者 HEAD，则应将请求主体设置为 null
    const { data = null, url, method = 'get', headers, responseType, timeout } = config;

    const request = new XMLHttpRequest();

    // responseType 属性指定了响应数据的类型，合理设置后可以从请求实例的响应中拿到合理解析后的数据
    // 默认会被当做 'text' 文本来解析收到的响应数据
    if (responseType) {
      request.responseType = responseType;
    }

    if (timeout) {
      request.timeout = timeout;
    }

    request.onreadystatechange = function handleLoad() {
      if (request.readyState !== 4) {
        return;
      }

      // 网络异常
      if (request.status === 0) {
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
      handleResponse(response);
    }

    // 网络异常
    request.onerror = function handleError() {
      reject(createError('Network  Error', config, null, request));
    }

    request.ontimeout = function handleTimeout() {
      reject(createError(`Timeout of ${timeout}ms exceeded`, config, 'ECONNABORTED', request));
    }

    request.open(method.toUpperCase(), url!, true);

    Object.keys(headers).forEach(name => {
      // 传入的 data 为空时，为请求 header 设置 Content-Type 没意义
      if (data === null && name.toLowerCase() === 'content-type') {
        // delete headers[name];
      }
      request.setRequestHeader(name, headers[name]);
    });

    request.send(data);

    function handleResponse(response: AxiosResponse): void {
      const status = response.status;
      // 处理非 200 状态码
      if (status >= 200 && status < 300) {
        resolve(response);
      } else {
        reject(createError(`Request failed with  status code ${status}`, config, null, request, response));
      }
    }
  });
}
