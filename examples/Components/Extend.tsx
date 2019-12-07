import React from 'react';
import axios from '../../lib';
import { AxiosError } from '../../lib/helpers/error';
import { StringLiteral, tsMethodSignature } from '@babel/types';

export default function () {

  // 直接调用，内部其实调用了 axios.request()
  axios({
    url: '/extend/post',
    method: 'post',
    data: {
      msg: 'hello'
    }
  });

  axios.request({
    url: '/extend/post',
    method: 'post',
    data: {
      msg: 'world'
    }
  });

  axios.get('/extend/get');

  axios.delete('/extend/delete');

  axios.head('/extend/head');

  axios.options('extend/options');

  axios.post('/extend/post', { msg: 'post' });

  axios.put('/extend/put', { msg: 'put' });

  axios.patch('/extend/patch', { msg: 'patch' });


  /**
   * 验证函数重载功能
   */
  axios({
    url: '/extend/post',
    method: 'post',
    data: {
      msg: 'hello'
    }
  });

  axios('extend/post', {
    method: 'post',
    data: {
      msg: 'world'
    }
  });


  /**
   * 响应数据支持泛型
   */

   // 优先定义好接口返回的数据类型
  interface ResponseData<T = any> {
    code: number;
    result: T;
    message: string;
  }

  interface User {
    name: string;
    age: number;
  }

  function getUser<T>() {
    return axios<ResponseData<T>>('/extend/user')
      .then(res => res.data) // 这里成功推断出 data 就是 ResponseData<User>
      .catch(err => console.error(err));
  }

  async function test() {
    const user = await getUser<User>();
    if (user) {
      // 然后获取的到的数据，就应该会符合当时定义的类型
      console.log(user.result.name);
    }
  }

  test();

  return <>
    <h3>extend</h3>
    <pre><code>{`

  `}</code></pre>
  </>
}
