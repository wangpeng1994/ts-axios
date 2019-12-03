import React from 'react';
import axios from '../../lib';


console.log(axios)


axios({
  method: 'get',
  url: '/simple/get',
  params: {
    a: 1,
    b: 2
  }
});

export default function () {

  return (<div>
    example1
  </div>);
}