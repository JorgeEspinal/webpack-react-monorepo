const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

let mode = 'development';

if (process.env.NODE_ENV === 'production') mode = 'production';

module.exports = {
  entry: path.resolve('./src/index.jsx'),
  mode: mode,
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    clean: true,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      'normal-user': path.resolve(
        __dirname,
        '../packages/dashboards/normalUser/index.jsx'
      ),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
    }),
    new MiniCssExtractPlugin({}),
    new webpack.ProvidePlugin({
      React: 'react',
    }),
  ],
  devServer: {
    port: 9000,
    open: true,
    hot: true,
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, 'src'),
        exclude: path.resolve(__dirname, 'node_modules'),
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
            },
          },
        ],
      },
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, '../packages'),
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
            },
          },
        ],
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
};
