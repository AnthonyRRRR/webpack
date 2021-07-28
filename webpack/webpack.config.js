const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: [
    './src/app.js',
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'js/bundle.js',
    assetModuleFilename: 'images/[name][ext][query]'
  },
  devServer: {
    contentBase: path.join(__dirname, 'build'),
    compress: true,
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/main.css'
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      minify: false
    })
  ]
}