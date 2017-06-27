'use strict'

const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin')
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')
const DashboardPlugin = require('webpack-dashboard/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const path = require('path')

const pkg = require('./package.json')
const config = require('./config.json')
const {HotModuleReplacementPlugin, NamedModulesPlugin} = webpack

module.exports = {
  performance: {
    hints: false
  },
  devtool: 'eval',
  cache: true,
  entry: [
    // activate HMR for React
    'react-hot-loader/patch',
    // bundle the client for webpack-dev-server
    // and connect to the provided endpoint
    'webpack-dev-server/client?http://0.0.0.0:3000',
    // bundle the client for hot reloading
    // only- means to only hot reload for successful updates
    'webpack/hot/only-dev-server',
    // the entry point of our app
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
  module: {
    rules: [{
      test: /(\.js|\.jsx)$/,
      exclude: /node_modules/,
      use: ['babel-loader?cacheDirectory']
    }, {
      test: /(\.scss|\.css)$/,
      use: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader',
        options: {
          importLoaders: 2
        }
      }, {
        loader: 'postcss-loader',
        options: {
          parser: 'postcss-scss'
        }
      }, {
        loader: 'sass-loader',
        options: {
          data: '@import "index.scss";',
          includePaths: [
            path.resolve('src/app')
          ]
        }
      }]
    }]
  },
  plugins: [
    new HotModuleReplacementPlugin(),
    new DashboardPlugin(),
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
  ]
}
