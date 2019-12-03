/**
 * 解决 props 中多个 className 传递时的拼接问题
 */

function classes(...names: (string | undefined)[]) {
  return names.filter(Boolean).join(' ');
}

export default classes;