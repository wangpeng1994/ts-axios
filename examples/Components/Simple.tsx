import React from 'react';
import axios from '../../lib';

export default function () {
  axios({
    method: 'get',
    url: '/simple/get',
    params: {
      a: 1,
      b: 2
    }
  });

  return <>
  <h3>base</h3>
  <pre><code>{`
  axios({
    method: 'get',
    url: '/simple/get',
    params: {
      a: 1,
      b: 2
    }
  });
  `}</code></pre>
  </>  
}