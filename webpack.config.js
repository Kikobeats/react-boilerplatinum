'use strict'

const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin')
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const PreloadWebpackPlugin = require('preload-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const PurifyCSSPlugin = require('purifycss-webpack')
const OfflinePlugin = require('offline-plugin')
const webpack = require('webpack')
const glob = require('glob')
const path = require('path')

const config = require('./config.json')
const pkg = require('./package.json')

const { DefinePlugin, HashedModuleIdsPlugin } = webpack

const {
  OccurrenceOrderPlugin,
  AggressiveMergingPlugin,
  CommonsChunkPlugin,
  UglifyJsPlugin } = webpack.optimize

module.exports = {
  devtool: 'source-map',
  entry: [
    './src/app/index.js'
  ],
  output: {
    path: path.resolve('src/www'),
    filename: 'assets/js/bundle.js'
  },
  resolve: {
    extensions: ['.scss', '.css', '.js'],
    modules: ['node_modules']
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: ['babel-loader']
    }, {
      test: /\.(css|scss)$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [{
          loader: 'css-loader',
          options: {
            minimize: true,
            importLoaders: 2
          }
        }, {
          loader: 'postcss-loader',
          options: {
            parser: require('postcss-scss'),
            sourceMap: true
          }
        }, {
          loader: 'sass-loader',
          options: {
            sourcemap: true
          }
        }]
      })
    }]
  },
  plugins: [
    new DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
      'APP_VERSION': JSON.stringify(pkg.version)
    }),
    new HashedModuleIdsPlugin(),
    new OccurrenceOrderPlugin(),
    new AggressiveMergingPlugin(),
    new ExtractTextPlugin({
      allChunks: true,
      filename: 'assets/css/bundle.css'
    }),
    new PurifyCSSPlugin({
      paths: glob.sync('src/app/**/*', { nodir: true }),
      styleExtensions: ['.css'],
      moduleExtensions: ['.js', '.html'],
      purifyOptions: {
        info: true,
        minify: true,
        rejected: true
      }
    }),
    new UglifyJsPlugin({
      sourceMap: true,
      minimize: true,
      compress: { warnings: false },
      comments: false
    }),
    new CommonsChunkPlugin({
      name: 'vendor',
      filename: 'assets/js/vendor.bundle.js',
      minChunks: Infinity
    }),
    new OfflinePlugin({
      relativePaths: false,
      publicPath: '/',
      caches: {
        main: [':rest:'],
        additional: [
          'assets/js/vendor.bundle.js',
          ':externals:'
        ],
        externals: [
          'https://static.hotjar.com/c/hotjar-342795.js?sv=5',
          'https://www.google-analytics.com/analytics.js'
        ]
      },
      safeToUseOptionalCaches: true,
      AppCache: false
    }),
    new HtmlWebpackPlugin(Object.assign({}, config, {
      template: path.resolve('index.ejs'),
      alwaysWriteToDisk: true,
      inject: false,
      hash: true,
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
    new PreloadWebpackPlugin(),
    new HtmlWebpackHarddiskPlugin(),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false,
      generateStatsFile: true,
      logLevel: 'error'
    })
  ]
}
