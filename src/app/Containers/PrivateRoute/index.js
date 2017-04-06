import React, { PropTypes, Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
} from 'react-router-dom'

import { inject, observer } from 'mobx-react'

@inject('store')
@observer
export default class PrivateRoute extends Component {
  constructor (props) {
    super(props)

    this.store = this.props.store
    this.isAuthenticated = this.store.authenticated
  }

  render () {
    const { component, ...rest } = this.props

    return (
      <Route {...rest} render={props => (
                this.isAuthenticated ? (
                    React.createElement(component, props)
                ) : (
                  <Redirect to={{
                    pathname: '/login',
                    state: { from: props.location }
                  }} />
        )
        )} />
    )
  }
}
