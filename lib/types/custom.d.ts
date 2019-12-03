/**
 * 希望 svg 具有导出功能，而不仅仅是引入页面
 */
// TODO: 有了 importIcons 动态导入所有 svg 的功能，该声明可以忽略
declare module '*.svg' {
  const content: any;
  export default content;
}