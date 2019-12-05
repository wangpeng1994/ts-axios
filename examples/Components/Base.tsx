import React from 'react';
import axios from '../../lib';

export default function () {

  // data 是 plain object，所以给它添加 Content-Type
  // axios({
  //   method: 'post',
  //   url: '/base/post',
  //   data: {
  //     a: 1,
  //     b: 2
  //   }
  // })

  const arr = new Int32Array([14, 18]);

  axios({
    method: 'post',
    url: '/base/buffer',
    data: arr,
    responseType: 'arraybuffer'
  }).then(res => {
    console.log(res);
  });

  // 设置了 content-type 会被转为 Content-Type，值保持与用户传递的一致
  // axios({
  //   method: 'post',
  //   url: '/base/post',
  //   headers: {
  //     'content-type': 'application/json',
  //     'Accept': 'application/json, text/plain, */*'
  //   },
  //   data: {
  //     a: 3,
  //     b: 4
  //   }
  // })

  /**
   * URLSearchParams 是 ajax 支持的类型，所以浏览器自动添加了 Content-Type: application/x-www-form-urlencoded;charset=UTF-8
   * 这不是我们写的功能，这是 ajax 和浏览器之间的默认策略
   */
  const paramString = 'q=URLUtils.searchParams&topic=api';
  const searchParams = new URLSearchParams(paramString);

  axios({
    method: 'post',
    url: 'base/post',
    data: searchParams
  })

  /**
   * promise 化后的调用
   */
  axios({
    method: 'post',
    url: '/base/post',
    data: {
      a: 5,
      b: 6
    }
  }).then(res => {
    console.log(res);
  });

  /**
   * 配置了 responseType
   */
  axios({
    method: 'post',
    url: '/base/post',
    responseType: 'json',
    data: {
      a: 7,
      b: 8
    }
  }).then(res => {
    console.log(res);
  });


  return <>
    <h3>base</h3>
    <pre><code>{`

  `}</code></pre>
  </>
}