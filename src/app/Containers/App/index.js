import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
import { Provider, observer } from 'mobx-react'
// import DevTools from 'mobx-react-devtools'

import NotMatch from '../../Containers/NotMatch'
import About from '../../Containers/About' // async load route
import Login from '../../Containers/Login'
import Home from '../../Containers/Home'
import Unauthorized from '../../Containers/Unauthorized'

import Loader from '../../Components/Loader'

import PrivateRoute from '../../Containers/PrivateRoute'

// If you use React Router, make this component
// render <Router> with your routes. Currently,
// only synchronous routes are hot reloaded, and
// you will see a warning from <Router> on every reload.
// You can ignore this warning. For details, see:
// https://github.com/reactjs/react-router/issues/2182
@observer
export default class App extends Component {
  constructor (props) {
    super(props)
    this.store = this.props.store
  }

  render () {
    return (
      <Provider store={this.store}>
        <Router>
          <div>
            { /*<DevTools /> */}
            <Loader />
            <Switch>
              <Route exact path='/' component={Login} />
              <Route exact path='/login' component={Login} />
              <PrivateRoute exact isAdmin path='/home' component={Home} />
              <PrivateRoute exact isSuperAdmin path='/protectedAdmin' component={About} />
              <Route path='/401' component={Unauthorized} />
              <Route component={NotMatch} />
            </Switch>
          </div>

        </Router>
      </Provider>
    )
  }
}
