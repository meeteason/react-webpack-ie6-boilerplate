process.env.NODE_ENV = 'dev'
const webpack = require('webpack'),
  path = require('path'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  ExtractTextPlugin = require('extract-text-webpack-plugin'),
  CleanWebpackPlugin = require('clean-webpack-plugin'),
  autoprefixer = require('autoprefixer'),
  es3ifyPlugin = require('es3ify-webpack-plugin'),
  merge = require('webpack-merge'),
  basewebpackconfig = require('./webpack.base.config'),
  webConfig = require('../web.config')

 const mergedConfig  = merge(basewebpackconfig, {
  
  plugins: [
    new es3ifyPlugin(),
    new ExtractTextPlugin('./css/[name].css'),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"dev"'
      }
    })
  ],
  devServer: webConfig.dev.devServer,
  devtool: 'source-map'
})

module.exports = mergedConfig
