import { isDate, isPlainObject } from './util';

function encode(val: string): string {
  return encodeURIComponent(val)
    .replace(/%40/g, '@')
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',')
    .replace(/%20/g, '+')
    .replace(/%5B/gi, '[')
    .replace(/%5D/gi, ']');
}

export function buildURL(url: string, params?: any): string {
  if (!params) {
    return url;
  }

  const parts: string[] = [];

  Object.keys(params).forEach(key => {
    let val = params[key];
    if (val === null || typeof val === 'undefined') {
      return;
    }
    let values = [];
    if (Array.isArray(val)) {
      values = val;
      key += '[]';
    } else { // 不是数组也放在数组里，长度为1
      values = [val];
    }
    values.forEach(val => {
      if (isDate(val)) {
        val = val.toISOString();
      } else if (isPlainObject(val)) {
        val = JSON.stringify(val);
      }
      parts.push(`${encode(key)}=${encode(val)}`);
    })
  })

  // 如果 params 对象中的 value(s) 要么是 undefined、null，要么是空数组，
  // 则此处 parts 是空数组，则最后 join 结果就是 '' 空字符串
  let serializedParams = parts.join('&');

  // 得到有效的序列化后的键值对字符串，还需要截除原始 url 中的哈希部分
  if (serializedParams) {
    const hashIndex = url.indexOf('#');
    if (hashIndex !== -1) {
      url = url.slice(0, hashIndex);
    }
    // 若原始 url 已包含部分参数，则继续用 & 拼接
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
}