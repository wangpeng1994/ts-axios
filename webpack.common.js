const path = require('path')

module.exports = {
  entry: {
    index: './lib/index.ts'
  },
  output: {
    path: path.resolve(__dirname, 'dist/lib'),
    library: 'ts-axios',
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/, 
        use: 'awesome-typescript-loader'
      },
      {
        test: /\.svg$/,
        use: 'svg-sprite-loader'
        
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader', // creates style nodes from JS strings
          'css-loader', // translates CSS into CommonJS
          'sass-loader' // compiles Sass to CSS, using Node Sass by default
        ]
      }
    ]
  }
}