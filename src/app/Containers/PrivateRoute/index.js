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

    this.path = '/login'
    this.canAccess = false

    this.store = this.props.store
    this.isAuthenticated = this.store.authenticated
    this.isAdmin = this.store.isAdmin

    if (this.isAuthenticated) {
      if (this.props.isAdmin) {
        this.path = '/401'
        if (this.isAdmin) {
          this.canAccess = true
        } else {
          this.canAccess = false
        }
      }
      this.canAccess = true
    } else {
      this.canAccess = false
    }
  }

  render () {
    const { component, ...rest } = this.props

    return (
      <Route {...rest} render={props => (
                this.canAccess ? (
                    React.createElement(component, props)
                ) : (
                  <Redirect to={{
                    pathname: this.path,
                    state: { from: props.location }
                  }} />
        )
        )} />
    )
  }
}
