import { AppContainer } from 'react-hot-loader'
import ReactDOM from 'react-dom'
import React from 'react'
import App from './App'

import './index.scss'

const el = document.getElementById('app')

const render = component => ReactDOM.render(
  <AppContainer>
    <App />
  </AppContainer>,
  el
)
render(App)

if (module.hot) module.hot.accept('./App', () => render(App))

if (process.env.NODE_ENV === 'production') {
  require('offline-plugin/runtime').install()
}
