process.env.NODE_ENV = 'production'

const webpack = require('webpack'),
  path = require('path'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  ExtractTextPlugin = require('extract-text-webpack-plugin'),
  CleanWebpackPlugin = require('clean-webpack-plugin'),
  autoprefixer = require('autoprefixer'),
  es3ifyPlugin = require('es3ify-webpack-plugin'),
  merge = require('webpack-merge'),
  basewebpackconfig = require('./webpack.base.config'),
  webConfig = require('../web.config'),
  utils = require('./utils')

const assetsPath = utils.assetsPath


const mergedConfig = merge(basewebpackconfig, {
  module: {
    postLoaders: []
  },
  output: {
    filename: assetsPath('js/[name].js')
  },
  plugins: [
    new es3ifyPlugin(),
    new ExtractTextPlugin(assetsPath('./css/[name].css')),
    new webpack.optimize.UglifyJsPlugin({
      mangle: false,
      output: { keep_quoted_props: true },
      compress: { properties: false, drop_console: true },
      comments: false
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    })
  ]
})
mergedConfig.module.loaders = [
  {
    test: /\.(js|jsx)(\?.*$|$)/,
    exclude: /node_modules/,
    loader: 'babel-loader'
  },
  {
    test: /\.(png|jpg|gif|bmp|svg|swf)(\?.*$|$)/,
    loader: 'url?limit=2048&name=' + assetsPath('img/[name].[ext]')
  },
  // { test: /\.css$/, loader: 'style!css' },
  {
    test: /\.css$/,
    loader: ExtractTextPlugin.extract(
      'style',
      'css?modules=true&sourceMap=false!postcss'
    )
  },
  {
    test: /\.less$/,
    loader: ExtractTextPlugin.extract(
      'style',
      'css?modules=true&sourceMap=false!postcss!less',
      { publicPath: './' }
    )
  }
]
// console.log(mergedConfig)
module.exports = mergedConfig
