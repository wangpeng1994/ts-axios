/**
 * 配置 React 组件测试工具库 Enzyme
 */
const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

Enzyme.configure({ adapter: new Adapter() });