'use strict'

const BrowserSyncPlugin = require('browser-sync-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const autoprefixer = require('autoprefixer')
const webpack = require('webpack')
const path = require('path')

module.exports = {
  devtool: 'eval',
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/app/index.js'
  ],
  output: {
    path: path.resolve('src/www/assets/js'),
    filename: 'bundle.js',
    publicPath: '/assets/js'
  },
  resolve: {
    extensions: ['', '.scss', '.css', '.js', '.json'],
    modulesDirectories: ['node_modules']
  },
  plugins: [
    new ExtractTextPlugin('css/bundle.css', { allChunks: true }),
    new webpack.HotModuleReplacementPlugin(),
    new BrowserSyncPlugin(
      // BrowserSync options
      {
        // browse to http://localhost:3000/ during development
        host: 'localhost',
        port: 3001,
        // proxy the Webpack Dev Server endpoint
        // (which should be serving on http://localhost:3100/)
        // through BrowserSync
        proxy: 'http://localhost:3000',
        open: false
      },
      // plugin options
      {
        // prevent BrowserSync from reloading the page
        // and let Webpack Dev Server take care of this
        reload: false
      }
    )
  ],
  module: {
    loaders: [{
      test: /(\.js|\.jsx)$/,
      exclude: /node_modules/,
      loaders: ['babel'],
      include: path.resolve('src/app')
    }, {
      test: /(\.scss|\.css)$/,
      loader: ExtractTextPlugin.extract('style', 'css?-minimize&sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass')
    }]
  },
  postcss: [autoprefixer]
}
