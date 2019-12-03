import renderer from 'react-test-renderer'; // 通过安装 jest for react-app 时，安装的虚拟渲染器
import React from 'react';
import Button from '../button';

describe('button', () => {
  it('是个 div', () => {
    const json =  renderer.create(<Button />).toJSON();
    expect(json).toMatchSnapshot();
  });
});