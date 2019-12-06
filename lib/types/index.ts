export type Method = 'get' | 'GET'
  | 'post' | 'POST'
  | 'delete' | 'DELETE'
  | 'options' | 'OPTIONS'
  | 'head' | 'HEAD'
  | 'put' | 'PUT'
  | 'patch' | 'PATCH';

export interface AxiosRequestConfig {
  url: string;
  method?: Method;
  data?: any;
  params?: any;
  headers?: any;
  // "" | "arraybuffer" | "blob" | "document" | "json" | "text";
  responseType?: XMLHttpRequestResponseType;
  timeout?: number
}

export interface AxiosResponse {
  data: any;                  // 服务器端返回的数据
  status: number;             // HTTP 状态码
  statusText: string;         // 状态消息
  headers: any;               // 响应头
  config: AxiosRequestConfig; // 请求的配置对象
  request: any;               // 请求的 XMLHttpRequest 对象实例
}

// 当 axios 返回的是 AxiosPromise 类型，那么 resolve 函数中的参数就是一个 AxiosResponse 类型。
export interface AxiosPromise extends Promise<AxiosResponse> {
}

export interface AxiosError extends Error {
  config: AxiosRequestConfig;
  code?: string | null;
  request?: any;
  response?: AxiosResponse;
  isAxiosError: boolean;
}
