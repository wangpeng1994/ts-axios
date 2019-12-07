export type Method = 'get' | 'GET'
  | 'post' | 'POST'
  | 'delete' | 'DELETE'
  | 'options' | 'OPTIONS'
  | 'head' | 'HEAD'
  | 'put' | 'PUT'
  | 'patch' | 'PATCH';

export interface AxiosRequestConfig {
  url?: string;
  method?: Method;
  data?: any;
  params?: any;
  headers?: any;
  // "" | "arraybuffer" | "blob" | "document" | "json" | "text";
  responseType?: XMLHttpRequestResponseType;
  timeout?: number
}

export interface AxiosResponse<T = any> {
  data: T;                    // 服务器端返回的数据
  status: number;             // HTTP 状态码
  statusText: string;         // 状态消息
  headers: any;               // 响应头
  config: AxiosRequestConfig; // 请求的配置对象
  request: any;               // 请求的 XMLHttpRequest 对象实例
}

// 当 axios 返回的是 AxiosPromise 类型，那么 resolve 函数中的参数就是一个 AxiosResponse 类型。
export interface AxiosPromise<T = any> extends Promise<AxiosResponse<T>> {
}

export interface AxiosError extends Error {
  config: AxiosRequestConfig;
  code?: string | null;
  request?: any;
  response?: AxiosResponse;
  isAxiosError: boolean;
}

// 如果使用了这些方法，就不必在 config 中指定 url、method、data 这些属性了
export interface Axios {
  request<T = any>(config: AxiosRequestConfig): AxiosPromise<T>;

  get<T = any>(url: string, config?: AxiosRequestConfig): AxiosPromise<T>;

  delete<T = any>(url: string, config?: AxiosRequestConfig): AxiosPromise<T>;

  head<T = any>(url: string, config?: AxiosRequestConfig): AxiosPromise<T>;

  options<T = any>(url: string, config?: AxiosRequestConfig): AxiosPromise<T>;

  post<T = any>(url: string, data?: any, cofnig?: AxiosRequestConfig): AxiosPromise<T>;

  put<T = any>(url: string, data?: any, cofnig?: AxiosRequestConfig): AxiosPromise<T>;

  patch<T = any>(url: string, data?: any, cofnig?: AxiosRequestConfig): AxiosPromise<T>;
}

// 这是个混合类型，本身是一个函数类型，同时又有 Axios 类型中的方法
export interface AxiosInstance extends Axios {
  <T = any>(config: AxiosRequestConfig): AxiosPromise<T>;

  // 支持函数重载
  <T = any>(url: string, config?: AxiosRequestConfig): AxiosPromise<T>;
}