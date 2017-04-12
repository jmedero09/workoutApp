const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: ['webpack-hot-middleware/client', './app/index'],
  output: {
    path: path.join(__dirname, './public'),
    filename: 'bundle.js',
    publicPath: './public'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        include: path.resolve(__dirname, './app'),
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.css?$/,
        loaders: ['style', 'raw'],
        include: __dirname
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
