'use strict'

const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin')
const PurifyCSSWebpackPlugin = require('purifycss-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const path = require('path')
const WebpackMd5Hash = require('webpack-md5-hash')

const config = require('./config.json')
const pkg = require('./package.json')

// const { HashedModuleIdsPlugin } = webpack

const {
  OccurrenceOrderPlugin,
  AggressiveMergingPlugin,
  CommonsChunkPlugin,
  UglifyJsPlugin } = webpack.optimize

function _isVendor (module) {
  return module.context && module.context.indexOf('node_modules') !== -1
}

module.exports = {
  devtool: 'source-map',
  entry: [
    'babel-polyfill',
    './src/app/index.prod.js'
  ],
  output: {
    path: path.resolve('src/www'),
    filename: 'assets/js/[name]-[chunkhash].js',
    chunkFilename: 'assets/js/[name]-[chunkhash].js'
  },
  resolve: {
    extensions: ['.scss', '.css', '.js'],
    modules: ['node_modules']
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
      'APP_VERSION': JSON.stringify(pkg.version)
    }),
    new HtmlWebpackPlugin(Object.assign({}, config, {
      template: path.resolve('index.ejs'),
      alwaysWriteToDisk: true,
      inject: false,
      hash: false,
      minify: {
        collapseWhitespace: true,
        decodeEntities: true,
        html5: true,
        processConditionalComments: true,
        removeAttributeQuotes: true,
        removeComments: true,
        removeEmptyAttributes: true,
        removeOptionalTags: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        removeTagWhitespace: true,
        sortAttributes: true,
        sortClassName: true,
        useShortDoctype: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      }
    })),
    new HtmlWebpackHarddiskPlugin(),
    // new AggressiveMergingPlugin(),
    new ExtractTextPlugin({
      allChunks: true,
      filename: 'assets/css/[name]-[chunkhash].css'
    }),
    new PurifyCSSWebpackPlugin({
      basePath: path.resolve('src/www'),
      resolveExtensions: ['.js'],
      purifyOptions: {
        minify: true,
        rejected: true
      }
    }),
    // optimizations
    new CommonsChunkPlugin({
      children: true,
      async: 'common',
      // filename: 'assets/js/vendor-[chunkhash].bundle.js',
      minChunks: 2
    }),
    new CommonsChunkPlugin({
      children: true,
      async: 'vendor',
      // filename: 'assets/js/vendor-[chunkhash].bundle.js',
      minChunks: function (module) {
        // this assumes your vendor imports exist in the node_modules directory
        return _isVendor(module)
      }
    }),
    new WebpackMd5Hash(),
    new OccurrenceOrderPlugin(),
    new UglifyJsPlugin({
      sourceMap: true,
      minimize: true,
      compress: { warnings: false, drop_console: true },
      comments: false
    })
  ],
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: ['babel-loader']
    }, {
      test: /\.(css|scss)$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          'css-loader?minimize&sourceMap',
          'sass-loader',
          'postcss-loader'
        ]
      })
    }]
  }
}
