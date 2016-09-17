'use strict'

const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const autoprefixer = require('autoprefixer')
const config = require('./config.json')
const pkg = require('./package.json')
const webpack = require('webpack')
const path = require('path')

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: [
    './src/app/index.js'
  ],
  output: {
    path: path.resolve('src/www'),
    filename: 'assets/js/bundle.js'
  },
  resolve: {
    extensions: ['', '.scss', '.css', '.js', '.json'],
    modulesDirectories: ['node_modules']
  },
  plugins: [
    new HtmlWebpackPlugin(Object.assign({}, config, {
      template: require('html-webpack-template'),
      alwaysWriteToDisk: true,
      hash: true,
      inject: true,
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
        useShortDoctype: true
      }
    })),
    new HtmlWebpackHarddiskPlugin(),
    new ExtractTextPlugin('assets/css/bundle.css', { allChunks: true }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'assets/js/vendor.bundle.js',
      minChunks: Infinity
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
      VERSION: JSON.stringify(pkg.version)
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      comments: false
    })
  ],
  module: {
    loaders: [{
      test: /(\.js|\.jsx)$/,
      exclude: /node_modules/,
      loaders: ['babel'],
      include: path.resolve('src/app')
    }, {
      test: /(\.scss|\.css)$/,
      loader: ExtractTextPlugin.extract('style', 'css?minimize&sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass!shorthand')
    }]
  },
  postcss: [autoprefixer]
}
