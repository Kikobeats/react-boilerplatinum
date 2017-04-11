import React, { PropTypes, Component } from 'react'
import { Route, Redirect } from 'react-router-dom'

import { inject, observer } from 'mobx-react'

@inject('store')
@observer
export default class PrivateRoute extends Component {
  constructor (props) {
    super(props)
    // initial values
    this.path = '/login'

    this.store = this.props.store

    this.isAuthenticated = this.store.authenticated
    this.isAdmin = this.store.isAdmin
    this.isSuperAdmin = this.store.isSuperAdmin

    console.log(this.isAuthenticated, this.isAdmin, this.isSuperAdmin)
  }

  _checkIfCanAccess () {
    if (this.isAuthenticated) {
      if (this.props.isAdmin) {
        this.path = '/401'
        if (this.isAdmin) {
          return true
        }
        return false
      }

      if (this.props.isSuperAdmin) {
        this.path = '/401'
        if (this.isSuperAdmin) {
          return true
        }
        return false
      }

      return true
    }

    return false
  }
  render () {
    const { component, ...rest } = this.props
    const canAccess = this._checkIfCanAccess()
    return (
      <Route {...rest} render={props => (
        canAccess ? (
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

PrivateRoute.propTypes = {
  component: PropTypes.func,
  isAdmin: PropTypes.bool,
  isSuperAdmin: PropTypes.bool
}
