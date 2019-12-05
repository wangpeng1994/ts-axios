import { AxiosRequestConfig } from './types';

export default function xhr(config: AxiosRequestConfig): void {
  // XMLHttpRequest.send() 方法接受一个可选的参数，其作为请求主体,
  // 如果请求方法是 GET 或者 HEAD，则应将请求主体设置为 null
  const { data = null, url, method = 'get', headers } = config;

  const request = new XMLHttpRequest();

  request.open(method.toUpperCase(), url, true);

  Object.keys(headers).forEach(name => {
    // 传入的 data 为空时，为请求 header 配置 Content-Type 没意义
    if (data === null && name.toLowerCase() === 'content-type') {
      delete headers[name];
    }
    request.setRequestHeader(name, headers[name]);
  });

  request.send(data);
}
