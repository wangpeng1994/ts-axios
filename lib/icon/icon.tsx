import React from 'react';
import './importIcons';
import './icon.scss';
import classes from '../helper/classes';

interface IconProps extends React.SVGAttributes<SVGElement> { // 在最终元素上才会触发事件，之前只是传递
  name: string; // 继承svg后自定义的属性
}

// 声明函数组件接收的 props 的类型
const Icon: React.FunctionComponent<IconProps> =
  ({ className, name, ...restProps }) => {
    return (
      <svg className={classes('rui-icon', className)}
        {...restProps}
      >
        <use xlinkHref={`#${name}`} />
      </svg>
    );
  }

export default Icon;