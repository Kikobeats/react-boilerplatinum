'use strict'

const WebpackDevServer = require('webpack-dev-server')
const config = require('../webpack.dev.config')
const webpack = require('webpack')

var compiler = webpack(config)

var server = new WebpackDevServer(compiler, {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  overlay: true,
  contentBase: 'src/www'
})

server.listen(3000, 'localhost', function (err) {
  if (err) throw err
})
