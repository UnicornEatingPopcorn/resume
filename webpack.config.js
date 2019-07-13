const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const BrotliPlugin = require('brotli-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: 'js/bundle.js',
  },
  devServer: {
    contentBase: path.join(__dirname, "docs"),
    port: 9999
  },
  module: {
    rules: [
      {
        test: /\.sass$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ]
      },
      { 
        test: /\.pug$/,
        use: ["pug-loader"]
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/bundle.css'
    }),
    new HtmlWebpackPlugin({
      template : 'src/index.pug',
      inject   : true
    }),
    new BrotliPlugin({
      asset: '[path].br[query]',
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.7
    })
  ]
};
