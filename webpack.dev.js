const common = require('./webpack.common');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = Object.assign({}, common, {
  mode: 'development',
  entry: {
    example: './example.tsx'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'ts-axios演示',
      template: 'example.html'
    })
  ],
})