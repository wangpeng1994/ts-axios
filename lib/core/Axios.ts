import { AxiosRequestConfig, AxiosPromise, Method } from './../types/index';
import dispatchRequest from './dispatchRequest';

export default class Axios {
  request(url: any, config?: any): AxiosPromise {
    // 实现重载
    if (typeof url === 'string') {
      if (!config) { // 只传 url 没传 config 时， method 默认是 'get'
        config = {};
      }
      config.url = url;
    } else {
      config = url // url 参数不是 string，说明其实是传递了 config 对象
    }
    return dispatchRequest(config);
  }

  get(url: string, config?: AxiosRequestConfig): AxiosPromise {
    return this._requestMethodWithoutData('get', url, config);
  }

  delete(url: string, config?: AxiosRequestConfig): AxiosPromise {
    return this._requestMethodWithoutData('delete', url, config);
  }

  head(url: string, config?: AxiosRequestConfig): AxiosPromise {
    return this._requestMethodWithoutData('head', url, config);
  }

  options(url: string, config?: AxiosRequestConfig): AxiosPromise {
    return this._requestMethodWithoutData('options', url, config);
  }

  post(url: string, data?: any, config?: AxiosRequestConfig):  AxiosPromise {
    return this._requestMethodWithData('post', url, data, config);
  }

  put(url: string, data?: any, config?: AxiosRequestConfig):  AxiosPromise {
    return this._requestMethodWithData('put', url, data, config);
  }

  patch(url: string, data?: any, config?: AxiosRequestConfig):  AxiosPromise {
    return this._requestMethodWithData('patch', url, data, config);
  }

  _requestMethodWithoutData(method: Method, url: string, config?: AxiosRequestConfig) {
    return this.request(Object.assign(config || {}, {
      method,
      url
    }));
  }

  _requestMethodWithData(method: Method, url: string, data?: any, config?: AxiosRequestConfig) {
    return this.request(Object.assign(config || {}, {
      method,
      url,
      data
    }));
  }
}
