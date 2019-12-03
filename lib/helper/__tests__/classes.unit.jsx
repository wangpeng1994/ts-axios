import classes from '../classes';

describe('classes', () => {
  it('接受 1 个 className', () => {
    const result = classes('a');
    expect(result).toEqual('a');
  });
  it('接受 2 个 className', () => {
    const result = classes('a', 'b');
    expect(result).toEqual('a b');
  });
  it('接受 undefined 结果中不含 undefined', () => {
    const result = classes('a', undefined);
    expect(result).toEqual('a');
  });
  it('接受了奇怪的值应该被过滤', () => {
    const result = classes('a', '中文', false, NaN, null);
    expect(result).toEqual('a 中文');
  });
  it('接受 0 个参数 结果应为空字符串', () => {
    const result = classes();
    expect(result).toEqual('');
  });
});