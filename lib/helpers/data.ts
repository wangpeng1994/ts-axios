import { isPlainObject } from './util';

export function transformRequest(data: any): any {
  // A Document, in which case it is serialized before being sent.
  // A BodyInit, which as per the Fetch spec can be a Blob, BufferSource, FormData, URLSearchParams, ReadableStream, or USVString object.
 
  // 普通对象（plain object）要转化成 json 字符串（字符串属于 USVString 对象）后方可发送
  if (isPlainObject(data)) {
    return JSON.stringify(data);
  }
  // 其余符合的类型实例可以直接发送
  return data;
}
