import React from 'react';
import axios from '../../lib';
import { AxiosError } from '../../lib/helpers/error';

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

  


  return <>
    <h3>extend</h3>
    <pre><code>{`

  `}</code></pre>
  </>
}
