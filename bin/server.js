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
  contentBase: 'src/www',
  // If you want you can change the target URL for your backend API
  // More information here:
  // https://webpack.js.org/configuration/dev-server/#devserver-proxy
  proxy: {
    '/api': {
      target: 'http://localhost:8080',
      secure: false,
      changeOrigin: true
    }
  }

})

server.listen(3000, 'localhost', function (err) {
  if (err) throw err
})
