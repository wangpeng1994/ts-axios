import React from 'react';

function Button() {
  return (
    // React.createElement('div', {
    //   style: {
    //     color: 'red'
    //   },
    //   className: 'button'
    // }, '点我')
    // 和下面等价
    <div className="button" style={{ color: 'red' }}>
      点我啊
    </div>

  );
}

export default Button;