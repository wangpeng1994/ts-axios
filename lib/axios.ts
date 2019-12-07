import { AxiosInstance } from './types';
import Axios from './core/Axios';
import { extend } from './helpers/util';

function createInstance(): AxiosInstance {
  const context = new Axios();
  // instance 作为该混合对象的实例，本身是一个方法
  const instance = Axios.prototype.request.bind(context);
  // instance 同时还有 Axios 实例上的方法
  extend(instance, context);

  return instance as AxiosInstance;
}

const axios = createInstance();

// 现在该混合对象可以直接作为函数调用，也可以作为对象来调用其它预定义的方法，比如 axios.get()
export default axios;
