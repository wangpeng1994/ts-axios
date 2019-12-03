import React from 'react';
import renderer from 'react-test-renderer'; // 通过安装 jest for react-app 时，安装的虚拟渲染器
import { mount } from 'enzyme';
import Icon from '../icon';

describe('icon', () => {
  it('render successfully', () => {
    const json = renderer.create(<Icon name="qq" />).toJSON();
    expect(json).toMatchSnapshot(); // 明确知道某次快照是对的才更新快照 yarn test -u，用作下一次 match 的依据
  });
  it('onClick', () => {
    const fn = jest.fn();
    const wrapper  = mount(<Icon name="qq" onClick={fn} />); // dom 事件是同步调用的，所以 ok
    wrapper.find('svg').simulate('click');
    expect(fn).toBeCalled();
  });
});