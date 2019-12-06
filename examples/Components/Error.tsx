import React from 'react';
import axios from '../../lib';
import { AxiosError } from '../../lib/helpers/error';

export default function () {

  // 写错接口地址，演示 404
  axios({
    method: 'get',
    url: '/error/get1'
  }).then(res => {
    console.log(res);
  }).catch(e => {
    console.log(e);
  });

  // 有一定几率 500
  axios({
    method: 'get',
    url: '/error/get'
  }).then(res => {
    console.log(res);
  }).catch(e => {
    console.log(e);
  });

  // 不会超时
  // axios({
  //   method: 'get',
  //   url: '/error/timeout',
  //   timeout: 5000
  // }).then(res => {
  //   console.log(res);
  // }).catch(e => {
  //   console.log(e);
  // });

  // 模拟请求超时 （后台大约会需要3秒才能返回）
  axios({
    method: 'get',
    url: '/error/timeout',
    timeout: 2000
  }).then(res => {
    console.log(res);
  }).catch((e: AxiosError) => {
    console.log(e.message);
    console.log(e.config);
    console.log(e.code);
    console.log(e.request);
  });

  return <>
    <h3>error</h3>
    <pre><code>{`

  `}</code></pre>
  </>
}