/**
 * 推送 ci 时才需要详细的覆盖率报告，便于在线展示或分析
 */

const base = require('./jest.config');

module.exports = Object.assign({}, base, {
  reporters: ['jest-junit'], // junit用来生成测试报告
  // 生成覆盖率报告
  collectCoverage: true,
  collectCoverageFrom: ['lib/**/*.{js,jsx,ts,tsx}', '!**/node_modules/**'],
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov']
});