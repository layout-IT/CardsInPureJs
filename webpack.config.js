/* eslint no-undef: "off" */
const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const cssLoaderWithModules = {
  loader: 'css-loader',
  options: {
    modules: {
      localIdentName: '[hash:base64:5]',
    },
  },
}

module.exports = env => {
  return {
    mode: env.mode ?? 'production',
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: '[name].[contenthash].js',
      clean: true,
    },
    devtool: 'source-map',
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'public', 'index.html'),
      }),
      new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css',
      }),
    ],
    module: {
      rules: [
        {
          test: /\.js?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.css$/i,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
          ],
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    devServer: {
      port: 3000,
      static: {
        directory: path.join(__dirname, 'build'),
      },
      historyApiFallback: true,
      open: true,
      hot: true,
      liveReload: true,
    },
    performance: {
      hints: false,
    },
  }
}
