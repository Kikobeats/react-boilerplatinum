'use strict'

const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin')
const BrowserSyncPlugin = require('browser-sync-webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const path = require('path')

const pkg = require('./package.json')
const config = require('./config.json')
const { HotModuleReplacementPlugin, NamedModulesPlugin} = webpack

module.exports = {
  performance: {
    hints: false
  },
  devtool: 'eval',
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/app/index.js'
  ],
  output: {
    path: path.resolve('src/www'),
    filename: 'assets/js/bundle.js'
  },
  resolve: {
    extensions: ['.scss', '.css', '.js', '.json'],
    modules: ['node_modules']
  },
  plugins: [
    new HotModuleReplacementPlugin(),
    new NamedModulesPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
      'APP_VERSION': JSON.stringify(pkg.version)
    }),
    new HtmlWebpackPlugin(Object.assign({}, config, {
      template: path.resolve('index.ejs'),
      alwaysWriteToDisk: true,
      inject: false
    })),
    new HtmlWebpackHarddiskPlugin(),
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
    rules: [{
      test: /(\.js|\.jsx)$/,
      exclude: /node_modules/,
      loader: 'babel-loader?cacheDirectory',
      include: path.resolve('src/app')
    }, {
      test: /(\.scss|\.css)$/,
      loader: [
        'style-loader',
        'css-loader',
        'sass-loader',
        'postcss-loader'
      ]
    }]
  }
}
