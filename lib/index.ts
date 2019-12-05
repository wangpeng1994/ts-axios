import { AxiosRequestConfig } from './types';
import xhr from './xhr';
import { buildURL } from './helpers/url';
import { transformRequest } from './helpers/data';

function axios(config: AxiosRequestConfig): void {
  processConfig(config);
  xhr(config);
}

// 目前是为了转化 URL，未来可能还要对其它参数做处理
function processConfig(config: AxiosRequestConfig): void {
  config.url = transformURL(config);
  config.data = transformRequestData(config);
}

function transformURL(config: AxiosRequestConfig): string {
  const { url, params } = config;
  return buildURL(url, params);
}

function transformRequestData(config: AxiosRequestConfig): any {
  return transformRequest(config.data);
}

export default axios;
