import { AppContainer } from 'react-hot-loader'
import ReactDOM from 'react-dom'
import React from 'react'
import {useStrict} from 'mobx'
import App from './Containers/App'
import appState from './AppState'
import './index.scss'
const el = document.getElementById('app')

useStrict(true)

// const appState = new AppState()

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
}
