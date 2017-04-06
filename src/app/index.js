import { AppContainer } from 'react-hot-loader'
import ReactDOM from 'react-dom'
import React from 'react'
import App from './Containers/App'
import AppState from './AppState'
import './index.scss'
const el = document.getElementById('app')



const appState = new AppState()

ReactDOM.render(
  <AppContainer>
    <App store={appState} />
  </AppContainer>,
  el
)

if (module.hot) {
  module.hot.accept('./Containers/App', () => {
    // If you use Webpack 2 in ES modules mode, you can
    // use <App /> here rather than require() a <NextApp />.
    const NextApp = require('./Containers/App').default
    ReactDOM.render(
      <AppContainer>
        <NextApp store={appState} />
      </AppContainer>,
      el
    )
  })
} else {
  require('offline-plugin/runtime').install()
}
