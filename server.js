'use strict'

const WebpackDevServer = require('webpack-dev-server')
const config = require('./webpack.config')
const webpack = require('webpack')

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true
}).listen(3000, 'localhost', function (err) {
  if (err) throw err
})
