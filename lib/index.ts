import { AxiosRequestConfig } from './types';
import xhr from './xhr';
import { buildURL } from './helpers/url';

function axios(config: AxiosRequestConfig): void {
  processConfig(config);
  xhr(config);
}

// 目前是为了转化 URL，未来可能还要对其它参数做处理
function processConfig(config: AxiosRequestConfig): void {
  config.url = transformURL(config);
}

function transformURL(config: AxiosRequestConfig): string {
  const { url, params } = config;
  return buildURL(url, params);
}

export default axios;