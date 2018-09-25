const webpack = require('webpack');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        exclude: [ /node_modules/]
      },
      {
        test: /\.scss$/,
        use: [ 'style-loader', 'css-loader', 'sass-loader' ],
        exclude: [ /node_modules/]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    extensions: [ '.js', '.jsx' ]
  },
  devServer: {
    hot: true,
    contentBase: path.join(__dirname, 'src'),
    watchContentBase: true,
    overlay: true,
    watchOptions: {
      poll: true,
      ignored: /node_modules/
    }
  }
}
