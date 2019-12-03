/**
 * jest.config.js 是官方默认的命名方式
 * jest 运行时会优先尝试读取根目录下此文件中的配置
 * 否则会遵循默认的缺省配置
 */
module.exports = {
  'verbose': true,
  reporters: ['default'], 
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
    '^.+\\.(ts|tsx)$': 'ts-jest'
  },
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/test/__mocks__/file-mock.js',
    '\\.(css|less|sass|scss)$': '<rootDir>/test/__mocks__/object-mock.js'
  },
  setupFilesAfterEnv: ['<rootDir>test/setupTests.js']
};