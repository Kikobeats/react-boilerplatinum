import ReactDOM from 'react-dom'
import React from 'react'
import { useStrict } from 'mobx'
import App from './Containers/App'
import appState from './AppState'
import './index.scss'
const el = document.getElementById('app')

useStrict(true)

// import jquery from 'jquery' // <- If I uncomment this line code is spliting is working fine

ReactDOM.render(

  <App store={appState} />
  ,
  el
)
