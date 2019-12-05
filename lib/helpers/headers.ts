import { isPlainObject } from './util';


function normalizeHeaderName(headers: any, normalizedName: string): void {
  if (!headers) {
    return;
  }
  Object.keys(headers).forEach(name => {
    // 头部字段名本身不相等，但双双转为大写后相等，则实际上就是相等
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = headers[name];
      delete headers[name];
    }
  })
}

export function processHeaders(headers: any, data: any): any {
  normalizeHeaderName(headers, 'Content-Type');  // 目前只规范化 Content-Type 字段大小写

  // 传入的 data 为 plain object，要添加 Content-Type: application/json
  if (isPlainObject(data)) {
    if (headers && !headers['Content-Type']) {
      headers['Content-Type'] = 'application/json;charset=utf-8';
    }
  }

  // 其它请求头不作处理，保持原样
  return headers;
}